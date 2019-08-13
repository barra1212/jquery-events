$(document).ready(function() {

$(".card").click(function(){
	$(this).toggleClass("highlight");
});

//cards not currently seleced will be hidden when select_btn is clicked
$("#select_btn").click(function(){
	$(".card:not(.highlight)").hide();	 
});

//all cards will now be selected
$("#all_btn").click(function(){
	$(".card").show();	 
});
//underlines all h2's amd adds border to the nav
$("h2").addClass("underline");
   $("nav").addClass("border");
   //on stream_btn click, associated stream will be highlighted only
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


}); 