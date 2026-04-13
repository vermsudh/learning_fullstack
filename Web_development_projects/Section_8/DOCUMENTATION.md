# Section 8: CSS Display, Float, and Responsiveness

## Overview
This section covers CSS display properties, the float technique for layouts, and responsive design using media queries. You'll learn to create websites that work on all screen sizes.

---

## Modules

### 8.0 CSS Display

**Location:** `8.0 CSS Display/`

**Learning Objectives:**
- Understand display property values
- Use `block` for vertical stacking
- Use `inline-block` for horizontal alignment
- Control element behavior

---

#### Display Values

**1. Block (Vertical Stacking)**

Block elements take full width and stack vertically:

```css
.red, .green, .blue {
  display: block;
  width: 200px;
  height: 200px;
}

.red { background-color: red; }
.green { background-color: green; }
.blue { background-color: blue; }
```

```html
<p class="red">Red Paragraph</p>
<p class="green">Green Paragraph</p>
<p class="blue">Blue Paragraph</p>
```

**Result:** Three squares stacked vertically

---

**2. Inline-Block (Horizontal Alignment)**

Inline-block elements sit next to each other horizontally:

```css
.red, .green, .blue {
  display: inline-block;
  width: 200px;
  height: 200px;
}
```

**Result:** Three squares in a row

---

#### Display Comparison

| Display Value | Behavior | Width/Height | Margin/Padding |
|---------------|----------|--------------|----------------|
| `inline` | Flows with text | Ignored | Horizontal only |
| `block` | New line, full width | Respected | All sides |
| `inline-block` | Horizontal flow | Respected | All sides |
| `none` | Hidden, no space | N/A | N/A |

---

### 8.1 CSS Float

**Location:** `8.1 CSS Float/`

**Learning Objectives:**
- Use float for text wrapping
- Create side-by-side layouts
- Use clear to control flow

---

#### Float Property

Makes text wrap around an element:

```css
img {
  float: left;
}
```

**Values:**
- `left` - Element floats to the left
- `right` - Element floats to the right
- `none` - No floating (default)

---

#### Creating Side-by-Side Layouts

```css
.cat {
  background-color: aquamarine;
  float: left;
  width: 40%;
}

.dog {
  background-color: coral;
  float: right;
  width: 40%;
}
```

```html
<div class="cat">
  <h2>CatCSS</h2>
  <img src="cat.jpeg" alt="cat in a box" />
  <p>Nap all day, cat dog hate mouse...</p>
</div>

<div class="dog">
  <h2>DogCSS</h2>
  <img src="dog.jpeg" alt="dogs in a box" />
  <p>Heckin good boys and girls...</p>
</div>
```

---

#### Clear Property

Prevents elements from wrapping around floats:

```css
footer {
  text-align: center;
  background-color: blueviolet;
  clear: right;  /* or "both" to clear all floats */
}
```

**Values:**
- `left` - Clear left floats
- `right` - Clear right floats
- `both` - Clear all floats
- `none` - Allow floats (default)

---

#### Complete Example

```css
div {
  display: inline-block;
  width: 40%;
}

p {
  font-size: 2em;
}

img {
  float: left;
}

.cat {
  background-color: aquamarine;
  float: left;
}

.dog {
  background-color: coral;
  float: right;
}

footer {
  text-align: center;
  background-color: blueviolet;
  clear: both;  /* Footer goes below all floats */
}
```

---

### 8.2 Responsiveness

**Location:** `8.2 Responsiveness/`

**Learning Objectives:**
- Understand responsive design principles
- Compare layout methods (Flexbox, Grid, Float)
- Use media queries for breakpoints

---

#### Responsive Layout Methods

| Method | Best For | Browser Support |
|--------|----------|-----------------|
| **Flexbox** | 1D layouts, components | Excellent |
| **Grid** | 2D layouts, pages | Excellent |
| **Float** | Text wrapping, legacy | Universal |

---

#### Media Query Syntax

```css
/* For screens 600px and below */
@media (max-width: 600px) {
  div {
    height: 200px;
    width: 200px;
  }
}

/* For screens 600px and above */
@media (min-width: 600px) {
  div {
    height: 500px;
    width: 500px;
  }
}
```

---

### 8.3 Media Query

**Location:** `8.3 Media Query/`

**Learning Objectives:**
- Write media queries for different screen sizes
- Create responsive layouts
- Test responsive designs

---

#### Basic Media Query

```css
div {
  background-color: rebeccapurple;
  height: 500px;
  width: 500px;
}

/* Change size on small screens */
@media (max-width: 600px) {
  div {
    height: 200px;
    width: 200px;
  }
}
```

