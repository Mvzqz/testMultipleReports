const jsonData = [
  { "id": 1, "name": "Report 1", url:"/testMultipleReports/html-report-1/index.html" },
  { "id": 2, "name": "Report 2", url:"/testMultipleReports/html-report-2/index.html" },
  { "id": 3, "name": "Report 3", url:"/testMultipleReports/html-report-1/index.html" },
];

console.log("test log")


// Create an <ul> element
var ulElement = document.createElement('ul');

// Loop through the JSON data
jsonData.forEach(function(item) {
  // Create a <li> element for each item
  var liElement = document.createElement('li');
  var aElement = document.createElement('a');

  // Set the text content of the <li> element
  aElement.textContent = item.name
  aElement.href = item.url
  liElement.appendChild(aElement);

  // Append the <li> element to the <ul> element
  ulElement.appendChild(liElement);
});

// Assuming you have a <ul> element in your HTML with an id="list-container"
var listContainer = document.getElementById('list-container');

// Append the <ul> element to the container in the HTML
listContainer.appendChild(ulElement);

function fetchData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Use the 'data' variable containing the JSON content
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}

fetchData();
