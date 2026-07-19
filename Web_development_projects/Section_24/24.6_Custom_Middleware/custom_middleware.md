![1784461442225](image/custom_middleware/1784461442225.png)

---

![1784461512390](image/custom_middleware/1784461512390.png)

We have seen Body parser in the pre-processing.


Now, we are going to see logging type middleware.

One of the famous package used inside 

![1784461605270](image/custom_middleware/1784461605270.png)

This library is used to just log the logging information that is being made on the server. It records everything.

![1784461682873](image/custom_middleware/1784461682873.png)

You can use this library Morgan using `app.use` by creating that middleware. You can also go further and read the documentation through this link mentioned below, and you can go as much into detail as you want.

![1784461790509](image/custom_middleware/1784461790509.png)

[expressjs.com/en/resources/middleware/morgan](https://expressjs.com/en/resources/middleware/morgan/)

Also, the middleware will always get triggered before any request is sent to the server. In this case, when someone tries to print hello on the homepage, it calls that function `app.get`, and before that, the `app.use(morgan)` middleware has been triggered already.

---

![1784461881784](image/custom_middleware/1784461881784.png)

---

Exercise : SOl

![1784462161142](image/custom_middleware/1784462161142.png)

Solution : 

![1784462526665](image/custom_middleware/1784462526665.png)

Postman logs: 

![1784462579962](image/custom_middleware/1784462579962.png)

---

![1784462662186](image/custom_middleware/1784462662186.png)

This middleware has req,res anmd next functions.

The next function is used when we want to add more middleware. It basically tells that particular middleware to hop on to the next middleware before going to the server and making any request

![1784462748920](image/custom_middleware/1784462748920.png)

the next function is also important. Just in case, if you have a second middleware, you need to mention the next. If you don't, then it will never reach the next middleware, and your application can crash since it won't. It will just hold the information that it has, and it will never pass it to the server from the client.

---

Exercise: 

![1784462828575](image/custom_middleware/1784462828575.png)
