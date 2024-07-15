// frontend/src/components/UploadForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = ({ setResults }) => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setError('');
    } else {
      setError('Please upload a valid image file.');
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setError('Please upload an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('text', text);

    try {
      const res = await axios.post('http://localhost:5000/api/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // console.log(res.data.data);
      setResults(res.data);
    } catch (err) {
      console.error(err);
      setError('Error uploading image.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageChange} accept="image/*" required />
      <input type="text" value={text} onChange={handleTextChange} placeholder="Enter some text" required />
      <button type="submit">Upload</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default UploadForm;
