
// if (!String.prototype.format) {
//   String.prototype.format = function() {
//     var args = arguments;
//     return this.replace(/{(\d+)}/g, function(match, number) { 
//       return typeof args[number] != 'undefined'
//         ? args[number]
//         : match
//       ;
//     });
//   };
// }

// async function fetchHtmlAsText(url) {
//     return await (await fetch(url)).text();
// }

// async function loadToDiv(div_id,file_path) {
//     const contentDiv = document.getElementById(div_id);
//     contentDiv.innerHTML = await fetchHtmlAsText(file_path);
// }

// function loadToDiv(div_id, file_path){
	// $("#{0}".format(div_id)).load("{0}".format(file_path));
	// $("#topDiv").load("inc/header.html");
	// document.getElementById(div_id).innerHTML='<object type="text/html" data="{0}" ></object>'.format(file_path);
// }
// loadToDiv('topDiv', 'inc/header.html');

$("#topDiv").load("inc/header.html");

$(document).ready(function(){
	$('.header').height($(window).height());

})