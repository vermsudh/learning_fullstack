# Section 6: CSS Styling Fundamentals

## Overview
This section covers essential CSS properties for styling: colors, fonts, text alignment, and the CSS Box Model. You'll learn to create visually appealing pages with proper spacing and typography.

---

## Modules

### 6.0 CSS Colors

**Location:** `6.0 CSS Colors/`

**Learning Objectives:**
- Apply colors using named colors
- Apply colors using hex codes
- Style background and text colors

---

#### Color Methods

**1. Named Colors:**
```css
body {
  background-color: antiquewhite;
}

h1 {
  background-color: darkseagreen;
  color: whitesmoke;
}
```

**Common Named Colors:**
- `red`, `blue`, `green`, `yellow`
- `antiquewhite`, `cornflowerblue`, `darkseagreen`
- `black`, `white`, `gray`, `silver`

---

**2. Hex Codes:**
```css
h2 {
  color: #FAF8F1;           /* Light cream text */
  background-color: #C58940; /* Gold background */
}
```

**Hex Code Format:**
- `#RRGGBB` - Red, Green, Blue values (00-FF)
- `#FFF` - Shorthand for `#FFFFFF` (white)
- `#000` - Shorthand for `#000000` (black)

---

#### Complete Example

```css
* {
  background: antiquewhite;
}

h1 {
  background-color: darkseagreen;
  color: whitesmoke;
}

h2 {
  color: #FAF8F1;
  background-color: #C58940;
}
```

```html
<body>
  <h1>Hello</h1>
  <h2>World</h2>
</body>
```

---

### 6.1 Font Properties

**Location:** `6.1_font-properties/`

**Learning Objectives:**
- Change font family (including Google Fonts)
- Adjust font size using px and rem
- Control font weight
- Align text

---

#### Font Family

**System Fonts:**
```css
p {
  font-family: Arial, sans-serif;
}
```

**Google Fonts:**
```html
<!-- In <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.google.com/css2?family=Caveat&display=swap" rel="stylesheet">
```

```css
p {
  font-family: "Caveat", cursive;
}
```

---

#### Font Size

**Absolute Units (px):**
```css
p {
  font-size: 18px;
}
```

**Relative Units (rem - relative to root):**
```css
html {
  font-size: 30px;  /* Root size */
}

p {
  font-size: 2rem;  /* 2 × 30px = 60px */
}
```

**Common Units:**
| Unit | Description | Example |
|------|-------------|---------|
| `px` | Fixed pixels | `16px` |
| `rem` | Relative to root (html) | `2rem` |
| `em` | Relative to parent | `1.5em` |
| `vw` | Viewport width | `5vw` |
| `%` | Percentage of parent | `150%` |

---

#### Font Weight

```css
p {
  font-weight: 900;  /* Boldest */
}
```

**Weight Scale:**
| Value | Name |
|-------|------|
| 100 | Thin |
| 300 | Light |
| 400 | Normal/Regular |
| 500 | Medium |
| 700 | Bold |
| 900 | Black/Extra Bold |

---

#### Text Align

```css
p {
  text-align: right;
}
```

**Values:**
- `left` - Default for LTR languages
- `center` - Centered text
- `right` - Right-aligned
- `justify` - Stretched to edges

---

#### Complete Example

```css
body {
  background-color: cornflowerblue;
  color: white;
  font-size: 18px;
}

p {
  color: coral;
  font-size: 2rem;      /* 2× root size */
  font-weight: 900;     /* Boldest */
  font-family: "Caveat", cursive;
  text-align: right;
}
```

---

### 6.3 CSS Box Model

**Location:** `6.3 CSS Box Model/`

**Learning Objectives:**
- Understand content, padding, border, margin
- Control spacing with margin and padding
- Create borders with different widths
- Use browser DevTools to inspect boxes

---

#### The Box Model Components

```
┌─────────────────────────────────────┐
│            MARGIN                   │
│  ┌───────────────────────────────┐  │
│  │          BORDER               │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │       PADDING           │  │  │
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │    CONTENT        │  │  │  │
│  │  │  │  (text, images)   │  │  │  │
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

---

#### Content

The actual content (text, images):

```css
div {
  width: 300px;
  height: 200px;
}
```

---

#### Padding

Space between content and border (inside the box):

```css
#div1 {
  padding: 20px;  /* All sides */
}

/* Or specify each side */
padding: 10px 20px 15px 25px;  /* top right bottom left */
```

---

#### Border

Line around padding:

```css
#div1 {
  border: 10px solid black;
}

