/*
//Array Destructuring:

const myArray =["v1","v2","v3", "v4"];
//let myvar1 = myArray[0];
let myvar2 = myArray[1];
console.log(myvar1);

//let[myvar1, myvar2] = myArray;
//let myNewArray = myArray.slice(2);
let[myvar1, myvar2, ...myNewArray] = myArray;
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray); 
*/

//Objects in Array:

// how to create objects
/*
//const person = {name:"harshit", age:22};
//console.log(person);

const person = {
    name: "harshit",
    age: 22,
    hobbies: ["guitar", "dancing", "music"]
}

//how to access 

console.log(person['name']);
console.log(person["age"]);
//console.log(person.hobbies);


//how to add key value pair to objects
//person.gender = "male";
person["person"] = "male";
console.log(person);
*/


/*
//difference between . & []

const key = "email";
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "dancing", "music"]
}
//console.log(person. person hobbies);
//console.log(person["person hobbies"]);

person[key] = "rvrahulv551@gmail.com";
console.log(person);
*/

/*
//how to iterate object

const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar", "dancing", "music"]
}

//for in loop
//object.keys

/*
for(let key in person){
    //console.log(person[key]);
    //console.log(`${key} : ${person[key]}`);
    console.log(key," : ", person[key]);
}
*/

//console.log(typeof(Object.keys(person)));
//const val = Array.isArray((Object.keys(person)));
//console.log(val);

/*
//computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj ={

    [key1] : value1,
    [key2] : value2
}

console.log(obj);
*/

/*
//spread operator 
  //in cas of array
const array1 =[1,2,3];
const array2 =[5,6,7];

const newArray = [...array1, ...array2];
console.log(newArray);
*/
/*
//spread operator 
 // in case of object  

 const obj1 = {
     key1 : "value1",
     key2 : "value2",
    // key1 : "value7"
 };
 console.log(obj1);

 const obj2 = {
    key3 : "value3",
    key4 : "value4",
    key1 : "value7"
};

//const newobj ={...obj1, ...obj2};
//const newobj ={...obj2, ...obj1};
//const newobj ={...obj1, ...obj2, key70: "value70"};
//const newobj ={..."abc"};
//console.log(newobj);
*/
/*
//Object Destructuring

const band = {
    bandName : "led zeppelin",
    famousSong : "stairway to heaven",
    famousPlace : "India",
    year : 1769
};

/*const bandName = band.bandName;
const famousSong = band.famousSong;
console.log(bandName, famousSong);


//const {bandName, famousSong} = band;
//console.log(bandName, famousSong);

//let{bandName :var1, famousSong : var2, ...restthing} = band;
//console.log(restthing);
*/

/*
//Objects inside Array

const users =[
    {userId:1, firstName:'harshit', gender: 'male'},
    {userId:2, firstName:'mohit', gender: 'male'},
    {userId:3, firstName:'nitish', gender: 'male'},
]

/*for(user of users){
    //console.log(user); 
console.log(user.firstName);
}


const[{firstName: var1, userId: var2}, , {userId}] = users;
console.log(var1);
console.log(var2);
//console.log(user2);
console.log(userId);
*/

 /*
//Function

// function sumThreeNumber(number1, number2, number3){
//     return number1 + number2 + number3;
// }

// const returnValue = sumThreeNumber(3,5,7);
// console.log(returnValue);


// function findTarget(array, target){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === target){
//             return i;
//         }
//     }  
//         return -1;
//     }
//     const myArray = [1,3,8,90];
//     const ans = findTarget(myArray, 8);
//     console.log(ans);


//Function Declaration

// function isEven(number){
//     return number % 2 === 0;
// }
// console.log(isEven(3));

//Function Expression
// const isEven = function(number){
//     return number %2 === 0;
// }
// console.log(isEven(4));

//Arrow Function
// const isEven =(number) =>{
//     return number%2 === 0;
// }
// console.log(isEven(4));

//hoisting

//Function Declaration

// function hello(){
//     console.log("hello world");
// }
// hello();

 //or

// hello();
// function hello(){
//     console.log("hello world");
// }

//Function Expression

// const hello = function(){
//     console.log("Hello World");
// }
// hello();

//Arrow Function

//const hello = () =>

// Function inside Function

const app = () =>{
    const myFunc =() =>{
        console.log("hello from my func");
    }

    const addTwo =(num1, num2) => {
        return num1 + num2;
    }

    const mul =(mul1, mul2) => mul1 * mul2;

    myFunc();
    console.log(addTwo(4,3));
    console.log(mul(2,9));
}

app();
*/

