$(document).ready(function() {

    $("#stream1").on("click", function() {
    	var classNames = $(this).attr(".stream1-card");
    	$(".stream1-card").css("background-color", "red");
    });

    $("#stream2").on("click", function() {
    	var classNames = $(this).attr(".stream2-card");
    	$(".stream2-card").css("background-color", "blue");
    });

    $("#stream3").on("click", function() {
    	var classNames = $(this).attr(".stream3-card");
    	$(".stream3-card").css("background-color", "green");
    });

});
