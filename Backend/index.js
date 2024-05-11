import connectDB from "./connectDB.js";
import dotenv from "dotenv";
import { Review } from "./models/review.models.js";
import { User } from "./models/user.models.js";
import { reviewControllers } from "./controllers/reviewControls.js";
import cookieParser from "cookie-parser";
import { usersController } from "./controllers/usersController.js";
import requireAuth from "./middleware/requireAuth.js";

if (process.env.NODE_ENV != "production") {
    dotenv.config({path: "./.env"});
}

import express from "express";

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post("/api/signup", usersController.signup);

app.post("/api/login", usersController.login);

app.get("/api/logout", usersController.logout);

app.get("/api/check-auth", requireAuth, usersController.checkAuth);

app.post('/api/review', reviewControllers.fetchReview)

app.get('/api/review', reviewControllers.getReview);

app.post('/api/users', reviewControllers.fetchUser)

app.get('/api/users', reviewControllers.getUser);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})