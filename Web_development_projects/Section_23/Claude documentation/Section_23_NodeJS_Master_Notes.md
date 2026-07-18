# Node.js — Master Notes (Section 23)

A beginner-friendly summary of everything covered in Section 23: what Node.js is, why it exists, how to run code with it, how to read/write files natively, how to use NPM, and a small real project that ties it all together.

---

## 1. What is Node.js, really?

For years, JavaScript could only run **inside a browser**. It was "locked in" — you couldn't use it to talk to a file system, a database, or a server. Node.js broke it out of the browser.

**Node.js is a JavaScript *runtime*** — a program that lets your computer run JavaScript code directly, outside of Chrome, Firefox, Safari, etc. It's built on the same engine that powers Google Chrome (called **V8**), so it's fast.

> "An asynchronous, event-driven JavaScript runtime, Node.js is designed to build scalable network applications."

Don't worry about memorizing that quote — here's what it actually means in plain English, piece by piece:

- **JavaScript runtime** → a place where JS code can execute, separate from the browser.
- **Event-driven / asynchronous** → Node doesn't freeze up while waiting for slow tasks (explained in detail below).
- **Scalable network applications** → it's good at handling many users/requests at once without falling over.

### The framework = mayonnaise analogy
Think of building a backend like making a sandwich. You *could* make mayonnaise completely from scratch (eggs, oil, whisking...), or you could just grab a jar of mayonnaise from the store and use it right away.

A **framework** (like Node.js) is the store-bought jar — it gives you ready-made functionality (reading files, handling network requests, timers, debugging tools, etc.) so you don't have to build everything from zero.

Node.js reuses these common building blocks so developers don't repeat the same low-level work in every project:
- Reading files
- Writing files
- Networking
- URL handling
- Data streams
- Diagnostics / debugger / error codes
- Tests

---

## 2. Why do we use Node.js specifically?

**One language for everything.** Before Node.js, if you wanted to build a website, you needed JavaScript for the browser (front end) *and* a completely different language — like PHP, Java, or Ruby — for the server (back end). That meant learning two languages just to build one app.

Node.js let JavaScript escape the browser and run on the *server* too. So now the same language (JS) can be used for:

- **Front end** — what the user sees and clicks (in the browser)
- **Back end** — the server logic, databases, authentication, etc. (in Node.js)

This is why people call it going **"full-stack"** with just JavaScript. It makes it much easier for a front-end developer to pick up back-end work, since they aren't learning a brand-new language, just a new environment for the language they already know.

**The 4 big reasons Node is popular:**

| Reason | What it means |
|---|---|
| 🥞 JS Fullstack | Same language on client and server |
| 🚀 Scales | Handles many users/requests efficiently |
| ⚡ Non-blocking | Doesn't freeze while waiting on slow tasks |
| 📦 Ecosystem (npm) | Huge library of free, ready-made code to reuse |

(Fun fact from GitHub's own language-usage charts: JavaScript has consistently been the #1 most-used language on GitHub for years — a big part of why Node's ecosystem is so massive.)

---

## 3. Asynchronous programming — Node's superpower

This is the single most important *concept* in Node.js, so let's slow down here.

**Synchronous** code runs one line at a time, and each line has to *fully finish* before the next one starts. If one step is slow, everything behind it is stuck waiting.

**Asynchronous** code can start a slow task, and *while it's waiting*, move on and let other things happen. When the slow task finally finishes, it "reports back" and its follow-up code runs then.

### The Amazon delivery analogy
Imagine ordering something on Amazon:

- **Without async behavior:** after you click "place order," the entire website freezes and you can't do *anything else* until your package physically arrives at your door. Obviously absurd.
- **With async behavior (how it really works):** you place the order, and immediately you're free to keep browsing, buy other things, close the tab, whatever you want. Somewhere in the background, the order is being processed. When it's *finally* delivered, an event fires (e.g., "order delivered!") and only *then* does the related code run (like sending you a notification).

That's **event-driven** programming: certain pieces of code only run *when a specific event happens* (a file finishes loading, a network request comes back, a timer ends, an order is delivered), not necessarily in the exact order you wrote them.

### Why this matters for a server
Node.js runs your whole app in a **single process/thread** (unlike some other backend languages that spin up a new thread per request). Normally, "single thread" would sound bad — if one thing gets stuck, wouldn't everything be stuck?

