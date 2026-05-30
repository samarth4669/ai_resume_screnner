# AI Resume Screening System

An AI-powered Resume Screening System that analyzes resumes against Job Descriptions and ranks candidates based on skill matching and relevance.

---

# Features

- Upload multiple resumes
- Upload Job Description
- AI-based candidate analysis
- Candidate ranking system
- Match score generation
- Missing skills detection
- Resume preview
- CSV/Excel export support
- FastAPI backend
- React/Vite frontend

---


 Tech Stack

## Backend
- FastAPI
- Python
- SQLAlchemy
- LangChain
- Groq API

## Frontend
- React
- Vite
- Tailwind CSS

---

# Project Structure

```text
resume-screening-app/
│
├── backend/
│   ├── app/
│   ├── uploads/
│   ├── venv/
│
├── frontend/
│   ├── src/
│   ├── public/
```

# Backend Setup

## 1. Navigate to backend folder

```bash
cd backend
```

---

## 2. Create Virtual Environment

### Linux/macOS

```bash
python3 -m venv venv
source venv/bin/activate
```

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

---

## 3. Generate `requirements.txt` (For Developers)

If `requirements.txt` is not available, install required libraries manually and generate it using:

```bash
pip freeze > requirements.txt
```

Then install dependencies using:

```bash
pip install -r requirements.txt
```

---

## 4. Create `.env` File

Create a `.env` file inside the `backend` folder.

Example:

```env
GROQ_API_KEY=your_groq_api_key
DATABASE_URL=your_database_connection_url
```

### GROQ API Key

Create your API key from:

https://console.groq.com/keys

---

### Example Database URLs

#### SQLite

```env
DATABASE_URL=sqlite:///./resume_screening.db
```

#### PostgreSQL

```env
DATABASE_URL=postgresql://username:password@localhost/dbname
```

---

## 5. Run Backend Server

```bash
uvicorn app.main:app --reload
```

Backend server will run at:

```text
http://127.0.0.1:8000
```

---

## 6. FastAPI Swagger Documentation

Open:

```text
http://127.0.0.1:8000/docs
```

to test APIs directly from the browser.


# Frontend Setup

## 1. Navigate to frontend

```bash
cd frontend
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Run frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# API Documentation

FastAPI Swagger Docs:

```text
http://127.0.0.1:8000/docs
```

---

# Requirements

- Python 3.10+
- Node.js 18+
- npm
- Git

---

# Author

Samarth Shinde