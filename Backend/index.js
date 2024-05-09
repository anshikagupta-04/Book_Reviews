import connectDB from "./connectDB.js";
import dotenv from "dotenv";
import { Review } from "./models/review.models.js";

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

app.post('/review', async(req, res) => {
    const bookTitle = req.body.bookTitle;
    const author = req.body.author;
    const review = req.body.review;
    const by = req.body.by;

    const rev = await Review.create({
        bookTitle,
        author,
        review,
        by
    });

    res.json({rev});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})