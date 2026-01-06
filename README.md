# 🚀 BSES - JavaScript Projects Collection

A comprehensive collection of JavaScript projects built to master core web development concepts. This repository showcases practical implementations of DOM manipulation, event handling, and modern JavaScript techniques.

---

## 📁 Projects Overview

### 1. 🛒 E-Commerce Application
A fully-featured e-commerce web application with modern UI/UX design.

**Features:**
- Product catalog with dynamic filtering by categories (Men, Women, Accessories, Footwear)
- Shopping cart with add/remove/update quantity functionality
- Wishlist feature to save favorite products
- Real-time search with instant results
- User authentication modal (Login/Signup)
- Responsive navigation with mobile menu
- Product quick view modal
- "New Arrivals" slider section
- Countdown timer for deals
- Toast notifications for user feedback
- Back-to-top button
- Preloader animation

**Topics Learned:**
- 📌 **DOM Manipulation** - Dynamic rendering of product cards and UI elements
- 📌 **Event Listeners** - Click, scroll, input events for interactive features
- 📌 **Local Storage** - Persisting cart and wishlist data across sessions
- 📌 **Array Methods** - `filter()`, `map()`, `find()`, `reduce()` for data manipulation
- 📌 **Template Literals** - Dynamic HTML generation
- 📌 **ES6+ Features** - Arrow functions, destructuring, spread operator
- 📌 **CSS Classes Toggle** - Adding/removing classes for UI state management
- 📌 **JSON Parsing** - Working with structured product data
- 📌 **Conditional Rendering** - Displaying different UI based on state

---

### 2. 🔢 Calculator
A functional calculator with a clean, modern interface.

**Features:**
- Basic arithmetic operations (+, -, *, /)
- Real-time calculation display
- Clear functionality
- Responsive button layout

**Topics Learned:**
- 📌 **IIFE (Immediately Invoked Function Expression)** - Encapsulating code to avoid global scope pollution
- 📌 **Query Selectors** - `querySelector()` and `querySelectorAll()` for DOM selection
- 📌 **Event Delegation** - Handling multiple button clicks efficiently
- 📌 **Data Attributes** - Using `dataset` to store button values
- 📌 **String Concatenation** - Building mathematical expressions
- 📌 **eval() Function** - Evaluating mathematical expressions (with understanding of its implications)
- 📌 **forEach Loop** - Iterating over NodeList elements

---

### 3. 🔍 Product Filter
A product search and filter application for real-time product searching.

**Features:**
- Real-time search filtering
- Dynamic product visibility toggle
- Case-insensitive search

**Topics Learned:**
- 📌 **DOM Traversal** - `getElementsByTagName()`, `querySelectorAll()` for element selection
- 📌 **String Methods** - `toUpperCase()`, `indexOf()` for search matching
- 📌 **Text Content Access** - `textContent` and `innerHTML` properties
- 📌 **CSS Display Property** - Dynamically showing/hiding elements
- 📌 **Loop Iterations** - For loops for iterating through product elements
- 📌 **Input Event Handling** - Real-time search as user types
- 📌 **Conditional Logic** - Matching search queries with product names

---

### 4. 🖼️ Infinite Scroll Gallery
A performant infinite scroll image gallery using the Intersection Observer API - the modern, industry-standard approach for detecting element visibility.

**Features:**
- Infinite scroll loading of images
- Lazy loading for performance optimization
- Beautiful masonry-style grid layout
- Lightbox for full-size image viewing
- Real-time stats showing observer triggers
- Smooth animations and transitions
- Responsive design for all devices
- Loading spinner while fetching images

**Topics Learned:**
- 📌 **Intersection Observer API** - Modern alternative to scroll events for visibility detection
- 📌 **Observer Pattern** - Using callbacks triggered by browser when elements intersect
- 📌 **Sentinel Element** - Placing a "trigger" element that signals when to load more content
- 📌 **Root Margin & Threshold** - Configuring when the observer fires (200px before visible, 10% visibility)
- 📌 **Lazy Loading** - Loading content only when needed, improving initial page load
- 📌 **Async/Await** - Modern JavaScript for handling asynchronous operations
- 📌 **Document Fragment** - Batch DOM insertions for better performance
- 📌 **State Management** - Tracking loading state, page count, and preventing duplicate requests
- 📌 **Performance Optimization** - Why Intersection Observer is better than `scroll` events:
  - Runs on compositor thread (doesn't block main thread)
  - No need for throttle/debounce
  - Browser-optimized callbacks
  - Better battery life on mobile
- 📌 **Lightbox Implementation** - Modal overlay for viewing full-size images
- 📌 **Keyboard Events** - ESC key to close lightbox for accessibility

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Styling, animations, and responsive design |
| **JavaScript (ES6+)** | Logic, interactivity, and DOM manipulation |
| **Local Storage API** | Client-side data persistence |
| **Font Awesome** | Icons (in eCom project) |

---

## 📚 Key JavaScript Concepts Covered

```
✅ DOM Selection & Manipulation
✅ Event Handling (click, scroll, input)
✅ Array Methods (map, filter, find, reduce, forEach)
✅ Local Storage for Data Persistence
✅ Template Literals for Dynamic HTML
✅ ES6+ Syntax (Arrow Functions, Destructuring, Spread Operator)
✅ IIFE Pattern for Code Encapsulation
✅ Conditional Rendering
✅ Real-time Search Implementation
✅ State Management (Cart, Wishlist)
✅ Intersection Observer API
✅ Lazy Loading & Infinite Scroll
✅ Async/Await & Promises
✅ Performance Optimization Techniques
```

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/BSES.git
   ```

2. **Navigate to any project folder**
   ```bash
   cd BSES/javascript/eCom
   # or
   cd BSES/javascript/calculator
   # or
   cd BSES/javascript/ProductFilter
   # or
   cd BSES/javascript/IntersectionObserver
   ```

3. **Open `index.html` in your browser**
   - Simply double-click the file, or
   - Use a live server extension in VS Code

---

## 📂 Project Structure

```
BSES/
└── javascript/
    ├── calculator/
    │   ├── index.html
    │   ├── style.css
    │   └── app.js
    ├── eCom/
    │   ├── index.html
    │   ├── style.css
    │   └── app.js
    ├── IntersectionObserver/
    │   ├── index.html
    │   ├── style.css
    │   └── app.js
    └── ProductFilter/
        ├── index.html
        ├── style.css
        ├── app.js
        └── img/
```

---

## 🎯 Learning Outcomes

By building these projects, you will gain hands-on experience with:

1. **Fundamentals** - Understanding how JavaScript interacts with HTML/CSS
2. **Problem Solving** - Breaking down features into implementable logic
3. **Code Organization** - Structuring code for readability and maintainability
4. **User Experience** - Creating responsive and intuitive interfaces
5. **Data Management** - Handling state and persisting data locally

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ while learning JavaScript
</p>
