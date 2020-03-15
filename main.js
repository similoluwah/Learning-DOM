//console.dir(document);  //To show all the properties associated with the HTML document

// console.log(document.body);
// console.log(document.head);
// console.log(document.title);
// console.log(document.all[10]);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// var items = document.getElementsByClassName("itemlister");
// console.log(items.textContent);

//QUERYSELECTOR METHOD and also the document.querySelectorAll() method

// var input = document.querySelector("input")
// input.value = "Hello World !"

//QUERYSELECTOR ALL 
 var itemLast = document.querySelector(".list-group-item:last-child");
 var itemSecond = document.querySelector(".list-group-item:nth-child(2)");
 itemLast.style.color = "red";
 itemSecond.style.color = "blue";

 var itemsEven = document.querySelectorAll("li:nth-child(odd)");
 for(var i =0; i < itemsEven.length; i++){
     itemsEven[i].style.backgroundColor = "limegreen";
     itemsEven[i].style.color = "white";
 }

//TRAVERSING THE NODES IN THE DOM
//Checking for the parentNode of an Element 

// var cardListGroup = document.getElementById("card");
// console.log(cardListGroup.parentNode);

 //Checking for the parent Element of a Node 
// console.log(cardListGroup.parentElement)

//Working with Child Nodes in Javascript DOM 
// console.log(cardListGroup.childNodes)  //Not recommended actually

//Better option that childNodes =>  children
// console.log(cardListGroup.children);

//Accesing the firstElementChild
var listItem = document.getElementById("list-group");
listItem.firstElementChild.textContent = "Hello 1";

//Accesing the lastChild of a Node - Very similar to the first element child 
listItem.lastElementChild.textContent = "Hello 4"

//Accesing the nextElementSibling of a node 
console.log(listItem.nextElementSibling);

//Accesing the previousSibling with the same analogy as the nextSibling 
console.log(listItem.previousElementSibling)

// Creating new elements in the DOM

var newDiv = document.createElement('div');
console.log(newDiv);

//ADD A CLASSNAME TO THE NEWLY CREATED DIV 

newDiv.className =  'welcome-text';

//ADD A NEW ID TO THE NEWLY CREATED ELEMENT 

newDiv.id = 'welcome-text';

//ADD A NEW ATTRIBUTE TO THE NEWLY CREATED DIV 

newDiv.setAttribute('title', 'welcome-text');

// ADD A NEW CHILD OR TEXT TO THE NEWLY CREATED ELEMENT - OR TO APPEND A CHILD TO THE DIV TECHNICALLY

//To create a new text node 
var newDivText = document.createTextNode('Welcome Here !');
//console.log(newDivText);

//TO APPEND THE CREATED TEXT NODE TO THE ELEMENT AS A CHILD 
newDiv.appendChild(newDivText);


console.log(newDiv);

//To add the newly created DIV and appended text node to the document

var container = document.querySelector('nav');
var h1 = document.querySelector('nav h1')

//To insert the newDiv created before the h1 class in the nav bar 
container.insertBefore(newDiv, h1)

//To add an Event Listener to a button to listen for a certain event and execute it in Javascript DOM 

function changeItemLister(){
    var itemLister = document.querySelector('.itemlister');
    itemLister.style.borderBottom = '2px solid white';
    itemLister.style.padding = '12px'
}

document.getElementById('button').addEventListener('click', changeItemLister);

//Working with Mouse events in javascript DOM 

var output = document.getElementById("output");
var box = document.querySelector(".box");

box.addEventListener('mouseover', runMouseEvent);
box.addEventListener('mousedown', runMouseEvent);
box.addEventListener('mouseup', runMouseEvent);
box.addEventListener('mouseleave', runMouseEvent);
box.addEventListener('mouseenter', runMouseEvent);

function runMouseEvent(e){

    console.log('Event :' +e.type);
    output.innerHTML = '<h4> MouseX: '+e.offsetX+ '</h4'+ '<h4> MouseY: '+e.offsetY+ '</h4>';
}

//Working with Keydown event for keyboard press events 

var input = document.querySelector('.addItemsInput');
input.addEventListener('keydown', runKeyEvent )

function runKeyEvent(e){
    output.innerHTML = e.target.value;
}
