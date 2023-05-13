/***********************side bar******************************** */
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const mainSection = document.querySelector("#container");

menuBtn.addEventListener("click", () => {
  if (sideMenu.style.display == "block") {
    sideMenu.style.display = "none";
    mainSection.style.display = "block";
    menuBtn.title = "open menu";
  } else {
    sideMenu.style.display = "block";
    mainSection.style.display = "grid";
    mainSection.style.gridTemplateColumns = "220px auto";
    menuBtn.title = "close menu";
  }
});
/********************************************end side bar*********** */

/** **********************************current day*************************************************/
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function displayDate() {
  const date = new Date();
  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];

  const dateString = dayOfWeek + " " + month + " " + date.getDate() + ".";
  document.getElementById("current-day").innerHTML = dateString;
  setInterval(displayDate, 24 * 60 * 60 * 1000);
}
displayDate();
/*******************************end cerr day******************* */

/*************************add task modal*************************************************** */

var addTaskmodal = document.getElementById("addTaskModal");

// Get the button that opens the modal
var addTaskBtn = document.getElementById("addTaskBtn");

// Get the cancel button that closes the modal
var add_cancelBtn = document.getElementById("add-CancelBtn");

// Get the submit button for the form
var submitBtn = document.getElementById("addTaskFormSubmit");

// When the user clicks on the button, open the modal
addTaskBtn.onclick = function () {
  addTaskmodal.style.display = "block";
};

// When the user clicks on cancel, close the modal
add_cancelBtn.onclick = function () {
  addTaskmodal.style.display = "none";
};

// When the user clicks on submit, close the modal and add the task
submitBtn.onclick = function () {
  // Code to add the task to the list
  addTaskmodal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == addTaskmodal) {
    addTaskmodal.style.display = "none";
  }
};

/************************end add task modal*********************************** */

/***************************start edit task modal********************/
var editTaskmodal = document.getElementById("editTaskModal");
var editIcon = document.getElementById("icon-editBtn");
var edit_cancelBtn = document.getElementById("edit-cancelBtn");
var edit_updateBtn = document.getElementById("editTaskFormSubmit");

// editIcon.onclick = function () {
//   editTaskmodal.style.display = "block";
// };
document.querySelectorAll("#icon-editBtn").forEach((editIcon) => {
  editIcon.addEventListener("click", () => {
    editTaskmodal.style.display = "block";
  });
});

edit_cancelBtn.onclick = function () {
  editTaskmodal.style.display = "none";
};

edit_updateBtn.onclick = function () {
  editTaskmodal.style.display = "none";
};

window.onclick = function (event2) {
  if (event2.target == editTaskmodal) {
    editTaskmodal.style.display = "none";
  }
};
/******************************end add task modal*****************************/

/************************start show task modal**************************** */
var viewTaskmodal = document.getElementById("viewTaskModal");
var taskCard = document.getElementById("task");
var view_cancelBtn = document.getElementById("view-cancelBtn");

/* we can handle the click using two ways   event handler or event listener
taskCard.ondblclick = function () {
  viewTaskmodal.style.display = "block";
};
or
taskCard.addEventListener("dblclick", () => {
  viewTaskmodal.style.display = "block";
});
*/

document.querySelectorAll("#task").forEach((taskCard) => {
  taskCard.addEventListener("dblclick", () => {
    viewTaskmodal.style.display = "block";
  });
});

view_cancelBtn.onclick = function () {
  viewTaskmodal.style.display = "none";
};

window.onclick = function (event3) {
  if (event3.target == viewTaskmodal) {
    viewTaskmodal.style.display = "none";
  }
};

/************************end show task  modal***************************** */
