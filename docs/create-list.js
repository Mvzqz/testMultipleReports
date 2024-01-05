  var jsonData = [
    { "id": 1, "name": "Item 1" },
    { "id": 2, "name": "Item 2" },
    { "id": 3, "name": "Item 3" }
];

// Assuming you have a <ul> element in your HTML with an id="list-container"
var listContainer = document.getElementById('list-container');

// Create an <ul> element
var ulElement = document.createElement('ul');

// Loop through the JSON data
jsonData.forEach(function(item) {
    // Create a <li> element for each item
    var liElement = document.createElement('li');

    // Set the text content of the <li> element
    liElement.textContent = item.name;

    // Append the <li> element to the <ul> element
    ulElement.appendChild(liElement);
});

// Append the <ul> element to the container in the HTML
listContainer.appendChild(ulElement);