**Behavior:**
- Large screens: 500px × 500px box
- Small screens (≤600px): 200px × 200px box

---

#### Common Breakpoints

| Device | Breakpoint |
|--------|------------|
| Mobile (portrait) | `max-width: 375px` |
| Mobile (landscape) | `max-width: 600px` |
| Tablet | `max-width: 768px` |
| Desktop | `min-width: 1024px` |
| Large Desktop | `min-width: 1440px` |

---

### 8.4 Web Design Agency Project

**Location:** `8.4 Web Design Agency Project/`

**Learning Objectives:**
- Combine float and media queries
- Create a responsive agency landing page
- Use Google Fonts
- Implement mobile-first design

---

#### Project Structure

```
8.4 Web Design Agency Project/
├── index.html
├── style.css
└── assets/
    └── images/
        ├── logo.png
        ├── beautiful.jpg
        └── construction.jpg
```

---

#### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Agency</title>
  <link rel="stylesheet" href="./style.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
  <div class="main">
    <img class="logo" src="./assets/images/logo.png" alt="logo">
    <h1>We are a <span class="creative">Creative</span> Design Agency</h1>
    
    <div class="left card">
      <img class="tile-image" src="./assets/images/beautiful.jpg" alt="hand and flower">
      <h2 class="card-title">Beauty</h2>
      <p class="card-text">We strive to create the most beautiful websites...</p>
    </div>
    
    <div class="right card">
      <img class="tile-image" src="./assets/images/construction.jpg" alt="metal structure">
      <h2 class="card-title">Construction</h2>
      <p>Built by our team of professional developers...</p>
    </div>
  </div>
  
  <footer>
    <p>Create. Develop. Design.</p>
  </footer>
</body>
</html>
```

---

#### Desktop CSS

```css
body {
  font-family: "Poppins", sans-serif;
  margin: 50px 50px 0 50px;
  background-color: #faf9f6;
  display: flex;
  flex-direction: column;
  min-height: 95vh;
}

.main {
  flex: 1;
}

h1 {
  font-size: 5rem;
}

.creative {
  color: midnightblue;
}

.card {
  width: 45%;
}

.tile-image {
  float: left;
  height: 200px;
  margin-right: 50%;
}

.left {
  float: left;
}

.right {
  float: right;
}

footer {
  color: midnightblue;
  text-align: right;
}
```

---

#### Mobile Responsive CSS

```css
@media (max-width: 680px) {
  .card {
    width: 100%;
    display: block;
    text-align: justify;
    margin-bottom: 30px;
  }
  
  .logo {
    width: 100px;
  }
  
  .card img {
    margin-bottom: 10px;
    width: 100%;
    display: inline;
    object-fit: cover;
  }
  
  h1 {
    font-size: 3.5rem;
    text-align: center;
  }
}
```

---

#### Responsive Techniques Used

**1. Flexible Card Width:**
- Desktop: `width: 45%` (two cards side by side)
- Mobile: `width: 100%` (full width, stacked)

**2. Logo Sizing:**
- Desktop: Original size
- Mobile: `width: 100px`

**3. Image Scaling:**
- Mobile: `width: 100%` with `object-fit: cover`

**4. Text Alignment:**
- Desktop: Right-aligned footer
- Mobile: Centered heading

---

## Summary

### Display Property

| Value | Use Case | Example |
|-------|----------|---------|
| `block` | Vertical stacking | Sections, paragraphs |
| `inline-block` | Horizontal alignment | Buttons, cards |
| `inline` | Text flow | Spans, links |
| `flex` | Flexible layouts | Navbars, grids |
| `none` | Hide elements | Toggle visibility |

---

### Float Property

| Value | Description |
|-------|-------------|
| `left` | Float to left, text wraps right |
| `right` | Float to right, text wraps left |
| `none` | No floating |

**Clear Values:** `left`, `right`, `both`, `none`

---

### Media Query Syntax

```css
/* Mobile first (default) */
.element { width: 100%; }

/* Tablet and up */
@media (min-width: 768px) {
  .element { width: 50%; }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .element { width: 25%; }
}
```

---

## Resources

- [MDN: Display Property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- [MDN: Float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
- [MDN: Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [Google Fonts](https://fonts.google.com/)

---

## Practice Exercises

1. Create horizontal navigation with inline-block
2. Build text-wrap layout with float
3. Design a responsive card layout
4. Create mobile-first media queries
5. Build the Web Design Agency page
