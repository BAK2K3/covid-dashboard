$(document).ready(function () {

    $(".btn").on("click", function () {
        if (!$(this).hasClass("btn-active")) {
            $(".btn").removeClass("btn-active");
            $(this).addClass("btn-active");
        }
    });
});