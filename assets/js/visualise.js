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

        // Define timescale data labels, 
        var timescaleLabels = [];

        // Convert the timescales to date objects
        Object.keys(globalVisualDataset[indexTargetCountry].timeline.cases).forEach(function (date) {
            timescaleLabels.push(new Date(date));
        });

        // Obtain the full historic data object for chosen country
        var fullData = Object.entries(globalVisualDataset[indexTargetCountry].timeline);

        let datasets = [];
        // Iterate through the datasets contained (cases, recovered, deaths)
        fullData.forEach(function (element) {


            // Use switch casing to determine label colours
            let colour;
            switch (element[0]) {
                case "cases":
                    colour = "#EFF1F3";
                    break;

                case "deaths":
                    colour = "#252627";
                    break;

                case "recovered":
                    colour = "#7fd34d";
                    break;
            }

            // Create a new object
            let obj = {};
            // Format the data appropriately for the graph script.
            obj.data = Object.values(element[1]);
            obj.label = element[0];
            obj.borderColor = colour;
            obj.fill = false;
            // Push the current object into the dataset array
            datasets.push(obj);

        });

        // Graph configuration
        graphConfig = {
            type: 'line',
            data: {
                // Set x and y data
                labels: timescaleLabels,
                datasets: datasets
            },
            options: {
                // Set graph to be responsive, but disable aspect ratio
                responsive: true,
                maintainAspectRatio: false,

                // Reduce length of boxes fractionally
                legend: {
                    labels: {
                        boxWidth: 35,
                    }
                },

                scales: {
                    xAxes: [{
                        // Set X Axes as time series
                        display: true,
                        type: 'time',
                        time: {
                            displayFormats: {
                                quarter: 'MMM YYYY'
                            },
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Date'
                        },
                        gridLines: {
                            color: "rgba(15, 16, 26, 0.25)",
                            zeroLineColor: "rgba(15, 16, 26, 0.25)"

                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Total'
                        },
                        gridLines: {
                            color: "rgba(15, 16, 26, 0.25)",
                            zeroLineColor: "rgba(15, 16, 26, 0.25)"
                        }
                    }]
                }
            }
        };

        // Checks whether graph exists again
        if ((typeof (myLineChart) == "undefined") || (myLineChart.canvas == null)) {
            // Call generate graph function with newly created country label, date label, and datasets
            generateGraph();
        } else {
            // Replace the graph with the newly requested data
            myLineChart.data.datasets = datasets;
            // Update the graph
            myLineChart.update();
        }
    }
}

function generateGraph() {

    // Create an instance of the line chart, using the labels and datasets formatted previously
    var ctx = $('#lineChart');

    // Set Chart default font settings
    Chart.defaults.global.defaultColor = "#0E0F19";
    Chart.defaults.global.defaultFontColor = "#0E0F19";
    Chart.defaults.global.defaultFontFamily = "'Raleway', 'sans-serif'";

    // Generate line chart with defined configuration
    myLineChart = new Chart(ctx, graphConfig);

}

// Function to excecute on selector change
$("#countrySelectVisualise").change(function () {

    // If the value selected is "Select a country", destroy the graph and reset the section
    if ($(this).val() == "none") {
        $("#covidVisualise .chart-container").addClass("d-none");
        $("#covidVisualise .text-container").removeClass("d-none");
        myLineChart.destroy();
        // Remove lingering inline style attribute preventing specified width/height
        $("#lineChart").removeAttr("width");

    } else {
        // Checks to see if the correct containers are in display
        if ($("#covidVisualise .chart-container").hasClass("d-none")) {
            $("#covidVisualise .chart-container").removeClass("d-none");
            $("#covidVisualise .text-container").addClass("d-none");
        }
        // Else execute formateTimeSeries function.
        formatTimeSeries();
    }
});