console.log("TUK TUK");

function doo() { 
    
    
secret = document.getElementById("secret");
      
if (x) {secret.innerHTML = "Hello"; x=false;} 
    else {secret.innerHTML = ""; x=true;}
    

}



function validate()
{ 

usernameTF = document.getElementById("username");
name = usernameTF.value;
x=name.length; 
if (x<=5)
    { 
    secret = document.getElementById("secret");
    secret.innerHTML = "error";
    username.classList.add('MyClass');     
    }
    else {secret.innerHTML = "correct";}


}