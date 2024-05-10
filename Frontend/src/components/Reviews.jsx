import { useState, useEffect } from "react"; 
import axios from "axios";

const Reviews = () => {
  const [reviews, setReview] = useState([]);
  const [createForm, setCreateForm] = useState({
    bookTitle: "",
    author: "",
    review: "",
    by: "",
  });
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    bookTitle: "",
    author: "",
    review: "",
    by: "",
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => { 
    await axios.get("/api/review").then(function (response) {
      setReview(response.data.review);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  const updateCreateFormField = async (e) => {
    const { name, value } = e.target;

    await setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  const createReview = async (e) => {
    e.preventDefault();

    //create review
    const res = await axios.post("/api/review",  createForm);

    // update state
    setReview([...reviews, res.data.review]);

    //reset from
    setCreateForm({
      bookTitle: "",
      author: "",
      review: "",
      by: ""
    });
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
      {/* {updateForm._id && ( */}
        <div>
          <h2>Update note</h2>
          <form onSubmit={createReview}>
            <input
              onChange={updateCreateFormField}
              value={updateForm.title}
              name="bookTitle"
            />
            <input 
            onChange={updateCreateFormField}
            value={updateForm.title}
            name="author"
            />
            <textarea
              onChange={updateCreateFormField}
              value={updateForm.body}
              name="review"
            />
            <input 
            onChange={updateCreateFormField}
              value={updateForm.title} 
              name="by"
              />
            <button type="submit">Update note</button>
          </form>
        </div>
      {/* )} */}
      </div>
  );
}

export default Reviews