# Section 7: Advanced CSS Selectors and Positioning

## Overview
This section covers advanced CSS selector techniques for precise targeting and CSS positioning for controlling element placement. You'll learn to create complex layouts with positioned elements.

---

## Modules

### 7.1 Combining Selectors

**Location:** `7.1 Combining Selectors/`

**Learning Objectives:**
- Combine multiple selectors for specificity
- Use child combinator (`>`)
- Use descendant combinator (space)
- Chain class selectors
- Group selectors for shared styles

---

#### 1. Group Selector

Apply the same styles to multiple selectors:

```css
h1,
h2 {
  color: blueviolet;
}
```

**Effect:** Both `<h1>` and `<h2>` elements get blueviolet text.

---

#### 2. Child Combinator (`>`)

Targets direct children only:

```css
.box > p {
  color: firebrick;
}
```

```html
<div class="box">
  <p>This is a direct child - colored</p>
  <div>
    <p>This is NOT a direct child - NOT colored</p>
  </div>
</div>
```

---

#### 3. Descendant Combinator (Space)

Targets all descendants (children, grandchildren, etc.):

```css
.box li {
  color: blue;
}
```

```html
<div class="box">
  <ul>
    <li>Colored blue (descendant)</li>
    <li>Also colored blue</li>
  </ul>
</div>
```

---

#### 4. Chained Selectors

Combine element with class:

```css
li.done {
  color: green;
}
```

```html
<li class="done">This item is green</li>
<li>This item is default color</li>
```

---

#### 5. Multiple Combiners

Combine multiple selector types:

```css
ul p.done {
  font-size: 0.5rem;
}
```

```html
<ul>
  <p class="done">This paragraph is small (0.5rem)</p>
</ul>
```

---

#### Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Combining CSS Selectors</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <h1>To Do List</h1>
  <h2>Monday</h2>
  <div class="box">
    <p class="done">Do these things today!</p>
    <ul class="list">
      <li>Wash Clothes</li>
      <li class="done">Read</li>
      <li class="done">Maths Questions</li>
    </ul>
  </div>
</body>
</html>
```

```css
/* Group selector */
h1, h2 {
  color: blueviolet;
}

/* Child combinator */
.box > p {
  color: firebrick;
}

/* Descendant combinator */
.box li {
  color: blue;
}

/* Chained selector */
li.done {
  color: green;
}

/* Multiple combiners */
ul p.done {
  font-size: 0.5rem;
}
```

---

### 7.2 CSS Positioning

**Location:** `7.2 CSS Positioning/`

**Learning Objectives:**
- Understand the position property
- Use static, relative, absolute, fixed positioning
- Control element placement with top, bottom, left, right

---

#### Position Values

| Value | Description |
|-------|-------------|
| `static` | Default positioning (normal flow) |
| `relative` | Positioned relative to its normal position |
| `absolute` | Positioned relative to nearest positioned ancestor |
| `fixed` | Positioned relative to viewport (stays on scroll) |
| `sticky` | Toggles between relative and fixed based on scroll |

---

#### Relative Positioning

```css
.blue-box {
  background-color: blue;
  width: 500px;
  height: 300px;
  position: relative;
  top: 200px;
  left: 250px;
}
```

**Behavior:**
- Element moves 200px down and 250px right from its original position
- Original space is preserved (leaves a gap)

---

#### Absolute Positioning

```css
.red-circle {
  background-color: red;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  top: 150px;
  left: 250px;
}
```

**Behavior:**
- Element is removed from normal flow
- Positioned relative to nearest positioned ancestor (non-static parent)
- No space is reserved in the layout

---

#### Complete Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Positioning Exercise</title>
  <style>
    .red-circle {
      background-color: red;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      position: absolute;
      top: 150px;
      left: 250px;
    }
    
    .blue-box {
      background-color: blue;
      width: 500px;
      height: 300px;
      position: relative;
      top: 200px;
      left: 250px;
    }
  </style>
</head>
<body>
  <div class="blue-box">
    <div class="red-circle"></div>
  </div>
</body>
</html>
```

---

### 7.3 CSS Flag Project

**Location:** `7.3 CSS Flag Project/`

**Learning Objectives:**
- Combine positioning with selectors
- Create complex designs using only CSS
- Practice specificity without modifying HTML

---

#### Project: Flag of Laos

**Constraints:**
- Do NOT change HTML
- Use combining selectors and specificity
- Flag dimensions: 900px × 600px
- Circle: 200px × 200px

---

#### Flag Colors

| Element | Color Code |
|---------|------------|
| Red background | `#CE1126` |
| Blue stripe | `#002868` |
| White circle | `white` |
| Text (outer) | `white` |
| Text (inner) | `black` |

---

#### CSS Implementation

```css
.flag {
  width: 900px;
  height: 600px;
  position: relative;
  background-color: #CE1126;
}

/* Blue stripe across middle */
.flag > div {
  background-color: #002868;
  height: 300px;
  width: 100%;
  position: absolute;
  top: 150px;
}

/* White circle in center */
.flag > div > div {
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 50px;
  left: 350px;
  height: 200px;
  width: 200px;
}

/* Outer text - white */
p {
  color: white;
  text-align: center;
  font-size: 5rem;
  padding: 0;
  margin: 0;
}

/* Inner text - black (using descendant combinator) */
.flag > div div p {
  color: black;
}
```

---

#### HTML Structure (Cannot Modify)

```html
<div class="flag">
  <p>The Flag</p>
  <div>
    <div>
      <p>of Laos</p>
    </div>
  </div>
</div>
```

---

#### Key Techniques

**1. Relative Parent for Absolute Children:**
```css
.flag {
  position: relative;  /* Establishes positioning context */
}
```

**2. Descendant Selector for Inner Text:**
```css
.flag > div div p {
  color: black;  /* More specific than general p selector */
}
```

**3. Centering the Circle:**
- Flag width: 900px, Circle width: 200px
- Left position: (900 - 200) / 2 = 350px

---

## Summary

### Selector Combinators

| Combinator | Syntax | Example | Targets |
|------------|--------|---------|---------|
| Group | `,` | `h1, h2` | Multiple selectors |
| Child | `>` | `.box > p` | Direct children only |
| Descendant | ` ` | `.box p` | All descendants |
| Chained | `.` | `li.done` | Element with class |

---

### Position Property

| Value | Reference Point | Space Reserved |
|-------|-----------------|----------------|
| `static` | Normal flow | Yes |
| `relative` | Original position | Yes |
| `absolute` | Nearest positioned ancestor | No |
| `fixed` | Viewport | No |
| `sticky` | Scroll position | Yes |

---

### Position Offsets

| Property | Description |
|----------|-------------|
| `top` | Distance from top |
| `bottom` | Distance from bottom |
| `left` | Distance from left |
| `right` | Distance from right |

---

## Resources

- [MDN: CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [MDN: Position Property](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [CSS Specificity Calculator](https://specificity.keegan.st/)
- [Flag of Laos Reference](https://appbrewery.github.io/flag-of-laos/)

---

## Practice Exercises

1. Style a To-Do list using combined selectors
2. Create overlapping shapes with absolute positioning
3. Build the Flag of Laos using only CSS
4. Practice child vs descendant selectors
5. Create a positioned navigation bar
