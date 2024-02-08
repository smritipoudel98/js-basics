// src/index.tsx
import React, { useState } from "react";

type ReadMoreButtonProps = {
  text: string;
  linesToShow?: number;
  styles?:object;
};

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({ text, linesToShow = 5, styles}) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const paragraphs = text.split('\n').map((paragraph) => paragraph.trim()).filter(Boolean);
  const displayedText = showFullText ? paragraphs.join('\n') : paragraphs.slice(0, linesToShow).join('\n');

  return (
    <div>
      {displayedText.split('\n').map((paragraph, index) => (
        <React.Fragment key={index}>
          {paragraph}
          <br />
        </React.Fragment>
      ))}
      {paragraphs.length > linesToShow && (
        <button style={styles} className={`cursor-pointer`} onClick={toggleText}>
          {showFullText ? "Show less..." : "Read more..."}
        </button>
      )}
    </div>
  );
};

export default ReadMoreButton;
