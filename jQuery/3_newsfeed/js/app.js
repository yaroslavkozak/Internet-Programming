// console.log("hello");
// $odd = $('a:odd'); 
// $odd.hide();  



// const $odd = $('a:odd'); 
const $secureLinks = $('a[href^="https://"]'); 

// $('input[name^="add"]'); 
// 
// 


const $pdfs = $('a[href$=".pdf"]'); 

$secureLinks.attr('target','_blank'); 
$pdfs.attr('download',''); 
$secureLinks.addClass('secure'); 




