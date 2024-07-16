import React from 'react';
import '../style.css'


const Results = ({ results }) => {
  return (
    <div>
      {results && (
        <div className="results">
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
