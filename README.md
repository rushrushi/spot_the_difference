# 🕹️ Spot the Difference Game

A fun browser-based **“Spot the Difference”** game built with **HTML, CSS, and Vanilla JavaScript**.  
Players must find all the visual differences between two similar images by clicking on them. Each correct click increases the score and highlights the found difference.

---

## 🚀 How to Run the Game

1. **Clone or download** this repository:
      ```bash
   git clone https://github.com/yourusername/spot-the-difference.git
2. Open the project folder, then simply open:
   ```bash
   index.html
   ```
   in your browser.
   (No server setup required — works directly in the browser.)
 
3. Play the game!
 - Click on the differences between the two images.
 - Your score increases with each correct spot.
 - Once all differences are found, a victory sound plays and the game resets.

## 📁 How the Game Uses the JSON File

The game loads all puzzle data (images and difference coordinates) from a data.json file.
This makes it simple to add or modify puzzles without touching the main JavaScript logic.

## 🔍 How it works:

- The JavaScript fetches this JSON file using the fetch() method.
- It loads the image paths into the canvas area.
- It reads the differences array to know the clickable “correct” spots.
- Each successful click increases the score, and when all differences are found:
     - A victory sound plays.
     - A win message appears.
     - The game resets automatically.

## 🧠 Technologies Used

HTML5 — Game structure

CSS3 — Styling and layout

JavaScript (Vanilla JS) — Game logic and interactivity

JSON — Data source for puzzles

## 🏆 Features

Interactive click detection on difference areas

Score tracking system

Victory sound on completion

Easy to add more puzzles through JSON

Works directly in browser (no setup required)

## ✨ Future Enhancements

Add timer or countdown mode

Multiple difficulty levels or categories

Custom popup instead of browser alerts

---

👨‍💻 Developed as part of a frontend project using pure HTML, CSS, and JavaScript.
