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
    // e.preventDefault();

    //create review 
    await axios.post("/api/review",  createForm)
    .then(function(response){
      setReview([...reviews, response.data.review]);
    })
    .catch(function (error) {
      console.log(error);
    })

    // update state
    // setReview([...reviews, res.data.review]);

    //reset from
    // setCreateForm({
    //   bookTitle: "",
    //   author: "",
    //   review: "",
    //   by: ""
    // });
  };

  return (
    <div className="App w-screen p-7 flex-row items-center justify-center">
      <div className="flex-row items-center justify-center w-full">
        <h2>Reviews:</h2>
        <div className="w-full flex-row justify-end items-end">
        {reviews &&
          reviews.map((review) => {
            return (
              <div key={review._id} className=" border-4 my-3 grid border-slate-500 p-4">
                <h3>Book Title: {review.bookTitle}</h3>
                <p>Author: {review.author}</p>
                <p>Review: {review.review}</p>
                <p>Review By: {review.by}</p><br></br>
              </div>
            );
          })}
          </div>
      </div>
      <button>Add Review</button>
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
      </div>
  );
}

export default Reviews