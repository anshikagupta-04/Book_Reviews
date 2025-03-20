import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {User} from "../models/user.models.js";
// import dotenv from 'dotenv';

// dotenv.config();

async function signup(req, res) {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 8);

    await User.create({ username, email, password: hashedPassword });

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    
    const usermail = await User.findOne({ email });
    if (!usermail) return res.sendStatus(401);
    // console.log(usermail);

    const passwordMatch = bcrypt.compareSync(password, usermail.password);
    // console.log(passwordMatch);    
    if (!passwordMatch) return res.sendStatus(401);

    const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
    const token = jwt.sign({ sub: usermail._id, exp }, process.env.SECRET);
    // console.log(token);
    

    res.cookie("Authorization", token, {
      expires: new Date(exp),
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

function logout(req, res) {
  try {
    res.cookie("Authorization", "", { expires: new Date() });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
}

function checkAuth(req, res) {
  try {
    res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(400);
  }
}

export const usersController = {
  signup,
  login,
  logout,
  checkAuth,
};
