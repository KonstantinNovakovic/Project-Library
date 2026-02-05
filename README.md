
# 📚 Library App

A simple book tracking application built for **The Odin Project**. The goal was to practice Object Constructors, local data storage, and syncing JavaScript logic with the DOM.

## ✨ Features

- **Add Books:** input details via a pop-up modal.
- **Toggle Read Status:** Update specific books using prototype methods.
- **Delete Books:** Remove items using unique IDs (`crypto.randomUUID`) and array filtering.
- Responsive CSS Grid layout.

## 🧠 What I Learned

- **Constructors & Prototypes:** Moved logic (like toggling read status) to `Book.prototype` to keep objects clean and efficient.
- **State vs Visuals:** Learned that changing the array doesn't automatically change the screen—I had to write a function to clear and re-render the DOM (`innerHTML = ""`).
- **Scope:** Solved bugs where event listeners couldn't access the global library array by passing the correct arguments.
- **Form Handling:** Used `form.reset()` to automatically clear user input after submission.

## 🛠️ Built With

- HTML5
- CSS3 (Grid)
- JavaScript (ES6+)

