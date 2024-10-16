# React-Online-Book-Library-System

Online Library System

This is an Online Library System built with React and Vite. The application allows users to browse, search, and add books while managing state using Redux. It includes dynamic routing for navigation and provides a comprehensive user experience for managing a library of books.




Features :

-->  Home Page : Displays a welcome message, book categories, a list of popular books and a navigation bar for easy access to different pages.

-->  Browse Books Page : Allows users to browse through a list of books filtered by category, with dynamic routing based on categories and a search functionality to      filter books by title or author.

-->  Book Details Page : Shows detailed information about a selected book, including title, author, and description, with a back button for easy navigation.

-->  Add Book Page : Includes a form for adding a new book with fields for book details, validation checks, and state management using Redux.

-->  Error Page : Displays a custom 404 error message with a link to navigate back to the Home Page.




How to Run the Project :

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using : npm install
4. Start the development server with : npm run dev
5. Open the application in your browser at http://localhost:5173/






Technologies Used :

-->  React : For building the user interface and components.

-->  Vite : For a fast and optimized development setup.

-->  Redux : For state management.

-->  React Router : For client-side routing.

-->  CSS : For styling and mobile-first design.






State Management :

-->  The application uses Redux for state management to handle book data efficiently across components.

-->  The state is updated dynamically when adding a new book, filtering by category, or searching for books.




Routing :

-->  Uses React Router for navigation across different pages including dynamic routes for book categories and book details.





Folder Structure : 

main.jsx
app.jsx
index.css

src/ components/
                - HomePage.jsx
                - Navbar.jsx
                - BrowseBooks.jsx
                - BookDetails.jsx
                - AddBookPage.jsx
                - ErrorPage.jsx
src/    redux/
            - appStore.js
            - bookSlice.js