// frontend/src/App.jsx
import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import Results from './components/Results';
import './App.css';

const App = () => {
  const [results, setResults] = useState(null);

  return (
    <div className="App">
      <h1>OCR Image Upload</h1>
      <UploadForm setResults={setResults} />
      <Results results={results} />
    </div>
  );
};

export default App;
