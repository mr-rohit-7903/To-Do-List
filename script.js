// getting necessary elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button");

//adding a task when button is clicked
addButton.addEventListener("click", function addTask(){

    //condition for empty value
    if(inputBox.value === ""){
        alert("You must write something");
    }

    //adding task
    else{
        // an li element is created and inner value set to the input value
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // the li element is appended to ul(list-container)
        listContainer.appendChild(li);

        // an span element is created and inner value 'x'
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        // the span element is appended to li just created
        li.appendChild(span);
    }

    //clear the input box after appending the value
    inputBox.value = "";

    //saving data to local browser
    saveData();
});

//using enter button to trigger ADD BUTTON
inputBox.addEventListener("keydown", (event)=>{
    if (event.key === "Enter") {
        addButton.click(); 
    }
})

//Event listner where 'e' is the element which is clicked
listContainer.addEventListener("click", function(e){

    //if the clicked element is <li> 
    if(e.target.tagName === "LI"){

        // adds or removes the check class 
        e.target.classList.toggle("check");

        //saves data to local storage
        saveData();
    }

    // if the clicked element is <span> 
    else if(e.target.tagName === "SPAN"){

        // removes the parent element i.e. <li>
        e.target.parentElement.remove();

        //saves data to local storage
        saveData();
    }
});


// function to save data to local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//function to show the locally stored data everytime the browser is reloded
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();