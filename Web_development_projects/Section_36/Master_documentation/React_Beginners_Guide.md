# React — Complete Beginner's Guide

> A master reference built from your Section 36 notes. Come back here anytime to refresh the concepts.

---

## Table of Contents

1. [What is React?](#1-what-is-react)
2. [How React Works — The Big Picture](#2-how-react-works--the-big-picture)
3. [Introduction to JSX](#3-introduction-to-jsx)
4. [JavaScript Expressions inside JSX](#4-javascript-expressions-inside-jsx)
5. [JSX Attributes &amp; className](#5-jsx-attributes--classname)
6. [Inline Styling in React](#6-inline-styling-in-react)
7. [React Components](#7-react-components)
8. [The App.jsx File — Root Component](#8-the-appjsx-file--root-component)
9. [Project Structure — The React Way](#9-project-structure--the-react-way)
10. [Quick Reference Cheat Sheet](#10-quick-reference-cheat-sheet)

---

## 1. What is React?

React is a **JavaScript library** built by Facebook (Meta) for building **user interfaces**.

Think of it like this: instead of writing the same HTML block over and over across many pages, React lets you build **reusable pieces** (called **components**) and drop them wherever you need them.

### Why was React created?

Before React, if something changed on a page (like a new post in a feed), you had to **refresh the entire page** to see the update. This was slow and annoying for users.

React solved this by only updating **the part of the page that actually changed**, leaving everything else (like the navbar or sidebar) untouched.

### Real-world example

Sites like **LinkedIn**, **Airbnb**, and **Facebook** use React. When you scroll your LinkedIn feed and new posts load, the navbar doesn't flash or reload — only the feed area updates. That's React doing its job.

### What React combines

React combines **JavaScript**, **HTML**, and **CSS** into a single file so you have full control from one place. This is different from traditional web development where you keep those three separate.

---

## 2. How React Works — The Big Picture

### Components = Building Blocks

Imagine a website as a set of Lego blocks. Each block is a **component**:

```
Website
├── Navbar Component
├── Feed Component
│   ├── Post Component
│   ├── Post Component
│   └── Post Component
├── Sidebar Component
└── Footer Component
```

Each component is its own file, has its own logic, and can be reused as many times as needed.

### Efficient Re-rendering

React keeps a **Virtual DOM** (a lightweight copy of the real page) in memory. When data changes:

1. React creates a new virtual version of the page.
2. It **compares** the new version to the old one (this is called "diffing").
3. It only updates the **exact parts** that changed in the real browser page.

This makes React extremely fast compared to reloading the whole page.

---

## 3. Introduction to JSX

### What is JSX?

JSX stands for **JavaScript XML**. It is a special syntax that lets you **write HTML-looking code inside JavaScript**.

Without JSX (old way):

```javascript
React.createElement("h1", null, "Hello World");
```

With JSX (modern, readable way):

```jsx
const element = <h1>Hello World</h1>;
```

JSX is NOT valid JavaScript on its own. A tool called **Babel** converts (compiles) your JSX into real JavaScript that browsers can understand.

### How to set up a basic React file

```jsx
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById("root")
);
```

Breaking this down:

- `import React from "react"` — loads the React library.
- `import ReactDOM from "react-dom"` — loads the tool that puts React content into the browser.
- `ReactDOM.render(WHAT_TO_SHOW, WHERE_TO_SHOW_IT)` — renders your JSX into the HTML element with `id="root"`.

### The `index.html` connection

Your `index.html` file has a `<div id="root"></div>`. React grabs that div and injects everything into it. You rarely touch the HTML file — all your work happens in JSX files.

### JSX Rules to Remember

| Rule                                    | Wrong         | Right                    |
| --------------------------------------- | ------------- | ------------------------ |
| JSX must return one parent element      | `<h1/><p/>` | `<div><h1/><p/></div>` |
| Tags must be closed                     | `<img>`     | `<img />`              |
| It looks like HTML but it IS JavaScript | —            | Always keep this in mind |

---

## 4. JavaScript Expressions inside JSX

One of the most powerful features of JSX is that you can **embed JavaScript directly inside your HTML-like code** using curly braces `{ }`.

### Using a variable

```jsx
import React from "react";
import ReactDOM from "react-dom";

const name = "Sudhanshu";

ReactDOM.render(
  <h1>Hello {name}!</h1>,
  document.getElementById("root")
);
```

Output: `Hello Sudhanshu!`

### What can go inside `{ }`?

You can put any valid JavaScript **expression** inside curly braces:

```jsx
const firstName = "Sudhanshu";
const currentYear = new Date().getFullYear();
const price = 100;

<p>Name: {firstName}</p>
<p>Year: {currentYear}</p>
<p>Price after tax: {price * 1.18}</p>
<p>Uppercase: {firstName.toUpperCase()}</p>
```

### What CANNOT go inside `{ }`?

- Full `if/else` statements (use ternary `? :` instead)
- `for` loops (use `.map()` instead)

```jsx
// Ternary instead of if/else
<p>{age >= 18 ? "Adult" : "Minor"}</p>
```

---

## 5. JSX Attributes & className

### HTML attributes in JSX

JSX looks like HTML, but since it's actually JavaScript underneath, some attribute names are different.

### The `class` vs `className` problem

In HTML you write:

```html
<h1 class="title">Hello</h1>
```

But `class` is a **reserved keyword in JavaScript**, so in JSX you must write:

```jsx
<h1 className="title">Hello</h1>
```

If you use `class` instead of `className`, React will show a warning in the browser console. Always use `className`.

### Other common attribute differences

| HTML                | JSX           |
| ------------------- | ------------- |
| `class`           | `className` |
| `for` (on labels) | `htmlFor`   |
| `onclick`         | `onClick`   |
| `onchange`        | `onChange`  |
| `tabindex`        | `tabIndex`  |

**The pattern:** HTML uses lowercase, JSX uses **camelCase** for multi-word attributes.

### Setting the script type to JSX

In your HTML file, when including your script tag, use `type="text/jsx"` to tell the browser it's JSX:

```html
<script type="text/jsx" src="index.jsx"></script>
```

This prevents parsing errors when the browser encounters JSX syntax.

### Reference for HTML attributes

All standard HTML attributes can be used in JSX (with camelCase). Full list:
[W3Schools HTML Global Attributes](https://www.w3schools.com/tags/ref_standardattributes.asp)

---

## 6. Inline Styling in React

### Why inline styling is different in JSX

In regular HTML, you write inline styles like this:

```html
<h1 style="color: red; font-size: 20px;">Hello</h1>
```

**This does NOT work in JSX.** If you try it, React will throw an error.

### The JSX way — style as a JavaScript Object

In JSX, the `style` attribute accepts a **JavaScript object**, not a string:

```jsx
<h1 style={{ color: "red", fontSize: "20px" }}>Hello</h1>
```

Notice the **double curly braces `{{ }}`**:

- The outer `{ }` means "I'm putting JavaScript here" (JSX expression).
- The inner `{ }` is the actual JavaScript object.

### CSS property names in JSX — camelCase!

CSS property names with hyphens must be written in camelCase in JSX:

| CSS                  | JSX                 |
| -------------------- | ------------------- |
| `font-size`        | `fontSize`        |
| `background-color` | `backgroundColor` |
| `border-radius`    | `borderRadius`    |
| `margin-top`       | `marginTop`       |
| `text-align`       | `textAlign`       |

### Storing styles in a variable (cleaner approach)

Instead of cluttering your JSX with long style objects, store the style in a `const`:

```jsx
const headingStyle = {
  color: "red",
  fontSize: "20px",
  fontWeight: "bold",
  textAlign: "center"
};

<h1 style={headingStyle}>Hello</h1>
```

This is cleaner and easier to maintain.

### When to use inline styling?

Inline styling is especially useful when you want to **change styles dynamically** based on user interaction or data. For example, changing a button's color when clicked:

```jsx
const buttonStyle = {
  backgroundColor: isActive ? "green" : "grey"
};

<button style={buttonStyle}>Click me</button>
```

For static, reusable styles, a separate CSS stylesheet is usually better.

### Reference for CSS in JSX

[W3Schools CSS font-size reference](https://www.w3schools.com/cssref/pr_font_font-size.php)

---

## 7. React Components

### What is a Component?

A component is a **reusable, self-contained piece of your UI**. Instead of writing all your HTML in one giant file, you split it into components — each in its own file.

Think of components like custom HTML tags you create yourself:

```jsx
<Navbar />
<HeroSection />
<Footer />
```

### Creating your first component

A React component is just a **JavaScript function** that returns JSX:

```jsx
function Heading() {
  return <h1>I am a Heading Component</h1>;
}
```

Rules for components:

1. The function name **must start with a capital letter** (`Heading`, not `heading`).
2. It must **return** JSX.
3. It can only return **one parent element** (wrap multiple elements in a `<div>` or `<>...</>`).

### Using a component in JSX

Once created, you use a component like a self-closing HTML tag:

```jsx
ReactDOM.render(<Heading />, document.getElementById("root"));
```

### Splitting components into separate files

As your project grows, you'll put each component in its own `.jsx` file.

**Step 1 — Create the component file (e.g., `Heading.jsx`):**

```jsx
import React from "react";

function Heading() {
  return <h1>Hello from Heading!</h1>;
}

export default Heading;
```

- `import React from "react"` — required in every component file.
- `export default Heading` — makes the component available to other files.

**Step 2 — Import it in your main file (`index.jsx`):**

```jsx
import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";

ReactDOM.render(<Heading />, document.getElementById("root"));
```

- `import Heading from "./Heading"` — pulls in your custom component.
- The `./` means "look in the same folder as this file".

### Why components?

| Without Components           | With Components                                      |
| ---------------------------- | ---------------------------------------------------- |
| One giant file with all code | Many small, focused files                            |
| Hard to find and fix bugs    | Easy to locate and update specific parts             |
| Cannot reuse code easily     | Drop any component anywhere, as many times as needed |
| Hard to work in teams        | Different people can work on different components    |

---

## 8. The App.jsx File — Root Component

### What is App.jsx?

In a real React project (like one created with Vite or Create React App), there is a special file called `App.jsx` (or `App.js`). It serves as the **root component** — the main canvas where you bring all other components together.

Think of `App.jsx` as the "parent" and all other components as its "children".

```
App.jsx
├── Navbar.jsx
├── Main Content
│   ├── Hero.jsx
│   └── Cards.jsx
└── Footer.jsx
```

### A typical App.jsx

```jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
```

### index.jsx renders App

Your `index.jsx` (the entry point) simply renders the `App` component:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

This means: "Put the entire App into the `root` div of my HTML page."

---

## 9. Project Structure — The React Way

A well-organized React project follows this structure:

```
my-project/
├── public/
│   └── styles.css
├── src/
│   ├── components/          ← All your custom components go here
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   └── Footer.jsx
│   ├── App.jsx              ← Root component
│   └── index.jsx            ← Entry point
├── index.html               ← The only HTML file (rarely touched)
├── package.json
└── vite.config.js
```

### Key conventions

- **`src/components/`** — Keep all components here. This is the React standard.
- **Component files** — Use PascalCase for filenames that contain components (`Navbar.jsx`, not `navbar.jsx`).
- **One component per file** — Don't put multiple components in one file (follow the [Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react)).
- **`index.jsx`** — Only renders `<App />`. Don't put other logic here.
- **`App.jsx`** — Assembles all components. Treat it as your layout file.

---

## 10. Quick Reference Cheat Sheet

### JSX Basics

```jsx
// Rendering to DOM
ReactDOM.render(<h1>Hello</h1>, document.getElementById("root"));

// JSX must have one parent
const element = (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);

// Using JS expressions
const name = "Sudhanshu";
<h1>Hello {name}!</h1>

// Ternary (conditional rendering)
<p>{isLoggedIn ? "Welcome back!" : "Please log in"}</p>
```

### className & Attributes

```jsx
// Use className, not class
<div className="container">

// camelCase attributes
<input onChange={handleChange} tabIndex={1} />

// htmlFor instead of for
<label htmlFor="email">Email</label>
```

### Inline Styling

```jsx
// Inline — double curly braces, camelCase properties
<h1 style={{ color: "blue", fontSize: "24px" }}>Hello</h1>

// Cleaner — store in a variable
const myStyle = { color: "blue", fontSize: "24px" };
<h1 style={myStyle}>Hello</h1>
```

### Components

```jsx
// Define a component
function MyComponent() {
  return <div>I am a component!</div>;
}

// Use a component
<MyComponent />

// Export (at the bottom of the file)
export default MyComponent;

// Import (at the top of another file)
import MyComponent from "./MyComponent";
```

### Import / Export Pattern (summary)

```jsx
// In Heading.jsx
import React from "react";
function Heading() { return <h1>Hi</h1>; }
export default Heading;

// In App.jsx
import Heading from "./components/Heading";
function App() { return <div><Heading /></div>; }
export default App;

// In index.jsx
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));
```

---

## Glossary

| Term                      | Meaning                                                                    |
| ------------------------- | -------------------------------------------------------------------------- |
| **React**           | A JavaScript library for building user interfaces                          |
| **JSX**             | JavaScript XML — HTML-like syntax used inside JavaScript                  |
| **Babel**           | A compiler that converts JSX into plain JavaScript                         |
| **Component**       | A reusable function that returns JSX                                       |
| **Props**           | Data passed into a component (covered in next sections)                    |
| **State**           | Data stored inside a component that can change (covered in next sections)  |
| **Virtual DOM**     | React's lightweight in-memory copy of the page, used for efficient updates |
| **ReactDOM.render** | The function that puts React content into the actual browser page          |
| **export default**  | Makes a component available to be imported in other files                  |
| **className**       | JSX equivalent of the HTML`class` attribute                              |
| **camelCase**       | Writing multi-word names without spaces:`backgroundColor`, `fontSize`  |
| **App.jsx**         | The root component — the main canvas that holds all other components      |

---

*Notes based on Angela Yu's Full Stack Web Development Bootcamp — Section 36.*
