![1784379315958](image/express_middleware/1784379315958.png)

In order to explain middleware, let's say the server has been requested using the HTTP methods GET, POST, PUT, PATCH, and DELETE. It can be anything. In the middle, there is middleware that makes sure everything gets delivered properly.

---

Below are the things that will tell us what middleware can do.

![1784379461854](image/express_middleware/1784379461854.png)

The middleware can perform the various steps to make sure that the request, like GET, POST, PUT, DELETE, any HTTP method, is working properly.

Middleware can also be used for the log-in page as well.

We can use middleware for authentication as well. It checks if the request is coming from the client and makes sure the request is secure.Let's say somebody wants to change anything in the database. We have created some website, and we have a database. Middleware is responsible for checking if that particular user has the correct privileges in order to change anything in the database.

![1784379636933](image/express_middleware/1784379636933.png)

It also checks the errors that are coming to the server, so it usually looks out for the errors and makes sure that it identifies those errors before it talks to the server.

![1784379764502](image/express_middleware/1784379764502.png)

![1784379776902](image/express_middleware/1784379776902.png)

![1784379789026](image/express_middleware/1784379789026.png)

---

Body Parser Middleware

![1784379827025](image/express_middleware/1784379827025.png)

![1784379874038](image/express_middleware/1784379874038.png)

![1784379890416](image/express_middleware/1784379890416.png)

![1784380013611](image/express_middleware/1784380013611.png)

---

![1784382040998](image/express_middleware/1784382040998.png)

Here, we are using res.sendFile method in order to send the correct index.html file.

The path in this, the file URL to path, helps us to write less on the path. It directly tells the file to be sent to that particular directory by mentioning less. We just have to mention the public folder and then index.html. Everything else will be prefilled.

---

Now we are going to learn how to use middleware using the body parser library.

![1784458387978](image/express_middleware/1784458387978.png)

![1784461123613](image/express_middleware/1784461123613.png)

![1784458451000](image/express_middleware/1784458451000.png)


---

![1784458531963](image/express_middleware/1784458531963.png)

---

![1784459969571](image/express_middleware/1784459969571.png)

---

![1784460638898](image/express_middleware/1784460638898.png)

middleware is nothing but a layer between the client and the server. It acts as a bodyguard or protection layer between these two. Let's say if somebody is trying to hack into the system, the middleware will check if that request is valid or not valid. On the basis of that, it will revert back to the client. Once the client is legit and sending the correct response, then only it will call the function called `App.get`, and it will do the rest of the thing and respond back to the client. However, if the request is not valid, then the middleware will revert back to the client over there as well and not pass anything to the function which lives inside the server end.

you can take this example in a banking application. Let's say you type in your login and the password. If the password and the login are correct, then only it will fetch the information from the server and show it to the client. However, if it is not correct, then the middleware is responsible for reporting back to the client only and saying that your username and password are incorrect.

---
