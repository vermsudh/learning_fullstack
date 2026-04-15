

Brendan Eich was the creator of Javascript.

Earlier it was called Live Script.

Then Microsoft named Jscript

European tried to standardized Javascript where ES6 became popular.

What does Javascript stands for?

JAVA VS JAVASCRIPT

Java is a complier based langauges. On the other hand, Javascript is interpretor language.



You can us snippets to run long script.

We will be using Snippets on the next few lessons while running our scrip in JS.

You can learn all the keywords of JS through this link
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference](MDN javascript webdoc)


This repo will be quite usefeul while developing anything in JS 

[https://github.com/rwaldron/idiomatic.js/]()

---

**DATA TYPES**

1) String : "Hello World"
2) Numbers : 123
3) Boolean : True or False

We can go to the console and type :

alert(2+6); to get a popup with an output. 

typeof(true)

'boolean'

---

**VARIABLES**

,In order to store any information in the memory, we would need to use variables.

For example : you prompt a user to ask for his/her name. You would need to store this value that the user provided in a variable in order to use it in future.

Example :
prompt("What is your name?");
'Sudhanshu'

var myName = "Sudhanshu";

var is the variable,

myName is the varibale name,

Sudhanshu is the value.

In order to change the value of any variable, then you can just assign the new name value to the var

For example : myName = "Sid";

alert(myName);

var yourName = prompt("What is your name");

yourName

'Sid'


alert("My name is " + myName + ", Welcoome to my course " + myName);

---

**RULES on NAMING the VARIBALES**

Coding Exercise (JS variable Exercise)):


Javascript Variables Exercise

Given the existing code below, can you write some code so that their values are switched around?

<pre class="prettyprint linenums prettyprinted" role="presentation"><ol class="linenums"><li class="L0"><p><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"></span><span class="str">"3"</span><span class="pun">;</span></p></li><li class="L1" data-node-id="20260414154612-erz5qbh"><p><span class="kwd">var</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"></span><span class="str">"8"</span><span class="pun">;</span></p></li></ol></pre>

So that the variable `a` holds the value "8".

And the variable `b` holds the value "3".

When the code is run, it should output:

`a is 8`

`b is 3`

Do **NOT** change any of the existing code.

You are **NOT** allowed to type any numbers.

You should **NOT** redeclare the variables a and b.

Hint: Use [this code playground](https://repl.it/@appbrewery/JS-Variables-Exercise) to run your code and see if it matches your expectations.

Hint: The solution is just 3 lines of code.

SOUTION: 

let c = a;

a = b;

b =c;

---

**NAMING AND NAMING CONVENTIONS FOR JAVASCRIPT VARIABLES**

The variable should be meaningful. 

You cant name your variables with the JS javascript.

Bad convection names eg : 

1. var var
2. var 123
3. var ashausdyfioasfnnasd
4. var sid-v

Good Convection Name : It should be camelasing 

Example : 

    var finalScore


---

**String Concatenation**

Examples: 

1) "a" + "b" = "ab"
3) var message = "Hi there, ";
   var myName = "Sudhanshu";

    alert(message + myName);


---

**String Lenghts and Retrieiving the Number of Characters**

To get the length of the variable. 

We can use word.length

Example :

var myName="Sudhanshu";

myName.length();

Ans : 9

Question : Try to print a message that will tell you the exact leangth that you have typed. 

var tweet = prompt("Type your tweet");

var tweetCount = tweet.length;

alert("You have written " + tweetCount + "characters, you have " + (140-tweetCount) + "characters left.")

---

**Slicing and Extracting Part of a String**

var name = "Sudhanshu";
name.slice(0,1);

Ans : "S"

name.slice(5,6);

Ans : 'n'

name.slice(0,4);

Ans : "Sudh"

Question : Write a logic where the characters will cut after 140 characters only and display that only. 


var tweet = prompt("Type your tweet");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + "characters, you have " + (140-tweetCount) + "characters left.")

var tweetUnder140 = tweet.slice(0 , 140);

console.log(maxInput);

---

**toUpperCase() Method**

var name = "sudhanshu";
name.toUpperCase();

Ans :
SUDHANSHU

name = name.toLowerCase();

Ans : sudhanshu


Question : Write a prompt where it ask the user for their name, if they return the name, Just alert them by saying Hey! , Name of the user where the first character should be uppercase and the rest should be lowercase.

Ans:

var name = prompt("Enter your name!");
var firstChar = name.slice(0,1);

var lastChars = name.slice(1);
var newName = firstChar.toUpperCase() + lastChars.toLowerCase();

alert("Hi, "+ newName);

---

**Basic Arithmetic and the Modulo Operator in Javascript** 

1) var d = 6/2 = > 3
   Modulo
2) var e = 9 %6;
   12 % 2 -> 0
3) 3 + 5 * 2 -> 13 (BODMAS)

Calulating Human Age through Dog's age : 

Formula : humanAge = (dogAge - 2) * 4 + 21;

Ans :

var humanAge, dogAge;

dogAge = prompt("Type the Dog's Age.")

humanAge = (()dogAge - 2) * 4) + 21;

