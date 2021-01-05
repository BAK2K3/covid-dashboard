// Function for API request for specified country
function searchFunction() {

    // Obtain countries selected from dropdown menus
    var targetCountry1 = $("#countrySelect1").val();
    var targetCountry2 = $("#countrySelect2").val();

    // Query the REST API based on given target countries
    $.when(
        $.getJSON(`https://disease.sh/v3/covid-19/countries/${targetCountry1}%2C%20${targetCountry2}`)

    ).then(
        function (response) {
            console.log(response);

            // Obtain the list of keys for the response
            var keys = Object.keys(response[0]);
            var outputHTML = "";

            // For each key, generate given value for each country, and append to HTML
            keys.forEach(function (el) {

                // declare the variables for each key 
                var jsonValue1;
                var jsonValue2;

                // Checks whether the key is "updated", and if so converts the responses to date format.
                if (el === "updated") {
                    jsonValue1 = new Date(response[0][el]);
                    jsonValue2 = new Date(response[1][el]);
                } else {
                    jsonValue1 = response[0][el];
                    jsonValue2 = response[1][el];
                }

                // Add the variables for countries 1 and 2 to a table row, and add to existing html output
                outputHTML += ` <tr>
                                    <td>${jsonValue1}</td>
                                    <td><strong>${el}</strong></td>
                                    <td>${jsonValue2}</td>
                                </tr >`
            })

            // Set Output field to "output HTML" as generated above.
            $("#covid-table-body").html(outputHTML);

            // Catch errors
        }, function (errorResponse) {
            console.log(errorResponse);
        }
    )
}

// Function for API request for all countries
function fetchCountries() {

    // Query API for name of all countries
    $.when(
        $.getJSON("https://disease.sh/v3/covid-19/countries")
    ).then(
        // Generate list of all country names available, and create HTML for these as options in a drop down options
        function (response) {
            var listItemsHTML = response.map(function (item) {
                return `<option value="${item.country}">${item.country}</option>`;
            })

            // Insert the generated list into the Country Select Drop downs
            $("#countrySelect1").html(listItemsHTML);
            $("#countrySelect2").html(listItemsHTML);
            $('#countrySelectVisualise').html(listItemsHTML);
            $('#countrySelectMap').html(listItemsHTML);

            // Catch errors
        }, function (errorResponse) {
            console.log(errorResponse);
        }
    )
}

// On document load, fetch countries and generate drop down list.
$(document).ready(fetchCountries);