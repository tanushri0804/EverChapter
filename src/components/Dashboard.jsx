import React from "react";
import BookList from "./BookList";
import UploadBook from "./UploadBook";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Welcome to EverChapter</h1>
      <div className="dashboard-sections">
        <div className="books-section">
          <h2>Free Books for Readers</h2>
          <BookList />
        </div>
        <div className="upload-section">
          <h2>Upload a New Book</h2>
          <UploadBook />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
