# Section 5: Adding CSS to HTML

## Overview
This section introduces the three methods of adding CSS to HTML pages and covers CSS selectors for targeting specific elements. You'll learn how to style web pages with colors, fonts, and layouts.

---

## Modules

### 5.1 Adding CSS (Three Methods)

**Location:** `5.1. Adding CSS/`

**Learning Objectives:**
- Apply CSS using inline styles
- Apply CSS using internal `<style>` tags
- Apply CSS using external stylesheets
- Understand when to use each method

---

#### Method 1: Inline CSS

CSS applied directly to an HTML element using the `style` attribute:

```html
<body style="background: blue">
  <h1>Style Me in Blue!</h1>
</body>
```

**Pros:**
- Quick and easy for single-use styles
- Overrides other CSS methods

**Cons:**
- Mixes content with presentation
- Hard to maintain for large projects
- Cannot be reused

**When to Use:**
- Quick testing/debugging
- One-off styles
- Dynamic styles in JavaScript

---

#### Method 2: Internal CSS

CSS placed inside `<style>` tags in the `<head>` section:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    body {
      background: red;
    }
    h1 {
      color: white;
    }
  </style>
  <meta charset="UTF-8">
  <title>Internal</title>
</head>
<body>
  <h1>Style Me in Red!</h1>
</body>
</html>
```

**Pros:**
- All styles in one place
- No extra file needed
- Good for single-page documents

**Cons:**
- Styles only apply to one page
- HTML file can become large

**When to Use:**
- Single-page websites
- Email templates
- Quick prototypes

---

#### Method 3: External CSS (Recommended)

CSS stored in a separate `.css` file linked via `<link>` tag:

**style.css:**
```css
html {
  background: rgb(31, 214, 31);
}

h1 {
  color: white;
  text-align: center;
}
```

**HTML file:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="./style.css">
  <meta charset="UTF-8">
  <title>External</title>
</head>
<body>
  <h1>Style Me in Green</h1>
</body>
</html>
```

**Pros:**
- Separation of concerns (HTML = content, CSS = style)
- Reusable across multiple pages
- Easy to maintain and update
- Browser caching improves performance

**Cons:**
- Requires extra HTTP request
- Need to manage additional files

**When to Use:**
- Multi-page websites (MOST COMMON)
- Professional projects
- Team collaboration

---

#### Comparison Table

| Method | Location | Reusability | Maintainability | Best For |
|--------|----------|-------------|-----------------|----------|
| Inline | `style` attribute | None | Poor | Quick tests |
| Internal | `<style>` tag | Single page | Fair | Single pages |
| External | `.css` file | Multiple pages | Excellent | Production sites |

---

### 5.3 CSS Selectors

**Location:** `5.1. Adding CSS/5.3 CSS Selectors/`

**Learning Objectives:**
- Target elements using element selectors
- Target elements using class selectors
- Target elements using ID selectors
- Target elements using attribute selectors
- Use the universal selector

---

#### 1. Element Selector

Targets all elements of a specific HTML tag:

```css
p {
  color: red;
}
```

```html
<p>This paragraph will be red</p>
<p>This one too!</p>
```

**Use Case:** Style all instances of an element uniformly.

---

#### 2. Class Selector

Targets elements with a specific `class` attribute:

```css
.note {
  font-size: 20px;
}
```

```html
<p class="note">This is a note</p>
<li class="note">This is also a note</li>
```

**Key Points:**
- Prefixed with `.` (dot)
- Can be used on multiple elements
- An element can have multiple classes: `class="note highlight"`

---

#### 3. ID Selector

Targets a single element with a specific `id` attribute:

```css
#id-selector-demo {
  color: green;
}
```

```html
<li id="id-selector-demo">Unique element</li>
```

**Key Points:**
- Prefixed with `#` (hash)
- Should be unique (only one per page)
- Higher specificity than classes

---

#### 4. Attribute Selector

Targets elements based on attribute values:

```css
li[value="4"] {
  color: blue;
}
```

```html
<li class="note" value="4">This will be blue</li>
```

**Common Patterns:**
| Selector | Matches |
|----------|---------|
| `[href]` | Elements with href attribute |
| `[href="url"]` | Exact match |
| `[href^="https"]` | Starts with |
| `[href$=".pdf"]` | Ends with |
| `[href*="google"]` | Contains |

---

#### 5. Universal Selector

Targets ALL elements on the page:

```css
* {
  text-align: center;
}
```

**Use Cases:**
- Reset default styles
- Apply global styles (font-family, box-sizing)
- Debugging (add borders to all elements)

---

#### Selector Specificity (Priority)

From lowest to highest:
1. Universal selector (`*`)
2. Element selector (`p`)
3. Class selector (`.class`)
4. ID selector (`#id`)
5. Inline style (`style=""`)

**Example:**
```html
<p class="note" id="special" style="color: purple;">Text</p>
```

```css
p { color: red; }           /* Won't apply */
.note { color: blue; }      /* Won't apply */
#special { color: green; }  /* Won't apply */
/* Inline purple wins! */
```

---

#### Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="./style.css">
  <title>CSS Selectors</title>
</head>
<body>
  <h1>CSS Selectors</h1>
  <h2>Applying CSS to Different Parts of HTML</h2>
  
  <p class="note">1. Element selector targets by tag name.</p>
  
  <ol>
    <li class="note" value="2">2. Class selector targets by class.</li>
    <li class="note" id="id-selector-demo" value="3">3. ID selector targets by id.</li>
    <li class="note" value="4">4. Attribute selector targets by attribute.</li>
    <li class="note" value="5">5. Universal selector targets all.</li>
  </ol>
</body>
</html>
```

```css
/* Element selector */
p {
  color: red;
}

/* Class selector */
.note {
  font-size: 20px;
}

/* ID selector */
#id-selector-demo {
  color: green;
}

/* Attribute selector */
li[value="4"] {
  color: blue;
}

/* Universal selector */
* {
  text-align: center;
}
```

---

## Summary

### Three Methods of Adding CSS

| Method | Syntax | Use Case |
|--------|--------|----------|
| Inline | `<div style="color: red;">` | Quick tests |
| Internal | `<style>div { color: red; }</style>` | Single pages |
| External | `<link rel="stylesheet" href="style.css">` | Production (BEST) |

---

### CSS Selectors Reference

| Selector | Example | Targets |
|----------|---------|---------|
| Element | `p` | All `<p>` elements |
| Class | `.note` | All elements with `class="note"` |
| ID | `#header` | Element with `id="header"` |
| Attribute | `[href]` | Elements with href attribute |
| Universal | `*` | All elements |

---

## Resources

- [MDN: Adding CSS to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#adding_css_to_html)
- [MDN: CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [CSS Specificity Calculator](https://specificity.keegan.st/)

---

## Practice Exercises

1. Create a page using all three CSS methods
2. Style a page using only external CSS
3. Practice each selector type on sample HTML
4. Build a color-coded selector demo page
5. Convert inline styles to external CSS
