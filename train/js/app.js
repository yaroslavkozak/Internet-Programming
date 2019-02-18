$(document).foundation();



.focusout(function() {
    
 $( "#focus-count" ).text( "focusout fired: " + focus + "x" );   
    
}
          
          
          
          var email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

// function validate(coupon) {
//     var myRe = "LUCKY";
//     var coupon = myRe.trim();
//     var input = document.getElementById('discount-coupon').value;
//     if(input.toUpperCase() == coupon.toUpperCase()) {
//         document.getElementById('message').innerHTML="Coupon applied!";
//         document.getElementById('err').innerHTML="";
//         return true;
//     } else {
//         document.getElementById('err').innerHTML="Invalid coupon";
//         document.getElementById('message').innerHTML="";
//         return false;
//     }
// }



// $( "#discount-coupon" ).focus(function() {
//      var myRe = "LUCKY";
//     var coupon = myRe.trim();
//     var input = document.getElementById('discount-coupon').value;
//     if(input.toUpperCase() == coupon.toUpperCase()) {
//         document.getElementById('message').innerHTML="Coupon applied!";
//         document.getElementById('err').innerHTML="";
//         return true;
//     } else {
//         document.getElementById('err').innerHTML="Invalid coupon";
//         document.getElementById('message').innerHTML="";
//         return false;
//     }
// });