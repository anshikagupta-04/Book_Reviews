import { Review } from "../models/review.models.js";
import { User } from "../models/user.models.js";

const createReview = async(req, res) => {
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
}

const getReview = async (req, res) => {
    // Find the notes
    const review = await Review.find();
  
    // Respond with them
    res.json({ review });
}

const fetchUser = async(req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const users = await User.create({
        username,
        email,
        password
    });

    res.json({users});
}

const getUser = async (req, res) => {
    // Find the notes
    const users = await User.find();
  
    // Respond with them
    res.json({ users });
  }

export const reviewControllers = {
    createReview,
    getReview,
    fetchUser,
    getUser
}