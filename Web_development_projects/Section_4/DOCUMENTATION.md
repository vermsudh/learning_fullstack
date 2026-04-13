# Section 4: File Paths and Multi-Page Websites

## Overview
This section covers file paths (relative and absolute), organizing project folders, and building multi-page websites. You'll learn how to structure projects and link pages together.

---

## Modules

### 4.0 File Paths

**Location:** `4.0 File Paths/`

**Learning Objectives:**
- Understand relative vs absolute paths
- Navigate folder structures using `../` and `./`
- Link to images in different folder locations

---

#### Folder Structure Example

```
Folder0/
├── index.html          (current file)
├── rabbit.png          (same folder)
├── Folder1/
│   ├── fish.png
│   └── Folder2/
│       └── bird.png
└── Folder3/
    └── cat.png
```

---

#### Path Types

**1. Same Folder (no path needed):**
```html
<img src="rabbit.png" alt="Rabbit">
```

**2. Parent Folder (go up one level):**
```html
<img src="../dog.png" alt="Dog">
```

**3. Child Folder (go into folder):**
```html
<img src="Folder1/fish.png" alt="Fish">
```

**4. Nested Child Folder:**
```html
<img src="Folder1/Folder2/bird.png" alt="Bird">
```

**5. Sibling Folder (up then over):**
```html
<img src="../Folder0/Folder3/cat.png" alt="Cat">
```

---

#### Path Syntax Reference

| Syntax | Meaning |
|--------|---------|
| `filename.png` | Current folder |
| `./filename.png` | Current folder (explicit) |
| `../filename.png` | Parent folder (up one level) |
| `../../filename.png` | Grandparent folder (up two levels) |
| `folder/file.png` | Into a subfolder |

---

#### Complete Example

```html
<h1>All the Animals</h1>

<h2>Rabbit:</h2>
<img src="rabbit.png" alt="">

<h2>Cat:</h2>
<img src="../Folder0/Folder3/cat.png" alt="">

<h2>Dog:</h2>
<img src="../dog.png" alt="">

<h2>Fish:</h2>
<img src="../Folder1/fish.png" alt="">

<h2>Bird:</h2>
<img src="../Folder1/Folder2/bird.png" alt="">
```

---

### 4.1 Webpages (Multi-Page Sites)

**Location:** `4.1 Webpages/`

**Learning Objectives:**
- Create multiple HTML pages
- Link pages together
- Organize pages in a `public/` folder
- Navigate between pages

---

#### Typical Project Structure

```
project/
├── index.html              (Home page)
├── assets/
│   └── images/
│       └── photo.png
└── public/
    ├── about.html          (About page)
    └── contact.html        (Contact page)
```

---

#### Linking Pages

**From index.html to about.html:**
```html
<a href="./public/about.html">About Me</a>
```

**From index.html to contact.html:**
```html
<a href="./public/contact.html">Contact</a>
```

---

#### Linking with Images

```html
<!-- Image in same folder -->
<img src="../4.1 Webpages/assets/images/cat.png" alt="Cat">

<!-- Link to contact page -->
<p>Visit my <a href="../4.1 Webpages/public/contact.html">Contact</a> page</p>
```

---

### 4.3 HTML Portfolio Project

**Location:** `4.3 HTML Portfolio Project/`

**Learning Objectives:**
- Build a personal portfolio website
- Link to previous projects
- Create About Me and Contact pages
- Organize assets and public folders

---

#### Project Structure

```
4.3 HTML Portfolio Project/
├── index.html                    (Main portfolio page)
├── assets/
│   └── images/
│       ├── movie-ranking.png     (Project screenshots)
│       └── birthday-invite.png
└── public/
    ├── about.html                (About Me page)
    ├── contact.html              (Contact page)
    ├── movie-ranking.html        (Previous project)
    └── birthday-invite.html      (Previous project)
```

---

#### Main Portfolio Page (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
</head>
<body>
  <h1>Sudhanshu Verma Portfolio</h1>
  <h2>I'm a Web Developer</h2>
  
  <hr>
  
  <h3><a href="./public/movie-ranking.html">Movie Ranking Project</a></h3>
  <img src="./assets/images/movie-ranking.png" height="200" alt="Movie ranking preview">
  
  <h3><a href="./public/birthday-invite.html">Birthday Invite Project</a></h3>
  <img src="./assets/images/birthday-invite.png" height="200" alt="Birthday invite preview">
  
  <hr>
  
  <a href="./public/about.html">About Me</a>
  <a href="./public/contact.html">Contact Me</a>
</body>
</html>
```

---

#### About Page (public/about.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>About Me</title>
</head>
<body>
  <h1>About Me</h1>
  <p>Hello! I'm a web developer learning full-stack development.</p>
  <a href="../index.html">Back to Home</a>
</body>
</html>
```

---

#### Contact Page (public/contact.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contact</title>
</head>
<body>
  <h1>Contact Me</h1>
  <p>Email: your.email@example.com</p>
  <a href="../index.html">Back to Home</a>
</body>
</html>
```

---

#### Building Steps

1. **Create folder structure** - `assets/images/` and `public/`
2. **Move previous projects** into `public/` folder
3. **Take screenshots** of projects and save to `assets/images/`
4. **Build index.html** with project previews
5. **Create About and Contact pages**
6. **Link everything together**

---

## Summary

### Path Navigation

| To Go... | Use | Example |
|----------|-----|---------|
| Same folder | `filename` | `image.png` |
| Into folder | `folder/file` | `images/photo.jpg` |
| Up one level | `../file` | `../index.html` |
| Up two levels | `../../file` | `../../home.html` |

---

### Folder Organization Best Practices

```
project-name/
├── index.html          (main entry point)
├── assets/             (all static files)
│   ├── images/
│   ├── css/
│   └── js/
└── public/             (additional HTML pages)
    ├── about.html
    └── contact.html
```

---

## Resources

- [MDN: Using Relative URLs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#urls)
- [MDN: File Paths](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#absolute_vs_relative_links)

---

## Practice Exercises

1. Create a folder structure with nested folders
2. Practice linking images from different folder depths
3. Build a 3-page website (Home, About, Contact)
4. Create your HTML portfolio with project previews
5. Link all pages together with proper paths
