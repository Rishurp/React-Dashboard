

# **React-Dashboard**

This is a full-stack web application with **frontend** and **backend** components. The project includes user authentication, role-based authorization, and interactive data visualization. The application is deployed on **Vercel** (frontend) and **Render/Heroku/etc.** (backend, if applicable).

---

## **Features**

### **Frontend**
- Built with React.js and styled using Material-UI (MUI) and Tailwind CSS.
- Interactive charts for role-based user statistics using **Recharts**.
- Dynamic tables with real-time filtering, sorting, and pagination.
- Fully responsive design for desktop and mobile devices.

### **Backend**
- User authentication (login, registration) with secure password hashing.
- Role-based access control (admin vs. user).
- RESTful API endpoints for user management.
- Middleware for authentication and authorization using JSON Web Tokens (JWT).
- MongoDB for database operations.

---

## **Tech Stack**

### **Frontend**
- **React.js**
- **Material-UI (MUI)**
- **Recharts**
- **Tailwind CSS**
- **Axios**

### **Backend**
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **JSON Web Tokens (JWT)**
- **bcrypt.js** (for password hashing)

---


### **Schema Explanation**

This schema defines the structure and behavior of the **User** model in a MongoDB database using **Mongoose**, a popular ODM (Object Data Modeling) library for Node.js.

#### **1. `userSchema` Definition**
The schema outlines the fields, their data types, and validation rules for documents in the `users` collection.

##### **Schema Fields**
| Field       | Type     | Description                                                                 |
|-------------|----------|-----------------------------------------------------------------------------|
| `username`  | `String` | The user's name. Required to ensure every user has a unique identifier.     |
| `email`     | `String` | The user's email address. Required to identify users uniquely.              |
| `password`  | `String` | The hashed password for user authentication. Required for login security.   |
| `role`      | `String` | The user's role in the system (`admin` or `user`). Default is `user`.       |

#### **Validation Rules**
- **`username`**:
  - Must be a string.
  - Required (`required: true`): The schema will reject documents without a username.
- **`email`**:
  - Must be a string.
  - Required (`required: true`): The schema will reject documents without an email.
- **`password`**:
  - Must be a string.
  - Required (`required: true`): Ensures all users have a password.
- **`role`**:
  - Must be one of two values: `"admin"` or `"user"` (`enum` validation).
  - Defaults to `"user"` if no role is specified.

---

#### **2. Timestamps Option**
- **`timestamps: true`**:
  - Automatically adds two fields to the schema:
    - `createdAt`: The date and time when the document was created.
    - `updatedAt`: The date and time when the document was last modified.
  - Useful for tracking user activity and auditing.

---

### **Why This Schema?**
1. **Role-based Access Control (RBAC)**:
   - The `role` field ensures differentiation between `admin` and `user`.
   - Allows for role-based authorization in the application.

2. **Security**:
   - Passwords are stored as hashed strings (to be handled in middleware or service logic).
   - Prevents storing plaintext passwords.

3. **Flexibility**:
   - Fields like `role` are extendable to add more roles in the future.
   - `timestamps` provide essential metadata for data tracking.

4. **Data Integrity**:
   - Validation rules ensure only valid and consistent data is saved in the database.
---


## **Project Structure**

```
root/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── README.md
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middlewares/
│   ├── config/
|   ├── services/
|   ├── utils/
│   ├── index.js
│   ├── .env
│   └── package.json
├── README.md
└── .gitignore
```

---

## **Installation and Setup**

### Prerequisites
- Node.js installed on your system.
- MongoDB database hosted on a cloud provider (e.g., MongoDB Atlas).

### 1. Clone the Repository
```bash
git clone https://github.com/Rishurp/React-Dashboard.git
```

### 2. Set Up Backend
```bash
cd backend
npm install
```

#### **Environment Variables**
Create a `.env` file in the `backend` directory with the following:
```
PORT=5000
MONGODB_URL=your-mongodb-connection-string
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN = expires-in-minutes
```

#### **Run Backend**
```bash
npm start
```

### 3. Set Up Frontend
```bash
cd frontend
npm install
```


#### **Run Frontend**
```bash
npm start
```

---

## **API Endpoints**

### **Auth Routes**
- `POST /v1/auth/register` - Register a new user.
- `POST /v1/auth/login` - Login a user and receive a token.

### **User Routes**
- `GET /v1/users` - Get a list of users (based on a role)
---

## **Deployment**

### **Frontend**
- Deployed on [Vercel](react-dashboard-beryl-theta.vercel.app).  


### **Backend**
- Deployed on [Render](https://react-dashboard-dcty.onrender.com/v1/users).
- Ensure `.env` variables are correctly configured on the hosting platform.

---

