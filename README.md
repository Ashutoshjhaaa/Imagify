# Imagify - AI Image Generator

Imagify is a full-stack AI-powered image generation platform where users can transform text descriptions into stunning visual art. Built with the MERN stack (MongoDB, Express, React, Node.js), it features a credit-based system and seamless integration with AI image generation APIs.

## 🚀 Features

- **AI Image Generation:** Turn your imagination into reality using text-to-image AI.
- **Credit System:** Managed user credits for image generation.
- **User Authentication:** Secure signup and login functionality.
- **Interactive UI:** Responsive design built with React and Tailwind CSS.
- **Payment Integration Support:** Structured to handle transaction management.
- **Dynamic Previews:** Real-time generation feedback and result management.

## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- Tailwind CSS
- Framer Motion (Animations)
- React Router DOM
- Axios (API Calls)

**Backend:**
- Node.js & Express
- MongoDB (Mongoose)
- JSON Web Token (JWT) for Authentication
- Bcrypt for security

---

## 📂 Project Structure

```text
imagify/
├── client/           # React Frontend (Vite)
│   ├── src/
│   │   ├── components/  # Reusable UI Components
│   │   ├── context/     # App State Management
│   │   └── pages/       # Page Views
├── server/           # Node.js Backend
│   ├── config/      # DB Connection
│   ├── controllers/ # Route Logic
│   ├── models/      # MongoDB Schemas
│   └── routes/      # API Endpoints
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd imagify
```

### 2. Backend Setup
```bash
cd server
npm install
```
- Create a `.env` file in the `server` folder and add:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIPDROP_API_KEY=your_ai_api_key
```
- Start the server:
```bash
npm run server
```

### 3. Frontend Setup
```bash
cd ../client
npm install
```
- Create a `.env` file in the `client` folder (if needed for API URLs):
```env
VITE_BACKEND_URL=http://localhost:4000
```
- Start the frontend:
```bash
npm run dev
```

---

## ⚡ API Endpoints

### User Routes
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - Login user
- `GET /api/user/credits` - Get user credit balance

### Image Routes
- `POST /api/image/generate-image` - Generate image from prompt

---

## 📝 License
This project is [ISC](LICENSE) licensed.
