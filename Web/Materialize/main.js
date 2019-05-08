// console.log('Hello World');

// let element = document.getElementById("task-title");
// console.log(element);

// console.log(element.id);
// console.log(element.innerText);

// element.innerText = "The Awesome Tasks";
// element.id = "newTask-title";
// element.className = "task";
// element.style.color = "red";
// element.style.backgroundColor = "black";

// console.log(element.innerHTML);
// console.log(element.innerText);

// element.innerHTML = 
// "<p>This is a nice paragraph</p>"

// const elements = document.getElementsByClassName("Collection-items");
// // console.log(elements);

// // console.log(elements[2]);
// let arrayElements = Array.from(elements);
// console.log(arrayElements);

// arrayElements.forEach(function(element,index){
//     element.innerText = `Hello ${index}`;
//     if (index > 2){
//         element.style.color = "red";
//     }
//     if(index === 1){
//         element.style.backgroundColor = "blue";
//     }
// })

// const elements = document.getElementsByTagName('li');
// console.log(elements[5]);

// odds = document.querySelectorAll("li:nth-child(odd)");
// even = document.querySelectorAll("li:nth-child(even");

// console.log(odds);
// console.log(even);

// odds.forEach(li => {
//     li.style.color="yellow";
// });

const list = document.querySelector("ul");
const listItem = document.querySelector("li.collection-item:first-child");

console.log(listItem);