$(document).ready(function() {
	doOnReady();
});


function doOnReady()
{
	$("#ema").attr("href", "mail" + "to:" + "steve.swett" + "@" + "comcast.net");

	$("#tennis-project-link").click(function() {

		// Does not appear to like dashes in hash name.  For some reason it couldn't distinguish between
		// "tennis-project" and "tennis-project-link".

		jumpToProjectSection('tennisproject');   
	});

	$("#bb-engage-project-link").click(function() {
		jumpToProjectSection('bbengageproject');
	});

	$("#page-maker-project-link").click(function() {
		jumpToProjectSection('pagemakerproject');
	});

	$("#tennis-crud-project-link").click(function() {
		jumpToProjectSection('tenniscrudproject');   
	});

	$("#java-app-samples-project-link").click(function() {
		jumpToProjectSection('javaappsamplesproject');   
	})

	$("#ruby-app-samples-project-link").click(function() {
		jumpToProjectSection('rubyappsamplesproject');   
	});

	$("#about-contact-link").click(function() {
		jumpToProjectSection('aboutsection');   
	});

	$(".project-nav .glyphicon-chevron-right").click(function() {
		jumpToAdjacentProjectSection(this, true);
	});

	$(".project-nav .glyphicon-chevron-left").click(function() {
		jumpToAdjacentProjectSection(this, false);
	});

}


function jumpToAdjacentProjectSection(pRightArrowElem, pNextTruePrevFalse)
{
	currentProjectSection = $(pRightArrowElem).closest(".project-section");
	// console.log("currentProjectSectionId = " + currentProjectSectionId);

	var adjacentProjectSection = pNextTruePrevFalse ? currentProjectSection.next(".project-section") : 
		currentProjectSection.prev(".project-section");

	if (adjacentProjectSection.length)
	{
		jumpToProjectSection(adjacentProjectSection.attr("id"));
	}
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