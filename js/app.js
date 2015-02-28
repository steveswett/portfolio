$(document).ready(function() {
	doOnReady();
});


function doOnReady()
{
	$("#tennis-project-link").click(function() {

		// Does not appear to like dashes in hash name.  For some reason it couldn't distinguish between
		// "tennis-project" and "tennis-project-link".

		jumpToProjectSection('tennisproject');   
	})

	$("#bb-engage-project-link").click(function() {
		jumpToProjectSection('bbengageproject');
	})

	$("#page-maker-project-link").click(function() {
		jumpToProjectSection('pagemakerproject');
	})

	$("#tennis-crud-project-link").click(function() {
		jumpToProjectSection('tenniscrudproject');   
	})

}


function jumpToProjectSection(pProjectSectionId)
{
	// var bodyScrollTop = $("body").scrollTop();
	window.location.hash = pProjectSectionId;

	// TODO: problem that may need solving (but is tricky): clicking project nav while project already visible ends up
	// executing the "scrollBy" below.  Might not be easy to bypass.  Scroll is there due to "fixed" nav header.

	// console.log("bodyScrollTop = " + bodyScrollTop);

	// if (bodyScrollTop == 0)
	// {

		window.scrollBy(0, 0 - $(".navbar").height() - parseInt($("#" + pProjectSectionId).css("margin-top")) ) ;

	//}
}