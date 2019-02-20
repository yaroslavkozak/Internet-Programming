
// document.getElementById('submit').onclick.function(event){ 

// document.getElementById("form").reset();

// }



console.log("Hello, Master"); 




document.getElementById('main').style.display = 'none';



// var isChecked = $('#checkbox').prop('checked');


// for(checkbox in radios) {
//     radios[checkbox].onclick = function() {
//         alert("Hello");
//     }
// }



$(document).ready(function(){
    $('input[type=radio]').click(function(){
        // alert(this.value);
        document.getElementById('image1').style.display = 'none';
        document.getElementById('image2').style.display = 'inline';

    });
});



