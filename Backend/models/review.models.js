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
    likes:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

export const Review = mongoose.model("Review", reviewSchema);
