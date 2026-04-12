# Section 2: HTML Basics

## Overview
This section introduces fundamental HTML elements for structuring web content. You'll learn about headings, paragraphs, void elements, and build your first complete HTML page.

---

## Modules

### 2.1 Heading Element

**Location:** `2.1 Heading Element/`

**Learning Objective:** Understand HTML heading hierarchy (h1-h6)

**Key Concepts:**
- `<h1>` - Main page heading (highest priority)
- `<h2>` - Sub-headings for major sections
- `<h3>` - Sub-sections within chapters
- Headings create a document outline structure

**Example Structure:**
```html
<h1>Book</h1>
  <h2>Chapter 1</h2>
    <h3>Section 1</h3>
    <h3>Section 2</h3>
  <h2>Chapter 2</h2>
    <h3>Section 1</h3>
    <h3>Section 2</h3>
```

**Files:**
- `index.html` - Starter code
- `solution.html` - Completed example
- `goal.png` - Visual reference of expected output

---

### 2.2 Paragraph Element

**Location:** `2.2 Paragraph Element/`

**Learning Objective:** Learn to add text content using paragraph tags

**Key Concepts:**
- `<p>` - Defines a paragraph of text
- Multiple `<p>` tags create separate text blocks
- Browser automatically adds spacing between paragraphs
- Ideal for body text content

**Example:**
```html
<p>First paragraph. Lorem ipsum dolor sit amet...</p>
<p>Second paragraph. Suscipit adipiscing bibendum est...</p>
<p>Third paragraph. Nisl purus in mollis nunc...</p>
```

**Files:**
- `index.html` - Starter code with placeholder text
- `solution.html` - Completed example
- `goal.png` - Visual reference

---

### 2.3 Void Elements

**Location:** `2.3 Void Elements/`

**Learning Objective:** Understand self-closing HTML elements

**Key Concepts:**
- **Void elements** have no closing tag and no content
- `<br />` - Line break (forces text to next line)
- `<hr />` - Horizontal rule (thematic break/line)
- Used for formatting without wrapping content

**Example:**
```html
<h1>William Blake</h1>
<p>
  17 south molton street <br />
  London<br />
  W1K 5QT<br />
  UK
</p>
<hr />
<p>Biography content here...</p>
```

**Use Cases:**
- Address formatting with `<br />`
- Content section dividers with `<hr />`

**Files:**
- `index.html` - Starter code
- `solution.html` - Completed biography page
- `goal.png` - Visual reference

---

### 2.4 Movie Ranking Project

**Location:** `2.4 Movie Ranking Project/`

**Learning Objective:** Combine headings, paragraphs, and horizontal rules to build a complete page

**Project:** Create a movie ranking page with:
- Main title (`<h1>`)
- Subtitle (`<h2>`)
- Movie entries with `<h3>` and `<p>` descriptions
- Visual separators using `<hr>`

**Example Structure:**
```html
<h1>The Best Movies According to Angela</h1>
<h2>My top 3 movies of all-time</h2>
<hr>
<h3>Spirited Away</h3>
<p>This is my favourite anime. I love beautiful images.</p>

<h3>Ex Machina</h3>
<p>Really cool sci-fi movie</p>

<h3>Drive</h3>
<p>Super beautiful film. Really artistic</p>
```

**Files:**
- `index.html` - Starter code
- `solution.html` - Completed project
- `goal.png` - Visual reference of final output

---

## Summary of HTML Elements Covered

| Element | Type | Description |
|---------|------|-------------|
| `<h1>`-`<h6>` | Container | Headings (h1 = most important) |
| `<p>` | Container | Paragraph of text |
| `<br />` | Void | Line break |
| `<hr />` | Void | Horizontal rule/thematic break |

---

## Resources
- [MDN: Heading Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/heading_1)
- [MDN: Paragraph Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/p)
- [MDN: Video Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video) (mentioned in lesson)
