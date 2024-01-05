
console.log("test log")

function createList(jsonData) {
  var ulElement = document.createElement('ul');
  
  jsonData.reports.forEach(function(item) {

    var liElement = document.createElement('li');
    var aElement = document.createElement('a');
  
    aElement.textContent = item.name
    aElement.href = item.url
    liElement.appendChild(aElement);
  
    ulElement.appendChild(liElement);
    var listContainer = document.getElementById('list-container');
    listContainer.appendChild(ulElement);
  });
}

function fetchData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            createList(data)
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
}

fetchData();
