const li = document.createElement("li");
li.className = "collection-item s12";
li.id="new-li";
li.setAttribute("title", "New li item");

const newTextNode = document.createTextNode('New List Item');
li.appendChild(newTextNode);

ul = document.querySelector("ul.collection");
ul.appendChild(li);

del = document.createElement("a");
console.log(del);

del.href= "#";
del.className= "delete-item secondary-content";
del.innerHTML = '<i class="fa fa-times"></i>';

li.appendChild(del);


const newHeading = document.createElement('h2');
const textParagraph = document.createTextNode("This is a new Title");

newHeading.id = "task.title";
newHeading.appendChild(textParagraph);

const oldHeading = document.getElementById("task-title");
const parent = oldHeading.parentNode;

console.log(parent);

parent.replaceChild(newHeading, oldHeading);

/*
1- Element
2- Attribute (deprecated)
3- Text Node
4- 
//*/