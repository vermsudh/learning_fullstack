# Section 10: CSS Grid

## Overview
This section covers **CSS Grid Layout**, a powerful 2-dimensional layout system that allows you to create complex layouts with rows and columns. Grid is ideal for creating page layouts, image galleries, and any design that requires precise positioning.

---

## Modules

### 10.0 Display Grid

**Location:** `10.0 Display Grid/`

**Learning Objectives:**
- Understand the difference between Flexbox and Grid
- Learn to enable Grid layout with `display: grid`
- Create a chessboard using Grid

---

#### Enabling Grid Layout

To use Grid, set `display: grid` on the container element:

```css
.container {
  display: grid;
}
```

This turns all direct children into **grid items**.

---

#### Grid vs Flexbox

| Feature | Flexbox | Grid |
|---------|---------|------|
| Dimensions | 1D (row OR column) | 2D (row AND column) |
| Best for | Component layouts | Page layouts |
| Content alignment | Along one axis | Both axes simultaneously |

**Resource:** [Grid vs Flexbox Interactive Guide](https://appbrewery.github.io/grid-vs-flexbox/)

---

#### Chessboard Project

Creating an 8x8 chessboard using Grid:

```css
.container {
  width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.white {
  width: 100px;
  height: 100px;
  background-color: #f0d9b5;
}

.black {
  width: 100px;
  height: 100px;
  background-color: #b58863;
}
```

**HTML Structure:**
```html
<div class="container">
  <div class="white"></div>
  <div class="black"></div>
  <!-- Repeat for all 64 squares -->
</div>
```

---

### 10.1 Grid Sizing

**Location:** `10.1 Grid Sizing/`

**Learning Objectives:**
- Size grid tracks using fixed units (px)
- Size grid tracks using fractional units (fr)
- Use `auto` for content-based sizing
- Use `minmax()` for responsive sizing
- Use `repeat()` to reduce code repetition

---

#### 1. Fixed Size (px)

Define exact pixel values for rows and columns:

```css
.grid-container {
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: 400px 800px;
}
```

**Use Case:** When you need precise control over dimensions.

---

#### 2. Auto Size

Let content determine the size:

```css
.grid-container {
  display: grid;
  grid-template-rows: 100px auto;
  grid-template-columns: 200px auto;
}
```

**Use Case:** When content length varies and you want flexibility.

---

#### 3. Fractional Size (fr)

Distribute available space using fractions:

```css
.grid-container {
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-template-columns: 1fr 2fr;
}
```

**How it works:**
- `1fr 2fr` means 1 part and 2 parts (3 total parts)
- First column gets 1/3 of space, second gets 2/3
- Similar to flex-grow in Flexbox

---

#### 4. MinMax Size

Set minimum and maximum bounds:

```css
.grid-container {
  display: grid;
  grid-template-rows: 200px minmax(400px, 5fr);
  grid-template-columns: 200px minmax(400px, 5fr);
}
```

**How it works:**
- `minmax(400px, 5fr)` means:
  - Minimum: 400px
  - Maximum: 5fr (5 fractions of available space)
- Ensures column is never smaller than 400px

---

#### 5. Repeat Function

Reduce code repetition:

```css
/* Without repeat - verbose */
grid-template-columns: 200px 200px 200px 200px;

/* With repeat - clean */
grid-template-columns: repeat(4, 200px);
```

**Syntax:**
```css
grid-template-columns: repeat(2, 200px);  /* 2 columns of 200px */
grid-template-rows: repeat(3, 1fr);       /* 3 rows of equal height */
```

---

#### 6. Grid Auto Rows

Define size for automatically created rows:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-auto-rows: 300px;  /* Any extra items get 300px rows */
}
```

**Use Case:** When you don't know how many rows you'll need.

---

### 10.2 Grid Placement

**Location:** `10.2 Grid Placement/`

**Learning Objectives:**
- Position items using `grid-column` and `grid-row`
- Use `grid-area` for shorthand positioning
- Span items across multiple tracks
- Reorder items using `order` property

---

#### Grid Line Numbering

Grid lines are numbered starting from 1:

```
Column lines:  1    2    3    4
              |----|----|----|
Row 1    -->  1 | A  | B  | C |
              |----|----|----|
Row 2    -->  2 | D  | E  | F |
              |----|----|----|
              3
```

---

#### 1. Spanning Columns

Make an item span multiple columns:

```css
.cowboy {
  grid-column: span 2;  /* Spans 2 columns */
}
```

**Alternative syntax:**
```css
grid-column: 1 / 3;  /* From line 1 to line 3 */
```

---

#### 2. Spanning Rows

Make an item span multiple rows:

```css
.astronaut {
  grid-row: span 2;  /* Spans 2 rows */
}
```

**Alternative syntax:**
```css
grid-row: 1 / 3;  /* From row line 1 to line 3 */
```

---

#### 3. Grid Area Shorthand

Position and size in one line:

```css
grid-area: row-start / column-start / row-end / column-end;
```

**Examples:**
```css
.astronaut {
  grid-area: 2 / 1 / 3 / 3;  /* Row 2, Col 1 to Row 3, Col 3 */
}

.book {
  grid-area: 1 / 2 / 3 / 4;  /* Spans rows 1-2, cols 2-3 */
}

