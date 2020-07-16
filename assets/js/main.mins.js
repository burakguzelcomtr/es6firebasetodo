"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Mobile Menu
document.getElementById("mobileMenu").addEventListener('click', function (e) {
  document.querySelector("#menu>nav").classList.add("show");
});
document.getElementById("closeMenu").addEventListener('click', function (e) {
  document.querySelector("#menu>nav").classList.remove("show");
}); // User Info

var userData = /*#__PURE__*/function () {
  function userData(name, surname, age) {
    _classCallCheck(this, userData);

    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  _createClass(userData, [{
    key: "showUsername",
    value: function showUsername() {
      if (this.name) {
        document.getElementById("username").innerHTML = this.name;
      } else {
        document.getElementById("username").innerHTML = 'and <a href="#">Login</a>';
      }
    }
  }]);

  return userData;
}();

var writeUsername = new userData("Burak");
writeUsername.showUsername();
var now = new Date();
document.getElementById("date").innerHTML = now; // Todo Item

var toDoItem = function toDoItem(todoVal, date) {
  _classCallCheck(this, toDoItem);

  this.todoVal = todoVal;
  this.date = date;
}; // Add Todo


document.getElementById("newToDoForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var todoName = document.querySelector("#todoVal").value;
  var newToDoItem = new toDoItem(todoName, now);
  console.log(newToDoItem);
  document.querySelector("#todoVal").value = " ";
}); //Display Todos