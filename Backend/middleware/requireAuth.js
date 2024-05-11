import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";
import dotenv from "dotenv";

if (process.env.NODE_ENV != "production") {
    dotenv.config({path: "./.env"});
}

async function requireAuth(req, res, next) {
  try {
    const token = req.cookies.Authorization;

    const decoded = jwt.verify(token, process.env.SECRET);

    if (Date.now() > decoded.exp) return res.sendStatus(401);

    const user = await User.findById(decoded.sub);
    if (!user) return res.sendStatus(401);

    req.user = user;

    next();
  } catch (err) {
    return res.sendStatus(401);
  }
}

export default requireAuth;
