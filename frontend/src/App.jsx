import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import Results from './components/Results';
import './style.css';

const App = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <h1>OCR Image Upload</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <UploadForm setResults={setResults} setLoading={setLoading} />
          <Results results={results?.newImage} />
        </>
      )}
    </div>
  );
};

export default App;
