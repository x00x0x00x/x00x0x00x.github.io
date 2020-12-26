
// wordt gebruikt door de document.ready functie
function hideDiv(div_id){
	document.getElementById(div_id).style.display = 'none';
}

// wordt gebruikt door 'ga op avontuur' button in de header
function goToRandomPage(){
	var mogelijke_links = ['reizen.html', 'galerij.html', 'reistips.html', 'contact.html'];
	var goto = mogelijke_links[Math.floor(Math.random()*mogelijke_links.length) | 0];
	window.location.href = goto;
}

// aangezien we gebruik maken van een header en footer die op beide pagina's hetzelfde zijn gaan we die op alle pagina's inladen
$("#topDiv").load("inc/header.html");
$("#bottomDiv").load("inc/footer.html");

$(document).ready(function(){
	// zorgt ervoor dat de header 50% van de window height beslaat, origineel was dit 100%
	$('.header').height(($(window).height())/2);

	// nadat alles ingeladen is (de jquery die de header/footer inlaad), verbergen we de loading overlay en geven we de content weer
	hideDiv('loadingOverlay');
})