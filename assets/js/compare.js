// Function for API request for specified country
function searchFunction() {

    // Obtain countries selected from dropdown menus
    var targetCountry1 = $("#countrySelect1").val();
    var targetCountry2 = $("#countrySelect2").val();

    // Find the index position of each country within the global compare dataset
    var indextargetCountry1 = globalCompareDataset.findIndex(function (entry) {
        return entry.country == targetCountry1
    });
    var indextargetCountry2 = globalCompareDataset.findIndex(function (entry) {
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

        // Checks whether the key is "updated", and if so converts the responses to date format.
        if (el === "updated") {
            firstCountryData = new Date(globalCompareDataset[indextargetCountry1][el]);
            secondCountryData = new Date(globalCompareDataset[indextargetCountry2][el]);
        } else {
            firstCountryData = globalCompareDataset[indextargetCountry1][el];
            secondCountryData = globalCompareDataset[indextargetCountry2][el];
        }

        // Add the variables for countries 1 and 2 to a table row, and add to existing html output
        outputHTML += ` <tr><td>${firstCountryData}</td><td><strong>${el}</strong></td><td>${secondCountryData}</td></tr >`
    })

    // Set Output field to "output HTML" as generated above.
    $("#covid-table-body").html(outputHTML);

}

// On country select (for compare) being changed
$("#countrySelect1").add("#countrySelect2").on('change', function () {

    // Check whether the initial table has been generated
    if ($("#covid-table-body").html() != '<tr><td colspan="3"> Please select two countries to compare statistics.</td></tr>') {
        // If so, re-perform the search function to update table.
        searchFunction();
    }

})