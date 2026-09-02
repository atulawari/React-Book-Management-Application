# 📚 React Book Management Application

A modern, responsive, and user-friendly **Book Management Application** built with **React**. This project demonstrates core frontend development concepts including reusable components, client-side routing, form validation, search functionality, and CRUD-style book management.

---

## 🚀 Features

- ➕ Add new books
- 📖 View all books
- 🔍 Search books
- ✏️ Edit existing book details
- 🗑️ Delete books
- ✅ Form validation
- 🧩 Reusable React components
- 🧭 Client-side routing
- 📱 Fully responsive UI
- 🎨 Bootstrap-based interface
- 🔗 REST API integration

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **React Router DOM**
- **React Hook Form**
- **Bootstrap**
- **REST API**

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/atulawari/react-book-management.git
```

### 2. Navigate to the project folder

```bash
cd react-book-management
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a .env file:

VITE_API_URL=http://localhost:5000/api

### 5. Install required packages

```bash
npm install react-router-dom react-hook-form bootstrap
```

### 6. Start the development server

```bash
npm run dev
```

The frontend will run on:

http://localhost:5173

````
Backend Setup

Open a new terminal and navigate to the server folder:

cd server

Install dependencies:

npm install

Create a .env file:

PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/bookManagementDB

CLIENT_URL=http://localhost:5173

Start the development server:

npm run dev

The backend API will run on:

http://localhost:5000


🗄️ MongoDB Setup

Make sure MongoDB is running locally.

The application will create the following database automatically:

bookManagementDB

Example MongoDB connection:

mongodb://127.0.0.1:27017/bookManagementDB


🔗 API Endpoints
Method	Endpoint	Description
GET	/api/books	Get all books
GET	/api/books?search=react	Search books
GET	/api/books?page=1&limit=8	Get paginated books
GET	/api/books/:id	Get a single book
POST	/api/books	Create a new book
PUT	/api/books/:id	Update a book
DELETE	/api/books/:id	Delete a book


📥 Create Book
Endpoint
POST /api/books
Request Body
{
  "title": "React Explained",
  "author": "John Smith",
  "category": "Programming",
  "publishedYear": 2025
}


📤 API Response Example
{
  "_id": "65f123456789",
  "title": "React Explained",
  "author": "John Smith",
  "category": "Programming",
  "publishedYear": 2025,
  "createdAt": "2026-01-01T10:00:00.000Z",
  "updatedAt": "2026-01-01T10:00:00.000Z"
}

📦 Dependencies
Client
npm install react react-dom react-router-dom
npm install axios
npm install bootstrap
npm install react-hook-form
npm install react-toastify

Development dependencies:

npm install -D vite @vitejs/plugin-react
Server
npm install express
npm install mongoose
npm install cors
npm install dotenv

Development dependency:

npm install -D nodemon
---

## 📁 Project Structure

```text
react-book-management/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── books/
│   │   │   ├── BookForm.jsx
│   │   │   └── BookTable.jsx
│   │   │
│   │   └── layout/
│   │       ├── Navbar.jsx
│   │       └── Footer.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── BookList.jsx
│   │   ├── AddBook.jsx
│   │   └── EditBook.jsx
│   │
│   ├── services/
│   │   └── bookService.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
````

---

## 🔄 Application Flow

```text
User
  │
  ▼
Book List
  │
  ├── Search Books
  │
  ├── Add Book
  │      │
  │      ▼
  │   Form Validation
  │      │
  │      ▼
  │   Save Book
  │
  ├── Edit Book
  │      │
  │      ▼
  │   Update Book
  │
  └── Delete Book
         │
         ▼
      Updated Book List
```

---

## 🧩 Key Components

### BookForm

A reusable form component used for:

- Adding books
- Editing books
- Input validation
- Handling form submission

### BookTable

Displays the available books in a responsive table and provides actions for:

- Edit
- Delete

### BookList

Responsible for:

- Displaying book records
- Searching books
- Managing book list state

### AddBook

Provides the interface for creating and adding a new book.

### EditBook

Allows users to update the details of an existing book.

### bookService

Centralizes book-related API operations and keeps service logic separate from UI components.

---

## 📚 Dependencies

| Package            | Purpose                      |
| ------------------ | ---------------------------- |
| `react`            | Building the user interface  |
| `react-dom`        | Rendering React components   |
| `react-router-dom` | Client-side routing          |
| `react-hook-form`  | Form handling and validation |
| `bootstrap`        | Responsive UI styling        |

Install additional dependencies:

```bash
npm install react-router-dom react-hook-form bootstrap
```

---

## 📜 Available Scripts

### Run Development Server

```bash
npm run dev
```

### Create Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🎯 Learning Objectives

This project demonstrates:

- React component architecture
- Reusable component development
- Props and state management
- Client-side routing
- Form handling and validation
- CRUD-style application workflows
- REST API integration
- Responsive web design
- Clean project structure

---

## 🔮 Future Improvements

- Pagination
- Sorting functionality
- Book categories
- Advanced search and filtering
- Toast notifications
- Loading states
- Dark mode
- Authentication
- Unit testing
- Integration testing

---

👨‍💻 Author

Atul Awari

React Developer | Frontend Developer

## GitHub: https://github.com/atulawari

## 📄 License

This project is created for **learning, portfolio, and demonstration purposes**.

---

⭐ If you find this project useful, consider giving the repository a star!
