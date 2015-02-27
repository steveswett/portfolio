$(document).ready(function() {
	doOnReady();
});


function doOnReady()
{
	$("#tennis-project-link").click(function() {
		console.log("tennis project link clicked");
		window.location.hash = 'tennisproject';   // Does not appear to like dashes in hash name
		window.scrollBy(0, 0 - $(".navbar").height() - parseInt($("#tennisproject").css("margin-top")) ) ;
	})
}