document.getElementById('addButton').addEventListener('click', function() {
    // Get the input value
    let inputText = document.getElementById('userInput').value;

    // Create a new list item
    let newItem = document.createElement('li');
    newItem.textContent = inputText;

    // Add the new item to the list
    document.getElementById('myList').appendChild(newItem);

    // Clear the input field
    document.getElementById('userInput').value = '';
});
