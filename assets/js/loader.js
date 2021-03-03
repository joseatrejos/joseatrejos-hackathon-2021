$("#content").hide();

setTimeout(function() {
    $("#loader").hide();
    $("#content").fadeIn(600);
}, 4000);