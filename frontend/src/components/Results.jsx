// frontend/src/components/Results.jsx
import React from 'react';

const Results = ({ results }) => {
  console.log({results});
  return (
    <div>
      {results && (
        <div>
          <h2>OCR Results</h2>
          <p>{results.result}</p>
          <img src={`http://localhost:5000/${results.imagePath}`} alt="Uploaded" />
          <p>{results.text}</p>
        </div>
      )}
    </div>
  );
};

export default Results;
