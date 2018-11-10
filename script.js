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
	
// 	$("#streamone_btn").on("click", function(){
// 		$("#streamone_btn").hide("slow");
//	});

// 	$("#streamone_btn").on("click", function(){
// 		$("#html-para").toggle();
//	});

// 	$("#streamone_btn").on("click", function(){
// 		$("#html-para").slideToggle("slow");
//	});

$("#streamone_btn").on("mouseenter", function(){
	$("#streamone_btn").fadeTo("slow", 0.5);
});

$("#streamone_btn").on("mouseleave", function(){
	$("#streamone_btn").fadeTo("slow", 1);
});

}); 
