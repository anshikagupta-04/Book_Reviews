import axios from "axios";
import { useState } from "react"

const Home = () => {
  const [bookName, setBookName] = useState();
  const [books, setBooks] = useState([])

  const searchBook = async (page) => {
    if (!bookName.trim()) return; // Avoid empty search

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${bookName}&maxResults=40&key=AIzaSyC1qBGvjNbjCGABmZhpkIfO0JmVM1cRKvk`
      );
      console.log("Book Name:", bookName);
      console.log("Response:", response.data);
      console.log("img:", response.data.items[0].volumeInfo.imageLinks.thumbnail);

      setBooks(response.data.items || []); // Avoid undefined errors
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };


  return (
    <div className=" text-4xl">
    <input
        type="text"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)} // Update state on input change
        placeholder="Enter book name..."
      />
    <button onClick={searchBook}>search</button>
    {books &&
            books.map((book) => {
              return (
                <div key={book.id} className=" border-4 my-3 grid border-slate-500 p-4">
                  <img src={book.volumeInfo.imageLinks?.thumbnail} alt="Not aviable"/>
                  {console.log(book.volumeInfo.imageLinks?.thumbnail)}
                  
                  <h3>Book Title: {book.volumeInfo.title}</h3>
                  {/* <p>Author: {review.author}</p>
                  <p>Review: {review.review}</p>
                  <p>Review By: {review.by}</p><br></br> */}
                </div>
              );
            })}
    </div>
  )
}

export default Home