**API**

What is an API?

It is Application Programming Interface. It is a set of rules on how different software interact with each other. 

![1776825028401](image/understanding_API/1776825028401.png)

It is a bridge with different softwares. 


![1776825210920](image/understanding_API/1776825210920.png)

Few examples of an API's

![1776825494303](image/understanding_API/1776825494303.png)

 ![1776825644108](image/understanding_API/1776825644108.png)

Exercise : Find out the location of International Space Station using the API on Postman?

*[https://wheretheiss.at/w/developer]()*

![1776826606158](image/understanding_API/1776826606158.png)

![1776826678506](image/understanding_API/1776826678506.png)

---

**Structuring API Requests**

![1776828231250](image/understanding_API/1776828231250.png)

API endpoints

BaseURL/Endpoint

![1776833169274](image/understanding_API/1776833169274.png)

Exercise: [https://bored-api.appbrewery.com/]()

Visit this API documentation, and go to Postman to access the API's.


**Query Parameters**

Query parameters are  a defined set of key-value pairs appended to the end of a URL to provide additional information to a web server.

![1776833664931](image/understanding_API/1776833664931.png)


![1776833758795](image/understanding_API/1776833758795.png)

![1776833909072](image/understanding_API/1776833909072.png)

Question : Make an API request through Postman that queries all the "social" activities for 2 people?

![1776834269315](image/understanding_API/1776834269315.png)

**Path Parameters**

Path parameters are =dynamic segments of a URL path used to identify specific resources in RESTful APIs= (e.g., `/users/{id}`), where `{id}` is replaced by a concrete value like `/users/123`. They are essential for locating particular items, are typically required, and are often used in GET, PUT, or DELETE requests.

![1776834883672](image/understanding_API/1776834883672.png)


---

**JSON**

JSON (JavaScript Object Notation) is  a lightweight, text-based, and language-independent data-interchange format used for storing and transporting data, primarily between a server and a web application.

![1776835609711](image/understanding_API/1776835609711.png)

In order to convert the JSON object into JSON, we will have to use stringyfy.

const jsonData = JSON.**stringyfy**(data);

const data = JSON.**parse**(jsonData);
