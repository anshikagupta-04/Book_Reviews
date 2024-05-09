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
        type: moongose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true});

export const Review = moongose.model("Review",reviewSchema);