console.log("Human Age is : " + humanAge);

---

**Increment and Decrement Expressions**

var x = 5

x++;

x = x + 1;

which is 6

Decrement Expression : 

X-- = X - 1

---

**Functions**

**Part1** 

Creating a Function 

    function getMilk(){

    alert("eaveHouse");

    }

Calling the function : getMilk();

Challenge : [https://stanford.edu/~cpiech/karel/ide.html]()

---

**Functions - Part 2 Parameters and Arguments**

function getMilk(bottles){
    console.log("Move Right");
    console.log("Move Right");
    console.log("Move Right");
    console.log("Move Right");
    console.log("Move Left");
    console.log("Move Left");
    console.log("Move Left");
    console.log("Move Left");
    console.log("Move " + bottles + " to the shelf");
}
getMilk(12);

function getMilk(money){
    console.log("Leave house");
    console.log("Move Right");
    console.log("Move Right");
    console.log("Move Right");
    console.log("Move Left");
    console.log("Move Left");
    console.log("Move Left");
    console.log("Move Left");

    var numOfBottles = Math.floor(money / 1.5);

    console.log("buy " + numOfBottles + " ");
}
getMilk(34);

// We can use the floor method to round up the number

---

**Coding Question** 


Question

Life in Weeks Coding Exercise

I was reading this article by [Tim Urban - Your Life in Weeks](https://waitbutwhy.com/2014/05/life-weeks.html) and realised just how little time we actually have.

In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.

It will take your current age as the input and console.logs a message with our time left in this format:

*You have x days, y weeks, and z months left.*

Where x, y and z are replaced with the actual calculated numbers.

For this challenge, assume there are **365** days in a year, **52** weeks in a year and **12** months in a year.

**IMPORTANT** your** console.log** output should match the Example Output format exactly, even the positions of the commas and full stops.

**Example Input**

e.g. If you are 56 years old:

<pre class="prettyprint linenums prettyprinted" role="presentation"><ol class="linenums"><li class="L0"><p><span class="pln">lifeInWeeks</span><span class="pun">(</span><span class="lit">56</span><span class="pun">)</span></p></li></ol></pre>

**Example Output**

<pre class="prettyprint linenums prettyprinted" role="presentation"><ol class="linenums"><li class="L0"><p><span class="typ">You</span><span class="pln"> have </span><span class="lit">12410</span><span class="pln"> days</span><span class="pun">,</span><span class="pln"></span><span class="lit">1768</span><span class="pln"> weeks</span><span class="pun">,</span><span class="pln"></span><span class="kwd">and</span><span class="pln"></span><span class="lit">408</span><span class="pln"> months left</span><span class="pun">.</span></p></li></ol></pre>

**Hint**

1. Try using [this Repl.it playground](https://repl.it/@appbrewery/Age-In-Weeks-Challenge) to test your code and see if the output is what you expect it to be.
2. Make sure your console.log output matches the example output precisely. The same capitalisation, the same spaces, co

   My Answer:


function lifeInWeeks(age) {

/************Don't change the code above************/

    //Write your code here.
    var ageIntoDays = age * 365;
    var ageIntoWeeks = age * 52;
    var ageIntoMonths = age * 12;

    var daysIn90 = 90 * 365;
    var weeksIn90 = 90 * 52;
    var monthsIn90 = 90 * 12;

console.log("You have " + (daysIn90 - ageIntoDays) + " days, "

+ (weeksIn90 - ageIntoWeeks) + " weeks, and " + (monthsIn90 - ageIntoMonths) + " months left.");
  /*************Don't change the code below**********/
  }

---

**Function Part 3 : Output and Return Values**


function getMilk(money){
    console.log("Leave house");
    console.log("Move Right");
    console.log("Move Right");
    console.log("Move Right");
    console.log("buy " + calcBottles(money, 1.5) + " bottles of milk ");
    console.log("Move Left");
    console.log("Move Left");
    console.log("Move Left");
    console.log("Move Left");

    return calChange(money, 1.5);

}

function calcBottles(startingMoney, costPerBottle){

    var numOfBottles = Math.floor(startingMoney / costPerBottle);

    return numOfBottles;
}

function calChange( startingAmount, costPerBottle){
    var change = startingAmount % costPerBottle;
    return change;
}

console.log("Hello Master, Here is your " + getMilk(5)+ " change");

---

**Coding Challenge -2** 


BMI Calculator Challenge

Create a BMI calculator using JavaScript functions.

The Body Mass Index (BMI) is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease.

You can calculate it using the formula below, where weight divided by height squared.

![](https://img-c.udemycdn.com/redactor/raw/2018-04-10_10-46-19-6f9dd56427369af15157541db9ec7888.png)

Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an  **output** . The output should be rounded to the nearest whole number.

The first parameter should be the weight and the second should be the height.

 **NOTE** : You do not need to write any **alerts** or **prompts** or  **console logs** . Your code should only contain the function, the result has to be **returned** by the function. You **do not **need to call the function.

Ans : 

function bmiCalculator(weight, height){

    var calBmi = Math.round(weight / (Math.pow(height, 2)));

    return calBmi;

}
