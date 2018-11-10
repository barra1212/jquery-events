$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	
	$("p").on("click", function() {
	    $("p").css("color", "red");
	});
	
	$("h2").mouseenter(function() {
		$("h2").css("background-color", "lightblue");
	});
	
	$('#card_head_1').mouseenter(function() {
		$('#card_head_1').css("font-size", "1.5em");
	});
	
	$('#card_head_2').mouseenter(function() {
		$('#card_head_2').css("font-size", "1.5em");
	});
	
	$('#card_head_3').mouseenter(function() {
		$('#card_head_3').css("font-size", "1.5em");
	});
	
	$('#card_head_4').mouseenter(function() {
		$('#card_head_4').css("font-size", "1.5em");
	});
	
	$('#card_head_5').mouseenter(function() {
		$('#card_head_5').css("font-size", "1.5em");
	});
	
	$('#card_head_6').mouseenter(function() {
		$('#card_head_6').css("font-size", "1.5em");
	});
	
	$(".bottom_button").mouseenter(function() {
		$("body").css("background-color", "#000000")
	});
	
	$(".bottom_button").mouseleave(function() {
		$("body").css("background-color", "#777777")
	});
	
}); 
