# Book Review Platform Backend

## Overview

This backend application is designed for a book review platform where users can register, log in, and manage their book reviews. It includes user authentication, review management, web scraping to gather trending book data.

## Technologies Used

- Node.js
- Express.js
- MongoDB as a Database
- JWT (JSON Web Tokens) for authentication
- Axios for web scraping
- Cheerio for parsing HTML

## Installation

### Prerequisites

- Node.js
- MongoDB Setup

### Steps to Install

1. **Clone the Repository**

   ```bash
   https://github.com/its-mahi/lets-review-the-book

   cd lets-review-the-book
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   PORT = "your preferred port"
   JWT_SECRET = "your jwt secret"
   MONGODB_URL = "your MongoDB URL"
   ```

4. **Start the Server**

   ```bash
   npm start
   ```
---


# API Endpoints

### User Authentication

- **Register**
  - **Endpoint**: `POST /auth/register`
  - **Request Body**: 
    ```json
    {
      "username": "user",
      "password": "pass"
    }
    ```
  - **Response**: `201 Created` with the created user object.

- **Login**
  - **Endpoint**: `POST /auth/login`
  - **Request Body**: 
    ```json
    {
      "username": "user",
      "password": "pass"
    }
    ```
  - **Response**: `200 OK` with a JWT token.

### Review Management

- **Create a Review**
  - **Endpoint**: `POST /reviews`
  - **Request Body**: 
    ```json
    {
      "book_id": "OL12345M",
      "rating": 5,
      "comment": "Great book!"
    }
    ```
  - **Response**: `201 Created` with the created review.

- **Get All Reviews with Pagination**
  - **Endpoint**: `GET /reviews?page=1&size=10`
  - **Response**: `200 OK` with a paginated list of reviews.

- **Get a Single Review**
  - **Endpoint**: `GET /reviews/{review_id}`
  - **Response**: `200 OK` with the requested review.

- **Update a Review**
  - **Endpoint**: `PUT /reviews/{review_id}`
  - **Request Body**: 
    ```json
    {
      "rating": 4,
      "comment": "Updated comment"
    }
    ```
  - **Response**: `200 OK` with the updated review.

- **Delete a Review**
  - **Endpoint**: `DELETE /reviews/{review_id}`
  - **Response**: `204 No Content`.

### Web Scraping

- **Get Scraped Book Data**
  - **Endpoint**: `GET /books?page=1&size=10`
  - **Response**: `200 OK` with the list of books.

### Scheduler

- The scheduler is set to run daily at midnight to scrape the latest trending books and update the database.

## Models

### User

- **Table**: `usersModel`
- **Fields**:
  - `id`: INT, Primary Key, Auto Increment
  - `username`: VARCHAR, Unique
  - `password`: VARCHAR

### Review

- **Table**: `reviewsModel`
- **Fields**:
  - `id`: INT, Primary Key, Auto Increment
  - `book_id`: VARCHAR
  - `rating`: INT
  - `comment`: TEXT
  - `user_id`: INT, Foreign Key (references `users.id`)

### Book

- **Table**: `booksModel`
- **Fields**:
  - `id`: VARCHAR, Primary Key
  - `title`: VARCHAR
  - `author`: VARCHAR
