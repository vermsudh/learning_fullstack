# Section 9: Flexbox Layout

## Overview
This section introduces **Flexbox (Flexible Box Layout)**, a powerful 1-dimensional layout system for arranging items in rows or columns. You'll learn to create responsive layouts that adapt to different screen sizes.

---

## Modules

### 9.0 Display Flex

**Location:** `9.0 Display Flex/`

**Learning Objectives:**
- Understand Flexbox vs older layout methods
- Enable Flexbox with `display: flex`
- Compare layout techniques throughout history

---

#### Evolution of Layout Methods

**1. HTML Tables (Old Method)**
```html
<table>
  <tr>
    <td>Column 1</td>
    <td>Column 2</td>
    <td>Column 3</td>
  </tr>
</table>
```
**Problems:** Semantic issues, accessibility problems, inflexible

---

**2. Inline-Block**
```css
.column {
  display: inline-block;
  width: 30%;
}
```
**Problems:** Whitespace gaps, alignment issues

---

**3. Absolute Positioning**
```css
.column {
  position: absolute;
  left: 0;
  width: 30%;
}
```
**Problems:** Overlapping, no flow awareness

---

**4. Float**
```css
.column {
  float: left;
  width: 30%;
}
```
**Problems:** Clearfix needed, not designed for layouts

---

**5. Flexbox (Modern)**
```css
.container {
  display: flex;
  gap: 10px;
}
```
**Benefits:** Purpose-built for layouts, easy alignment, responsive

---

#### Enabling Flexbox

```css
.container {
  display: flex;
  gap: 10px;
}
```

**Default Behavior:**
- Items display in a row (horizontal)
- Items shrink to fit container
- Gap creates space between items

---

