# Section 11: Bootstrap

## Overview
This section introduces **Bootstrap 5**, a popular CSS framework that provides pre-built components, responsive grid system, and utilities for rapid web development.

---

## Modules

### 11.0 Bootstrap Intro

**Location:** `11.0 Bootstrap Intro/`

**Learning Objectives:**
- Understand what Bootstrap is and why it's useful
- Learn how to import Bootstrap via CDN
- Create your first Bootstrap component (card)

---

#### How to Import Bootstrap via CDN

Bootstrap can be added to your project using a CDN (Content Delivery Network). This is the quickest way to get started without downloading files.

**Step 1: Add CSS link in `<head>` section**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
```

**Step 2: Add JavaScript bundle before closing `</body>` tag**
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

**Complete HTML Template:**
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <!-- Your content here -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

#### Using Bootstrap Components - Card Example

Bootstrap provides pre-built components like cards, navbars, buttons, and more.

**Example: Bootstrap Card**
```html
<div class="card" style="width: 18rem;">
  <img src="./flower.jpg" class="card-img-top" alt="picture of sunflower">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">This is a simple Bootstrap card example.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

**Key Classes Used:**
| Class | Purpose |
|-------|---------|
| `card` | Creates the card container |
| `card-img-top` | Positions image at top of card |
| `card-body` | Container for card content |
| `card-title` | Styles the heading |
| `card-text` | Styles paragraph text |
| `btn btn-primary` | Creates a primary styled button |

---

### 11.2 Bootstrap Components

**Location:** `11.2 Bootstrap Components/`

**Learning Objectives:**
- Use Bootstrap templates from the official website
- Copy components using Chrome DevTools
- Learn spacing utilities and responsive classes
- Build a complete landing page

---

#### How to Use Pre-built Templates from Bootstrap Website

1. **Visit the official Bootstrap docs:** https://getbootstrap.com/

2. **Navigate to Components section** - Browse components like:
   - Navbars
   - Heroes
   - Cards
   - Carousels
   - Footers

3. **Copy the HTML code** from the examples

4. **Paste into your project** and customize

**Example Workflow:**
- Go to Bootstrap "Heroes" section
- Copy the hero component HTML
- Paste into your `index.html`
- Replace placeholder text and images

---

#### How to Copy Elements Using Chrome DevTools

This technique helps you quickly grab Bootstrap components:

**Step-by-Step:**
1. Open the Bootstrap documentation in Chrome
2. Right-click on the component you want
3. Select **Inspect** (or press `F12`)
4. In DevTools, right-click the highlighted HTML element
5. Choose **Copy** → **Copy element**
6. Paste into your project file

**Why This Is Useful:**
- Faster than manually copying from code examples
- Gets the complete component structure
- Works for any website using Bootstrap

---

#### Bootstrap Components Used in This Module

**1. Navbar (Navigation Bar)**
```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Move It</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

**2. Hero Section**
```html
<div class="px-4 pt-5 my-5 text-center border-bottom">
  <h1 class="display-4 fw-bold text-body-emphasis">Move With Joy</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">Welcome to our website...</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button class="btn btn-primary btn-lg px-4">Get a Quote</button>
      <button class="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
    </div>
  </div>
</div>
```

**3. Features Grid (3-column layout)**
```html
<div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
  <div class="feature col">
    <div class="feature-icon bg-primary bg-gradient">
      <img src="./icon.svg" alt="icon" height="30">
    </div>
    <h2>Professional</h2>
    <p>Description text...</p>
    <a href="#" class="icon-link">Get a quote</a>
  </div>
  <!-- Repeat for more features -->
</div>
```

**4. Carousel (Image Slider)**
```html
<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./image1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./image2.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
```

**5. Footer**
```html
<footer class="py-3 my-4">
  <ul class="nav justify-content-center border-bottom pb-3 mb-3">
    <li class="nav-item"><a href="#" class="nav-link px-2">Home</a></li>
    <li class="nav-item"><a href="#" class="nav-link px-2">Features</a></li>
  </ul>
  <p class="text-center text-body-secondary">© 2025 Company, Inc</p>
</footer>
```

---

#### Bootstrap Spacing Utilities

Bootstrap provides utility classes for margins and paddings:

| Class Pattern | Meaning |
|---------------|---------|
| `m-0`, `m-1`, `m-2`... | Margin (all sides) |
| `mt-3`, `mb-4` | Margin top / bottom |
| `mx-auto` | Horizontal margin auto (centers element) |
| `p-3`, `px-4`, `py-5` | Padding (all, x-axis, y-axis) |
| `gap-2`, `gap-4` | Gap between flex/grid items |

**Examples:**
- `my-5` = margin-y (top & bottom) level 5
- `px-4` = padding-x (left & right) level 4
- `mb-3` = margin-bottom level 3

---

#### Bootstrap Responsive Grid

Bootstrap uses a 12-column grid system:

```html
<div class="row">
  <div class="col-12 col-md-6 col-lg-4">Column 1</div>
  <div class="col-12 col-md-6 col-lg-4">Column 2</div>
  <div class="col-12 col-md-6 col-lg-4">Column 3</div>
