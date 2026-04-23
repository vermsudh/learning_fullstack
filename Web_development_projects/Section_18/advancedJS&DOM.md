![1776850747842](image/advancedJS&DOM/1776850747842.png)

**Learning about Advanced JS and DOM maniuplation**

[https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events]()

[https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener]()

---

**Event Listener**

An **event listener** is  a JavaScript function that "listens" for a specific event (like a click, hover, or keypress) to occur on a web page element and then executes a piece of code in response.

// First we need to select the button inside the HTML code and then add Event listener.

document.querySelector("button").addEventListener("click", handleCLick);

// The addEventListener() method of the EventTarget interface sets up a function that will be called whenever

// the specified event is delivered to the target.

functionhandleCLick(){

    alert("I got clicked!");

}

The reason we have not written handleCLick() becasue we need to wait for the click to happen, in other words we need to wait until the event happens in our case is the click.

---

**Higher Order Functions and Passing Functions as Arguments**

[https://en.wikipedia.org/wiki/JavaScript]()

"Higher order functions are functions that can take other function as inputs."

We can also access the element by using the $0.

![1776858252949](image/advancedJS&DOM/1776858252949.png)

![1776859363880](image/advancedJS&DOM/1776859363880.png)

---

**Debugger on the console**

We can use the debugger by entering

Debugger; //shift + enter and then type the function that you need to debug.

calculator(2,3, add);

![1776860064490](image/advancedJS&DOM/1776860064490.png)

This steps into the next function call.

![1776860274827](image/advancedJS&DOM/1776860274827.png)

If you click again on "step into"

![1776860394926](image/advancedJS&DOM/1776860394926.png)

Task : Add a subtract function and use the debugger to see how the function works.

![1776860814866](image/advancedJS&DOM/1776860814866.png)

---

**Higher Order Function Challenge Solution**

1. **function** add(**num1,num2)**{
2. **return** num1 **+** num2;
3. **}**
4. ---
5. **function** subtract**(**num1**,** num2**)**{
6. **return** num1 **-** num2;
7. **}**
8. ---
9. **function** multiply**(**num1**,** num2**)**{
10. **return** num1  *num2*;
11. **}**
12. ---
13. **function** divide**(**num1**,num2){
14. **return** num1 **/** num2;
15. **}**
16. ---
17. **function** calculator**(**num1**,** num2**,**operator**)**{
18. return **operator**(**num1**, num2);
19. **}**

---

**How to Play Sounds on a Website**

We can use this function to play the sound

![1776861465207](image/advancedJS&DOM/1776861465207.png)

Task : Implement this in the function to play the drum sound when the button is being clicked.

Solution :

varnumberOfDrumButtons=document.querySelectorAll(".drum").length;

for(vari=0; i<numberOfDrumButtons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

**functionhandleClick(){**

**varaudio=newAudio('./sounds/tom-1.mp3');**

**audio.play();**

 **}**

}

---

**How to use Switch Statments in JS**

```
switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  default:
    // Code to execute if no cases match
}
```

![1776916663322](image/advancedJS&DOM/1776916663322.png)

numberOfDrumBottles = defines the length, in other words count the total number of buttons with the class .drum

buttonInnerHTML : In JavaScript, the `this` keyword refers to the **object** that is currently executing the code

---

**Deeper Understanding of JS objects**

![1776916966543](image/advancedJS&DOM/1776916966543.png)

How to create an Object in JS

![1776917009539](image/advancedJS&DOM/1776917009539.png)

Task : Create an object : Housekeeper1

![1776917426460](image/advancedJS&DOM/1776917426460.png)

Now lets say we have multiple HouseKeeper that we need to add.

We are not going to write the properties for these object again and again.

In this case, we will try to create a factory which has all the properties defined already.

In other words : **Constructor Function**

In JavaScript, a **constructor** is  a special function or method used to create and initialize object **instances**= . It defines the initial state (properties and methods) that every object of that type will have.

![1776917587676](image/advancedJS&DOM/1776917587676.png)

If you notice, the first character in the function name needs to be uppercase.

How to Initlize the Object

var bellBoy1 = new BellBoy("Timmy", 19, true, ["french", "english", "Hindi"]);

![1776917817807](image/advancedJS&DOM/1776917817807.png)

Task :Create a constructor using these notes.

Solution :

![1776918057044](image/advancedJS&DOM/1776918057044.png)

---

**Methods**

**Methods** are **actions** that can be performed on objects.

Methods are **functions** stored as  **property values** .

In JavaScript, a **method** is =a function that is stored as a property of an object= [1, 14]. While a standard function is standalone, a method is associated with an object and often operates on the data contained within that object [6, 14, 21].


![1776918431811](image/advancedJS&DOM/1776918431811.png)

Task : Create a function inside the constrcutor and then call it by making a new object.
![1776918757900](image/advancedJS&DOM/1776918757900.png)

We have already created an object of the Audio file.

![1776918936395](image/advancedJS&DOM/1776918936395.png)


---

**Using Keyboard Event Listeners to Check for Key Presses**

Instead of listening our event with a click, we are going to do it using Key Presses.

Now, we are going to implement this into our code. 

We are going to use document.addEventListener("keypress", function(event){console.log(event))}}\)

"keypress" -> is the function that is being uses to listen to the event. In this case it is keyboard keys.

console.log(event) -> this lets us to see which key is being pressed. 

Follow the doc to know about this event : [https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event]()


[https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events]()

![1776919926098](image/advancedJS&DOM/1776919926098.png)

---

**Understanding Callbacks and How to Respond to Events**

![1776923770752](image/advancedJS&DOM/1776923770752.png)

**Callback Function**

In JavaScript, a **callback function** is  =a function passed as an argument into another function= . The "outer" function then executes the callback at a specific time—either immediately or after some task is completed.![1776923813069](image/advancedJS&DOM/1776923813069.png)

![1776930699023](image/advancedJS&DOM/1776930699023.png)

![1776931431767](image/advancedJS&DOM/1776931431767.png)


![1776931859542](image/advancedJS&DOM/1776931859542.png)

---

**Adding Animation to Websites**

![1776933647385](image/advancedJS&DOM/1776933647385.png)
