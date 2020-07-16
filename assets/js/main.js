// Mobile Menu
document.getElementById("mobileMenu").addEventListener('click', (e) => {
  document.querySelector("#menu>nav").classList.add("show");    
});
document.getElementById("closeMenu").addEventListener('click', (e) => {
  document.querySelector("#menu>nav").classList.remove("show");    
});

// User Info
class userData  {
  constructor(name,surname,age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  } 
   
  showUsername () {
    if(this.name) { 
      document.getElementById("username").innerHTML = this.name;
    } else { 
      document.getElementById("username").innerHTML = 'and <a href="#">Login</a>';
    }
  } 
}
const writeUsername = new userData("Burak");
writeUsername.showUsername(); 
const now = new Date(); 
document.getElementById("date").innerHTML = now;

// Todo Item
class toDoItem {
  constructor(todoVal, date ) {
    this.todoVal = todoVal;
    this.date = date;
  }
}

//UI list
class listUI {
  static displayTodos () {
    const storedTodos = [
      {
        todoVal: '1st Todo' ,
        date : '1'
      }, 
      {
        todoVal : '2nd Todo' ,
        date: '2'
      }
    ];
    const list = storedTodos;
    list.forEach((item) => listUI.addItemsToList(item))
  }

  static addItemsToList(item) {
    const listContainer = document.querySelector("#toDoList");
    const listRow = document.createElement('ul');
    console.log(item);
    listRow.innerHTML =  `
      <li> ${item.todoVal}</li>
    `;

    listContainer.appendChild(listRow);
  }
}

// display todos
document.addEventListener('DOMContentLoaded' , listUI.displayTodos)
// Add Todo
document.getElementById("newToDoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const todoName = document.querySelector("#todoVal").value; 
  const newToDoItem = new toDoItem(todoName, now);
  console.log(newToDoItem)
  listUI.addItemsToList(newToDoItem);
  
  document.querySelector("#todoVal").value=" "; 
})

//Display Todos