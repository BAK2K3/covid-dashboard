var myLineChart;

function formatTimeSeries(response) {

    // Define the country, data labels, and extract the required data
    var countryLabel = response.country;
    var timescaleLabels = Object.keys(response.timeline.cases);
    var fullData = Object.entries(response.timeline);

    // Create the appropriately named array for nested objects to be passed to the maps script
    var datasets = [];

    // Iterate through the datasets contained (cases, recovered, deaths)
    fullData.forEach(element => {

        // Create a new object
        let obj = {};
        // Format the data appropriately for the maps script.
        obj["data"] = Object.values(element[1]);
        obj["label"] = element[0];
        // Generate random colour for the line
        obj["borderColor"] = '#' + Math.floor(Math.random() * 16777215).toString(16);
        obj["fill"] = false;
        // Push the current object into the dataset array
        datasets.push(obj);

    });

    // Call generate graph function with newly created country label, date label, and datasets
    generateGraph(countryLabel, timescaleLabels, datasets);
}

function generateGraph(countryLabel, timescaleLabels, datasets) {

    // Create an instance of the line chart, using the labels and datasets formatted previously
    var ctx = $('#lineChart');
    myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: timescaleLabels,
            datasets: datasets
        }
    });


}

// Function called from index.html selector button
// Obtains the relevant data from the historic data section of the API
function obtainGraphData() {

    // Obtain country name selected
    var graphCountry = $('#countrySelectVisualise').val();

    $.when(
        // Make an API request for the last 30 days of historical data for selected country
        $.getJSON(`https://disease.sh/v3/covid-19/historical/${graphCountry}?lastdays=30`)

    ).then(
        function (response) {
            // Pass this data to the formatTimeSeries function, to appropriately format the data
            formatTimeSeries(response);
        })
}