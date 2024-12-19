import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    bookTitle: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

export const Review = mongoose.model("Review", reviewSchema);
