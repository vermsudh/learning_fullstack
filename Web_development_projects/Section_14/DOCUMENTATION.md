# Section 14: Introduction to JavaScript

## Overview
This section introduces JavaScript, the programming language of the web. You'll learn about variables, data types, functions, and how to write interactive scripts that run in the browser.

---

## Table of Contents

1. [JavaScript Fundamentals](#javascript-fundamentals)
2. [Data Types](#data-types)
3. [Variables](#variables)
4. [String Operations](#string-operations)
5. [Arithmetic Operations](#arithmetic-operations)
6. [Functions](#functions)
7. [Coding Challenges](#coding-challenges)

---

## JavaScript Fundamentals

### What is JavaScript?

JavaScript is a high-level, interpreted programming language that runs in web browsers. It allows you to:
- Make web pages interactive
- Manipulate HTML and CSS dynamically
- Respond to user actions
- Store and retrieve data

### Interpreter vs Compiler

```
┌─────────────────────────────────────────────────────────┐
│                    INTERPRETER                          │
│  - Reads code line by line                              │
│  - Executes immediately                                 │
│  - JavaScript uses interpretation                       │
│  - Faster to start, slower for large programs           │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                     COMPILER                            │
│  - Reads entire code at once                            │
│  - Converts to machine code before execution            │
│  - C, C++, Java use compilation                         │
│  - Slower to start, faster for large programs           │
└─────────────────────────────────────────────────────────┘
```

**JavaScript is an Interpreted Language:**
- Code is executed line by line by the browser
- No compilation step needed
- Easy to test and debug in browser console

### Running JavaScript

**1. Browser Console:**
- Open DevTools (F12 or Right-click → Inspect)
- Go to Console tab
- Type JavaScript directly

**2. Script Tags in HTML:**
```html
<script>
  alert("Hello World!");
</script>
```

**3. External JavaScript File:**
```html
<script src="./script.js"></script>
```

**4. Code Snippets (Chrome DevTools):**
- Open DevTools → Sources → Snippets
- Create new snippet for longer scripts
- Run with Ctrl/Cmd + Enter

---

## Data Types

JavaScript has several built-in data types:

### 1. Strings

Text data enclosed in quotes:

```javascript
"Hello World"
'Sudhanshu'
`Template literals with ${variables}`
```

### 2. Numbers

Numeric values (integers and decimals):

```javascript
123
3.14
-50
```

### 3. Booleans

True or false values:

```javascript
true
false
```

### 4. Checking Data Types

Use `typeof` operator:

```javascript
typeof "Hello"      // "string"
typeof 123          // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
```

---

## Variables

### What are Variables?

Variables are containers for storing data values in memory. Think of them as labeled boxes where you can store information for later use.

```
┌─────────────────────────────────────────┐
│           MEMORY                        │
│  ┌─────────────────┐                    │
│  │  myName         │  →  "Sudhanshu"    │
│  └─────────────────┘                    │
│                                          │
│  ┌─────────────────┐                    │
│  │  age            │  →  25             │
│  └─────────────────┘                    │
└─────────────────────────────────────────┘
```

### Declaring Variables

**Using `var` (Older method):**
```javascript
var myName = "Sudhanshu";
var age = 25;
```

**Using `let` (Modern method - recommended):**
```javascript
let myName = "Sudhanshu";
let age = 25;
```

**Using `const` (For constants):**
```javascript
const PI = 3.14159;
```

### Variable Components

```javascript
var myName = "Sudhanshu";
│   │        │
│   │        └─ Value (the actual data)
│   └────────── Variable Name (identifier)
└────────────── Keyword (var, let, const)
```

### Reassigning Variables

```javascript
var myName = "Sudhanshu";
myName = "Sid";  // Reassigning new value

alert(myName);  // Outputs: "Sid"
```

### Getting User Input

```javascript
// Prompt displays a dialog box
var yourName = prompt("What is your name?");

// Store the response
console.log(yourName);  // Outputs what user typed
```

---

## Variable Naming Rules

### Valid Variable Names

```javascript
var name = "Sudhanshu";
var $name = "Sudhanshu";
var _name = "Sudhanshu";
var name123 = "Sudhanshu";
var firstName = "Sudhanshu";  // camelCase (recommended)
```

### Invalid Variable Names

```javascript
var var = "Sudhanshu";     // ERROR: Reserved keyword
var 123name = "Sudhanshu"; // ERROR: Can't start with number
var first-name = "Sudhanshu"; // ERROR: Hyphens not allowed
var my name = "Sudhanshu"; // ERROR: No spaces
```

### Naming Best Practices

| Bad Names | Good Names |
|-----------|------------|
| `var a` | `var age` |
| `var d` | `var dogAge` |
| `var temp` | `var temperature` |
| `var x123` | `var finalScore` |

**camelCase Convention:**
```javascript
var firstName = "Sudhanshu";
var finalScore = 100;
var totalNumberOfUsers = 50;
```

---

## String Operations

### String Concatenation

Joining strings together:

```javascript
// Using + operator
"a" + "b"  // "ab"

// With variables
var message = "Hi there, ";
var myName = "Sudhanshu";

alert(message + myName);  // "Hi there, Sudhanshu"

// Building complex messages
alert("My name is " + myName + ", Welcome to my course " + myName);
```

### String Length

Get the number of characters:

```javascript
var myName = "Sudhanshu";
myName.length;  // 9

var tweet = "Hello World";
tweet.length;  // 11
```

**Practical Example - Tweet Counter:**
```javascript
var tweet = prompt("Type your tweet");
var tweetCount = tweet.length;

alert("You have written " + tweetCount + " characters, you have " + 
      (140 - tweetCount) + " characters left.");
```

### String Slicing

Extract parts of a string:

```javascript
var name = "Sudhanshu";

name.slice(0, 1);   // "S" - First character
name.slice(5, 6);   // "n" - Character at position 5
name.slice(0, 4);   // "Sudh" - First 4 characters
name.slice(2);      // "dhanshu" - From position 2 to end
```

**Slicing Parameters:**
```javascript
string.slice(start, end)
// start: Index to begin extraction (inclusive)
// end: Index to stop extraction (exclusive)
```

**Practical Example - Limit Tweet to 140 Characters:**
```javascript
var tweet = prompt("Type your tweet");
var tweetUnder140 = tweet.slice(0, 140);

console.log(tweetUnder140);
```

### Changing Case

**toUpperCase():**
```javascript
var name = "sudhanshu";
name.toUpperCase();  // "SUDHANSHU"
```

**toLowerCase():**
```javascript
var name = "SUDHANSHU";
name.toLowerCase();  // "sudhanshu"
```

**Practical Example - Name Formatter:**
```javascript
// Capitalize first letter, lowercase rest
var name = prompt("Enter your name!");

var firstChar = name.slice(0, 1);
var lastChars = name.slice(1);

var newName = firstChar.toUpperCase() + lastChars.toLowerCase();

alert("Hi, " + newName);
```

---

## Arithmetic Operations

### Basic Operators

```javascript
// Addition
var sum = 3 + 5;  // 8

// Subtraction
var diff = 10 - 4;  // 6

// Multiplication
var product = 3 * 5;  // 15

// Division
var quotient = 6 / 2;  // 3

// Exponentiation
var squared = 2 ** 3;  // 8 (2 to the power of 3)
```

### Order of Operations (BODMAS/PEMDAS)

```javascript
3 + 5 * 2;  // 13, NOT 16

// Why? Multiplication happens before addition
// 5 * 2 = 10, then 3 + 10 = 13

// Use parentheses to change order
(3 + 5) * 2;  // 16
```

### Modulo Operator (%)

Returns the remainder after division:

```javascript
9 % 6;    // 3 (9 ÷ 6 = 1 remainder 3)
12 % 2;   // 0 (12 ÷ 2 = 6 remainder 0)
10 % 3;   // 1 (10 ÷ 3 = 3 remainder 1)
```

**Common Uses:**
```javascript
// Check if number is even
var isEven = (num % 2 === 0);

// Check if number is odd
var isOdd = (num % 2 === 1);
```

### Math Methods

**Math.floor()** - Round down:
```javascript
Math.floor(4.7);  // 4
Math.floor(4.2);  // 4
```

**Math.ceil()** - Round up:
```javascript
Math.ceil(4.2);   // 5
Math.ceil(4.7);   // 5
```

**Math.round()** - Round to nearest:
```javascript
Math.round(4.5);  // 5
Math.round(4.4);  // 4
```

**Math.pow()** - Exponentiation:
```javascript
Math.pow(2, 3);  // 8 (2³)
Math.pow(5, 2);  // 25 (5²)
```

**Practical Example - Dog Age to Human Age:**
```javascript
var dogAge, humanAge;

dogAge = prompt("Type the Dog's Age:");

// Formula: First 2 years = 21 human years, then each year = 4 human years
humanAge = ((dogAge - 2) * 4) + 21;

console.log("Human Age is: " + humanAge);
```

---

## Increment and Decrement

### Increment (++)

Add 1 to a variable:

```javascript
var x = 5;
x++;        // x is now 6
x = x + 1;  // Same as x++
```

### Decrement (--)

Subtract 1 from a variable:

```javascript
var x = 5;
x--;        // x is now 4
x = x - 1;  // Same as x--
```

---

## Functions

### What are Functions?

Functions are reusable blocks of code that perform specific tasks. Think of them as mini-programs within your program.

```
┌─────────────────────────────────────────┐
│           FUNCTION ANALOGY              │
│                                          │
│   Making Coffee Function:                │
│   1. Get cup                            │
│   2. Add coffee powder                  │
│   3. Add hot water                      │
│   4. Stir                               │
│   5. Serve                              │
│                                          │
│   Call function = Make coffee again!    │
└─────────────────────────────────────────┘
```

### Creating Functions

**Basic Syntax:**
```javascript
function functionName() {
  // Code to execute
  console.log("Step 1");
  console.log("Step 2");
}
```

**Example - Milk Collection:**
```javascript
function getMilk() {
  console.log("Leave House");
  console.log("Move Right");
  console.log("Move Right");
  console.log("Move Right");
  console.log("Move Right");
  console.log("Move Left");
  console.log("Move Left");
  console.log("Move Left");
  console.log("Move Left");
  console.log("Buy Milk");
}
```

### Calling Functions

```javascript
// Define the function
function getMilk() {
  console.log("Leave House");
  console.log("Buy Milk");
}

// Call the function
getMilk();  // Executes the code inside
```

### Functions with Parameters

Parameters are variables that receive values when the function is called:

```javascript
function getMilk(bottles) {
  console.log("Move Right");
  console.log("Move Right");
  console.log("Buy " + bottles + " bottles of milk");
  console.log("Move Left");
  console.log("Move Left");
}

// Call with argument
getMilk(5);  // "Buy 5 bottles of milk"
```

**Parameter vs Argument:**
- **Parameter:** The variable in the function definition (`bottles`)
- **Argument:** The actual value passed when calling (`5`)

### Multiple Parameters

```javascript
function getMilk(money, costPerBottle) {
  console.log("Leave house");
  console.log("Move Right");
  
  var numOfBottles = Math.floor(money / costPerBottle);
  
  console.log("Buy " + numOfBottles + " bottles");
  console.log("Move Left");
}

getMilk(10, 2);  // Buy 5 bottles
```

### Return Values

Functions can return values to be used elsewhere:

```javascript
function getMilk(money) {
  console.log("Leave house");
  
  var change = money % 1.5;
  
  console.log("Move Left");
  
  return change;  // Send value back
}

var myChange = getMilk(5);
console.log("Here is your " + myChange + " change");
```

### Calling Functions Inside Functions

```javascript
function getMilk(money) {
  console.log("Leave house");
  console.log("Buy " + calcBottles(money, 1.5) + " bottles");
  console.log("Here is your " + calcChange(money, 1.5) + " change");
}

function calcBottles(startingMoney, costPerBottle) {
  var numOfBottles = Math.floor(startingMoney / costPerBottle);
  return numOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
  var change = startingAmount % costPerBottle;
  return change;
}

getMilk(10);
```

---

## Coding Challenges

### Challenge 1: Variable Swap

**Problem:** Swap the values of two variables without using numbers.

```javascript
// Given:
var a = "3";
var b = "8";

// Goal:
// a should be "8"
// b should be "3"
```

**Solution:**
```javascript
var c = a;  // Store a's value in temporary variable
a = b;      // Put b's value into a
b = c;      // Put stored value into b

console.log("a is " + a);  // "a is 8"
console.log("b is " + b);  // "b is 3"
```

---

### Challenge 2: Life in Weeks

**Problem:** Calculate how many days, weeks, and months left if you live until 90.

```javascript
// Input: Current age (e.g., 56)
// Output: "You have 12410 days, 1768 weeks, and 408 months left."
```

**Solution:**
```javascript
function lifeInWeeks(age) {
  var ageInDays = age * 365;
  var ageInWeeks = age * 52;
  var ageInMonths = age * 12;

  var daysIn90 = 90 * 365;
  var weeksIn90 = 90 * 52;
  var monthsIn90 = 90 * 12;

  console.log("You have " + (daysIn90 - ageInDays) + " days, " +
              (weeksIn90 - ageInWeeks) + " weeks, and " +
              (monthsIn90 - ageInMonths) + " months left.");
}

lifeInWeeks(56);
```

---

### Challenge 3: BMI Calculator

**Problem:** Calculate BMI from weight and height, rounded to nearest whole number.

```
        weight (kg)
BMI = ───────────────
       height² (m²)
```

**Solution:**
```javascript
function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  // Or using Math.pow:
  // var bmi = weight / Math.pow(height, 2);
  
  return Math.round(bmi);
}

// Example usage:
// bmiCalculator(70, 1.75) returns 23
```

---

## Summary

### Data Types Quick Reference

| Type | Example | typeof Result |
|------|---------|---------------|
| String | `"Hello"` | `"string"` |
| Number | `123`, `3.14` | `"number"` |
| Boolean | `true`, `false` | `"boolean"` |

---

### Variable Declaration

| Keyword | Reassignable | Block Scoped | Use Case |
|---------|--------------|--------------|----------|
| `var` | Yes | No | Legacy code |
| `let` | Yes | Yes | Modern variables |
| `const` | No | Yes | Constants |

---

### String Methods

| Method | Description | Example |
|--------|-------------|---------|
| `length` | Get character count | `"Hi".length` → `2` |
| `slice(start, end)` | Extract substring | `"Hello".slice(0, 2)` → `"He"` |
| `toUpperCase()` | Convert to uppercase | `"hi".toUpperCase()` → `"HI"` |
| `toLowerCase()` | Convert to lowercase | `"HI".toLowerCase()` → `"hi"` |

---

### Arithmetic Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `3 + 5` | `8` |
| `-` | Subtraction | `10 - 4` | `6` |
| `*` | Multiplication | `3 * 5` | `15` |
| `/` | Division | `6 / 2` | `3` |
| `%` | Modulo | `9 % 6` | `3` |
| `**` | Exponent | `2 ** 3` | `8` |

---

### Function Syntax

```javascript
// Basic function
function greet() {
  console.log("Hello!");
}

// With parameter
function greet(name) {
  console.log("Hello, " + name);
}

// With return value
function add(a, b) {
  return a + b;
}
```

---

## Resources

### Documentation
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [MDN Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

### Best Practices
- [Idiomatic.js](https://github.com/rwaldron/idiomatic.js/) - JavaScript style guide

### Practice Platforms
- [Repl.it](https://repl.it/) - Online code editor
- [Karel Game](https://stanford.edu/~cpiech/karel/ide.html) - Learn functions through games

### Tools
- Chrome DevTools Snippets - For testing longer scripts
- Browser Console - For quick experiments

---

## Practice Exercises

1. **Variables:** Create variables for your name, age, and favorite color
2. **String Operations:** Build a tweet counter that shows remaining characters
3. **Arithmetic:** Create a tip calculator function
4. **Functions:** Write a function that converts Celsius to Fahrenheit
5. **Challenge:** Build a age-in-dog-years calculator