Node avoids that by making I/O operations (reading a file, querying a database, calling a network API) *non-blocking*. When Node asks the file system or the network for something, it doesn't sit there waiting — it registers "let me know when this is done" and immediately goes to handle other work. When the data comes back, Node resumes that specific piece of code.

This lets a single Node server comfortably handle **thousands of simultaneous connections** without needing to manage a complicated pool of threads (which is itself a common source of bugs in other languages).

**Key vocabulary you'll meet as you go deeper into JS/Node async concepts** (things worth learning next, in roughly this order):
1. Callbacks
2. Timers (`setTimeout`, `setInterval`)
3. Promises
4. `async` / `await`
5. Closures
6. The Event Loop (the mechanism that actually manages all of this behind the scenes)

---

## 4. Getting hands-on: using Node from the terminal

### Check your Node version
```bash
node -v
```
This tells you which version of Node.js is installed on your machine.

### Node REPL (Read–Eval–Print Loop)
Typing just `node` (with no file name) into your terminal drops you into the **REPL** — an interactive environment where:

1. **Read** — it reads whatever line of JS you type
2. **Eval** — it evaluates (runs) that code
3. **Print** — it prints the result immediately
4. **Loop** — it goes back to step 1 and waits for your next line

This is great for quickly testing small snippets of JavaScript without creating a whole file.

```bash
$ node
Welcome to Node.js v25.6.1.
Type ".help" for more information.
> 5 + 8
13
> let a = 3;
undefined
> a + 5
8
```

Notice: `let a = 3;` prints `undefined` — that's just because assignment statements don't *return* a value to show. But afterwards, `a` is remembered by the REPL, so `a + 5` correctly gives `8`.

### Running an actual `.js` file
Instead of typing code line-by-line in the REPL, most real work is written in a `.js` file and then run with Node from the terminal:

```js
// index.js
console.log("Hello from Node");
```

```bash
node index.js
# → Hello from Node
```

This is the core workflow you'll use constantly: **write JS in a file → run it with `node filename.js`.**

---

## 5. Native (built-in) Node modules

A **module** is just a reusable chunk of code. Node ships with a bunch of built-in ("native") modules already installed — you don't need to download anything to use them. They cover the same core toolbox mentioned earlier:

- **File system** (`fs`) — reading/writing files
- **Network** — handling web requests
- ...and more, all documented at [nodejs.org/docs](https://nodejs.org/docs/) and explained further at [nodejs.org/learn](https://nodejs.org/learn)

Think of native modules like a **toolbox** that Node hands you for free: a hammer, a saw, a wrench — you don't have to forge your own tools before you can build something.

### Example: the `fs` (file system) module

To use a native module, you `require` it at the top of your file:

```js
const fs = require("fs");
```

**Writing a file:**
```js
fs.writeFile("message.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
```
- Arg 1: file name to create/overwrite
- Arg 2: the text content to put inside it
- Arg 3: a **callback function** — code that runs *after* the write finishes (this is the async pattern from Section 3 in action!)

**Reading a file:**
```js
fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```
- `"utf8"` tells Node to give you the file contents back as readable text. If you skip it, you'll get a raw `Buffer` (a chunk of binary data) instead of a string — good to know if your output ever looks like `<Buffer 48 65 6c 6c 6f ...>` instead of actual words.
- Again, the third argument is a callback: "once you've read the data, *then* run this code with it."

**Important gotcha learned first-hand:** `fs.readFile` needs the *exact* file name/path, including its extension (e.g. `'./message2.txt'`, not `'./message2'`). Leaving off the extension causes an `ENOENT: no such file or directory` error.

---

## 6. NPM — Node Package Manager

Native modules cover the basics, but sometimes you need something more specialized that Node doesn't include by default (e.g., generating QR codes, prompting the user for input in a nice way, etc.). That's where **npm** comes in.

**npm (Node Package Manager)** is:
1. A giant, free online library of code that other developers have written and published (packages).
2. A command-line tool (installed automatically with Node) that lets you download and manage those packages in your own project.

### Initializing a project
Before installing packages, a folder needs a `package.json` file — this is like an ID card for your project that lists its name, version, and (soon) its dependencies.

```bash
npm init
```
This asks you a series of questions (package name, version, description, entry point, etc.) and then generates a `package.json` file for you, e.g.:

```json
{
  "name": "learning-npm",
  "version": "1.0.0",
  "description": "I am learning about NPM",
  "license": "ISC",
  "author": "",
  "type": "commonjs",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

### Installing a package
```bash
npm install <package-name>
# short form:
npm i <package-name>
```
You can install several packages at once by separating names with spaces:
```bash
npm i package-one package-two package-three
```

When you install a package, npm automatically:
- Creates a **`node_modules`** folder — this is where the actual downloaded code lives.
- Creates/updates a **`package-lock.json`** file — this locks down the *exact* versions of everything installed, so the project behaves the same on any machine.
- Adds the package (and its version) to the `"dependencies"` section of your `package.json`.

```json
"dependencies": {
  "sillyname": "^0.1.0"
}
```

### Using an installed package
Once installed, you `require()` it just like a native module — except now you're pulling in someone else's published code instead of a Node built-in:

```js
var generateName = require("sillyname");
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);
// → My name is Quillneck Fairy.
```

That's the whole point of npm: instead of writing everything from scratch, you can lean on code that the community has already built, tested, and shared — same "mayonnaise" idea from Section 1, but for a specific feature instead of the whole framework.

---

## 7. Putting it together — Mini Project: QR Code Generator

This project combined native modules + npm packages + async patterns into one small but complete program.

**Goal:** ask the user for a URL, turn it into a QR code image, and save both the image and the raw URL to disk.

**Packages used (both from npm, found on npmjs.com):**
- [`inquirer`](https://www.npmjs.com/package/inquirer) — makes it easy to ask the user questions in the terminal
- [`qr-image`](https://www.npmjs.com/package/qr-image) — turns text (like a URL) into a QR code image

**Native module used:**
- `fs` — to save the user's input to a `.txt` file

```js
import inquirer from "inquirer";
import qr from "qr-image";
import fs from 'fs';

