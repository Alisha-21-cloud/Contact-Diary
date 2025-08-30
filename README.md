# Contact Diary 📒

A full-stack web application for managing personal contacts with user authentication and secure data management.

## 🌟 Overview

Contact Diary is a modern, responsive web application that allows users to manage their personal contacts securely. Built with React.js frontend and Node.js/Express backend, it features user authentication, CRUD operations, and personalized contact management where each user can only access their own contacts.

**Live Demo:** [https://contact-diary-frontend.netlify.app](https://contact-diary-frontend.netlify.app)

## ✨ Features

### 🔐 Authentication System
- **User Registration**: Secure signup with password hashing
- **User Login**: JWT token-based authentication
- **Session Management**: Automatic token validation and session handling
- **Logout Functionality**: Secure session termination

### 📋 Contact Management
- **Add Contacts**: Create new contacts with name, email, and phone number
- **View Contacts**: Display all personal contacts in an organized layout
- **Edit Contacts**: Update existing contact information
- **Delete Contacts**: Remove contacts with confirmation dialog
- **Personal Data**: Each user can only access their own contacts

### 🎨 User Interface
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Bootstrap Integration**: Modern, clean, and professional styling
- **Intuitive Navigation**: Easy-to-use interface with clear visual feedback
- **Form Validation**: Client-side validation for better user experience

## 🛠️ Technology Stack

### Frontend
- **React.js** (v19.1.1) - Modern UI library
- **React Router DOM** (v7.7.1) - Client-side routing
- **Axios** (v1.11.0) - HTTP client for API calls
- **Bootstrap** (v5.3.7) - CSS framework for responsive design
- **React Icons** (v5.5.0) - Icon library

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** (v5.1.0) - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** (v8.17.0) - MongoDB object modeling
- **JWT** (v9.0.2) - JSON Web Token for authentication
- **bcryptjs** (v3.0.2) - Password hashing library
- **CORS** (v2.8.5) - Cross-origin resource sharing

## 📁 Project Structure

```
Contact-Diary/
├── contact-diary-backend/
│   ├── config/
│   │   └── db.js                    # Database configuration
│   ├── controllers/
│   │   └── contactController.js     # Contact business logic
│   ├── middleware/
│   │   └── authMiddleware.js        # JWT authentication middleware
│   ├── models/
│   │   ├── Contact.js               # Contact schema
│   │   └── User.js                  # User schema
│   ├── routes/
│   │   ├── authRoutes.js            # Authentication routes
│   │   └── contactRoutes.js         # Contact CRUD routes
│   ├── .gitignore
│   ├── package.json
│   └── server.js                    # Main server file
│
├── contact-diary-frontend/
│   ├── public/
│   │   └── _redirects               # Netlify redirect rules
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactForm.js       # Contact form component
│   │   │   └── ContactList.js       # Contact list component
│   │   ├── pages/
│   │   │   ├── ContactsPage.js      # Main contacts page
│   │   │   ├── Login.js             # Login page
│   │   │   └── Signup.js            # Registration page
│   │   ├── styles/
│   │   │   └── ContactDiary.css     # Custom styles
│   │   ├── api.js                   # Axios configuration
│   │   └── App.js                   # Main App component
│   ├── package.json
│   └── README.md
│
├── .gitattributes
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- Git

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Tanishka293/Contact-Diary.git
   cd Contact-Diary/contact-diary-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the backend directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. **Start the backend server:**
   ```bash
   npm start
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd ../contact-diary-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## 🔧 API Endpoints

### Authentication Routes
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

### Contact Routes (Protected)
- `GET /api/contacts` - Get all user contacts
- `POST /api/contacts` - Create new contact
- `PUT /api/contacts/:id` - Update contact
- `DELETE /api/contacts/:id` - Delete contact

## 🌐 Deployment

### Backend Deployment (Render)
- Backend is deployed on Render: `https://contact-diary-backend.onrender.com`
- Environment variables configured in Render dashboard
- Automatic deployment from GitHub repository

### Frontend Deployment (Netlify)
- Frontend is deployed on Netlify: `https://contact-diary-frontend.netlify.app`
- Redirect rules configured for React Router
- Automatic deployment from GitHub repository

## 💾 Database Schema

### User Schema
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  timestamps: true
}
```

### Contact Schema
```javascript
{
  name: String (required),
  phone: String (required),
  email: String,
  userId: ObjectId (required, ref: 'User'),
  timestamps: true
}
```

## 🔒 Security Features

- **Password Security**: Passwords are hashed using bcryptjs
- **JWT Authentication**: Secure token-based authentication
- **Protected Routes**: All contact operations require valid authentication
- **User Isolation**: Users can only access their own data
- **CORS Configuration**: Properly configured for secure cross-origin requests
- **Input Validation**: Server-side validation for all inputs

## 🎯 Key Highlights

- **Full-Stack Implementation**: Complete frontend and backend architecture
- **Responsive Design**: Mobile-first approach with Bootstrap integration
- **Real-time Updates**: Immediate UI updates after CRUD operations
- **Error Handling**: Comprehensive error handling on both client and server
- **Production Ready**: Deployed and configured for production environments
- **Clean Code**: Well-structured, modular, and maintainable codebase

## 🚦 Usage

1. **Register**: Create a new account with your details
2. **Login**: Sign in with your credentials
3. **Add Contact**: Use the form to add new contacts
4. **Manage Contacts**: View, edit, or delete your contacts
5. **Logout**: Securely end your session

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Tanishka Sharma**
- LinkedIn: [Tanishka Sharma](https://www.linkedin.com/in/tanishka-sharma-286404257)
- GitHub: [@Tanishka293](https://github.com/Tanishka293)

## 🙏 Acknowledgments

- Thanks to the React and Node.js communities for excellent documentation
- Bootstrap team for the responsive CSS framework
- MongoDB for the flexible database solution

---

⭐ **If you found this project helpful, please give it a star!** ⭐