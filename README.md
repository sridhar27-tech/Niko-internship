# AuraCart - AI-Powered Premium E-Commerce

AuraCart is a sophisticated e-commerce platform that demonstrates the power of AI in retail. It features a premium, immersive design and an intelligent recommendation engine that adapts to user behavior.

## ✨ Features

- **AI Recommendations**: Uses Scikit-learn and Pandas for real-time product suggestions.
- **Premium UI**: Crafted with glassmorphism, smooth gradients, and dark mode using Vanilla CSS.
- **Dynamic Animations**: Page reveal transitions and interactive button micro-animations.
- **Zero-Config Database**: Smart fallback mechanism that uses in-memory mock data if MongoDB is not detected.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.10+
- MongoDB (Optional, backend has a mock mode fallback)

### 1. Backend Setup (FastAPI)
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### 2. Frontend Setup (Next.js)
```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000` to experience AuraCart.

## 📁 Project Structure

- `/frontend`: Next.js application with a premium Vanilla CSS layout.
- `/backend`: FastAPI server with Scikit-learn recommendation logic.
- `package.json`: Root workspace configuration.
- `walkthrough.md`: Detailed technical overview.

## 🌐 Live Demo & Deployment

### [🚀 Live Demo Link](https://sridhar27-tech.github.io/Niko-internship/)
*The frontend is hosted on GitHub Pages. Note: AI features require the backend to be running locally.*

### Backend Deployment
For a full live demo with the AI engine, it is recommended to host the FastAPI backend on **Render** or **Railway** and connect it to a **MongoDB Atlas** cluster.

Developed by Sridhar for the Internship Opportunity.
