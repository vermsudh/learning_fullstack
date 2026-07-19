# [Using middleware](https://expressjs.com/en/5x/guide/using-middleware/#overview)

Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

*Middleware* functions are functions that have access to the [request object](https://expressjs.com/en/5x/api/request/) (`req`), the [response object](https://expressjs.com/en/5x/api/response/) (`res`), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named `next`.

Middleware functions can perform the following tasks:

* Execute any code.
* Make changes to the request and the response objects.
* End the request-response cycle.
* Call the next middleware function in the stack.

If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise, the request will be left hanging.

An Express application can use the following types of middleware:

* [Application-level middleware](https://expressjs.com/en/5x/guide/using-middleware/#application-level-middleware)
* [Router-level middleware](https://expressjs.com/en/5x/guide/using-middleware/#router-level-middleware)
* [Error-handling middleware](https://expressjs.com/en/5x/guide/using-middleware/#error-handling-middleware)
* [Built-in middleware](https://expressjs.com/en/5x/guide/using-middleware/#built-in-middleware)
* [Third-party middleware](https://expressjs.com/en/5x/guide/using-middleware/#third-party-middleware)

You can load application-level and router-level middleware with an optional mount path. You can also load a series of middleware functions together, which creates a sub-stack of the middleware system at a mount point.

---

## [Application-level middleware](https://expressjs.com/en/5x/guide/using-middleware/#application-level-middleware)

Bind application-level middleware to an instance of the [app object](https://expressjs.com/en/5x/api/application/) by using the `app.use()` and `app.METHOD()` functions, where `METHOD` is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

This example shows a middleware function with no mount path. The function is executed every time the app receives a request.

CommonJSESMTypeScript

index.cjs

```
constexpress=require('express');constapp=express();
app.use((req, res, next) => {console.log('Time:', Date.now());next();});
```

This example shows a middleware function mounted on the `/user/:id` path. The function is executed for any type of HTTP request on the `/user/:id` path.

---

## [Router-level middleware](https://expressjs.com/en/5x/guide/using-middleware/#router-level-middleware)

Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of `express.Router()`.

JavaScriptTypeScript

```
constrouter= express.Router();
```

Load router-level middleware by using the `router.use()` and `router.METHOD()` functions.

The following example code replicates the middleware system that is shown above for application-level middleware, by using router-level middleware:

CommonJSESMTypeScript

index.cjs

To skip the rest of the router’s middleware functions, call `next('router')` to pass control back out of the router instance.

This example shows a middleware sub-stack that handles GET requests to the `/user/:id` path.

---

## [Error-handling middleware](https://expressjs.com/en/5x/guide/using-middleware/#error-handling-middleware)

Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature `(err, req, res, next)`:

JavaScriptTypeScript

```
app.use((err, req, res, next) => {console.error(err.stack);res.status(500).send('Something broke!');});
```

For details about error-handling middleware, see: [Error handling](https://expressjs.com/en/5x/guide/error-handling/).

## [Built-in middleware](https://expressjs.com/en/5x/guide/using-middleware/#built-in-middleware)

Starting with version 4.x, Express no longer depends on [Connect](https://github.com/senchalabs/connect). The middleware functions that were previously included with Express are now in separate modules; see [the list of middleware functions](https://github.com/senchalabs/connect#middleware).

Express has the following built-in middleware functions:

* [express.static](https://expressjs.com/en/5x/api/express/#expressstatic) serves static assets such as HTML files, images, and so on.
* [express.json](https://expressjs.com/en/5x/api/express/#expressjson) parses incoming requests with JSON payloads. **NOTE: Available with Express 4.16.0+**
* [express.urlencoded](https://expressjs.com/en/5x/api/express/#expressurlencoded) parses incoming requests with URL-encoded payloads. **NOTE: Available with Express 4.16.0+**

## [Third-party middleware](https://expressjs.com/en/5x/guide/using-middleware/#third-party-middleware)

Use third-party middleware to add functionality to Express apps.

Install the Node.js module for the required functionality, then load it in your app at the application level or at the router level.

The following example illustrates installing and loading the cookie-parsing middleware function `cookie-parser`.

---
