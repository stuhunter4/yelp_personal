// from data.js, assign data to a descriptive variable
var tableData = data;

// create table upon opening page
runStart();

function runStart() {
    // create a reference to the table body
    var tbody = d3.select("tbody");
    // remove any children from the table
    tbody.html("");

    // loop through filtered data and console.log each report object
    tableData.forEach(function(yelpReport) {
        console.log(yelpReport);
        // append one table row 'tr' for each report object
        var row = tbody.append("tr");

        // use 'Object.entries' to append cells and text
        Object.entries(yelpReport).forEach(function([key, value]) {
            // use d3 to append 1 cell for each value in the report object (column)
            var cell = row.append("td");
            // use d3 to update each cell's text with report values
            cell.text(value);
        });
    });
};