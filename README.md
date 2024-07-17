# MERN OCR Image Upload

This project demonstrates a basic MERN (MongoDB, Express, React, Node.js) stack application that allows users to upload images, input text, and perform OCR (Optical Character Recognition) on the uploaded images. The OCR results, along with the additional text, are stored in a MongoDB database and displayed on the frontend.

## Table of Contents
 - [youtube_vide](https://www.youtube.com/watch?v=xaKCka-2uwE&ab_channel=ShashankSingh)


## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Endpoints](#endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm or yarn
- MongoDB

## Installation

### Backend

1. Clone the repository:

    ```bash
    https://github.com/singhshashank25/Ocr_image
    cd Ocr_image
    ```

2. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

3. Install the backend dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the `backend` directory and add your MongoDB connection string:

    ```env
    Insert Mongo_Uri
    ```

5. Start the backend server:

    ```bash
    npm start
    ```

### Frontend

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install the frontend dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm run dev
    ```

## Usage

1. Open the frontend application in your browser:

    ```
    http://localhost:5173
    ```

2. Upload an image and enter some text.
3. Submit the form to see the OCR results and the additional text displayed on the frontend.


## Endpoints

### POST /api/images/upload

Upload an image and text, perform OCR on the image, and save the results in the MongoDB database.

- **URL**: `/api/images/upload`
- **Method**: `POST`
- **Headers**: 
  - `Content-Type: multipart/form-data`
- **Body**: 
  - `image`: Image file to be uploaded
  - `text`: Additional text input by the user

### Example Response

```json
{
  "imagePath": "uploads/1627891234567-myimage.jpg",
  "text": "Extracted text from image",
  "additionalText": "User input text"
}


