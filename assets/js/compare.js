// Function for API request for specified country
function searchFunction() {

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
    var keys = Object.keys(globalCompareDataset[0]);
    var outputHTML = "";

    // For each key, generate given value for each country, and append to HTML
    keys.forEach(function (el) {

        // declare the variables for each key 
        var firstCountryData;
        var secondCountryData;

        // Checks whether the key is "updated", and if so converts the responses to shorthand date format.
        if (el === "updated") {
            firstCountryData = new Date(globalCompareDataset[indexTargetCountry1][el]);
            firstCountryData = firstCountryData.toDateString() + " " + firstCountryData.getHours() + ":" + firstCountryData.getMinutes();
            secondCountryData = new Date(globalCompareDataset[indexTargetCountry2][el]);
            secondCountryData = secondCountryData.toDateString() + " " + secondCountryData.getHours() + ":" + secondCountryData.getMinutes();
            // Checks whether the key is "country", and if so returns raw string.
        } else if (el == "country") {
            firstCountryData = globalCompareDataset[indexTargetCountry1][el];
            secondCountryData = globalCompareDataset[indexTargetCountry2][el];
            // Otherwise, returns a formatted number string (i.e comma seperated).
        } else {
            // Locale Number Formatting https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
            firstCountryData = Number(globalCompareDataset[indexTargetCountry1][el]).toLocaleString();
            secondCountryData = Number(globalCompareDataset[indexTargetCountry2][el]).toLocaleString();
        }

        // Checks the statistic is not "Null" in the dictionary
        if (statisticDictionary[el] !== null) {
            // Add the variables for countries 1 and 2 to a table row, obtain relevant string from dictionairy, and add to existing html output
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
        searchFunction();
    }

})