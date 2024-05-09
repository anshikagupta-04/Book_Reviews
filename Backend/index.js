import connectDB from "./connectDB.js";
import dotenv from "dotenv";
import { Review } from "./models/review.models.js";
import { User } from "./models/user.models.js";
import { reviewControllers } from "./controllers/reviewControls.js";

if (process.env.NODE_ENV != "production") {
    // require("dotenv").config({path: './.env'});
    dotenv.config({path: "./.env"});
}

import express from "express";

const app = express();
const port = process.env.PORT;

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/review', reviewControllers.fetchReview)

app.get('/review', reviewControllers.getReview);

  app.post('/users', reviewControllers.fetchUser)

app.get('/users', reviewControllers.getUser);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})