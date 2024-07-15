// frontend/src/components/Results.jsx
import React from 'react';

const Results = ({ results }) => {
  return (
    <div>
      {results && (
        <div>
          <h2>OCR Results</h2>
          <p>{results.text}</p>
          <img src={`http://localhost:5000/${results.imagePath}`} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default Results;
