# Section 16: DOM Manipulation - Complete Documentation

## Table of Contents

1. [JavaScript Placement in HTML](#javascript-placement-in-html)
2. [Introduction to the DOM](#introduction-to-the-dom)
3. [Accessing DOM Elements](#accessing-dom-elements)
4. [Manipulating Elements](#manipulating-elements)
5. [Event Handling](#event-handling)
6. [Style Manipulation](#style-manipulation)
7. [Class Manipulation](#class-manipulation)
8. [Attribute Manipulation](#attribute-manipulation)

---

## JavaScript Placement in HTML

There are three ways to include JavaScript in your HTML document:

### 1. Inline JavaScript
JavaScript code written directly within HTML tags using event attributes.

```html
<button onclick="alert('Clicked!')">Click Me</button>
```

**Pros:** Simple for quick tests  
**Cons:** Mixes structure with behavior (violates separation of concerns)

---

### 2. Internal JavaScript
JavaScript code written within `<script>` tags inside the HTML document.

```html
<head>
    <script>
        console.log("Internal JS");
    </script>
</head>
```

**Pros:** Keeps JS in one place  
**Cons:** Still mixes JS with HTML structure

---

### 3. External JavaScript (Recommended)
JavaScript code written in a separate `.js` file and linked to HTML.

```html
<head>
    <script src="./index.js"></script>
</head>
```

**Pros:**
- Complete separation of concerns
- Reusable across multiple pages
- Browser can cache the file
- Easier to maintain

---

## Best Practice: Script Tag Placement

**Always place `<script>` tags just before the closing `</body>` tag.**

### Why?

1. **Prevents Parser Blocking**
   - Browsers parse HTML from top to bottom
   - When encountering a `<script>` tag, the browser stops parsing, downloads and executes the script
   - Placing scripts at the end ensures visual content renders first

2. **Ensures DOM is Ready**
   - JavaScript can only interact with elements that already exist in the DOM
   - Scripts in `<head>` may try to access elements that haven't been created yet
   - Bottom placement guarantees all elements are accessible

```html
<body>
    <h1>Hello</h1>
    <button id="btn">Click</button>
    
    <!-- Scripts at the end -->
    <script src="./index.js"></script>
</body>
```

---

## Introduction to the DOM

### What is the DOM?

The **Document Object Model (DOM)** is a tree-like representation of your HTML document. It allows JavaScript to access and manipulate the structure, content, and styles of a web page.

### DOM Tree Structure

```
document
└── html
    ├── head
    │   ├── meta
    │   ├── title
    │   └── link
    └── body
        ├── h1
        └── script
```

---

## Accessing DOM Elements

### Using `document` Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `querySelector(selector)` | First element matching CSS selector | Single element |
| `querySelectorAll(selector)` | All elements matching CSS selector | NodeList |
| `getElementById(id)` | Element with specific ID | Single element |
| `getElementsByTagName(tag)` | All elements with tag name | HTMLCollection |
| `getElementsByClassName(class)` | All elements with class name | HTMLCollection |

### Examples

```javascript
// Select by tag name
document.querySelector("h1");

// Select by class
document.querySelector(".btn");

// Select by id
document.querySelector("#btn");

// Select nested elements
document.querySelector("li a");

// Select all list items
document.getElementsByTagName("li");

// Select all buttons with class 'btn'
document.getElementsByClassName("btn");
```

### Complex DOM Navigation

```javascript
// Navigate through the DOM tree
document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = 'Sudhanshu';
```

---

## Manipulating Elements

### Properties vs Methods

| Concept | Syntax | Example |
|---------|--------|---------|
| **Property** | `object.property` | `car.color` (get), `car.color = "red"` (set) |
| **Method** | `object.method()` | `car.start()` (action) |

### Key Properties for Manipulation

| Property | Description |
|----------|-------------|
| `innerHTML` | Gets/sets HTML content inside element |
| `textContent` | Gets/sets text content (escapes HTML) |
| `value` | Gets/sets input field values |
| `style` | Accesses inline styles |
| `classList` | Manages CSS classes |

### Examples

```javascript
// Change text content
document.querySelector("h1").innerHTML = "Good Bye";

// Change list item
document.querySelector("li").innerHTML = "Sudhanshu";

// Change text color
document.querySelector("h1").style.color = "blue";
```

---

## Event Handling

### Adding Event Listeners

```javascript
// Select element and add event listener
document.querySelector("button").addEventListener("click", function() {
    console.log("Button was clicked!");
});
```

### Common Events

| Event | Description |
|-------|-------------|
| `click` | Element is clicked |
| `mouseover` | Mouse enters element |
| `mouseout` | Mouse leaves element |
| `keydown` | Key is pressed |
| `submit` | Form is submitted |

---

## Style Manipulation

### Changing Inline Styles

```javascript
// Change background color
document.querySelector("#btn").style.backgroundColor = "yellow";

// Change multiple properties
document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.fontSize = "50px";
```

### Common Style Properties

| CSS Property | JavaScript Property |
|--------------|---------------------|
| `background-color` | `backgroundColor` |
| `font-size` | `fontSize` |
| `text-align` | `textAlign` |
| `border-radius` | `borderRadius` |

> **Note:** CSS properties with hyphens become camelCase in JavaScript.

**Reference:** [W3Schools DOM Style Object](https://www.w3schools.com/jsref/dom_obj_style.asp)

---

## Class Manipulation

### Using classList API

```javascript
// Add a class
document.querySelector("h1").classList.add("huge");

// Remove a class
document.querySelector("h1").classList.remove("small");

// Toggle a class (add if missing, remove if present)
document.querySelector("h1").classList.toggle("active");

// Check if class exists
document.querySelector("h1").classList.contains("huge");
```

### CSS Class Definition

```css
/* Define the class in your CSS file */
.huge {
    font-size: 10em;
    color: red;
    font-weight: bold;
}
```

---

## Attribute Manipulation

### Getting and Setting Attributes

```javascript
// Get attribute value
document.querySelector("a").getAttribute("href");
document.querySelector("img").getAttribute("src");

// Set attribute value
document.querySelector("a").setAttribute("href", "https://google.com");
document.querySelector("img").setAttribute("src", "new-image.jpg");

// Remove attribute
document.querySelector("button").removeAttribute("disabled");
```

### Common Attributes

| Attribute | Description |
|-----------|-------------|
| `href` | Link destination |
| `src` | Image/media source |
| `class` | CSS class names |
| `id` | Unique identifier |
| `alt` | Alternative text |
| `disabled` | Disabled state |

---

## Separation of Concerns

A well-organized web application separates three layers:

| Layer | Technology | Responsibility |
|-------|------------|----------------|
| **Structure** | HTML | Defines content and layout |
| **Style** | CSS | Controls appearance and presentation |
| **Behavior** | JavaScript | Handles interactivity and logic |

### Best Practice Example

```html
<!-- HTML: Structure only -->
<h1 id="title">Hello</h1>
<button id="btn" class="btn-primary">Click Me</button>
<link rel="stylesheet" href="./styles.css">
<script src="./index.js"></script>
```

```css
/* CSS: Style only */
.huge {
    font-size: 10em;
    color: red;
}
```

```javascript
// JavaScript: Behavior only
document.querySelector("#title").classList.add("huge");
document.querySelector("#btn").addEventListener("click", handleClick);
```

---

## Quick Reference

### Selectors Cheat Sheet

```javascript
// By tag
document.querySelector("p")
document.getElementsByTagName("p")

// By class
document.querySelector(".my-class")
document.getElementsByClassName("my-class")

// By ID
document.querySelector("#my-id")
document.getElementById("my-id")

// CSS combinators
document.querySelector("div p")      // descendant
document.querySelector("div > p")    // direct child
document.querySelector("div + p")    // adjacent sibling
```

### Common Operations

```javascript
// Change content
element.innerHTML = "New HTML"
element.textContent = "Plain text"

// Change style
element.style.color = "red"
element.classList.add("active")

// Change attributes
element.getAttribute("href")
element.setAttribute("href", "#")

// Add events
element.addEventListener("click", handler)
```

---

## Summary

- Use **external JavaScript** files for clean separation of concerns
- Place `<script>` tags **before closing `</body>`** to ensure DOM is ready
- Use **`querySelector`** for flexible CSS-style element selection
- Manipulate content with **`innerHTML`** and **`textContent`**
- Change styles via **`style.property`** or **`classList`** API
- Handle user interactions with **`addEventListener`**
- Access and modify attributes with **`getAttribute`** and **`setAttribute`**
