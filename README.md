# 🍔 Food Delivery App

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
- **Frontend:** React.js, CSS/Tailwind (Admin & Client)
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

    1. Clone the Repository
git clone [https://github.com/nlinh1509/Food_delivery.git](https://github.com/nlinh1509/Food_delivery.git)
cd Food_delivery
```
