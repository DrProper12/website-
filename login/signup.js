import {allUsers, userCreate} from "./users.js"

document.getElementById("signUpButton").onclick = function signUp(){
    var username = document.getElementById("username").value 
    var password = document.getElementById("password").value 
    var email = document.getElementById("email").value

    try {
        userCreate(username, password, email)
        console.log(allUsers)
        location.replace("./login.html")
    }
    catch (error) {
        console.error(error)
    }


}

document.getElementById("goLogin").onclick = function(){
    location.replace("./login.html")
}