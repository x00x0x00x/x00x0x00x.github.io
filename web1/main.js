
function hideDiv(div_id){
	document.getElementById(div_id).style.display = 'none';
}

// aangezien we gebruik maken van een header en footer die op beide pagina's hetzelfde zijn gaan we die op alle pagina's inladen
$("#topDiv").load("inc/header.html");
$('#pushImports').append($('').load('ajax/test.html'));

$(document).ready(function(){
	$('.header').height($(window).height());

	// nadat alles ingeladen is (de jquery die de header/footer inlaad), verbergen we de loading overlay en geven we de content weer
	hideDiv('loadingOverlay');
})