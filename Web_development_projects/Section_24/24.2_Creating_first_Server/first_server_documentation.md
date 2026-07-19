![1784355260742](image/first_server_documentation/1784355260742.png)

![1784355297092](image/first_server_documentation/1784355297092.png)

The server is a powerful machine that is always running 24/7 and listening to our requests that we might have made through any web application. The application runs on the server 24/7.

![1784355350361](image/first_server_documentation/1784355350361.png)

![1784355412378](image/first_server_documentation/1784355412378.png)

![1784355435914](image/first_server_documentation/1784355435914.png)

The client side is usually the front-end side, which the user can interact with. However, on the server side are usually the application server and database that are running in the background to make that client side running.

---

What we're going to do is that we are going to build a server that we're going to use on the server side.

We are going to create an application using Express and Node.

For now, we are going to use our local computer as a server.

---

Here are the steps to create an Express server.

![1784355584507](image/first_server_documentation/1784355584507.png)

1. We are going to create a directory.
2. We are going to create an index.js file, which is the main file responsible for running the application.
3. We are going to initialize the npm package and install the express package.
4. We are going to write a server application in index.js and start it on our local machine.

---

![1784356161951](image/first_server_documentation/1784356161951.png)

We have created a directory and installed Express.

---

![1784356267637](image/first_server_documentation/1784356267637.png)

we are going to use the 3000 port, and it is the location on the server where our client will be interacting with.

![1784356324992](image/first_server_documentation/1784356324992.png)

`console.log` line is the callback function that is going to be called when the app has been initialized on the 3000 port

![1784356808327](image/first_server_documentation/1784356808327.png)

We need to use type as module inside package.json in order to resolve this issue.

---



![1784356877387](image/first_server_documentation/1784356877387.png)

Local Post is nothing but your local computer that is being replaced by the server. In this case, we can use our computer in order to host our web application, to post, and to host anything that we want. It is basically just for testing purposes, just to make sure everything is working on a computer environment. Once it is ready and not showing any error, then we can publish it, push it to the main server, where it can run 24/7.

---


http://localhost:3000/

![1784356956902](image/first_server_documentation/1784356956902.png)

ports are nothing but doors to the server. Every door, or the port number, has its own functionality. In order to tap into that functionality and use them, you would need to open that particular door or the port number in order to use it.

---

![1784357391026](image/first_server_documentation/1784357391026.png)


in order to check what port is listening to which application or the services, we can use the following command on Windows and Mac OS environment

![1784357522861](image/first_server_documentation/1784357522861.png)

![1784357588801](image/first_server_documentation/1784357588801.png)

in order to stop any server running on port 3000 or any other port, we can use Control+C to stop that local server.

---

When we open the local host URL on the browser:

![1784357756276](image/first_server_documentation/1784357756276.png)
We will get this error message as it is not able to find the home page.

we are going to learn everything in the next module, 24.3, to know why we are not getting our main page to be displayed. In this case, our main page is index.js
