$(document).ready(function () {

    // On covid-toggler button Click
    $("#covidToggler .btn").on("click", function () {
        // Checks if the button is already active
        if (!$(this).hasClass("btn-active")) {
            // If not, remove active class from all .btn classes, and add to this button.
            $(".btn").removeClass("btn-active");
            $(this).addClass("btn-active");

            // Checks which button has been pressed, and adds/removes classes respectively, and intiates refresh. 
            if ($(this).hasClass("btn-compare")) {
                toggleCovidSections("#covidCompare");
            } else if ($(this).hasClass("btn-visualise")) {
                toggleCovidSections("#covidVisualise");
            } else if ($(this).hasClass("btn-map")) {
                toggleCovidSections("#covidMap");
            }

        } else {
            // Checks which button has been pressed, and refreshes that individual page. 
            if ($(this).hasClass("btn-compare")) {
                resetCompareSection();
                $("#covidCompare").removeClass("d-none");
            } else if ($(this).hasClass("btn-visualise")) {
                resetVisualiseSection();
                $("#covidVisualise").removeClass("d-none");
            } else if ($(this).hasClass("btn-map")) {
                resetMapSection();
                $("#covidMap").removeClass("d-none");
            }
        }
    });

    // On heading click
    $("#headingAnchor").on("click", function () {

        // Removes all active classes from togglers
        $(".btn").removeClass("btn-active");
        // Calls the toggleCovidSections with the exception
        toggleCovidSections("#covidInfo");

    });
});

// Function for removing all sections from view, and removing the d-none bootstrap class from the section chosen
function toggleCovidSections(activeElement) {

    // Check if splash exists, and if so, remove it.
    if (!$("#covidSplash").hasClass("d-none")) {
        $("#covidSplash").addClass("d-none");
        $("#covidToggler").removeClass("d-none");
    }

    // Reset info section
    $("#covidInfo").addClass("d-none");

    // Call all reset functions
    resetCompareSection();
    resetVisualiseSection();
    resetMapSection();

    // Add active element to view
    $(activeElement).removeClass("d-none");

}

function resetMapSection() {

    // Reset map section
    $("#covidMap").addClass("d-none");
    $("#covidMap .mapContainer").addClass("d-none");
    $("#covidMap .text-container").removeClass("d-none");
    $("#covidMap .text-container").removeClass("d-none");
    $("#statisticSelectMap")[0].selectedIndex = 0;
    $(".map").html("");
    $(".areaLegend").html("");
}

function resetCompareSection() {

    // Reset compare section
    $("#covidCompare").addClass("d-none");
    $("#covidTableBody").html(``);
    $("#covidCompare .text-container").removeClass("d-none");
    $("#firstCountrySelect")[0].selectedIndex = 0;
    $("#secondCountrySelect")[0].selectedIndex = 0;
}

function resetVisualiseSection() {

    // Reset visualise section
    $("#covidVisualise").addClass("d-none");
    $(".table-heading").html("");
    $("#covidVisualise .chart-container").addClass("d-none");
    $("#covidVisualise .text-container").removeClass("d-none");
    $("#countrySelectVisualise")[0].selectedIndex = 0;
    if (typeof (myLineChart) !== "undefined") {
        // Destroy the graph if it exists
        myLineChart.destroy();
        // Removes lingering width inline style preventing mobile viewing on page change
        $("#lineChart").removeAttr("width");
    }
}