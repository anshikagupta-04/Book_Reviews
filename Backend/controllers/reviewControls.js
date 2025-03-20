import { Review } from "../models/review.models.js";
import { User } from "../models/user.models.js";

const createReview = async(req, res) => {
    const bookId = req.body.bookId;
    const rating = req.body.rating;
    const review = req.body.review;
    const by = req.body.by;

    const rev = await Review.create({
        bookId,
        rating,
        review,
        by
    });

    res.json({rev});
}

const getReview = async (req, res) => {
    try {
        const { bookId } = req.query; // Extract bookId from query params

        if (!bookId) {
            return res.status(400).json({ message: 'Book ID is required' });
        }

        const reviews = await Review.find({ bookId }).populate('by', 'username email -_id');
        // console.log(reviews);

        res.json({ reviews });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};


// const fetchUser = async(req, res) => {
//     const username = req.body.username;
//     const email = req.body.email;
//     const password = req.body.password;

//     const users = await User.create({
//         username,
//         email,
//         password
//     });

//     res.json({users});
// }

// const getUser = async (req, res) => {
//     // Find the notes
//     const users = await User.find();
  
//     // Respond with them
//     res.json({ users });
//   }

export const reviewControllers = {
    createReview,
    getReview,
    fetchUser,
    getUser
}