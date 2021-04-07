// from data.js
var tableData = data;

// Viewing the available data fromt he data.js
console.log(tableData);


// Creating References to tbody, input and button
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
