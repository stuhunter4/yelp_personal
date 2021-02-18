// from data.js, assign data to a descriptive variable
var tableData = data;

// create graphs and table upon opening page
// function is at the bottom, a reappropriation of runEnter
runStart();

// select the dropdown selection
var slist = d3.select("#slist");

// create event handlers for selecting a list option
slist.on("change", runEnter);

// create the event handler function to run both form events
function runEnter() {
    
    // prevent the page from refreshing
    d3.event.preventDefault();

    // select the input element and get the raw HTML node
    var inputElement = d3.select("#sel");

    // get the value property of the input element
    var inputValue = inputElement.property("value");
    // test
    console.log(inputValue);
    console.log(tableData);

    // filter() uses input as its argument
    var filteredData = tableData.filter(ca => ca.County === inputValue);
    // test
    console.log(filteredData);

    // create a reference to the table body
    var tbody = d3.select("tbody");
    // remove any children from the table
    tbody.html("");

    // loop through filtered data and console.log each report object
    filteredData.forEach(function(caReport) {
        console.log(caReport);
        // append one table row 'tr' for each report object
        var row = tbody.append("tr");

        // use 'Object.entries' to console.log each report value
        Object.entries(caReport).forEach(function([key, value]) {
            console.log(key, value);
            // use d3 to append 1 cell for each value in the report object (column)
            var cell = row.append("td");
            // use d3 to update each cell's text with report values
            cell.text(value);
        });
    });

    // use the map method with the arrow function to return all the filtered week numbers.
    var weeks = filteredData.map(county => county["week number"]);

    // use the map method with the arrow function to return all the filtered average cases per 100,000.
    var rate = filteredData.map(county => county["cases per cap"]);
    // ..and for deaths per capita
    var drate = filteredData.map(county => county["deaths per cap"]);

    // create traces
    var trace = {
        x: weeks,
        y: rate,
        type: "scatter"
    };

    var trace2 = {
        x: weeks,
        y: drate,
        type: "scatter"
    };


    // create the data arrays for our plots
    var data = [trace];
    var data2 = [trace2];

    // define our plot layouts
    var layout = {
        title: "Seven-Day Average COVID-19 Cases",
        xaxis: { title: "Weeks: March 18, 2020 - February 16, 2021" },
        yaxis: { title: "Daily Rate per 100,000"}
    };

    var layout2 = {
        title: "Seven-Day Average COVID-19 Deaths",
        xaxis: { title: "Weeks: March 18, 2020 - February 16, 2021" },
        yaxis: { title: "Daily Deaths per 100,000"}
    };

    var config = {responsive: true}

    // plot the charts to a div tag with id "plot" and "plot2"
    Plotly.newPlot("plot", data, layout, config);
    Plotly.newPlot("plot2", data2, layout2, config);

};

function runStart() {
    // first county
    var firstCounty = "Alameda";

    // filter() uses Alameda, the first county, as its argument
    var filteredData = tableData.filter(ca => ca.County === firstCounty);
    // test
    console.log(filteredData);

    // create a reference to the table body
    var tbody = d3.select("tbody");
    // remove any children from the table
    tbody.html("");

    // loop through filtered data and console.log each report object
    filteredData.forEach(function(caReport) {
        console.log(caReport);
        // append one table row 'tr' for each report object
        var row = tbody.append("tr");

        // use 'Object.entries' to append cells and text
        Object.entries(caReport).forEach(function([key, value]) {
            // use d3 to append 1 cell for each value in the report object (column)
            var cell = row.append("td");
            // use d3 to update each cell's text with report values
            cell.text(value);
        });
    });

    // use the map method with the arrow function to return all the filtered week numbers.
    var weeks = filteredData.map(county => county["week number"]);

    // use the map method with the arrow function to return all the filtered average cases per 100,000.
    var rate = filteredData.map(county => county["cases per cap"]);
    // ..and for deaths per capita
    var drate = filteredData.map(county => county["deaths per cap"]);

    // create traces
    var trace = {
        x: weeks,
        y: rate,
        type: "scatter"
    };

    var trace2 = {
        x: weeks,
        y: drate,
        type: "scatter"
    };


    // create the data arrays for our plots
    var data = [trace];
    var data2 = [trace2];

    // define our plot layouts
    var layout = {
        title: "Seven-Day Average COVID-19 Cases",
        xaxis: { title: "Weeks: March 18, 2020 - February 16, 2021" },
        yaxis: { title: "Daily Rate per 100,000"}
    };

    var layout2 = {
        title: "Seven-Day Average COVID-19 Deaths",
        xaxis: { title: "Weeks: March 18, 2020 - February 16, 2021" },
        yaxis: { title: "Daily Deaths per 100,000"}
    };

    var config = {responsive: true}

    // plot the charts to a div tag with id "plot" and "plot2"
    Plotly.newPlot("plot", data, layout, config);
    Plotly.newPlot("plot2", data2, layout2, config);

};