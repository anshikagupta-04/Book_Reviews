import { useState, useEffect } from "react"; 
import axios from "axios";

const Reviews = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    // Fetch the notes
    // const res = 
    await axios.get("/api/review").then(function (response) {
      setReview(response.data.review);
    })
    .catch(function (error) {
      console.log(error);
    })

    // Set to state
    // setReview(res.data.reviews);
  };

  return (
    <div className="App">
      <div>
        <h2>Reviews:</h2>
        {reviews &&
          reviews.map((review) => {
            return (
              <div key={review._id}>
                <h3>Book Title: {review.bookTitle}</h3>
                <p>Author: {review.author}</p>
                <p>Review: {review.review}</p>
                <p>By: {review.by}</p><br></br>
              </div>
            );
          })}
      </div>
      </div>
  );
}

export default Reviews