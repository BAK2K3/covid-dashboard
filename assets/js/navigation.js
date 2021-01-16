$(document).ready(function () {

    // On covid-toggler button Click
    $("#covidToggler .btn").on("click", function () {
        // Checks if the button is already active
        if (!$(this).hasClass("btn-active")) {
            // If not, remove active class from all .btn classes, and add to this button.
            $(".btn").removeClass("btn-active");
            $(this).addClass("btn-active");

            // Checks which button has been pressed, and adds/removes classes respectively. 
            if ($(this).hasClass("btn-compare")) {
                toggleCovidSections("#covidCompare");
            } else if ($(this).hasClass("btn-visualise")) {
                toggleCovidSections("#covidVisualise");
            } else if ($(this).hasClass("btn-map")) {
                toggleCovidSections("#covidMap");
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

    // Check if toggler exists, and if so, remove it.
    if (!$("#covidSplash").hasClass("d-none")) {
        $("#covidSplash").addClass("d-none");
    }

    // Reset info section
    $("#covidInfo").addClass("d-none");

    // Reset compare section
    $("#covidCompare").addClass("d-none");
    $("#covidTableBody").html(`<tr><td colspan ='3' > Please select two countries to compare statistics.</td></tr>`);

    // Reset visualise section
    $("#covidVisualise").addClass("d-none");
    if (typeof (myLineChart) !== "undefined") {
        // Destroy the graph if it exists
        myLineChart.destroy();
    }

    // Reset map section
    $("#covidMap").addClass("d-none");
    $(".map").html("");
    // Only CSS class with camelcase due to Mapael targeting
    $(".areaLegend").html("");
    $(activeElement).removeClass("d-none");

}