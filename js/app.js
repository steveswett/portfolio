$(document).ready(function() {
	doOnReady();
});


function doOnReady()
{
	$("#ema").attr("href", "mail" + "to:" + "steve.swett" + "@" + "comcast.net");

	$(".project-nav .glyphicon-chevron-left").click(function() {
		jumpToAdjacentProjectSection(this, false);
	});

	$(".project-nav .glyphicon-chevron-right").click(function() {
		jumpToAdjacentProjectSection(this, true);
	});

}


function jumpToAdjacentProjectSection(pRightArrowElem, pNextTruePrevFalse)
{
	currentProjectSection = $(pRightArrowElem).closest(".project-section");

	var adjacentProjectSection = pNextTruePrevFalse ? currentProjectSection.next(".project-section") : 
		currentProjectSection.prev(".project-section");

	if (adjacentProjectSection.length)
	{
		window.location.hash = adjacentProjectSection.attr("id");
	}
}
