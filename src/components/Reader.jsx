import React, { useState } from "react";
import "./Reader.css";

const Reader = ({ pdfUrl }) => {
  const [highlighted, setHighlighted] = useState([]);
  const [bookmarked, setBookmarked] = useState(false);
  const [emoji, setEmoji] = useState("");

  const handleHighlight = () => setHighlighted([...highlighted, "New Highlight"]);
  const toggleBookmark = () => setBookmarked(!bookmarked);
  const addEmoji = (emoji) => setEmoji(emoji);

  return (
    <div className="reader-container">
      <iframe src={pdfUrl} className="pdf-viewer"></iframe>
      <div className="reader-toolbar">
        <button onClick={handleHighlight} className="highlight-btn">Highlight</button>
        <button onClick={toggleBookmark} className={bookmarked ? "bookmark-btn active" : "bookmark-btn"}>
          {bookmarked ? "Bookmarked" : "Bookmark"}
        </button>
        <button onClick={() => addEmoji("😊")} className="emoji-btn">😊</button>
      </div>
      {emoji && <p className="emoji-display">{emoji}</p>}
    </div>
  );
};

export default Reader;
