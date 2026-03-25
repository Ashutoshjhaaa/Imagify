# Imagify - Frontend

This is the frontend component of the Imagify AI Image Generator, built with **React** and **Vite**.

## 🎨 UI & Features

- **Modern UI:** Crafted with Tailwind CSS for responsiveness and style.
- **Animations:** Interactive animations powered by Framer Motion.
- **Global Context:** App-wide state management via `AppContext.jsx`.
- **Dynamic Routes:** React Router DOM integration for seamless navigation.
- **Toast Notifications:** User-friendly alerts with `react-toastify`.

## 📁 Key Directories

- `src/components/`: Reusable interface components (Navbar, Header, Steps, etc.)
- `src/context/`: Global data logic for user credits and authentication state.
- `src/pages/`: Main views (Home, Result, BuyCredit).

## 🚀 Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Create a `.env` file in the root:
   ```env
   VITE_BACKEND_URL=your_backend_api_url
   ```

3. **Development Mode:**
   ```bash
   npm run dev
   ```

4. **Build for Production:**
   ```bash
   npm run build
   ```

---

## 💻 Tech Used
- **Vite:** High-performance build tool.
- **Tailwind CSS:** Utility-first CSS framework.
- **Framer Motion:** Powering complex animations.
- **React-Router-DOM:** Navigation and routing.
- **Axios:** API communication with the backend.
