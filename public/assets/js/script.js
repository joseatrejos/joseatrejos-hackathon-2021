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

    var cosaClickeable = document.querySelector("#botonDescanso");
    // Static Variable Initialization. On the first click, "this.counter" doesn't exist, hence it's created with a zero value.
    if (typeof this.counter == 'undefined') {
        this.counter = 0;
    }

    if (this.counter === 0) {
        hola = true;
        this.counter++;
        $("#descansar").show();
        scrollToSection();
    } else if (this.counter === 1) {
        hola = false;
        this.counter--;
        $("#descansar").hide();
    }
}

function scrollToSection() {
    setTimeout(function() {
        $("body,html").animate({
                scrollTop: $("#descansar").offset().top
            },
            800
        );
    }, 1500);
}

function goToTasks() {
    window.open("tasks.html", "_self")
}