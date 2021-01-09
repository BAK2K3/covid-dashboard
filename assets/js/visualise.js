// Global variable for the chart to be accessed via different parts of the script
var myLineChart;

// Function for formatting the required data
function formatTimeSeries() {

    // Find the index position of the country within the visual compare dataset
    let indextargetCountry = globalVisualDataset.findIndex(function (entry) {
        return entry.country == $('#countrySelectVisualise').val();
    });

    // Define the country, data labels, and extract the required data
    var countryLabel = globalVisualDataset[indextargetCountry].country;
    var timescaleLabels = Object.keys(globalVisualDataset[indextargetCountry].timeline.cases);
    var fullData = Object.entries(globalVisualDataset[indextargetCountry].timeline);

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
