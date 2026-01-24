# 🍅 Food Delivery App

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat)

A comprehensive full-stack food ordering platform inspired by modern delivery services. Built with the MERN stack (MongoDB, Express, React, Node.js), it features a seamless ordering experience, secure Stripe payments, and a dedicated Admin Dashboard for management.

## ✨ Features

### 👤 Customer Application

- **User Authentication:** Secure login and registration system.
- **Smart Menu:** Browse food items by category with dynamic filtering.
- **Cart System:** Real-time add-to-cart functionality with quantity adjustments.
- **Secure Checkout:** Integrated **Stripe** payment gateway for safe transactions.
- **Order Tracking:** View order history and real-time status updates.

### 🛡️ Admin Dashboard

- **Product Management:** Add, edit, or remove food items (including image uploads).
- **Order Management:** Monitor incoming orders and update statuses (Processing → Out for Delivery → Delivered).
- **Sales Overview:** Track basic order statistics.

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js, JWT Authentication
- **Frontend:** React.js, CSS/Tailwind, Vite
- **Database:** MongoDB Atlas (Mongoose)
- **Payment:** Stripe API
- **Storage:** Local Storage / Cloudinary (for food images)

## 📂 Project Structure

```text
Food_delivery/
├── admin/                  # Admin Dashboard (React)
│   ├── src/
│   │   ├── assets/         # Admin assets
│   │   ├── components/     # Admin UI components (Sidebar, Navbar)
│   │   ├── pages/          # AddItems, ListItems, Orders
│   │   └── App.jsx         # Admin layout logic
├── backend/                # API Server (Node/Express)
│   ├── config/             # DB connection (db.js)
│   ├── controllers/        # Logic for Order, Cart, Food, User
│   ├── models/             # Mongoose Schemas
│   ├── routes/             # API Endpoints
│   ├── middleware/         # Auth middleware
│   └── server.js           # Entry point
└── frontend/               # Customer App (React)
    ├── src/
    │   ├── assets/         # Food images & icons
    │   ├── components/     # Navbar, FoodDisplay, Header
    │   ├── context/        # StoreContext (Global State)
    │   ├── pages/          # Cart, Home, PlaceOrder
    │   └── App.jsx         # Main app layout

```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/nlinh1509/Food_delivery.git
cd Food_delivery
```

### 2. Start the Backend Server

**Configuration:** Create a `.env` file in the `backend` folder and add your credentials:

```env
PORT=4000
MONGO_URI=your_mongodb_connectison_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

- \*\*Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
npm run server
```

- #### Server runs on http://localhost:4000

### 3. Start the Frontend Server

```bash
cd ../frontend
npm install
npm start
```

- #### Server runs on http://localhost:5173

## 🔄 System Workflow

#### Customer Journey

- **Selection:** Users browse the menu and add items to the cart.
- **Authentication:** Users must log in to proceed to checkout.
- **Payment:** Integrated **Stripe** gateway. Upon success, order is saved to database.
- **Confirmation:** Users verify status in the "My Orders" section.

#### Admin Dashboard

- **Product Entry:** Add food details (Name, Desc, Price, Image, Category).
- **Order Processing:** Update status from _Processing_ → _Out for Delivery_ → _Delivered_.

---

## 🔐 Authentication & Security

- **JWT Auth:** Secure API access using JSON Web Tokens.
- **Password Encryption:** User passwords hashed via `bcrypt`.
- **Persistent Session:** Tokens stored securely in Local Storage.

<br />
<p align="center">Made with ❤️ by <strong>levonhatlinh</strong></p>
````
