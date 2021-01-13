$(document).ready(function () {

    // On covid-toggler button Click
    $("#covid-toggler .btn").on("click", function () {
        // Checks if the button is already active
        if (!$(this).hasClass("btn-active")) {
            // If not, remove active class from all .btn classes, and add to this button.
            $(".btn").removeClass("btn-active");
            $(this).addClass("btn-active");

            // Checks which button has been pressed, and adds/removes classes respectively. 
            if ($(this).hasClass("btn-compare")) {
                toggleCovidSections("#covid-compare");
            } else if ($(this).hasClass("btn-visualise")) {
                toggleCovidSections("#covid-visualise");
            } else if ($(this).hasClass("btn-map")) {
                toggleCovidSections("#covid-map");
            }
        }
    });

    // On heading click
    $("#headingAnchor").on("click", function () {

        // Removes all active classes from togglers
        $(".btn").removeClass("btn-active");
        // Calls the toggleCovidSections with the exception
        toggleCovidSections("#covid-info");

    });
});

// Function for removing all sections from view, and removing the d-none bootstrap class from the section chosen
function toggleCovidSections(activeElement) {

    // Check if toggler exists, and if so, remove it.
    if (!$("#covid-splash").hasClass("d-none")) {
        $("#covid-splash").addClass("d-none");
    }

    // Reset info section
    $("#covid-info").addClass("d-none");

    // Reset compare section
    $("#covid-compare").addClass("d-none");
    $("#covid-table-body").html(`<tr><td colspan ='3' > Please select two countries to compare statistics.</td></tr>`);

    // Reset visualise section
    $("#covid-visualise").addClass("d-none");
    if (typeof (myLineChart) !== "undefined") {
        myLineChart.destroy();
    }

    // Reset map section
    $("#covid-map").addClass("d-none");
    $(".map").html("");
    $(activeElement).removeClass("d-none");

}