

On this question, we were given a challenge. Firstly, when the user opens `localhost:3000`, they should be able to see the index.html page. First, we have to import the express body files from the modules and use them to firstly display the index.html.


After that, what we have to do is create a function that we can use in the middleware. In this case, I have used the function `checkPassword`, and I have defined everything that I want to do in that function. What this function is doing is taking the password. In this case, the password would be the input that is being filled in the form.

It checks if the password is ILOVE_PROGRAMMING. If it is, then it will redirect the user to the secret.html. If it is not, then it will redirect the user back to index.html, where they have to type the password again until they type it right.

In this case, middleware is helping us to check if the user login is matching what we have in our server or, in this case, in our function, and reverting back to that user over there. If it is correct, then it shows us the secret start HTML file, but if it is not, then it redirects back to the login screen where they have to type the password.

Now we were able to understand the concept of middleware, how we can create it, and use it as a login page, as a login security layer that can be between the client and the server (just to check if the login information is correct or not).

![1784467373094](image/understanding_solution/1784467373094.png)