//Lexical Scope
/*
function myApp(){
    const myVar ="value1";
    
    function myFunc(){
        const myVar ="value51";
        console.log("inside myFunc", myVar);
    }
    
    console.log(myVar);
    myFunc();
}
myApp();
*/
/*
const myVar ="value1";
function myApp(){
    
    
    function myFunc(){
        //const myVar ="value51";
        const myFunc2= () => {
            console.log("inside myFunc", myVar);
        }
       myFunc2();
    }
    
    console.log(myVar);
    myFunc();
}
myApp();
*/


//Default Parameters  

//rest parameters
/*
function addAll(...numbers){
    let total = 0;
    for( num of numbers){
        total = total + num;
    }
    return total;
}
const ans = addAll(4,5,6,7,8)
console.log(ans);
*/

//Parameter Destructuring
/*
const person ={
    firstName : "Hitesh",
    gender : "male",
}

function printDetails({firstName, gender}){
    console.log(firstName);
    console.log(gender);
}

printDetails(person);
*/

//CallBack Function
/*
function myFunc2(name){
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("hello there");
    callback("harshit");
}

myFunc(myFunc2);
*/

// Function returning Function
/*
function  myFunc(){
    function hello(){
        return "hello world"
    };
    return hello;
}

const ans = myFunc();
console.log(ans());
*/
/*
function  myFunc(){
    return function(){
        return "hello world"
    };
}

const ans = myFunc();
console.log(ans());
*/

//Important Array Methods

/*
const numbers = [4,2,5,8];

function multiplyBy2(number , index){
     console.log('index is', index);
     console.log(`${number}*2 = ${number*2}`);
 }

 //multiplyBy2(numbers[0],0);
 //multiplyBy2(numbers[2], 1)

// for(let i = 0; i < numbers.length;i++){
   
//     multiplyBy2(numbers[i],i)

// }

numbers.forEach(multiplyBy2);
*/
/*
numbers.forEach(function(number,index){
    console.log(`index is${index} number is ${number}`);
})
*/
/*
numbers.forEach(function(number){
    console.log(number*3);
})
*/

/*
const users = [
    {firstName: "Harshit", age: 23},
    {firstName: "Mohit", age: 22},
    {firstName: "Nitish", age: 21},
    {firstName: "Garima", age: 20},
    
]
//forEach
users.forEach(function(a){
    console.log(a.firstName);
})

//forOf
for(let user of users){
    console.log(user.firstName);
}
*/

//---Map Method---

//.map() creates a new array from calling a function for every array element.

/*
const numbers =[3,4,6,1,8];

// const square = function(n){
//     return n * n;
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber);


const squareNumber = numbers.map((n)=>{
    return n * n;

})
console.log(squareNumber);
*/
/*
const users = [
    {firstName: "Harshit", age: 23},
    {firstName: "Mohit", age: 22},
    {firstName: "Nitish", age: 21},
    {firstName: "Garima", age: 20},
    
]

const userNames = users.map(function(u){
    return u.firstName;
});
console.log(userNames);
*/

//---filter function---
/*
const numbers = [1,3,2,4,5,6,8];

const isEven = function(number){
    return number % 2 ===0; //will always return true or false
}

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);
*/
/*
const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
})

console.log(evenNumbers);
*/

