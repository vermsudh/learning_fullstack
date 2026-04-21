1. Inline JS
2. Internal JS
3. Extrnal JS


![1776415365744](image/dom/1776415365744.png)


Placing `<script>` tags at the very end of an HTML document (just before the closing `</body>` tag) is a common best practice for two main reasons:

* **Preventing "Parser Blocking":** **Browsers read and parse HTML code from top to bottom. When a browser encounters a standard** `<script>` **tag, it must stop parsing the HTML, download the script, and execute it before it can continue reading the rest of the page. By placing scripts at the end, you ensure the browser renders the visual content first, preventing a "blank page" experience for users while a large script loads.**
* **Ensuring the DOM is Ready:** **For JavaScript to interact with HTML elements (like a button or a div), those elements must already exist in the** **Document Object Model (DOM)**. If a script in the `<head>` **tries to find an element that hasn't been created yet, it will often result in an error or return** `null`. Putting the script at the bottom ensures all HTML elements are loaded and accessible to the script.
  ---


**Introduction to DOM**

![1776416362475](image/dom/1776416362475.png)

How to access the DOM.

![1776416717735](image/dom/1776416717735.png)

How to manipulate the HTML element by accessing them.

![1776423851465](image/dom/1776423851465.png)

How to change the color. 

![1776423942183](image/dom/1776423942183.png)

How to perform an action

![1776424054548](image/dom/1776424054548.png)

Get Property: 

    car.colour;  //red

![1776424152284](image/dom/1776424152284.png)

Set Property

![1776424207988](image/dom/1776424207988.png)

Call Method

![1776424239688](image/dom/1776424239688.png)


![1776424306010](image/dom/1776424306010.png)

To access the properties : we will have to use .

To access the methods : we will have to use ()


How to manipulate the values from index.html.

Question Change the li to 'Sudhanshu'

Solution = document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = 'Sudhanshu';

![1776425075799](image/dom/1776425075799.png)

**document.getElementsByTagName("li")**

    This gives you all the the elements with this tag name.

![1776425239576](image/dom/1776425239576.png)

You can change the property by selecting **document.getElementsByTagName("li")**

    But we need to make sure that we select the right element as li are the objects in the array and we would have to specify the location that we would to change.

![1776425358955](image/dom/1776425358955.png)

**document.getElementsByTagName("li").length;**

This will give you the length of that property. 

**document.getElementsByClassName("btn");**

If you notice, that we **getElements in** plural so it will pass us an array. In order to access the value, we would have mention the correct index like [1].

**document.getElementsByClassName("btn")[0].style.color="red";**


Question : How to change the color of the href in first li in the ul?


Solution: document.querySelector("li a").style.color = "red";

---



Important Link related to Manipulating and CHanging styles of HTML elements with Javascript. 

[https://www.w3schools.com/jsref/dom_obj_style.asp]()

![1776427524560](image/dom/1776427524560.png)

To change the background color:

**document.querySelector("#btn").style.backgroundColor = "yellow";**


---

**Seperation of Concerns: Structure vs Style vs Behvaiour**

We can also change the class of any element using this DOM selector.

document.querySelector("h1").classList.add("huge");


Dont forget to create this class in styles.css.

![1776428278254](image/dom/1776428278254.png)

---

**Text Manipulation and the Text Content Property**

![1776428480680](image/dom/1776428480680.png)

---

**Manipulating HTML elements Attributes**

For example : class, src are attributes. Anthing that goes inside the tag are the attributes.

document.querySelector("a").getAttribute("href");

![1776428805722](image/dom/1776428805722.png)
