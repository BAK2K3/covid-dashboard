// Function for Formatting Table Data for requested countries
function formatTableData() {

    // Obtain countries selected from dropdown menus
    var targetCountry1 = $("#countrySelect1").val();
    var targetCountry2 = $("#countrySelect2").val();

    // Find the index position of each country within the global compare dataset
    var indexTargetCountry1 = globalCompareDataset.findIndex(function (entry) {
        return entry.country == targetCountry1
    });
    var indexTargetCountry2 = globalCompareDataset.findIndex(function (entry) {
        return entry.country == targetCountry2
    });

    // Obtain the list of keys for the response (statistic names)
    var statisticsKey = Object.keys(globalCompareDataset[0]);
    var outputHTML = "";

    // For each key, generate given value for each country, and append to HTML
    statisticsKey.forEach(function (el) {

        // Checks the statistic is not "Null" in the dictionary
        if (statisticDictionary[el] !== null) {

            // declare the data variables for each country's statistic 
            var firstCountryData;
            var secondCountryData;

            // Checks whether the statistic is "updated", and if so converts the responses to shorthand date format.
            if (el === "updated") {
                firstCountryData = new Date(globalCompareDataset[indexTargetCountry1][el]);
                firstCountryData = firstCountryData.toDateString() + " " + firstCountryData.getHours() + ":" + firstCountryData.getMinutes();
                secondCountryData = new Date(globalCompareDataset[indexTargetCountry2][el]);
                secondCountryData = secondCountryData.toDateString() + " " + secondCountryData.getHours() + ":" + secondCountryData.getMinutes();

                // Checks whether the statistic is "country", and if so returns raw string.
            } else if (el == "country") {
                firstCountryData = globalCompareDataset[indexTargetCountry1][el];
                secondCountryData = globalCompareDataset[indexTargetCountry2][el];

                // Otherwise, returns a formatted number string (i.e comma seperated) along with respective formatting for bigger/smaller values
            } else {

                // Define number variables for each country, for later calculation and referencing
                let firstCountryNumber = globalCompareDataset[indexTargetCountry1][el];
                let secondCountryNumber = globalCompareDataset[indexTargetCountry2][el];

                // Assign the "Data" variables the string locale formatted number
                // Locale Number Formatting https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
                firstCountryData = Number(firstCountryNumber).toLocaleString();
                secondCountryData = Number(secondCountryNumber).toLocaleString();

                // Determine which number is larger, and format styling accordingly.
                if (firstCountryNumber > secondCountryNumber) {

                    // Style for if first Country number is larger
                    firstCountryData = '<i class="fas fa-long-arrow-alt-up"></i> ' + firstCountryData;
                    secondCountryData = secondCountryData + ' <i class="fas fa-long-arrow-alt-down"></i>'

                } else if (firstCountryNumber < secondCountryNumber) {

                    // Style for if second Country number is larger
                    firstCountryData = '<i class="fas fa-long-arrow-alt-down"></i> ' + firstCountryData;
                    secondCountryData = secondCountryData + ' <i class="fas fa-long-arrow-alt-up"></i>'
                } else {

                    // Style for if numbers are the same
                    firstCountryData = '<i class="fas fa-equals"></i> ' + firstCountryData;
                    secondCountryData = secondCountryData + ' <i class="fas fa-equals"></i>';
                }
            }

            // Add the Data variables for first and second countries to a table row, obtain relevant string from dictionairy, and add to existing html output
            outputHTML += ` <tr><td>${firstCountryData}</td><td><strong>${statisticDictionary[el]}</strong></td><td>${secondCountryData}</td></tr >`
        }
    })

    // Set Output field to "output HTML" as generated above.
    $("#covidTableBody").html(outputHTML);
}

// On country select (for compare) being changed
$("#countrySelect1").add("#countrySelect2").on('change', function () {

    // Check whether the initial table has been generated
    if ($("#covidTableBody").html() != '<tr><td colspan="3"> Please select two countries to compare statistics.</td></tr>') {

        // If so, re-perform the search function to update table.
        formatTableData();
    }
})