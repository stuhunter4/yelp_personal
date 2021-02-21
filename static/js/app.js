// from data.js, assign data to a descriptive variable
var tableData = data;

// create table upon opening page
runStart();

// select the drop-down lists
var slist  = d3.select("#slist");
var slist2  = d3.select("#slist2");

// select the buttons for filtering clearing
var button = d3.select("#filter-btn");
var reset = d3.select("#reset-btn");

// create event handlers for selecting a list option
slist.on("change", runCategory);
slist2.on("change", runCity);

// buttons
button.on("click", runFilter);
reset.on("click", runReset);

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

function runCategory() {
    // prevent the page from refreshing
    d3.event.preventDefault();
    // select the input element and get the raw HTML node
    var inputElement = d3.select("#sel");
    // get the value property of the input element
    var inputValue = inputElement.property("value");
    // filter() uses input as its argument
    var filteredData = tableData.filter(yelp => yelp.categories === inputValue);

    // create a reference to the table body
    var tbody = d3.select("tbody");
    // remove any children from the table
    tbody.html("");

    // loop through filtered data and console.log each report object
    filteredData.forEach(function(yelpReport) {
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

function runCity() {
    // prevent the page from refreshing
    d3.event.preventDefault();
    // select the input element and get the raw HTML node
    var inputElement = d3.select("#sel2");
    // get the value property of the input element
    var inputValue = inputElement.property("value");
    // filter() uses input as its argument
    var filteredData = tableData.filter(yelp => yelp.city === inputValue);
    
    // create a reference to the table body
    var tbody = d3.select("tbody");
    // remove any children from the table
    tbody.html("");

    // loop through filtered data and console.log each report object
    filteredData.forEach(function(yelpReport) {
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

function runFilter() {
    d3.event.preventDefault();
    var inputElement1 = d3.select("#sel");
    var inputElement2 = d3.select("#sel2");
    var inputCategory = inputElement1.property("value");
    var inputCity = inputElement2.property("value");
    // define array of column names, array of inputs; for reference
	var col_names = [
		"categories", "city"
	];
	var input_ele = [
		inputCategory, inputCity
    ];
    // create two empty arrays to append to
	var filt_col = [];
    var filt_inp = [];

	// for loop that will create two new lists needed for filteredData
	for (var i = 0; i < col_names.length; i++) {
		// if the input is equal to anything, append to arrays
		if (input_ele[i] !== "") {
			filt_col.push(col_names[i]);
			filt_inp.push(input_ele[i]);
        }
    }
    // if statement to create filteredData
	if (filt_inp.length == 2) {
        var filteredData = tableData.filter(yelp => yelp[filt_col[0]] === filt_inp[0] && yelp[filt_col[1]] === filt_inp[1]);
	}
	else {
		var filteredData = tableData.filter(yelp => yelp[filt_col[0]] === filt_inp[0]);
	}
    // create a reference to the table body
    var tbody = d3.select("tbody");
    // remove any children from the table
    tbody.html("");

    // loop through filtered data and console.log each report object
    filteredData.forEach(function(yelpReport) {
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

function runReset() {
    d3.event.preventDefault();
    runStart();
};