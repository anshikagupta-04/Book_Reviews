import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

if (process.env.NODE_ENV != "production") {
  dotenv.config({ path: "./.env" });
}

async function requireAuth(req, res, next) {
  try {
    console.log(req.headers);

    let token = req.header('Authorization')?.split(' ')[1]; // Try to get from header

    if (!token) {
      token = req.cookies.Authorization; // Try to get from cookie
    }
    if (!token) return res.sendStatus(401);


    const decoded = jwt.verify(token, process.env.SECRET);

    if (Date.now() / 1000 > decoded.exp) return res.sendStatus(401);

    const user = await User.findById(decoded.sub);
    if (!user) return res.sendStatus(401);
    

    req.user = user;

    next();
  } catch (err) {  
    return res.sendStatus(401);
  }
}

export default requireAuth;
