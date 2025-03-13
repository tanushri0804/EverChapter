import React from "react";
import { Link } from "react-router-dom";
import "./IntroPage.css";

const IntroPage = () => {
  return (
    <div className="intro-container">
      <nav className="navbar">
        <h1 className="logo">EverChapter 📖</h1>
        <div className="nav-buttons">
          <Link to="/auth"><button className="btn">Sign In</button></Link>
          <Link to="/auth"><button className="btn">Sign Up</button></Link>
        </div>
      </nav>

      <header className="intro-header">
        <h2>Welcome to EverChapter</h2>
        <p>Your one-stop destination for reading and sharing books.</p>
        <div className="intro-buttons">
          <Link to="/auth"><button className="btn primary">Get Started</button></Link>
        </div>
      </header>

      <section className="features">
        <h3>Why Choose EverChapter?</h3>
        <div className="feature-grid">
          <div className="feature">
            <span>📚</span>
            <h4>Vast Library</h4>
            <p>Explore thousands of books from different genres.</p>
          </div>
          <div className="feature">
            <span>🌎</span>
            <h4>Global Community</h4>
            <p>Connect with book lovers worldwide.</p>
          </div>
          <div className="feature">
            <span>📖</span>
            <h4>Easy Upload</h4>
            <p>Upload and share your own books easily.</p>
          </div>
        </div>
      </section>
       {/* Trending Books Section */}
       <section className="trending-books">
        <h3>Trending Books 📈</h3>
        <div className="book-grid">
          <div className="book">
            <img src="https://via.placeholder.com/150" alt="Book 1" />
            <p><strong>The Great Gatsby</strong></p>
          </div>
          <div className="book">
            <img src="https://via.placeholder.com/150" alt="Book 2" />
            <p><strong>1984</strong></p>
          </div>
          <div className="book">
            <img src="https://via.placeholder.com/150" alt="Book 3" />
            <p><strong>To Kill a Mockingbird</strong></p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h3>How It Works?</h3>
        <div className="steps">
          <div className="step">
            <h4>📥 Sign Up</h4>
            <p>Create an account to start your journey.</p>
          </div>
          <div className="step">
            <h4>📖 Browse Books</h4>
            <p>Explore our collection of amazing books.</p>
          </div>
          <div className="step">
            <h4>📢 Share & Review</h4>
            <p>Upload books and share your thoughts.</p>
          </div>
        </div>
      </section>

      {/* User Reviews Section */}
      <section className="reviews">
        <h3>What Our Users Say 💬</h3>
        <div className="review-grid">
          <div className="review">
            <p>"EverChapter has changed the way I read books. Highly recommend!"</p>
            <strong>- Emily R.</strong>
          </div>
          <div className="review">
            <p>"I love the ability to upload my own books and share them!"</p>
            <strong>- Alex M.</strong>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 EverChapter | All Rights Reserved</p>
        <div className="footer-links">
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
};

export default IntroPage;
