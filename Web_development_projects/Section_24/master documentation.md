# Section 24 — Express.js Master Documentation

This is your one-stop revision file for Section 24. It merges every module note, every screenshot, and every practice/solution file you wrote into a single beginner-friendly, interview-ready guide. Read it top to bottom the first time; later, use the Table of Contents to jump to whatever you need to refresh.

> All images below are the actual screenshots from your notes — nothing new was added, only organized and explained.

## Table of Contents

1. [24.1 — What is Express?](#241--what-is-express)
2. [24.2 — Creating Your First Server](#242--creating-your-first-server)
3. [24.3 — HTTP Requests & Routing](#243--http-requests--routing)
4. [24.4 — Postman & HTTP Status Codes](#244--postman--http-status-codes)
5. [24.5 — Middleware (Core Concepts)](#245--middleware-core-concepts)
6. [24.6 — Custom Middleware](#246--custom-middleware)
7. [24.7 — Secret Access Project (Capstone)](#247--secret-access-project-capstone)
8. [Quick Interview Q&A Cheat-Sheet](#quick-interview-qa-cheat-sheet)

---

## 24.1 — What is Express?

### The core idea

**Node.js is not a framework — it's a runtime environment.** A runtime environment is just a place where JavaScript code, which normally only runs inside a browser, can run directly on your computer. Node gives JavaScript the ability to touch the file system, open network ports, and act like a backend language (like Python or Java would).

![Node vs Express intro](24.1_Express_basics/image/whatIsExpress/1784354656619.png)
![Node runtime](24.1_Express_basics/image/whatIsExpress/1784354700167.png)

Because Node is "just" a runtime, you can build almost anything with it: web servers, command-line tools, even desktop apps. VS Code itself is built on Node (via Electron) — proof that Node isn't limited to websites.

![Node powers real apps](24.1_Express_basics/image/whatIsExpress/1784354965781.png)
![Node powers real apps 2](24.1_Express_basics/image/whatIsExpress/1784354994766.png)

**Express is a framework built on top of Node** that is specialized for building web applications and APIs. A *framework* means it gives you pre-built tools, conventions, and shortcuts so you don't have to write everything (like parsing raw HTTP requests) from scratch.

### Why do we need Express if we already have Node?

You *could* build a web server using only Node's built-in `http` module — but it would take much more code to do simple things like routing (`/`, `/about`), reading form data, or handling errors.

The analogy from the notes: **Node.js is like a full box of raw tools (hammer, screws, wood) — Express is like an electric screwdriver.** You could build the same thing with just Node, but Express makes common backend jobs dramatically faster and cleaner.

![Node = raw tools](24.1_Express_basics/image/whatIsExpress/1784355051452.png)
![Express = power tool](24.1_Express_basics/image/whatIsExpress/1784355104627.png)

### Why full-stack developers reach for Express

- It's still JavaScript — so a frontend JS developer doesn't need to learn a new language to write backend code.
- It results in **less code, more readable code** compared to plain Node.
- It has first-class support for **middleware** (covered in 24.5/24.6) — a system for plugging in reusable logic like authentication, logging, and parsing.

![Why devs choose Express](24.1_Express_basics/image/whatIsExpress/1784355176054.png)

**In one sentence:** *Express is a lightweight framework, built on Node.js, that makes it fast and simple to build web servers, define routes, and process HTTP requests.*

---

## 24.2 — Creating Your First Server

### What is a "server," really?

A server is just a program running on a machine that stays alive 24/7, constantly listening for incoming requests from clients (browsers, mobile apps, Postman, etc.) and responding to them.

![Server intro](24.2_Creating_first_Server/image/first_server_documentation/1784355260742.png)
![Server intro 2](24.2_Creating_first_Server/image/first_server_documentation/1784355297092.png)

The **client** is the side the user interacts with directly — usually the frontend (browser UI). The **server** is the background machine running your application logic and talking to the database.

![Client vs server](24.2_Creating_first_Server/image/first_server_documentation/1784355350361.png)
![Client vs server 2](24.2_Creating_first_Server/image/first_server_documentation/1784355412378.png)
![Client vs server 3](24.2_Creating_first_Server/image/first_server_documentation/1784355435914.png)

For learning purposes, **your own laptop becomes the server** — this is called running things "locally." Later, in production, you'd deploy the same code to a real always-on machine (like a cloud host).

### Steps to create an Express server

![Steps overview](24.2_Creating_first_Server/image/first_server_documentation/1784355584507.png)

1. Create a project directory.
2. Create an `index.js` — the entry point file Node will run.
3. Run `npm init` to create `package.json`, then `npm install express`.
4. Write the server code in `index.js` and start it.

![Directory + install](24.2_Creating_first_Server/image/first_server_documentation/1784356161951.png)

### The actual code

This is the real, working first server from `24.2_Creating_first_Server/24.21_Express_Server/index.js`:

```js
import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
})
```

Line by line:
- `import express from "express";` — pulls in the Express library (ES module syntax).
- `const app = express();` — calling `express()` creates an **application object**. This `app` is what you'll attach routes and middleware to for the rest of the course.
- `const port = 3000;` — just a JS variable holding which port to run on.
- `app.listen(port, callback)` — this is the line that actually **starts** the server and makes it begin listening for requests on port 3000. The callback function runs once, right after the server successfully starts.

![Port setup](24.2_Creating_first_Server/image/first_server_documentation/1784356267637.png)
![Listen callback](24.2_Creating_first_Server/image/first_server_documentation/1784356324992.png)

### A common gotcha: "Cannot use import statement outside a module"

If you write `import express from "express"` and Node throws this error, it's because Node defaults to CommonJS (`require`) syntax. You must tell Node you're using ES Modules by adding this to `package.json`:

```json
{
  "type": "module"
}
```

![type module fix](24.2_Creating_first_Server/image/first_server_documentation/1784356808327.png)

### "Localhost" and ports, explained simply

**Localhost** means "my own computer, acting as the server," used purely for testing before you deploy to a real, always-on server.

![Localhost explained](24.2_Creating_first_Server/image/first_server_documentation/1784356877387.png)

You access it in the browser at:

```
http://localhost:3000/
```

![Localhost URL](24.2_Creating_first_Server/image/first_server_documentation/1784356956902.png)

**Ports are like doors on the server.** A single machine can run many programs/servers at once, and each one needs its own "door" (port number) so requests know exactly which program to talk to. Port 3000 is a common convention for local Node/Express development (not a hard rule — you could use 4000, 5000, 8080, etc., as long as it's free).

![Ports as doors](24.2_Creating_first_Server/image/first_server_documentation/1784357391026.png)

### Checking and freeing ports

To see what's currently running on a given port:

![Checking ports](24.2_Creating_first_Server/image/first_server_documentation/1784357522861.png)
![Checking ports 2](24.2_Creating_first_Server/image/first_server_documentation/1784357588801.png)

- **Mac/Linux:** `lsof -i :3000`
- **Windows:** `netstat -ano | findstr :3000`

To **stop** a running server in your terminal, press `Control + C`.

### The "Cannot GET /" error

If you start this server and open `http://localhost:3000/` in the browser, you'll see an error:

![Cannot GET error](24.2_Creating_first_Server/image/first_server_documentation/1784357756276.png)

This happens because we only told Express to *listen* — we never told it **what to do** when someone visits the home page (`/`). That's exactly what routing (module 24.3) solves.

---

## 24.3 — HTTP Requests & Routing

### What is HTTP?

**HTTP (HyperText Transfer Protocol)** is the language/protocol that lets a client and a server talk to each other over the internet. It defines a standard format for requests ("give me this page") and responses ("here's the page" or "I couldn't find it").

![HTTP intro](24.3_HTTP_REQUESTS/image/understanding_http/1784357892333.png)
![HTTP protocol](24.3_HTTP_REQUESTS/image/understanding_http/1784357931855.png)
![Request/response cycle](24.3_HTTP_REQUESTS/image/understanding_http/1784359039788.png)

The flow is always: **client sends a request → server processes it → server sends back a response**, tagged with a **status code** (`200` = success, `404` = not found, and many more — full breakdown in 24.4).

### The 5 core HTTP methods

![HTTP methods](24.3_HTTP_REQUESTS/image/understanding_http/1784359109138.png)

| Method | Purpose | Everyday analogy |
|---|---|---|
| **GET** | Request/read a resource (a page, JSON data, a file) | "Show me the page" |
| **POST** | Send new data to the server (create something) | Submitting a signup form |
| **PUT** | Replace/update an entire existing resource | Replacing the whole bike |
| **PATCH** | Partially update part of a resource | Just replacing the broken tire, not the whole bike |
| **DELETE** | Remove a resource (often from a database) | Deleting your account |

The bicycle analogy from the notes: if you order a bike from Amazon and one tire is broken, Amazon has two options — **replace the whole bike (PUT)** or **just replace the broken tire (PATCH)**. That's the real difference between PUT and PATCH: PUT assumes a full replacement, PATCH assumes a partial fix.

![HTTP methods detail](24.3_HTTP_REQUESTS/image/understanding_http/1784359432622.png)
![HTTP methods detail 2](24.3_HTTP_REQUESTS/image/understanding_http/1784359483119.png)

### Why "Cannot GET /" happens — and how routing fixes it

When you run a bare Express server (like the one from 24.2) and visit `/`, you get `Cannot GET /` because Express has no route registered for a GET request to `/`. Express needs to be told explicitly, for every path, what to do.

![Cannot GET explained](24.3_HTTP_REQUESTS/image/understanding_http/1784359549032.png)

We fix this with **`app.get(path, handler)`** — this registers a route: "when a GET request comes in for this exact path, run this function."

![app.get usage](24.3_HTTP_REQUESTS/image/understanding_http/1784362087479.png)

### Real working code (`24.3_HTTP_REQUESTS/practice_question_http/index.js`)

```js
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res)=> {
    res.send("Hello World!");
})

app.get("/about", (req, res) => {
    res.send("This is the about page")
})

app.get("/contact", (req, res) => {
    res.send("This is contact page")
})

app.listen(port, ()=> {
    console.log(`The server is running on this port ${port}`)
})
```

Breaking this down:
- `app.get("/", (req, res) => {...})` — registers a **route handler**. `req` (request) holds info about the incoming request (URL, headers, form data, etc.). `res` (response) is the object you use to send something back to the client.
- `res.send("Hello World!")` — sends a plain text/HTML response back and **ends** the request-response cycle.
- Adding more `app.get(...)` blocks (for `/about`, `/contact`) is literally how you add more pages/routes to an Express app — one handler per path.

![restart to see changes](24.3_HTTP_REQUESTS/image/understanding_http/1784362211752.png)
![home page result](24.3_HTTP_REQUESTS/image/understanding_http/1784362582732.png)

When you visit `http://localhost:3000/`, the browser sends a GET request to `/`. Since the server is running and has a matching route, it runs the handler and prints "Hello World!" back to the browser.

### Nodemon — auto-restarting your server

Notice a pain point: every time you edit `index.js`, you have to manually stop (`Ctrl+C`) and restart the server to see changes. **Nodemon** solves this — it watches your files and automatically restarts the server whenever you save a change, essentially giving you a "live server" experience for backend code.

![Manual restart pain](24.3_HTTP_REQUESTS/image/understanding_http/1784362673845.png)
![Nodemon intro](24.3_HTTP_REQUESTS/image/understanding_http/1784362737788.png)

Usage:
```bash
npx nodemon index.js
```

![nodemon usage](24.3_HTTP_REQUESTS/image/understanding_http/1784362800376.png)

### Adding more pages

Every new page is just another `app.get()` call with a different path string:

![Adding more routes](24.3_HTTP_REQUESTS/image/understanding_http/1784363021046.png)
![about/contact routes](24.3_HTTP_REQUESTS/image/understanding_http/1784363399177.png)

---

## 24.4 — Postman & HTTP Status Codes

### What is Postman?

Postman is a tool that lets you send HTTP requests (GET, POST, PUT, PATCH, DELETE) to your server **without needing a frontend/UI**. This is essential when you're building backend-only APIs, or testing routes before the frontend exists.

![Postman intro](24.4_Postman/image/postman/1784377670387.png)
![Postman basics](24.4_Postman/image/postman/1784377728074.png)

### Full HTTP status code reference

A status code is a 3-digit number the server attaches to every response, telling the client what happened.

![Status codes](24.4_Postman/image/postman/1784377781699.png)

Full official reference: [developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)

![Status code list](24.4_Postman/image/postman/1784377873450.png)

**The easy mnemonic from the notes** — remember it by the first digit:

| Range | Meaning | Mnemonic |
|---|---|---|
| **1xx** | Informational | "Hold on, I'm working on it" |
| **2xx** | Success | "Here you go" |
| **3xx** | Redirection | "Go away, look over there instead" |
| **4xx** | Client error | "You (the client) messed up" |
| **5xx** | Server error | "I (the server) messed up" |

![Status code cheat sheet](24.4_Postman/image/postman/1784378094098.png)

### Example: 301 Redirect in the wild

If you type a slightly wrong domain (e.g., missing a letter in "google.com") into the browser, and the owner of that domain has set up a redirect to the correct URL, you'll see a `301` status in the Network tab (with "Preserve log" enabled in DevTools) — the server is saying "this content has permanently moved, go here instead."

### Testing a form-based route with Postman

If you're building only the backend (no frontend UI yet), you can still fully test it using Postman by manually crafting requests:

![Form request testing](24.4_Postman/image/postman/1784378217986.png)
![Postman testing](24.4_Postman/image/postman/1784378331989.png)
![Postman testing 2](24.4_Postman/image/postman/1784378432738.png)

### Real working code (`24.4_Postman/3.3 Postman/index.js`)

```js
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
```

Key points:
- Each HTTP method has a matching Express method: `app.get`, `app.post`, `app.put`, `app.patch`, `app.delete`. Express routes purely based on **method + path** combined — so `PUT /user/angela` and `PATCH /user/angela` are two completely separate routes even though the path is identical.
- `res.sendStatus(201)` sends **only** a status code (no body) — `201` conventionally means "Created" (used after a successful POST that creates a new resource).
- `res.sendStatus(200)` just confirms success generically.

### Testing it in Postman

To test the register route: select method `POST`, enter URL `localhost:3000/register`, fill in a body, and hit Send. A `200`/`201` response confirms the route works correctly.

![Postman POST test](24.4_Postman/image/postman/1784378906887.png)
![Postman response](24.4_Postman/image/postman/1784378962258.png)
![Postman response 2](24.4_Postman/image/postman/1784379065014.png)
![Postman response 3](24.4_Postman/image/postman/1784379121733.png)
![Postman response 4](24.4_Postman/image/postman/1784379162628.png)

**Why this matters:** Postman lets you verify every single backend route and HTTP method independently — without waiting for a frontend to be built — so you can be confident your API logic is correct in isolation.

---

## 24.5 — Middleware (Core Concepts)

### What is middleware?

**Middleware is a function that sits in between the incoming request and the final route handler.** Every request that hits your Express app can pass through one or more middleware functions before it reaches its destination (e.g., `app.get("/", ...)`), and middleware can inspect, modify, block, or log that request along the way.

![Middleware intro](24.5_Middleware/image/express_middleware/1784379315958.png)

### What middleware can do

![Middleware capabilities](24.5_Middleware/image/express_middleware/1784379461854.png)

Common jobs handled by middleware:
- **Authentication/authorization** — checking a login is valid before letting a request reach a protected route (e.g., verifying a user has permission to change something in a database).
- **Logging** — recording details about every request that comes in.
- **Error handling** — catching and reporting errors before they crash the server.
- **Parsing** — converting raw incoming data (like form submissions) into a usable JS object (`req.body`).

![Middleware auth](24.5_Middleware/image/express_middleware/1784379636933.png)
![Middleware error checking](24.5_Middleware/image/express_middleware/1784379764502.png)
![Middleware flow](24.5_Middleware/image/express_middleware/1784379776902.png)
![Middleware flow 2](24.5_Middleware/image/express_middleware/1784379789026.png)

### The `req, res, next` signature — and why `next()` matters

Every middleware function has this exact shape:

```js
(req, res, next) => { /* ... */ }
```

- `req` — the incoming request object.
- `res` — the response object, used to send data back.
- `next` — a function you call (`next()`) to hand control off to the **next** middleware or route handler in the chain.

**If a middleware doesn't call `next()` and doesn't send a response, the request hangs forever** — the client just waits with no reply. This is one of the most common beginner bugs with Express middleware.

### The bank login analogy

Think of middleware as a **security guard between the client and the server**. When you submit a login form:
1. The request first hits the middleware (the guard).
2. The guard checks: is the username/password correct?
3. If correct → the guard calls `next()`, letting the request continue to the actual route handler, which fetches and returns the protected data.
4. If incorrect → the guard immediately responds with an error/rejection and **never** calls `next()` — the request never reaches the real route logic.

![Bodyguard analogy](24.5_Middleware/image/express_middleware/1784460638898.png)

### Body-parser middleware

Browsers send form data in a raw, encoded format. **`body-parser`** (or Express's built-in `express.urlencoded()`) is middleware that reads that raw data and turns it into a clean JavaScript object accessible at `req.body`.

![Body parser intro](24.5_Middleware/image/express_middleware/1784379827025.png)
![Body parser detail](24.5_Middleware/image/express_middleware/1784379874038.png)
![Body parser detail 2](24.5_Middleware/image/express_middleware/1784379890416.png)
![Body parser detail 3](24.5_Middleware/image/express_middleware/1784380013611.png)

### Serving static files with `res.sendFile`

```js
res.sendFile(__dirname + "/public/index.html");
```

`res.sendFile` sends an actual file (like an HTML page) back as the response. Combined with `__dirname` (the current folder path), you can point directly at files inside a `public/` folder without hardcoding a full absolute path.

![sendFile pattern](24.5_Middleware/image/express_middleware/1784382040998.png)

> **ESM gotcha:** in regular CommonJS Node, `__dirname` exists automatically. But once you set `"type": "module"` in `package.json` (which you must, to use `import`), `__dirname` no longer exists by default. That's why you'll see this pattern everywhere in the course code:
> ```js
> import { dirname } from "path";
> import { fileURLToPath } from "url";
> const __dirname = dirname(fileURLToPath(import.meta.url));
> ```
> This manually reconstructs `__dirname` for ES Modules.

### Using body-parser in practice

![Using body-parser](24.5_Middleware/image/express_middleware/1784458387978.png)
![Using body-parser 2](24.5_Middleware/image/express_middleware/1784461123613.png)
![Using body-parser 3](24.5_Middleware/image/express_middleware/1784458451000.png)
![Using body-parser 4](24.5_Middleware/image/express_middleware/1784458531963.png)
![Using body-parser 5](24.5_Middleware/image/express_middleware/1784459969571.png)

### Real code (`24.5_1 Middleware/solution1.js`)

```js
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

- `app.use(...)` — this is how middleware gets **registered/mounted** onto the app. Unlike `app.get`, `app.use` runs for (almost) every request, regardless of method or exact path (unless you scope it with a path).
- `express.urlencoded({ extended: true })` is the built-in Express equivalent of `body-parser` for parsing HTML form submissions. After this middleware runs, `req.body` becomes a usable object like `{ password: "..." }`.
- Because this middleware is registered with `app.use()` *before* the routes, it runs on every incoming request first, populating `req.body` before any route handler executes.

### Official Express Middleware Concepts (from expressjs.com docs)

Your notes also captured a summary of Express's own official docs — this is genuinely interview-relevant, so here it is in full:

> Express is a routing and middleware web framework that has minimal functionality of its own: **an Express application is essentially a series of middleware function calls.**

Middleware functions can:
- Execute any code.
- Modify the request and response objects.
- End the request-response cycle (send a response).
- Call `next()` to pass control onward.

**If a middleware doesn't end the cycle, it must call `next()`** — otherwise the request is left hanging (same rule as above, confirmed by the official docs).

#### Types of middleware in Express

1. **Application-level middleware** — bound directly to the `app` object via `app.use()` or `app.METHOD()` (e.g. `app.get`, `app.post`).
   ```js
   const express = require('express');
   const app = express();

   app.use((req, res, next) => {
     console.log('Time:', Date.now());
     next();
   });
   ```

2. **Router-level middleware** — identical concept, but bound to an `express.Router()` instance instead of the whole app, so it can be scoped to a specific group of routes.
   ```js
   const router = express.Router();
   router.use((req, res, next) => { /* ... */ next(); });
   ```
   You can call `next('router')` to skip the rest of a router's middleware and return control to the parent app.

3. **Error-handling middleware** — same shape, but with **four** arguments instead of three: `(err, req, res, next)`. Express recognizes it as an error handler purely because of this 4-argument signature.
   ```js
   app.use((err, req, res, next) => {
     console.error(err.stack);
     res.status(500).send('Something broke!');
   });
   ```

4. **Built-in middleware** — ships with Express itself (since v4.16+):
   - `express.static` — serves static files (HTML, CSS, images) from a folder.
   - `express.json` — parses incoming requests with a JSON body.
   - `express.urlencoded` — parses incoming requests with a URL-encoded (form) body.

5. **Third-party middleware** — installed via npm (e.g. `cookie-parser`, `morgan`, `body-parser`) and loaded with `app.use()` just like your own custom middleware.

**Interview-ready summary:** *Middleware in Express is any function that has access to `req`, `res`, and `next`, and either ends the request or passes it along. Express itself is essentially just a stack of middleware functions executed in order.*

---

## 24.6 — Custom Middleware

This module is about **writing your own middleware from scratch**, rather than only using pre-built ones like `body-parser`.

![Custom middleware intro](24.6_Custom_Middleware/image/custom_middleware/1784461442225.png)
![Custom middleware body parser recap](24.6_Custom_Middleware/image/custom_middleware/1784461512390.png)

### Logging middleware with Morgan

**Morgan** is a popular third-party npm package that automatically logs details about every request hitting your server (method, URL, status code, response time, etc.) — useful for debugging and monitoring in real applications.

![Morgan intro](24.6_Custom_Middleware/image/custom_middleware/1784461605270.png)
![Morgan usage](24.6_Custom_Middleware/image/custom_middleware/1784461682873.png)
![Morgan docs link](24.6_Custom_Middleware/image/custom_middleware/1784461790509.png)

Official docs: [expressjs.com/en/resources/middleware/morgan](https://expressjs.com/en/resources/middleware/morgan/)

Real code (`24.6_Custom_Middleware/3.4 Middleware/solution2.js`):

```js
import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

`morgan("combined")` uses Morgan's "combined" log format (a standard, detailed Apache-style log line). Crucially, `app.use(morgan(...))` is registered **before** the route — this matters because **middleware runs in the order it's registered**. So when a request comes in for `/`, Morgan logs it first, then control passes to `app.get("/")`.

### Writing your own middleware function

You don't need a library at all — a custom middleware is just any function matching `(req, res, next)`. Here's a hand-written logger (`24.6_Custom_Middleware/3.4 Middleware/solution3.js`):

```js
import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

- `logger` reads `req.method` (e.g. `"GET"`) and `req.url` (e.g. `"/"`) directly off the request object — no libraries needed.
- `app.use(logger)` mounts it globally, so it runs before every route.
- **`next()` at the end is what makes this work at all** — without it, the request would stop right here and the client would never get "Hello" back.

### Why forgetting `next()` breaks your app

![next() importance](24.6_Custom_Middleware/image/custom_middleware/1784462662186.png)
![next() detail](24.6_Custom_Middleware/image/custom_middleware/1784462748920.png)

If you have multiple middleware functions chained together and one of them forgets to call `next()`, **every middleware after it — and the actual route handler — will never run.** The request just hangs; the client gets no response and eventually times out. This is one of the most common real-world Express bugs.

### Exercise: the Band Name Generator middleware

![Exercise setup](24.6_Custom_Middleware/image/custom_middleware/1784462161142.png)
![Exercise solution](24.6_Custom_Middleware/image/custom_middleware/1784462526665.png)
![Postman logs of exercise](24.6_Custom_Middleware/image/custom_middleware/1784462579962.png)
![Final exercise](24.6_Custom_Middleware/image/custom_middleware/1784462828575.png)

> Note: your `final_exercise.md` file was empty, but the actual working code and images for this exercise exist in the project — reconstructed here from `24.6_Custom_Middleware/3.4 Middleware/solution4.js`.

The challenge: build a page where the user submits their childhood **street name** and **first pet's name**, and the server combines them into a fake "band name."

```js
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

Why this is a great example of custom middleware:
- `bandNameGenerator` is registered globally with `app.use()`, so it runs on **every** request — including the initial `GET /` (where `req.body` will be empty, which is harmless here).
- The middleware's job is narrow and reusable: parse the incoming fields and stash the computed value in a variable, then call `next()`.
- The actual route handler (`app.post("/submit", ...)`) stays clean — it just *uses* `bandName`, it doesn't need to know how it was computed. This separation of concerns (compute in middleware, respond in route) is the core reason middleware exists.

---

## 24.7 — Secret Access Project (Capstone)

### The goal

Build a simple password-gated page:
1. User visits `/` and sees a login form (`index.html`).
2. User submits a password.
3. If the password is correct, they see a protected page (`secret.html`). If not, they're sent back to try again.

This ties together **routing, forms, `body-parser`, and custom middleware for authentication** — everything from 24.2–24.6 — into one project.

![Secret access solution](24.7_secret_access_project/image/understanding_solution/1784467373094.png)

### The starter attempt (`index.js`) — and its subtle bug

```js
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var password = "";

app.use(bodyParser.urlencoded({ extended: true }));

function checkPassword(req, res, next){
    password = req.body["password"];

    if (password === 'ILoveProgramming' ){
        res.sendFile(__dirname + "/public/secret.html")
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
    next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res, next) => {
    res.sendFile(__dirname + "/public/secret.html")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

This works, but it mixes two responsibilities inside one middleware: `checkPassword` both **checks** the password *and* **sends the actual response** (`res.sendFile(...)`). Then it also calls `next()` afterward, which passes control to the `/check` route — which tries to send *another* file. In practice Express allows this because `next()` just moves on, but sending a response and then continuing the middleware chain is a fragile pattern (it works here mostly by luck of the route order) and mixes concerns that are better kept separate.

### The cleaner solution (`solution.js`)

```js
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  next();
}
app.use(passwordCheck);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
    //Alternatively res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

Why this is the better pattern — and the single most important takeaway from this whole section:

**Middleware should decide/check. Routes should respond.**

- `passwordCheck` (the middleware) has exactly one job: look at `req.body.password`, and if it matches, set a flag (`userIsAuthorised = true`). It always calls `next()` and never sends a response itself.
- The `POST /check` **route handler** is the only place that actually calls `res.sendFile(...)`. It simply reads the flag the middleware set and decides which file to send.

This mirrors the bank-login analogy from 24.5 exactly: the middleware (guard) checks credentials and passes a verdict along; the route (bank teller) is the one who actually hands over the money (or the "access denied" message). Keeping these responsibilities separate makes the code easier to test, reuse, and reason about — this is exactly the kind of thing interviewers ask about when they say "explain how you'd structure authentication middleware in Express."

**How to run it yourself:** `node solution.js` (after `npm i` to install dependencies), then submit the password `ILoveProgramming` on the form.

---

## Quick Interview Q&A Cheat-Sheet

**Q: What is Express.js?**
A: A minimal, unopinionated web framework built on top of Node.js that simplifies routing, middleware, and handling HTTP requests/responses for web servers and APIs.

**Q: Is Node.js a framework?**
A: No — Node.js is a JavaScript runtime environment. It lets JS run outside the browser. Express is a framework built on top of that runtime.

**Q: What does `app.listen(port, callback)` do?**
A: Starts the Express server and makes it begin listening for incoming requests on the specified port; the callback runs once the server is up.

**Q: What is a port, conceptually?**
A: A numbered "door" on a machine that a specific service listens on — it lets multiple network services run on the same machine without colliding.

**Q: What causes "Cannot GET /"?**
A: The server is running, but no route handler (e.g. `app.get("/")`) has been registered for that path/method combination.

**Q: What's the difference between PUT and PATCH?**
A: PUT replaces an entire resource; PATCH partially updates just part of it (the "whole bike vs. just the tire" analogy).

**Q: What do HTTP status code ranges mean?**
A: 1xx = informational, 2xx = success, 3xx = redirection, 4xx = client error, 5xx = server error.

**Q: What is middleware in Express?**
A: A function with the signature `(req, res, next)` that runs between the incoming request and the final route handler. It can inspect/modify the request, end the cycle, or call `next()` to pass control forward.

**Q: What happens if a middleware doesn't call `next()`?**
A: The request hangs indefinitely (unless a response was already sent) — nothing after it in the chain will ever execute, and the client gets no response.

**Q: What's the difference between application-level and router-level middleware?**
A: Application-level middleware is bound to the whole `app` object via `app.use()`/`app.METHOD()`. Router-level middleware is the same concept but scoped to an `express.Router()` instance, letting you group and isolate middleware for a subset of routes.

**Q: How do you write error-handling middleware in Express?**
A: Same shape as normal middleware but with 4 arguments instead of 3: `(err, req, res, next)`. Express detects it's an error handler purely by that arity.

**Q: What does `body-parser` (or `express.urlencoded`/`express.json`) do?**
A: Parses the raw incoming request body (form data or JSON) and populates `req.body` with a usable JavaScript object.

**Q: Why do you need `fileURLToPath`/`dirname` in ES Module Express projects?**
A: Because `__dirname` is a CommonJS-only global. Once `"type": "module"` is set in `package.json`, you must manually reconstruct `__dirname` from `import.meta.url`.

**Q: What's the difference between `res.send()`, `res.sendStatus()`, and `res.sendFile()`?**
A: `res.send()` sends text/HTML/JSON as the body. `res.sendStatus()` sends only a status code with its default text (e.g. `200 OK`) as the body. `res.sendFile()` streams an actual file (like an HTML page) as the response.

**Q: Why use Postman instead of a browser to test an API?**
A: Postman lets you send any HTTP method (POST, PUT, PATCH, DELETE) with a custom body/headers — a browser address bar can normally only trigger GET requests directly.

**Q: What does Morgan do?**
A: A third-party logging middleware that automatically records details (method, URL, status, response time) for every incoming request — useful for debugging and monitoring.

**Q: In the Secret Access project, why should the middleware not call `res.sendFile()` directly?**
A: Because middleware's job should be to check/decide (e.g., set an `userIsAuthorised` flag), while the route handler's job should be to respond. Mixing the two makes the code fragile and harder to reason about — the cleaner solution separates "check" (middleware) from "respond" (route).

**Q: Does middleware order matter in Express?**
A: Yes — middleware registered with `app.use()` runs in the exact order it was added, for every matching request, before reaching the final route handler.
