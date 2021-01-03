// Function for API request for specified country
function searchFunction() {

    // Obtain country selected from dropdown
    var targetCountry = $("#countrySelect").val();

    // Query the REST API based on given target country
    $.when(
        $.getJSON(`https://corona.lmao.ninja/v2/countries/${targetCountry}`)
    ).then(
        function (response) {
            // Obtain the list of keys for the response
            var keys = Object.keys(response);
            var outputHTML = "";

            // For each key, generate given value, and append to HTML
            keys.forEach(function (el) {
                outputHTML += `<p><strong>${el}</strong>: ${response[el]}</p>`;
            })

            // Set Output field to "output HTML" as generated above.

            $("#output-field").html(outputHTML);

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
        $.getJSON("https://corona.lmao.ninja/v2/countries?sort=country")
    ).then(
        // Generate list of all country names available, and create HTML for these as options in a drop down options
        function (response) {
            var listItemsHTML = response.map(function (item) {
                return `<option value="${item.country}">${item.country}</option>`;
            })

            // Insert the generated list into the Country Select Drop down
            $("#countrySelect").html(listItemsHTML);

            // Catch errors
        }, function (errorResponse) {
            console.log(errorResponse);
        }
    )
}

// On document load, fetch countries and generate drop down list.
$(document).ready(fetchCountries);