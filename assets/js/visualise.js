// Global variable for the chart to be accessed via different parts of the script
var myLineChart;

// Global variable for appropriately named array for nested objects to be passed to the maps script
var graphConfig = {};

// Function for formatting the required data
function formatTimeSeries() {

    // Obtain value of selector
    selectValue = $('#countrySelectVisualise').val();

    // Find the index position of the country within the visual compare dataset
    let indexTargetCountry = globalVisualDataset.findIndex(function (entry) {
        return entry.country == selectValue;
    });

    // Extract chosen country from selector
    var countryLabel = globalVisualDataset[indexTargetCountry].country;

    // Check whether current graph exists, and is also not already displaying country selected
    if ((typeof (myLineChart) == "undefined") || (myLineChart.options.title.text !== countryLabel)) {

        // Reset dataset
        graphConfig = {};

        // Define data labels, and extract the required data
        var timescaleLabels = Object.keys(globalVisualDataset[indexTargetCountry].timeline.cases);
        var fullData = Object.entries(globalVisualDataset[indexTargetCountry].timeline);

        let datasets = [];
        // Iterate through the datasets contained (cases, recovered, deaths)
        fullData.forEach(function (element) {

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

        // Graph configuration
        graphConfig = {
            type: 'line',
            data: {
                labels: timescaleLabels,
                datasets: datasets
            },
            options: {
                responsive: true,
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Date'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Total'
                        }
                    }]
                }
            }
        }

        // Checks whether graph exists again
        if ((typeof (myLineChart) == "undefined") || (myLineChart.canvas == null)) {
            // Call generate graph function with newly created country label, date label, and datasets
            generateGraph();
        } else {
            // Replace the graph with the newly requested data
            myLineChart.data.labels = timescaleLabels;
            myLineChart.data.datasets = datasets;
            myLineChart.options.title.text = countryLabel;
            // Update the graph
            myLineChart.update();
        }
    }
}

function generateGraph() {

    // Create an instance of the line chart, using the labels and datasets formatted previously
    var ctx = $('#lineChart');
    myLineChart = new Chart(ctx, graphConfig);

}

// Function to excecute on selector change
$("#countrySelectVisualise").change(function () {

    // If the value selected is "Select a country", destroy the graph
    if ($(this).val() == "none") {
        myLineChart.destroy();
    } else {
        // Elseexecute formateTimeSeries function.
        formatTimeSeries();
    }

})