// var total = 400;
// var para = "Twitter is a 'microblogging' system that allows you to send and receive short posts called tweets. Tweets can be up to 140 characters long and can include links to relevant websites and resources. Twitter users follow other users. If you follow someone you can see their tweets in your twitter 'timeline'."
// var remaining = 400 - para.length;
// alert("You have written " + para.length + "characters. You have only " + remaining + " left");

// var tweet = prompt("Type your tweet");
// var tweetCount = tweet.length;
// alert("You have written " + tweetCount + "characters, you have " + (140-tweetCount) + "characters left.")

// var tweetUnder140 = tweet.slice(0 , 140);

// console.log(maxInput);

// var name = "sudhanshu";
// name = name.toUpperCase();

// name = name.toLowerCase();


// Question : Write a prompt where it ask the user for their name, if they return the name, Just alert them by saying Hey! , Name of the user where the first character 
//     should be uppercase and the rest should be lowercase.

// var name = prompt("Enter your name!");
// var firstChar = name.slice(0,1);

// var lastChars = name.slice(1);
// var newName = firstChar.toUpperCase() + lastChars.toLowerCase();

// alert("Hi, "+ newName);

// console.log(firstChar + name.slice(1));

// var d = 6/2;


// Dog Age to Human Age Formula


// var humanAge, dogAge;

// dogAge = prompt("Type the Dog's Age.")

// humanAge = (dogAge - 2) * 4 + 21;

// console.log("Human Age is : " + humanAge);

// function getMilk(bottles){
//     console.log("Move Right");
//     console.log("Move Right");
//     console.log("Move Right");
//     console.log("Move Right");
//     console.log("Move Left");
//     console.log("Move Left");
//     console.log("Move Left");
//     console.log("Move Left");
//     console.log("Move " + bottles + " to the shelf");
// }
// getMilk(12);


// function getMilk(money){
//     console.log("Leave house");
//     console.log("Move Right");
//     console.log("Move Right");
//     console.log("Move Right");
//     console.log("Move Left");
//     console.log("Move Left");
//     console.log("Move Left");
//     console.log("Move Left");

//     var numOfBottles = Math.floor(money / 1.5);
    
//     console.log("buy " + numOfBottles + " ");
// }
// getMilk(34);

// We can use the floor method to round up the number

// retrun in the function

// function getMilk(money, costPerBottle){
//     console.log("Leave house");
//     console.log("Move Right");
//     console.log("Move Right");
//     console.log("Move Right");
//     console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk ");
//     console.log("Move Left");
//     console.log("Move Left");
//     console.log("Move Left");
//     console.log("Move Left");

//     return calChange(money, 1.5);
// }

// function calcBottles(startingMoney, costPerBottle){
    
//     var numOfBottles = Math.floor(startingMoney / costPerBottle);
    
//     return numOfBottles;
// }

// function calChange( startingAmount, costPerBottle){
//     var change = startingAmount % costPerBottle;
//     return change;
// }


// console.log("Hello Master, Here is your " + getMilk(5, 1.5)+ " change");

// var n = Math.random(); // Math.random(gives your random number between 0 = 0.999999999999999)
// // We would have to convert this number into the numbers that we need. 


// n = n * 6;
// //For example: if we need a random dice numbers, we would have to mutiply the number by n
// n = Math.floor(n) + 1 ;
// //Then we conver the number into whole number and add + 1 which will be 1 to 6.

// console.log(n);


// var firstName = prompt("Type your first name");
// var secondName = prompt("Type the name of your crush!");

// var loveScore = Math.random(loveScore) * 100;

// loveScore = Math.floor(loveScore) + 1 ;

// console.log(loveScore);

// if (loveScore > 70){
//     console.log("You love each other");
// }
// else{
//     console.log("Your love is " + loveScore + " only");
// }

// var a = 1;
// var b = "1";

// var output = [];

// output.push(1);
// output.push(2);

//push helps you to insert the value in the array

//pop helps you to take out the value in the array

// We would need to make a function to not repeat the line of code.

// Write a function that ask the user to type a number and add that number into the array.

// var output = [];
// var count = 1;
// function fizzBuzz(){
    
//     if( count%3 === 0 && count % 5 === 0){
//         output.push("FizzBuzz");
//     }
//     else if(count%5 === 0){
//             output.push("Buzz");
//         }
//     else if(count %3 === 0 ){
//             output.push("Fizz");
//         }
//     else{
//         output.push(count);
//     }
    
//     count++;

//         console.log(output);
// }


 // -------
 //     While Loop 

// var i = 1;

// while(i < 4){
//     console.log(i);
//     i++;
    
// }

// var output = []
// var count = 1;

// function fizzBuzz(){
    
//     while(count <= 100){

//         if(count%3 === 0 && count %5 ===0){
//             output.push("FizzBuzz");
            
//         }else if(count%3 === 0){
//             output.push("Fizz");
            
//         }else if(count%5 === 0){
//             output.push("Buzz");
//         }
//         else{
//             output.push(count);
//         }
//         count++;
//     }
//     console.log(output);
// }


// Practice Question:

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

// Print this until the bottle is 1

// Last print : 

// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.


// var count = 99;

// function letsHaveAbeer(){
//     while(count >= 0){
        
//         if(count < 100 && count > 1){
//             console.log(+count+ " bottles of beer on the wall, " +count+" bottles of beer.");
//             console.log("Take one down and pass it around, " +(count - 1)+ " bottles of beer on the wall.");
//         }
//         else if(count === 1){
//             console.log(+count+ " bottles of beer on the wall, " +count+" bottles of beer.");
//             console.log("Take one down and pass it around, no more bottles of beer on the wall.");
//         }
//         else{
//             console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
//         }
//         count--;
//     }
// }

// Solution from the course: 
// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }

// for Loop

// function fibonacciGenerator(n) {
//     var output = [];

//     for(var i = 0; i < n; i++){
//         if(i === 0 ){
//             output.push(0);
//         }
//         else if(i === 1 ){
//             output.push(1);
//         }
//         else{
//             output.push(
//                 output[output.length - 1] + output[output.length - 2]
//             );
//         }
//     }
//     console.log(output);
// }







































