import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import "./BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "books"), (snapshot) => {
      setBooks(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "books", id));
      alert("Book deleted successfully!");
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="book-list">
      {books.length === 0 ? <p>No books available yet.</p> : (
        books.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer" className="read-btn">
              Read Now
            </a>
            <button onClick={() => handleDelete(book.id)} className="delete-btn">
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default BookList;
