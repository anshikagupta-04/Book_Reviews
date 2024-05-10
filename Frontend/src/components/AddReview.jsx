import Reviews from "./Reviews"
import axios from "axios";
import { useState } from "react";

const AddReview = () => {
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

    const updateCreateFormField = async (e) => {
        const { name, value } = e.target;
    
        await setCreateForm({
          ...createForm,
          [name]: value,
        });
      };
    
      const createReview = async (e) => {
        e.preventDefault();
        try{
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
    }catch(error){
        console.log(error);
    }
      };

    return (
        <div>
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
    )
}

export default AddReview