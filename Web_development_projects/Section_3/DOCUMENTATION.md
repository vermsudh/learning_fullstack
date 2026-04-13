# Section 3: Intermediate HTML Elements

## Overview
This section covers essential HTML elements for creating rich web content: lists, links, images, and proper document structure. You'll learn to create navigable pages with multimedia content.

---

## Modules

### 3.0 List Elements

**Location:** `3.0 List Elements/`

**Learning Objectives:**
- Create unordered lists with `<ul>`
- Create ordered lists with `<ol>`
- Understand list item `<li>` elements

---

#### Unordered Lists (`<ul>`)

Used for items where order doesn't matter (bullet points):

```html
<h3>For the dough:</h3>
<ul>
  <li>¾ cup warm milk</li>
  <li>2 ¼ teaspoons yeast</li>
  <li>¼ cup granulated sugar</li>
  <li>1 egg plus 1 egg yolk</li>
  <li>¼ cup butter</li>
  <li>3 cups bread flour</li>
</ul>
```

**Renders as:**
- ¾ cup warm milk
- 2 ¼ teaspoons yeast
- ¼ cup granulated sugar
- etc.

---

#### Ordered Lists (`<ol>`)

Used for sequential steps where order matters (numbered list):

```html
<h2>Instructions</h2>
<ol>
  <li>Mix the milk with the yeast, sugar, eggs.</li>
  <li>Melt the butter and add to the mixture.</li>
  <li>Add in the flour and mix until combined into a dough.</li>
  <li>Knead the dough for 10 minutes.</li>
  <li>Transfer the dough into a large bowl and cover with plastic wrap.</li>
</ol>
```

**Renders as:**
1. Mix the milk with the yeast, sugar, eggs.
2. Melt the butter and add to the mixture.
3. Add in the flour...
4. etc.

---

#### Project: Recipe Page

Combine headings and lists to create a recipe page:

```html
<h1>Angela's Recipe for the Best Cinnamon Rolls</h1>
<h2>Ingredients</h2>
<h3>For the dough:</h3>
<ul>
  <li>Ingredient 1</li>
  <li>Ingredient 2</li>
</ul>

<h2>Instructions</h2>
<ol>
  <li>Step 1</li>
  <li>Step 2</li>
</ol>
```

---

### 3.1 Nesting and Indentation

**Location:** `3.1 Nesting and Indentation-2/`

**Learning Objectives:**
- Nest lists inside other lists
- Create multi-level hierarchies
- Use proper indentation for readability

---

#### Nested Lists

Lists can be nested to create sub-categories:

```html
<ul type="A">
  <li>Item 1</li>
  <li>
    <ol>
      <li>Sub-item 1</li>
      <li>
        <ul>
          <li>
            <ul>
              <li>Deep nested item 1</li>
              <li>Deep nested item 2</li>
            </ul>
          </li>
          <li>Sub-item 2</li>
          <li>Sub-item 3</li>
        </ul>
      </li>
      <li>Sub-item 3</li>
    </ol>
  </li>
  <li>Item 3</li>
</ul>
```

---

#### Indentation Best Practices

**Good Indentation:**
```html
<ul>
  <li>
    <ol>
      <li>Item</li>
      <li>Item</li>
    </ol>
  </li>
</ul>
```

**Why It Matters:**
- Easier to read and understand structure
- Helps identify nesting levels quickly
- Industry standard for maintainable code

---

### 3.2 Anchor Elements

**Location:** `3.2 Anchor Elements/`

**Learning Objectives:**
- Create hyperlinks using `<a>` tag
- Link to external websites
- Understand the `href` attribute

---

#### Creating Links

```html
<a href="https://www.google.com">Visit Google</a>
```

**Key Attributes:**
| Attribute | Purpose | Example |
|-----------|---------|---------|
| `href` | Destination URL | `href="https://example.com"` |
| `target` | Where to open link | `target="_blank"` (new tab) |

---

#### Link Types

**External Links:**
```html
<a href="https://www.google.com">Google</a>
```

