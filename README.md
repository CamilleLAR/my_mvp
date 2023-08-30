# Skincare Ingredients Finder App

With this app, users will be able to go through a series of questions and get skincare ingredients recommendations based on their concerns.

Most skincare quizzes online are limited to specific brands, which can be restrictive for users. Our app focuses solely on ingredients, empowering users to make informed choices regardless of the products they use.

## Table of Contents

- [Setup](#setup)
  - [Dependencies](#dependencies)
  - [Database Prep](#database-prep)
    - [.env File](#env-file)
    - [Create the Database](#create-the-database)
    - [Run Migration](#run-migration)
  - [Run Your Development Servers](#run-your-development-servers)
- [Basic Description](#basic-description)
  - [Database](#database)
  - [Back End](#back-end)
    - [Questions](#questions)
    - [Answers](#answers)
  - [Font End](#font-end)
    - [App](#app)
    - [ExistingUserView](#existinguserview)
    - [NewUserView](#newuserview)
- [User Flow](#user-flow)
- [Conclusion](#conclusion)

## Setup

### Dependencies

- In the project folder, install Express-related dependencies with:

```bash
npm install
```

- Navigate to the client folder and install React-related dependencies:

```bash
cd client 
npm install
```

### Database Prep

#### .env File

- Create a `.env` file in project directory to hold sensitive information such as API keys, database credentials, and other environment-specific variables. It's crucial to keep this information separate from your codebase for security reasons. In our case, we will use the .env file to store the credentials needed to access your MySQL database.

- Add the following lines, replacing the placeholders with your actual database credentials:

```env
DB_NAME=mvp
DB_PASS=YOUR_PASSWORD
```

*make sure to replace "YOUR PASSWORD" with your actual MySQL root password*

#### Create the Database

Before your app can store and retrieve data, you need to set up a database. We'll be using MySQL as our database management system.

- Open your MySQL command-line interface by entering `mysql -u root -p` in your terminal. You'll be prompted to enter your MySQL root password.

- Once you're in the MySQL CLI, create a new database for your app by entering the following command:

```sql
create database mvp;
```

This command creates a database named 'mvp' that your app will use to store its data.

- After creating the database, we need to update the user authentication method for your MySQL server to allow the app to connect. Enter the following command in the MySQL CLI, replacing YOUR_PASSWORD with your actual MySQL root password:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';
```

This step is necessary to ensure compatibility between the app and the MySQL server.

#### Run Migration

Migrations are a way to manage your database schema and keep it in sync with your application's codebase. We'll be using migrations to create the necessary tables for your app.

- In your terminal, navigate to the project directory where your app is located.

- Run the following command to execute the migrations and create the required tables:

```bash
npm run migrate
```

This command will create the relevant tables in your mvp database.

With these steps completed, your database will be properly set up, and your app will be able to store and retrieve data seamlessly.

### Run Your Development Servers

- Run `npm start` in your project directory to start the Express server on port 4000.

- `cd client` and run `npm run dev` to start client server in development mode with hot reloading in port 5173.

- You can test your client app in `http://localhost:5173`.

- You can test your API in `http://localhost:4000/api`.

## Basic Description

### Database

![My MVP schema](/my_mvp.png).

### Back End

Backend files are in the routes folder. They have been split into questions and answers.

#### Questions

5 routes were created for the questions: (only the 2nd one is currently used)

- "GET" all existing questions
- "GET" a specific ID question and the corresponding answers
- "POST" a question to the table
- "DELETE" a question from the table
- "PUT" modify a question

#### Answers

6 routes were created for the answers: (only the 3rd one is currently used)

- "GET" all the existing answers
- "GET" a specific ID answer with the corresponding concern(s)
- "GET" a specific ID answer with the corresponding concern(s) AND ingredients
- "POST" an answer to the table
- "DELETE" an answer from the table
- "PUT" modify an answer

### Font End

Front-end files are in the `client/src` folder. They have been split between the App and its components: ExistingUserView and NewUserView.

#### App

It contains the code to toggle between the 2 views.

#### ExistingUserView

ExistingUserView is the view for registered users. Only the input fields and buttons have been done there at this point.

#### NewUserView

Contains skincare quiz and recommendations. Features a welcome page, question handling functions, and result rendering.

### User Flow

When they get on the page, the users will by default be on the registered user page. They can toggle this view on the top right end side of the page.

New user will then be prompted to complete a quiz. 5 questions will be asked with pre-created answers they can click on to select.
At the end of the quiz, the page will display their results: the concerns pointed out by the answers selected and the corresponding ingredients recommended.

![quiz](/Questions-answers%20layout.png)

## Conclusion

Thank you for exploring the Skincare Ingredients Finder App! Embrace personalized skincare by making ingredient-focused choices. Ready to get started? Clone the repository, follow setup instructions, and unlock a world of informed skincare decisions.

For a visual guide to our styling, check out our [styling palette](/My%20MVP%20color%20palette.png).

Happy skincare exploring !
