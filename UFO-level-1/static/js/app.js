// from data.js
var tbody = d3.select("tbody");
console.log(data)

//1.create table with data

function populate(data){
    data.forEach(function(sighting) {
  //console.log(sighting);
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
    //console.log(key, value);
    // Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
  });
})
};
populate(data);

var button = d3.select("#filter-btn");
var form = d3.select("#datetime"); 
  //part 2
    //input fields
    var formDateTime = d3.select("#datetime");
    var formCity = d3.select("#city");
    var formState = d3.select("#state");
    var formCountry = d3.select("#country");
    var formShape = d3.select("shape")
//2.create function for input 
button.on("click",function(){
    
    //userinput as variable
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log("onclick:"+inputValue);
    //filter var for part 1
    var filteredData = data.filter(item => item.datetime === inputValue);
    //filter with all fields
    // var filterall = {
    //     datetime: formDateTime.property("value").trim(),
    //     city: formCity.property("value").tolowerCase().trim(),
    //     state: formState.property("value").tolowerCase().trim(),
    //     country: formCountry.property("value").tolowerCase().trim(),
    //     shape: formShape.property("value").tolowerCase().trim()
    // };
    //stops page refreshing
    d3.event.preventDefault();

    //var filteredData = data;
    // //pt2 run filter on data
    // Object.entries(filterall).forEach(([key,value])=> {
    //     if (value.length >0) filteredData = filteredData.filter(sighting => value === sighting[key]);
    //  });

    tbody.html("");

    populate(filteredData);
    console.log(filteredData)
});

