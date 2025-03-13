import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { uploadToCloudinary } from "../utils/cloudinaryUpload";
import "./UploadBook.css";

const UploadBook = () => {
  const [title, setTitle] = useState("");
  const [pdfFile, setPdfFile] = useState(null);

  const handleUpload = async () => {
    if (!title || !pdfFile) {
      alert("Please provide a title and a PDF file!");
      return;
    }

    try {
      // Upload PDF to Cloudinary
      const pdfUrl = await uploadToCloudinary(pdfFile);

      // Store book details in Firestore
      await addDoc(collection(db, "books"), {
        title,
        pdfUrl,
        uploadedBy: "Anonymous",
        timestamp: serverTimestamp(),
      });

      alert("Book uploaded successfully!");
      setTitle("");
      setPdfFile(null);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed!");
    }
  };

  return (
    <div className="upload-container">
      <input 
        type="text" 
        placeholder="Enter book title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        className="upload-input"
      />
      <input 
        type="file" 
        accept=".pdf" 
        onChange={(e) => setPdfFile(e.target.files[0])} 
        className="upload-input"
      />
      <button onClick={handleUpload} className="upload-btn">Upload</button>
    </div>
  );
};

export default UploadBook;
