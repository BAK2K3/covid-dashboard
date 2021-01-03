$(document).ready(function () {

    // On button Click
    $(".btn").on("click", function () {
        // Checks if the button is already active
        if (!$(this).hasClass("btn-active")) {
            // If not, remove active class from all .btn classes, and add to this button.
            $(".btn").removeClass("btn-active");
            $(this).addClass("btn-active");

            $(".covid-data-container").removeClass("background-test-1 background-test-2 background-test-3");

            // Checks which button has been pressed, and adds respective background color for testing
            if ($(this).hasClass("btn-compare")) {
                $(".covid-data-container").addClass("background-test-1");
            } else if ($(this).hasClass("btn-visualise")) {
                $(".covid-data-container").addClass("background-test-2");
            } else if ($(this).hasClass("btn-map")) {
                $(".covid-data-container").addClass("background-test-3");
            }
        }
    });
});