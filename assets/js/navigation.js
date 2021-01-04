$(document).ready(function () {

    // On button Click
    $(".btn").on("click", function () {
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
});

// Function for removing all sections from view, and removing the d-none bootstrap class from the section chosen
function toggleCovidSections(activeElement) {
    $("#covid-info").addClass("d-none");
    $("#covid-compare").addClass("d-none");
    // Need to consider a more 'global' implementation of the below
    $("#covid-table-body").html(`<tr><td colspan ='3' > Please select two countries to compare statistics.</td></tr>`);
    $("#covid-visualise").addClass("d-none");
    $("#covid-map").addClass("d-none");
    $(activeElement).removeClass("d-none");
}