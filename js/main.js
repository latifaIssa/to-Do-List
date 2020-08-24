//ToDo List

var taskList = [];

function addItem() {
    var task = document.getElementById("todoInput").value;
    var ul = document.getElementById("myUl");

    if (task.trim().length === 0) {
        return false;
    } else {
        if (taskList.length < 5) {
            taskList.push(task);
            var li = document.createElement("li");
            var text = document.createTextNode(task);
            li.appendChild(text);

            var checkMark = document.createElement("button");
            checkMark.innerHTML = "&check;";
            checkMark.className = "listItemButton";
            checkMark.setAttribute("onclick", "checkMe(this)");
            li.appendChild(checkMark);

            var crossMark = document.createElement("button");
            crossMark.innerHTML = "&#x2715";
            crossMark.className = "listItemButton";
            crossMark.setAttribute("onclick", "removeMe(this)");
            li.appendChild(crossMark);



            ul.appendChild(li);
            reset();

        }
    }

} //end of addNote

function reset() {
    document.getElementById("todoInput").value = "";
} //end of reset function



function checkMe(item) {
    var liTag = item.parentElement;

    liTag.style.textDecoration = (liTag.style.textDecoration === "line-through") ? "none" : "line-through";
    liTag.style.textDecoration = (liTag.style.textDecoration === none) ? "line-through" : "";

}

function removeMe(item) {
    var liTag = item.parentElement;
    var ulTag = liTag.parentElement;

    ulTag.removeChild(liTag);

}

function enterKey() {
    var input = document.getElementById("todoInput");
    input.onkeyup = function(key) {
        if (key.keyCode === 13) {
            addItem();
        }
    }
} //end of function

enterKey();

function clearList() {

    // var ul = document.getElementById("myUl");
    // ul.innerHTML = "";

    // //first way
    taskList.splice(0, taskList.length);

    // //second way
    // while (taskList.length > 0) {
    //     taskList.pop();
    // }

    // //hird way
    // taskList.delete();
}