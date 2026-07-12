[developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dl)

This is the reference document on how to use components and display it in a dictionary format on the website. 

![1783858771739](image/notes/1783858771739.png)

[www.emojimeanings.net/list-smileys-people-whatsapp#google_vignette](https://www.emojimeanings.net/list-smileys-people-whatsapp#google_vignette)

This is just a reference document on Emoji Learning

---

Solution:

Lets define the task to break down the problem.

![1783860746654](image/notes/1783860746654.png)

Inorder to complete the first step:


We need to create a new component called "Entry" and import inside the App.

Step 1) 

![1783861275590](image/notes/1783861275590.png)

![1783861290290](image/notes/1783861290290.png)

---

Step 2)  ` Create the props inside this component to replace the hardcoded data.`

![1783861576949](image/notes/1783861576949.png)



![1783861619411](image/notes/1783861619411.png)

Firstly, we created Entry component. 


Inside the function, we used props as an argument in order to reuse the componets inside the App.jsx.
We defined by `{props.emoji}`, `{props.name}`, `{props.description}`

Then we updated the values of the props inside App.


![1783861788093](image/notes/1783861788093.png)


---

Step 3) Now, we are going to use map function inorder to pull the same data from emojipedia.js where we have defined an array. 

![1783861841546](image/notes/1783861841546.png)

You can't import this array without exporting this, so we are going to use "export default" to firstly export in order to use this inside the App component.



![1783862149327](image/notes/1783862149327.png)

Then, we can import it inside app.jsx using "`import emojipedia from "../emojipedia";`"

You can check if the array has been exported properly by printing on the console. 

`console.log(emojipedia);`

![1783862268642](image/notes/1783862268642.png)

Now, its time to use the map function 

Documentation :[www.w3schools.com/react/react_es6_array_map.asp](https://www.w3schools.com/react/react_es6_array_map.asp)

We are going to delete the Entry component and tap into the data using the map function. 

![1783862397916](image/notes/1783862397916.png)

We are going to create a function called createEntry firstly.

![1783862470690](image/notes/1783862470690.png)


![1783862539479](image/notes/1783862539479.png)

![1783862645127](image/notes/1783862645127.png)


THen passing createEntry inside the map function inside `emojipedia.map(createEntry)`

![1783862703613](image/notes/1783862703613.png)

---



This is how you can use the map function to reuse the components in order to code less.
