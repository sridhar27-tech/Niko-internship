# AuraCart - AI-Powered Premium E-Commerce

AuraCart is a sophisticated e-commerce platform that demonstrates the power of AI in retail. It features a premium, immersive design and an intelligent recommendation engine that adapts to user behavior.

## ✨ Features

- **AI Recommendations**: Uses Scikit-learn and Pandas for real-time product suggestions.
- **Premium UI**: Crafted with glassmorphism, smooth gradients, and dark mode using Vanilla CSS.
- **Dynamic Animations**: Page reveal transitions and interactive button micro-animations.
- **Zero-Config Mode**: Works instantly with in-memory fallback if MongoDB is not present.

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
- `walkthrough.md`: Detailed technical overview.

Developed for the internship opportunity.