//--- reduce method ---
/*
const numbers = [1,2,3,4,5,10];
//aim sum of all the numbers in array

const sum = numbers.reduce((accumulator, currentvalue)=>{
    return accumulator + currentvalue;
})

console.log(sum);
*/
/*
const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 25000},
    {productId: 3, productName: "tv", price: 15000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
} ,0)

console.log(totalAmount);
*/

//--- sort method ---
/*
const numbers = [5,9,1200,410,3000];
numbers.sort((a,b)=>{
    return b - a;
})

//numbers.sort((a,b)=>a-b);
console.log(numbers);
*/

//price Hight to low & low to High
/*
const products = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 3000},
    {productId: 3, productName: "p3", price: 200},
    {productId: 4, productName: "p4", price: 8000},
]

//lowToHigh
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price;
})
console.log(lowToHigh);

///highToLow
const highToLow = products.slice(0).sort((a,b)=>{
    return b.price - a.price;
})
console.log(highToLow);
*/

//--- Find Method ---
/*
const myArray = ["Hello", "Cat", "Dog", "Lion"];

function isLength3(s){
    return s.length === 3;
}

const ans = myArray.find(isLength3);
console.log(ans);
*/
/*
const users = [
    {userId: 1, userName: "Harshit"},
    {userId: 2, userName: "Harsh"},
    {userId: 3, userName: "Nitish"},
    {userId: 4, userName: "Mohit"},
    {userId: 5, userName: "Aaditya"},
]
const myUser = users.find((user)=> user.userId === 3);
console.log(myUser);
*/

//--- every Method ---
/*
const numbers = [2,4,6,8,10];
const ans = numbers.every((number) => number % 2 === 0);
console.log(ans);
*/
/*
const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 25000},
    {productId: 3, productName: "tv", price: 15000},
]

const ans = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(ans); 
*/

//--- some Method ---
/*
const numbers = [3, 5, 11, 9];

const ans = numbers.some((num)=> num % 2 !== 0);
console.log( ans );
*/
/*
const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 25000},
    {productId: 3, productName: "tv", price: 150000},
]

const ans = userCart.some((cartItem)=>cartItem.price > 100000);
console.log(ans);
*/

//--- fill Method ---
/*
const myArray = [1,2,3,4,5,6,7,8];
myArray.fill("A",2,5);
console.log(myArray);
*/

//--- splice Method ---
/*
const myArray = ['item1', 'item2', 'item3'];

//delete
myArray.splice(1,1);
console.log(myArray);
*/

/*
//insert
myArray.splice(1,0,'inserted item');
console.log(myArray);
*/
/*
myArray.splice(1,0,'inserted item');
console.log(myArray);
*/

//delete and insert
/*
const deletedItem = myArray.splice(1,2,'inserted item');

console.log("deleted item", deletedItem);
console.log(myArray);
*/

//--- Iterables ---
/*
const firstName = "Harshit";
for(let char of firstName){
    console.log(char);
}
*/
/*
const items = ['item1', 'item2', 'item3'];
for(let item of items){
    console.log(item);
}
*/

//---Array like objects
/*
const firstName = "Harshit";
console.log(firstName.length);
console.log(firstName[2]);
*/

//--- Sets Iterable
/*
const items = ['item1', 'item2', 'item3'];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(['item1', 'item2', 'item3']);
numbers.add(['item1', 'item2', 'item3']);
//numbers.add(item);
//numbers.add(item);


if(numbers.has(1)){
    console.log("1 is present")
}else{
    console.log("1 s not present")
}
console.log(numbers);
*/
/*
for(let number of numbers){
    console.log(number);
}
*/
/*
const myArray=[1,2,3,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length);
console.log(uniqueElements);
*/

//--key in object--
/*
const person ={
    firstName : "harshit",
    age : 7,
    1: "one"
}
console.log(person.firstName);
console.log(person['firstName']);
console.log(person[1]);
for(let key in person){
    console.log(typeof key);
}
*/


//--- Map Objects --- 
const person = new Map();
person.set('firstName', 'Harshit');
person.set('age', 5);

console.log(person);