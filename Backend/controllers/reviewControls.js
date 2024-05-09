import { Review } from "../models/review.models.js";

const fetchReview = async (req, res) => {
    const reviews = await Review.find();

    res.json({reviews});
}