/* Or individual properties */
border-width: 20px 10px;  /* top/bottom left/right */
border-style: solid;
border-color: black;
```

---

#### Margin

Space outside the border (between boxes):

```css
#div2 {
  margin-left: 360px;
}

#div3 {
  margin-left: 20px;
}
```

---

#### Complete Box Model Example

```css
div {
  height: 200px;
  width: 300px;
}

p {
  margin: 0px;  /* Remove default paragraph margins */
}

#div1 {
  background-color: cadetblue;
  padding: 20px;
  border: 10px solid black;
}

#div2 {
  background-color: gold;
  border: solid black;
  border-width: 20px 10px;  /* Top/bottom 20px, left/right 10px */
  margin-left: 360px;
}

#div3 {
  background-color: indianred;
  border: 20px solid black;
  margin-left: 20px;
}
```

```html
<div id="div1">
  <p>Lorem ipsum dolor sit amet...</p>
</div>
<div id="div2"></div>
<div id="div3"></div>
```

---

#### Margin Shorthand

```css
/* All sides equal */
margin: 20px;

/* Top/bottom, left/right */
margin: 10px 20px;

/* Top, left/right, bottom */
margin: 10px 20px 15px;

/* Top, right, bottom, left (clockwise) */
margin: 10px 20px 15px 25px;
```

---

### 6.4 Motivation Meme Project

**Location:** `6.4 Motivation Meme Project/`

**Learning Objectives:**
- Combine all CSS properties into a complete project
- Use Google Fonts
- Center content on page
- Style images with borders
- Create a motivational poster layout

---

#### Project Structure

```
6.4 Motivation Meme Project/
├── index.html
├── style.css
└── assets/
    └── images/
        └── daenerys.jpeg
```

---

#### HTML (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Motivation Meme</title>
  <link rel="stylesheet" href="./style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet">
</head>
<body>
  <div class="poster">
    <img class="motivation-img" src="./assets/images/daenerys.jpeg" alt="daenerys with egg" />
    <h1>That Special Moment</h1>
    <p>When you find the perfect avocado at the supermarket</p>
  </div>
</body>
</html>
```

---

#### CSS (style.css)

```css
body {
  background-color: black;
}

h1 {
  text-transform: uppercase;
  font-size: 3rem;
}

.poster {
  color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  width: 50%;
  font-family: "Libre Baskerville", serif;
  text-align: center;
}

.motivation-img {
  display: block;
  border: 5px solid white;
}
```

---

#### Key Techniques

**1. Google Fonts Integration:**
```html
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet">
```
```css
font-family: "Libre Baskerville", serif;
```

**2. Horizontal Centering:**
```css
.poster {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
```

**3. Text Transform:**
```css
h1 {
  text-transform: uppercase;  /* Makes text ALL CAPS */
}
```

**4. Image Border:**
```css
.motivation-img {
  display: block;  /* Removes inline gap */
  border: 5px solid white;
}
```

---

## Summary

### Color Methods

| Method | Example | Use Case |
|--------|---------|----------|
| Named | `color: red;` | Quick prototyping |
| Hex | `color: #FF5733;` | Precise colors |
| RGB | `color: rgb(255, 87, 51);` | Dynamic colors |
| RGBA | `color: rgba(255, 87, 51, 0.5);` | Transparent colors |

---

### Font Properties

| Property | Values | Example |
|----------|--------|---------|
| `font-family` | Font names | `Arial, sans-serif` |
| `font-size` | px, rem, em | `16px`, `2rem` |
| `font-weight` | 100-900 | `400`, `700`, `900` |
| `text-align` | left/center/right | `text-align: center;` |
| `text-transform` | uppercase/lowercase | `text-transform: uppercase;` |

---

### Box Model

| Property | Description | Example |
|----------|-------------|---------|
| `width/height` | Content size | `width: 300px;` |
| `padding` | Inside spacing | `padding: 20px;` |
| `border` | Box outline | `border: 5px solid black;` |
| `margin` | Outside spacing | `margin: 10px;` |

---

## Resources

- [MDN: CSS Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
- [Google Fonts](https://fonts.google.com/)
- [MDN: Font Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/font)
- [MDN: Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model)
- [CSS Box Model Visualizer](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

---

## Practice Exercises

1. Create a color palette page using named and hex colors
2. Build a typography showcase with Google Fonts
3. Practice box model with colored div boxes
4. Create a motivational poster (Meme project)
5. Inspect elements using Chrome DevTools box model view
