const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container')
const container = document.querySelector('.container')

function addTask(){
    if(inputBox.value === ''){
        // alert("You must write something!");
        let h3 = document.createElement('h3');
        h3.innerHTML = "You must write something!"
        container.appendChild(h3)
        setTimeout(function() {
            h3.innerHTML = "";
          }, 3000);
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

// let button = document.getElementById("task");

// button.addEventListener("click", addTask);

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", list-container.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();