.cowboy {
  grid-area: 1 / 1 / 2 / 3;  /* Row 1, spanning cols 1-2 */
}
```

---

#### 4. Reordering with `order`

Change visual order without changing HTML:

```css
.astronaut {
  order: 1;  /* Moves item to front */
}
```

**Note:** Items with lower `order` values appear first.

---

#### Demo Examples Summary

**Demo 1 - Column Span:**
```css
.cowboy { grid-column: span 2; }
```

**Demo 2 - Reorder:**
```css
.astronaut { order: 1; }
```

**Demo 3 - Grid Area:**
```css
.astronaut { grid-area: 2 / 1 / 3 / 3; }
```

**Demo 4 - Multiple Grid Areas:**
```css
.cowboy   { grid-area: 1 / 1 / 2 / 3; }
.astronaut { grid-area: 2 / 1 / 3 / 3; }
.book     { grid-area: 1 / 2 / 3 / 4; }
```

---

### 10.3 Mondrian Project

**Location:** `10.3 Mondrian Project/`

**Learning Objectives:**
- Combine all Grid concepts into a complete project
- Create a pixel-perfect replica of a Mondrian painting
- Use gap for grid line spacing
- Handle overlapping grid items

---

#### Project Overview

Create a CSS Grid representation of a Piet Mondrian abstract painting using specific colors and dimensions.

**Color Palette:**
| Color | Hex Code |
|-------|----------|
| Gap/Line | `#000000` (Black) |
| White | `#F0F1EC` |
| Red | `#E72F24` |
| Black | `#232629` |
| Blue | `#004592` |
| Yellow | `#F9D01E` |

---

#### Grid Dimensions

**Container:** 748px x 748px

**Columns:** `320px 198px 153px 50px`

**Rows:** `414px 130px 155px 22px`

**Gap:** 9px (creates the black grid lines)

---

#### CSS Implementation

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.container {
  height: 748px;
  width: 748px;
  display: grid;
  background-color: #000;  /* Gap color shows through */
  grid-template-columns: 320px 198px 153px 50px;
  grid-template-rows: 414px 130px 155px 22px;
  gap: 9px;
}

.item {
  background-color: #F0F1EC;  /* Default white */
}

.red {
  background-color: #E72F24;
}

.blue {
  background-color: #004592;
  border-bottom: 10px solid #000;  /* Extra black line effect */
}

.yellow {
  background-color: #F9D01E;
}

.black {
  background-color: #232629;
}

.white1 {
  grid-column: span 3;
}

.white2 {
  grid-row: span 2;
}

.white3 {
  grid-area: 2 / 2 / 4 / 4;
}

.white4 {
  grid-row: span 2;
}
```

---

#### HTML Structure

```html
<div class="container">
  <div class="item red"></div>
  <div class="item white1"></div>
  <div class="item white2"></div>
  <div class="item white3"></div>
  <div class="item blue"></div>
  <div class="item white4"></div>
  <div class="item"></div>
  <div class="item yellow"></div>
  <div class="item black"></div>
</div>
```

---

#### Key Techniques Used

1. **Gap as Grid Lines:** The `gap: 9px` creates black lines because the container background is black.

2. **Spanning Multiple Tracks:**
   - `.white1 { grid-column: span 3; }` - spans 3 columns
   - `.white2 { grid-row: span 2; }` - spans 2 rows

3. **Grid Area for Complex Placement:**
   - `.white3 { grid-area: 2 / 2 / 4 / 4; }` - precise positioning

4. **Border for Extra Lines:**
   - `.blue { border-bottom: 10px solid #000; }` - creates additional visual separation

---

## Summary

### Grid Properties Reference

| Property | Description | Example |
|----------|-------------|---------|
| `display: grid` | Enables grid layout | `display: grid;` |
| `grid-template-columns` | Defines column sizes | `1fr 2fr 1fr` |
| `grid-template-rows` | Defines row sizes | `100px auto 200px` |
| `gap` | Space between grid items | `gap: 20px;` |
| `grid-column` | Column placement/span | `grid-column: span 2;` |
| `grid-row` | Row placement/span | `grid-row: 1 / 3;` |
| `grid-area` | Shorthand for placement | `grid-area: 1 / 1 / 3 / 3;` |
| `repeat()` | Reduce repetition | `repeat(4, 1fr)` |
| `minmax()` | Min/max bounds | `minmax(200px, 1fr)` |
| `grid-auto-rows` | Auto-generated row size | `grid-auto-rows: 150px;` |

---

### Grid Area Syntax

```
grid-area: row-start / column-start / row-end / column-end;
```

**Memory aid:** "Row-Column-Row-Column" or think of it as:
- Start at position (row-start, column-start)
- End at position (row-end, column-end)

---

## Resources

- **Grid vs Flexbox Interactive:** https://appbrewery.github.io/grid-vs-flexbox/
- **MDN CSS Grid Guide:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
- **CSS Grid Garden (Game):** https://cssgridgarden.com/

---

## Practice Exercises

1. Create a chessboard using `display: grid`
2. Build a 4-column photo gallery with `repeat()`
3. Create a responsive card layout using `minmax()`
4. Position items using `grid-area` shorthand
5. Complete the Mondrian painting project
