function toggleRest() {
    if ($('#button').is(":checked")) {
        $("#col-btn1").removeClass(["col-md-6", "col-lg-6"]);
        $("#col-btn1").addClass(["col-md-12", "col-lg-12"]);
        $("#col-btn2").addClass("d-none");
    } else {
        $("#col-btn1").addClass(["col-md-6", "col-lg-6"]);
        $("#col-btn1").removeClass(["col-md-12", "col-lg-12"]);
        setTimeout(function() {
            $("#col-btn2").removeClass("d-none");
        }, 1100);
    }
}