async function getUserInput() {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: "URL",
        message: 'Enter your URL',
        validate: (input) => {
          return input.trim() !== '' ? true : 'This field cannot be empty';
        }
      },
    ]);

    const url = answers.URL;

    // Turn the URL into a QR code image and save it
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));

    // Save the raw URL text to a file too
    fs.appendFile('user_input.txt', url + '\n', 'utf8', (err) => {
      if (err) {
        console.error('Failed to save file:', err.message);
      } else {
        console.log('User input successfully saved to user_input.txt!');
      }
    });

  } catch (error) {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("Something went wrong:", error);
    }
  }
}

await getUserInput();
```

**Step-by-step, in plain English:**
1. Import the two npm packages (`inquirer`, `qr-image`) and the native `fs` module.
2. Use `inquirer.prompt(...)` to ask the user to type in a URL, with `await` pausing the function until they respond. The `validate` function stops empty submissions.
3. Take the URL the user typed (`answers.URL`) and feed it into `qr.image(url)` to generate a QR code, then `.pipe()` that image straight into a new file called `qr_image.png`.
4. Use `fs.appendFile(...)` (a native `fs` method) to also save the plain-text URL into `user_input.txt`, with a callback that logs success or failure.
5. Wrap everything in `try/catch` so that if anything goes wrong (e.g. the prompt can't render), the program fails gracefully with a helpful message instead of crashing silently.
6. Call `getUserInput()` to actually kick the whole thing off.

This one small script is a nice checkpoint: it uses **native modules** (`fs`), **npm packages** (`inquirer`, `qr-image`), and **asynchronous patterns** (`async`/`await`, callbacks, `try/catch`) — everything covered in this section, working together.

---

## Quick recap cheat-sheet

| Concept | One-line summary |
|---|---|
| **Node.js** | Lets JavaScript run outside the browser (on a server/your machine) |
| **V8** | The engine (from Chrome) that actually executes the JS code |
| **Asynchronous / event-driven** | Slow tasks don't freeze the program; code runs when its event is ready |
| **REPL** | Type `node` in the terminal to test JS line-by-line, interactively |
| **Running a file** | `node filename.js` |
| **Native modules** | Built-in tools that ship with Node (e.g. `fs` for files) — no install needed |
| **npm** | Node's package manager; lets you install other developers' code |
| **`npm init`** | Creates a `package.json` (your project's ID card) |
| **`npm install <pkg>`** | Downloads a package into `node_modules` and records it as a dependency |
| **`require("x")`** | Pulls in a module (native or from npm) so you can use it in your file |
