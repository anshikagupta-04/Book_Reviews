import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    bookId: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,     
        max: 5,
        set: v => Math.round(v * 10) / 10,
        required: true,  
      },
      
    review: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

export const Review = mongoose.model("Review", reviewSchema);
