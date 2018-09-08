 // assign the data from data.js to a descriptive variable
var tableData = data; 

// Select the submit button
var button = d3.select("#submit");

// Select the input element and get the raw HTML node
var inputField = d3.select("#datetime");

// this function is triggered when the button is clicked
function handleClick() {
  console.log("A date was entered!");

  console.log(d3.event.target);  
}

// use the on function to attach an event to handler
button.on("click", handleClick);

// You can also define the click handler inline
button.on("click", function() {
  console.log("Hi, a button was clicked!");
  console.log(d3.event.target);
});

// testing event handle with giphy
button.on("click", function() {
  d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
});

// create change event when date is entered
inputField.on("change", function() {
  var newText = d3.event.target.value;
  console.log(newText);
});



// // Get a reference to the table body
// var tbody = d3.select("tbody");

// //arrow function: appends data for each row
// data.forEach((row) => {
//   var row = tbody.append("tr");
//   Object.entries(row).forEach(([key, value]) => {
//     var cell = tbody.append("td");
//     cell.text(value);





// // Prevent the page from refreshing
// d3.event.preventDefault();
  

  
// // Get the value property of the input element
// var inputValue = inputElement.property("value");
  
// console.log(inputValue);
// //console.log(tableData);
  
// var filteredData = tableData.filter(row => row.datetime === inputValue);

// console.log(filteredData);

// tbody.select("tbody").text(inputValue);



//     });
//   });
// });
