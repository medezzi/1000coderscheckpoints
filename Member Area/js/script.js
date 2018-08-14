document.getElementById("connect").addEventListener("click",connecting ); 
document.getElementById("save").addEventListener("click", validation);

   
function validation() {
    var name = document.getElementById("fname").value;
    var pseudo= document.getElementById("pseudo").value;
    var email = document.getElementById("email").value;
    var password= document.getElementById("password").value;
    var cpassword= document.getElementById("cpassword").value;
var emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var passwordReg = new RegExp("(?=.*\d)(?=.*[a-z])(?=.*[A-Z])");

if( name ==='' || email ==='' || pseudo ==='' || password ==='' || cpassword ==='' ){
alert("remplir tous les champs pour continuer!");
return false;
}
        else if (name.length>20 || name.length<6)
            {
                alert("le nom doit etre entre 6 et 20 caractères");
				return false;
            }
        else if(!(email).match(emailReg)) {
			alert("entrer une valide addresse mail");
			return false;
}
        else if (!(password).match(passwordReg))
            {
                alert("entrer une valide mot de passe");
				return false;

            }
        else if (password.length<6)
            {
                alert("mot de passe minimum 6 caractères");
				return false;

            }
        else if (password !== cpassword)
            {
                alert("confirmer la meme mot de passe");
				return false;
            }
    else{
        alert("inscription terminé");
		window.open("home.html");
		return true;
}
}

    function connecting(){
		
		window.open("home.html") ;
		return true;


    }