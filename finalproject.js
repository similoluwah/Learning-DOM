var form = document.querySelector(".addForm");
var listItems = document.getElementById('list-group');
var filter = document.getElementById("search");

//Add submit event Listener to the form 
form.addEventListener('submit', addForm);
//Delete Event 
listItems.addEventListener('click', removeForm);

//Filter Event 
filter.addEventListener('keyup', filterItems)

//Function for the Event Listener
function addForm(e){
    e.preventDefault();
    //Get the Input Value 
    var input = document.getElementById("additems").value;
    //Create a new element
    li = document.createElement('li')
    //add a new Class to the created element 
    li.className = "list-group-item";
    //append a child to the created element
    li.appendChild(document.createTextNode(input));
    //For the Delete Button to be added to the document 

    deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-sm btn-danger float-right delete';
    deleteButton.appendChild(document.createTextNode('X'));

    li.appendChild(deleteButton);
    //add the element to the document/ HTML page 

    listItems.appendChild(li);
}

function removeForm(e){
    e.preventDefault();
    var li = e.target.parentElement;
    if (e.target.classList.contains('delete')){
        if(confirm('Are You sure ?')){
            listItems.removeChild(li);
        }
    }
}

function filterItems(e){
    searchItem = e.target.value.toLowerCase();
    items = document.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(searchItem) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })

}