</div>
```

**Breakpoints:**
| Breakpoint | Class Prefix | Screen Width |
|------------|--------------|--------------|
| Extra small | `col-` | < 576px |
| Small | `col-sm-` | ≥ 576px |
| Medium | `col-md-` | ≥ 768px |
| Large | `col-lg-` | ≥ 992px |
| Extra large | `col-xl-` | ≥ 1200px |

---

### 11.3 TinDog Project

**Location:** `11.3 TinDog Project/`

**Learning Objectives:**
- Combine all Bootstrap components into a complete project
- Use Bootstrap Icons (SVG)
- Apply custom CSS alongside Bootstrap
- Build a responsive landing page

---

#### Project Structure
```
11.3 TinDog Project/
├── css/
│   ├── style.css       (custom styles)
│   └── solution.css    (gradient backgrounds)
├── goal images/        (reference images)
├── images/             (project assets)
├── index.html          (starter file)
└── solution.html       (completed project)
```

---

#### Page Sections

**1. Title/Hero Section**
- Uses Bootstrap grid (`row`, `col`)
- Download buttons with SVG icons (Apple & Google Play)
- Responsive image layout
- Gradient background (custom CSS)

**Key Classes:**
```html
<section id="title" class="gradient-background">
  <div class="container col-xxl-8 px-4 pt-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 pt-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="./images/iphone.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes">
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Meet new and interesting dogs nearby.</h1>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button class="btn btn-light btn-lg px-4 me-md-2">
            <svg class="bi bi-apple">...</svg> Download
          </button>
          <button class="btn btn-outline-light btn-lg px-4">
            <svg class="bi bi-google-play">...</svg> Download
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
```

**2. Features Section**
- 3-column grid layout
- Icon squares with custom styling
- Uses Bootstrap Icons (checkmark, mortarboard, heart)

**Key Classes:**
```html
<div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
  <div class="col d-flex align-items-start">
    <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
      <svg class="bi bi-check2-circle">...</svg>
    </div>
    <div>
      <h3 class="fs-2">Easy to use.</h3>
      <p>So easy to use, even your dog could do it.</p>
    </div>
  </div>
  <!-- More features... -->
</div>
```

**3. Testimonial Section**
- Centered text layout
- Profile image with circular border
- Press logo grid (TechCrunch, Mashable, etc.)

**4. Pricing Section**
- 3 pricing cards (Chihuahua, Labrador, Mastiff)
- Different card styles (outline vs filled)
- Responsive column layout

```html
<div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">Chihuahua</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">$0<small class="text-body-secondary fw-light">/mo</small></h1>
        <ul class="list-unstyled mt-3 mb-4">
          <li>5 Matches Per Day</li>
          <li>10 Messages Per Day</li>
          <li>Unlimited App Usage</li>
        </ul>
        <button type="button" class="w-100 btn btn-lg btn-outline-dark">Sign up for free</button>
      </div>
    </div>
  </div>
  <!-- More pricing cards... -->
</div>
```

**5. Footer Section**
- Multi-column layout
- Navigation links
- Copyright text

---

#### Custom CSS (solution.css)

**Gradient Background Animation:**
```css
.gradient-background {
  background: linear-gradient(300deg, #00bfff, #ff4c68, #ef8172);
  background-size: 180% 180%;
  animation: gradient-animation 18s ease infinite;
}

@keyframes gradient-animation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

**Icon Square Styling:**
```css
.icon-square {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
}
```

**Profile Image (Circular):**
```css
.profile-img {
  border-radius: 50%;
  height: 100px;
}
```

---

#### Bootstrap Icons Used

| Icon | Class | Usage |
|------|-------|-------|
| Apple Logo | `bi bi-apple` | Download button |
| Google Play | `bi bi-google-play` | Download button |
| Checkmark Circle | `bi bi-check2-circle` | Feature icon |
| Mortarboard | `bi bi-mortarboard` | Feature icon |
| Arrow Through Heart | `bi bi-arrow-through-heart` | Feature icon |

---

## Summary

### Key Concepts Covered

| Concept | Description |
|---------|-------------|
| **CDN Import** | Add Bootstrap via `<link>` and `<script>` tags |
| **Pre-built Templates** | Copy components from getbootstrap.com |
| **DevTools Copy** | Right-click → Inspect → Copy element |
| **Spacing Utilities** | `m-`, `p-`, `gap-` with sizes 0-5 |
| **Grid System** | `row`, `col-{breakpoint}-{number}` |
| **Components** | Navbar, Card, Carousel, Pricing, Footer |
| **Custom CSS** | Extend Bootstrap with custom styles |

---

## Resources

- **Bootstrap Official Docs:** https://getbootstrap.com/
- **Bootstrap Icons:** https://icons.getbootstrap.com/
- **Bootstrap CDN:** https://www.jsdelivr.com/package/npm/bootstrap
- **Bootstrap Snippets Reference:** https://github.com/appbrewery/tindog/blob/main/Bootstrap-snippets.pdf

---

## Practice Exercises

1. Import Bootstrap CDN into a new HTML file
2. Create a card component with an image and button
3. Build a navbar with dropdown menu
4. Create a 3-column features section
5. Build the complete TinDog landing page
