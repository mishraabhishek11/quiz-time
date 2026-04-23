# 🧠 Quiz Time – React Quiz Application

A dynamic **React.js quiz application** that tests users on **React-related questions** with a timed experience. Users must answer within a limited time or the question is automatically skipped.

At the end of the quiz, a detailed summary displays performance insights including correct, incorrect, and skipped answers.

---

## 🚀 Features

### ❓ Quiz Functionality

- Predefined set of React.js questions
- Multiple-choice answers
- Select one answer per question

### ⏱️ Timer-Based Interaction

- Each question has a **10-second timer**
- Automatically skips question if time runs out

### 📊 Quiz Summary

- Displays:
  - ✅ Correct answers percentage
  - ❌ Incorrect answers percentage
  - ⏭️ Skipped answers percentage
- Shows all questions with selected answers

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **State Management:** React Hooks (useState, useEffect)
- **Logic:** Timer-based state updates
- **Styling:** CSS
- **Build Tool:** Create React App

---

## 📂 Project Structure

```
quiz-time/
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ quiz-logo.png
├─ src
│  ├─ App.jsx
│  ├─ component
│  │  ├─ Header.tsx
│  │  ├─ QuestionTimer.tsx
│  │  ├─ Quiz.tsx
│  │  └─ Summary.tsx
│  ├─ index.css
│  ├─ main.jsx
│  └─ question.ts
└─ vite.config.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/mishraabhishek11/quiz-time.git

### 2️⃣ Navigate to the project folder

cd quiz-time

### 3️⃣ Install dependencies

npm install

### 4️⃣ Start the development server

npm run dev

### 5️⃣ Open in browser

http://localhost:5173/

---

## 🧑‍💻 Usage

1. Start the quiz
2. Read each question carefully
3. Select an answer within **10 seconds**
4. If no answer is selected, the question is skipped automatically
5. After completing all questions, view the summary
6. Analyze your performance and review answers

---

## 🎯 Learning Objectives

- Build interactive UI with React
- Manage timers using useEffect
- Handle quiz state and logic
- Display dynamic summaries

---

## 🔮 Future Enhancements

- Add difficulty levels (Easy / Medium / Hard)
- Add category-based quizzes
- Store quiz history using localStorage
- Add animations and progress bar
- Backend integration for leaderboard

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch  
   git checkout -b feature/your-feature

3. Commit your changes  
   git commit -m "Add your message"

4. Push to the branch  
   git push origin feature/your-feature

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Abhishek Mishra  
GitHub: https://github.com/mishraabhishek11

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
