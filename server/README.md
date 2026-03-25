# Imagify - Backend

This is the backend API for Imagify, built with **Node.js**, **Express**, and **MongoDB**.

## 🛠 Features

- **Authentication:** Secure login and registration with JWT and Bcrypt.
- **Credit Management:** Automated credit deduction after image generation.
- **Image Generation:** Deep integration with ClipDrop AI (or similar text-to-image APIs).
- **Persistent Data:** MongoDB storage via Mongoose.

## 📁 Key Folders

- `config/`: Database connection settings.
- `controllers/`: Logic for user accounts and image generation processes.
- `models/`: MongoDB schemas for users and transactions.
- `routes/`: Express API endpoints.
- `middlewares/`: Request validation and authentication logic.

## 🚀 Setup & Local Execution

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Environment Configuration:**
   Create a `.env` file with these values:
   ```env
   # Database
   MONGODB_URI=your_mongodb_uri

   # Auth
   JWT_SECRET=your_jwt_secret

   # AI API
   CLIPDROP_API_KEY=your_ai_api_key

   # Server Port
   PORT=4000
   ```

3. **Run Dev Server:**
   ```bash
   npm run server
   ```

---

## ⚡ Main API Endpoints

| Resource | Action | Method | Endpoint |
| :--- | :--- | :--- | :--- |
| **User** | Register | POST | `/api/user/register` |
| **User** | Login | POST | `/api/user/login` |
| **User** | Credits | GET | `/api/user/credits` |
| **Image** | Generate | POST | `/api/image/generate-image` |

## 📦 Tech Used
- **Express:** Web application framework.
- **Mongoose:** Object data modeling for MongoDB.
- **JWT:** JSON Web Token for stateless authentication.
- **Bcrypt:** Hashing passwords for secure storage.
- **Dotenv:** Managing environment variables.
