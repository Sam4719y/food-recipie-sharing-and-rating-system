# food-recipie-sharing-and-rating-system

Overview
The Recipe Sharing and Rating System is a web application designed to facilitate the sharing and rating of food recipes. This platform enables users to register an account, submit their own recipes, search for recipes, and share them on social media. The application is built using Java Spring Boot for the backend and JavaScript for the frontend, with MySQL as the database for storing user data and recipes.

Features
User Registration: New users can sign up by providing their username, email address, and password.

Recipe Submission: Registered users can submit recipes with details such as recipe name, ingredients, preparation instructions, cooking time, and images.

Search Functionality: Users can search for recipes by keywords, ingredients, cooking time, and dietary requirements.

Social Sharing: Recipes can be shared on social media platforms such as Facebook, Twitter, and Pinterest.

Recipe Rating and Reviews: Users can rate recipes on a scale and leave comments or reviews.

Favorites and Collections: Users can save favorite recipes and create custom collections for easy categorization.

Advanced Recipe Search Filters: Refine recipe searches using filters such as dietary restrictions, cuisine types, and difficulty levels.

Meal Planner: Users can create weekly or monthly meal plans by selecting recipes.

Tech Stack
Frontend: HTML, CSS, JavaScript

Backend: Java Spring Boot

Database: MySQL

Version Control: Git

Installation
To run this project locally, follow these steps:


Set up MySQL database:

sql
CREATE DATABASE recipes_db;
USE recipes_db;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
CREATE TABLE recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    recipe_name VARCHAR(255) NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL,
    cooking_time VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
Configure database connection in application.properties:

properties
spring.datasource.url=jdbc:mysql://localhost:3306/recipes_db
spring.datasource.username=yourusername
spring.datasource.password=yourpassword
Frontend Setup:

Navigate to the frontend directory:

sh
cd ../frontend
Open index.html in a browser to view the application.

Run the Application:

Start the Spring Boot application:

sh
mvn spring-boot:run
Usage
Home Page: Browse the latest and most popular recipes.

Add Recipe: Users can submit their own recipes by filling out the provided form.

Search Recipes: Use the search bar to find recipes based on keywords, ingredients, and other criteria.

Rate and Review: Users can rate and leave reviews on recipes they’ve tried.

Social Sharing: Share your favorite recipes on social media platforms.

Meal Planner: Create and manage meal plans by selecting recipes.

Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code follows the project’s style guidelines and includes relevant tests.

License
This project is licensed under the MIT License. See the LICENSE file for details.
