var username = "Aadi"
var password = "Momo"


document.getElementById("loginButton").onclick = function(){
    let usernameInput = document.getElementById("username").value
    let passwordInput = document.getElementById("password").value
    if((usernameInput == username) && (passwordInput == password)){
        location.replace("profile.html")
        document.getElementById("You cant see me").innerHTML = "true"

    }else{
        document.getElementById("errorLabel").innerHTML = "Your password and email/username combination is incorrect"
    }
}