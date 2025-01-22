# Movie-Search-API

A simple API built with Express and Express-Validator for searching and managing movie data. This repository demonstrates the use of middleware for request validation and shows how to create a functional and easy-to-understand RESTful API. The API is configured to work with MongoDB Atlas, providing a cloud-based database solution for scalability and ease of use.

## Technologies Used

* **Express:** Fast and minimalist web framework for Node.js.
* **Express-Validator:** Middleware for validating user inputs.
* **Mongoose:** ODM library for MongoDB, enabling schema-based data modeling.
* **Morgan:** HTTP request logger middleware for monitoring API activity.
* **Winston:** Versatile logging library for capturing and managing logs.
* **Dotenv:** Loads environment variables from a .env file for configuration management.

## How to Run

1. Clone the repository:
   ```
   git clone git@github.com:Jbuenoss/Movie-Search-API.git
   ```
2. Navigate to the project folder:
   ```
   cd Movie-Search-API
   ```
3. Create a .env file in the root directory and add your MongoDB Atlas credentials:
   ```
   DB_USER=your_username  
   DB_PASS=your_password  
   ```
4. Install dependencies:
   ```
   npm install
   ```
5. Run the development server:
   ```
   npm run dev
   ```
The API will now be running, and you can access it at http://localhost:3000

## Future Improvements  

- Add user authentication with JWT.  
- Implement advanced search functionality.
- Dockerize the application for easier deployment.  