**Internal Links (within same site):**
```html
<a href="./about.html">About Page</a>
<a href="#section1">Jump to Section 1</a>
```

---

#### Project: Top 5 Favorite Websites

```html
<h1>My Top 5 Favourite Websites</h1>
<ol>
  <li><a href="https://www.google.com">Google</a></li>
  <li><a href="https://www.github.com">GitHub</a></li>
  <li><a href="https://www.stackoverflow.com">Stack Overflow</a></li>
  <li><a href="https://www.mdn.mozilla.org">MDN Web Docs</a></li>
  <li><a href="https://www.freecodecamp.org">freeCodeCamp</a></li>
</ol>
```

---

### 3.3 Image Elements

**Location:** `3.3 Image Elements/`

**Learning Objectives:**
- Embed images using `<img>` tag
- Use the `src` attribute for image paths
- Add alt text for accessibility
- Use both local and remote images

---

#### The Image Tag

**Void element** - no closing tag needed:

```html
<img src="image.jpg" alt="Description of image">
```

**Attributes:**
| Attribute | Purpose | Required |
|-----------|---------|----------|
| `src` | Image source (URL or path) | Yes |
| `alt` | Alternative text for accessibility | Yes |
| `width` | Image width in pixels | No |
| `height` | Image height in pixels | No |

---

#### Using Remote Images (URLs)

```html
<!-- Kitten image -->
<h1>I am a cat person</h1>
<img src="https://raw.githubusercontent.com/appbrewery/webdev/main/kitten.jpeg" alt="cat image">

<!-- Puppy GIF -->
<h1>I am a Dog person</h1>
<img src="https://raw.githubusercontent.com/appbrewery/webdev/main/puppy.gif" alt="dog playing">
```

---

#### Image Sizing

```html
<img src="photo.jpg" alt="Profile photo" width="200" height="150">
```

**Best Practice:** Set only width OR height to maintain aspect ratio:
```html
<img src="photo.jpg" alt="Profile" width="200">
```

---

### 3.4 Birthday Invite Project

**Location:** `3.4 Birthday Invite Project/`

**Learning Objectives:**
- Combine all learned elements into a complete project
- Create an event invitation page
- Link to Google Maps for location

---

#### Project Structure

```html
<h1>It's my Birthday!</h1>
<h2>On the 26th Jan</h2>

<img src="https://raw.githubusercontent.com/appbrewery/webdev/main/birthday-cake3.4.jpeg" alt="Birthday cake">

<h3>What to bring:</h3>
<ul>
  <li>Balloons (I love balloons)</li>
  <li>Cake (I'm really good at eating)</li>
  <li>An appetite (There will be lots of food)</li>
</ul>

<h3>This is where you need to go:</h3>
<a href="https://www.google.com/maps/@35.7040744,139.5577317,3a,75y">Google map link</a>
```

---

#### Features Included

1. **Headings** - `<h1>`, `<h2>`, `<h3>` for hierarchy
2. **Image** - Birthday cake from URL
3. **Unordered List** - Items to bring
4. **Anchor Link** - Google Maps location

---

## Summary

### Elements Covered

| Element | Type | Description |
|---------|------|-------------|
| `<ul>` | Container | Unordered (bulleted) list |
| `<ol>` | Container | Ordered (numbered) list |
| `<li>` | Container | List item |
| `<a>` | Container | Anchor/link to other pages |
| `<img>` | Void | Embed images |

---

### Key Attributes

| Attribute | Element | Purpose |
|-----------|---------|---------|
| `href` | `<a>` | Link destination |
| `src` | `<img>` | Image source |
| `alt` | `<img>` | Alternative text |
| `type` | `<ul>` | List style (A, a, I, i, disc, circle) |

---

## Resources

- [MDN: Lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
- [MDN: Links](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [MDN: Images](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
- [Google Maps](https://www.google.com/maps)

---

## Practice Exercises

1. Create a recipe page with ingredients (ul) and instructions (ol)
2. Build a nested outline of your course syllabus
3. Create a links page to your 5 favorite websites
4. Make a pet gallery with images from URLs
5. Build the Birthday Invite project
