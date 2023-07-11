// DOM Tree Selection
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const addTaskBtn = document.getElementById('add-btn');

// Event Listeners
// For 'Add' button
addTaskBtn.addEventListener('click', addTask);

// Select task in the list
listContainer.addEventListener('click', (e) => {
    
    // If item is selected
    if(e.target.tagName === 'LI') {  // All items will have LI tagName

        // set class attribute -> checked
        e.target.classList.toggle('checked');

        saveData();
    
    // If ❌ is selected
    } else if (e.target.tagName === 'SPAN') {

        // Remove the parent element containing the list item
        e.target.parentElement.remove();

        saveData();
    }
}, false);

// Functions
// AddTask function
function addTask() {
    // If Empty
    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        // Create a li element
        const listElement = document.createElement('li');
        // Assign the user-input to that element
        listElement.innerHTML = inputBox.value;
        // Place in under the parent element tree
        listContainer.appendChild(listElement);

        // Create a span element
        const span = document.createElement('span');
        span.innerHTML = '\u00d7';  // Adds ❌
        // Appends this child element -> parent element.
        listElement.appendChild(span);
    }

    // Clear the input box
    inputBox.value = '';
    saveData();
}

// Add local storage functionality
function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

// Load saved data
function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();