#### Basic Flex Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Flexbox</title>
  <style>
    .container {
      display: flex;
      gap: 10px;
    }
    
    p {
      background-color: darkseagreen;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="one">
      <p>Content 1...</p>
    </div>
    <div class="two">
      <p>Content 2...</p>
    </div>
    <div class="three">
      <p>Content 3...</p>
    </div>
  </div>
</body>
</html>
```

---

### 9.1 Flex Direction

**Location:** `9.1 Flex Direction/`

**Learning Objectives:**
- Change flex axis with `flex-direction`
- Use `row` vs `column` layouts
- Size flex items with `flex-basis`

---

#### Flex Direction Values

| Value | Description |
|-------|-------------|
| `row` | Left to right (default) |
| `row-reverse` | Right to left |
| `column` | Top to bottom |
| `column-reverse` | Bottom to top |

---

#### Column Layout Example

```css
.container {
  display: inline-flex;
  flex-direction: column;
  border: 5px solid gold;
}

.container > * {
  flex-basis: 100px;  /* Each item gets 100px */
}

.red { background-color: #eb4d4b; }
.orange { background-color: #f0932b; }
.yellow { background-color: #f6e58d; }
.green { background-color: #6ab04c; }
.blue { background-color: #4834d4; }
.indigo { background-color: #30336b; }
.purple { background-color: #be2edd; }
```

```html
<div class="container">
  <div class="red">Red</div>
  <div class="orange">Orange</div>
  <div class="yellow">Yellow</div>
  <div class="green">Green</div>
  <div class="blue">Blue</div>
  <div class="indigo">Indigo</div>
  <div class="purple">Purple</div>
</div>
```

**Result:** Rainbow stack of colored boxes, each 100px tall

---

#### Flex-Basis

Sets the initial size of flex items:

```css
.container > * {
  flex-basis: 100px;
}
```

**Behavior:**
- Items start at 100px
- Can grow/shrink based on container space
- Use `auto` for content-based sizing

---

### 9.2 Flex Layout

**Location:** `9.2 Flex Layout/`

**Learning Objectives:**
- Apply Flexbox to real layouts
- Use interactive learning tools
- Master flex properties

---

#### Interactive Learning Resources

**Flexbox Froggy:**
- Game for learning flexbox
- URL: https://appbrewery.github.io/flexboxfroggy/
- Learn by positioning frogs on lilypads

**Flex Layout Demo:**
- Interactive flexbox playground
- URL: https://appbrewery.github.io/flex-layout/

**CSS Tricks Guide:**
- Comprehensive flexbox reference
- URL: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

---

#### Key Flexbox Properties

**Container Properties:**
| Property | Values | Description |
|----------|--------|-------------|
| `display` | `flex` | Enables flexbox |
| `flex-direction` | `row`, `column` | Main axis direction |
| `justify-content` | `flex-start`, `center`, `flex-end`, `space-between` | Horizontal alignment |
| `align-items` | `flex-start`, `center`, `flex-end`, `stretch` | Vertical alignment |
| `gap` | length | Space between items |

**Item Properties:**
| Property | Description |
|----------|-------------|
| `flex-grow` | How much to grow |
| `flex-shrink` | How much to shrink |
| `flex-basis` | Initial size |
| `order` | Visual order |

---

### 9.4 Flexbox Pricing Table Project

**Location:** `9.4+Flexbox+Pricing+Table+Project/`

**Learning Objectives:**
- Build a responsive pricing table
- Center content with flexbox
- Add mobile responsiveness
- Use Google Fonts

---

#### Project Structure

```
9.4 Flexbox Pricing Table Project/
├── index.html
└── solution.html
```

---

#### HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
  <title>Flexbox Pricing Table</title>
  <link href="https://fonts.googleapis.com/css2?family=Sono:wght@400;700&display=swap" rel="stylesheet">
  <style>
    /* CSS goes here */
  </style>
</head>
<body>
  <div class="pricing-container">
    <div class="pricing-plan">
      <div class="plan-title">Basic</div>
      <div class="plan-price">$9.99/month</div>
      <ul class="plan-features">
        <li>✅ 10GB Storage</li>
        <li>✅ 1 User</li>
        <li>🚫 Support</li>
      </ul>
      <button class="plan-button">Sign Up</button>
    </div>
    
    <div class="pricing-plan">
      <div class="plan-title">Standard</div>
      <div class="plan-price">$19.99/month</div>
      <ul class="plan-features">
        <li>✅ 50GB Storage</li>
        <li>✅ 5 Users</li>
        <li>✅ Phone & Email Support</li>
      </ul>
      <button class="plan-button">Sign Up</button>
    </div>
    
    <div class="pricing-plan">
      <div class="plan-title">Premium</div>
      <div class="plan-price">$49.99/month</div>
      <ul class="plan-features">
        <li>✅ 100GB Storage</li>
        <li>✅ 10 Users</li>
        <li>✅ 24/7 Support</li>
      </ul>
      <button class="plan-button">Sign Up</button>
    </div>
  </div>
</body>
</html>
```

---

#### Desktop CSS

```css
body {
  font-family: "Sono", sans-serif;
}

.pricing-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 2rem;
}

.pricing-plan {
  flex: 1;
  max-width: 400px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  text-align: center;
}

.plan-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.plan-price {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.plan-features li {
  margin-bottom: 20px;
}

.plan-button {
  padding: 10px;
  background-color: #ff6600;
  color: #fff;
  border-radius: 5px;
  border: none;
}
```

---

#### Mobile Responsive CSS

```css
@media (max-width: 1250px) {
  .pricing-container {
    flex-direction: column;
    height: 100%;
  }
}
```

**Behavior:**
- Desktop: 3 cards in a row
- Mobile: 3 cards stacked vertically

---

#### Key Flexbox Properties Used

**1. Center Container:**
```css
.pricing-container {
  display: flex;
  justify-content: center;  /* Horizontal center */
  align-items: center;      /* Vertical center */
  height: 100vh;            /* Full viewport height */
}
```

**2. Equal Width Cards:**
```css
.pricing-plan {
  flex: 1;  /* Each card gets equal space */
  max-width: 400px;  /* But caps at 400px */
}
```

**3. Responsive Switch:**
```css
@media (max-width: 1250px) {
  .pricing-container {
    flex-direction: column;  /* Stack vertically */
  }
}
```

---

## Summary

### Flexbox Container Properties

| Property | Values | Description |
|----------|--------|-------------|
| `display` | `flex`, `inline-flex` | Enables flexbox |
| `flex-direction` | `row`, `row-reverse`, `column`, `column-reverse` | Main axis |
| `justify-content` | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` | Main axis alignment |
| `align-items` | `flex-start`, `center`, `flex-end`, `stretch`, `baseline` | Cross axis alignment |
| `flex-wrap` | `nowrap`, `wrap`, `wrap-reverse` | Wrapping behavior |
| `gap` | length | Space between items |

---

### Flexbox Item Properties

| Property | Description |
|----------|-------------|
| `flex-grow` | How much item grows to fill space |
| `flex-shrink` | How much item shrinks |
| `flex-basis` | Initial size before growing/shrinking |
| `flex` | Shorthand for grow, shrink, basis |
| `order` | Visual order (default: 0) |
| `align-self` | Override container's align-items |

---

### Flex Shorthand

```css
.item {
  flex: 1;  /* flex-grow: 1, flex-shrink: 1, flex-basis: auto */
}

.item {
  flex: 0 0 100px;  /* don't grow, don't shrink, basis 100px */
}
```

---

### Responsive Pattern

```css
/* Desktop: Row layout */
.container {
  display: flex;
  flex-direction: row;
}

/* Mobile: Column layout */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

---

## Resources

- **Flexbox Froggy Game:** https://appbrewery.github.io/flexboxfroggy/
- **Flex Layout Demo:** https://appbrewery.github.io/flex-layout/
- **CSS Tricks Flexbox Guide:** https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **MDN: Flexbox:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout

---

## Practice Exercises

1. Create a horizontal navigation bar with flexbox
2. Build a vertical sidebar with flex-direction: column
3. Center a box both horizontally and vertically
4. Create the pricing table with 3 cards
5. Make the pricing table responsive with media queries
