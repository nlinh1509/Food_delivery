# 🍅 Food Delivery App

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

```bash
cd backend
npm install
npm run server
```
#### Server runs on http://localhost:4000

### 3. Start the Frontend Server

```bash
cd ../frontend
npm install
npm start
```

## 🔄 System Workflow

1. Ordering Workflow
   Selection: Users browse the menu and add items to the cart.
   Authentication: Users must log in to proceed to checkout.
   Payment: The app redirects to the Stripe payment page. Upon success, the order is saved to the database.
   Confirmation: Users can verify their order status in the "My Orders" section.

2. Admin Workflow
   Product Entry: Admin uploads food details (Name, Description, Price, Image, Category).
   Order Processing: Admin views all user orders. When food is ready, Admin updates status to "Out for Delivery".
   🔐 Authentication & Security
   Token-Based: Uses JSON Web Tokens (JWT) for secure API access.
   Password Security: User passwords are encrypted using bcrypt before storage.
   Session: Token stored in browser headers/local storage for persistent login.
   Made with ❤️ by [Your Name].
