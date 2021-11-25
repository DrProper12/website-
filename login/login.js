localStorage.removeItem("passwordInLocal")
//removing passwordInLocal, because it was a security flaw lol


let tempUsers = localStorage.getItem("Users")
var usersAllLocal = JSON.parse(tempUsers)
console.log(usersAllLocal)
//getting users from local storage

var anotherVar
var passwordCompare
//defining variables for password and username

document.getElementById("loginButton").onclick = function login(){
    let usernameData = document.getElementById("username").value
    let passwordData = document.getElementById("password").value
    //the Data suffix is to understand that it is user inputted.

    usersAllLocal.forEach(element => {
        if(element.username == usernameData){
        anotherVar = element.username
        console.log(anotherVar)
        //looping through an array of users and checking if they inputed username exists
        passwordCompare = element.password
        //if true then variable passwordCompare = the password of the user    
        }


    });

    if((usernameData == anotherVar)){
        //if usernameInputed = username
        if(passwordData == passwordCompare){
            //if passwordInputed = password of user
            localStorage.setItem("loggedIn", JSON.stringify(true))
            //loggedIn variable which allows you to go to profile
            localStorage.setItem("loggedInConst", JSON.stringify(true))
            //same as loggedIn but its required, and is only changed on logout
            localStorage.setItem("SESSION_NAME", anotherVar)
            //the session name is the name in the profile.html page.
        }
        else{
            document.getElementById("errorLabel").innerHTML = "The password is incorrect."   
            //error if the password is incorrect 
        }
    }else{
        document.getElementById("errorLabel").innerHTML = "There is no account with that username"
        //error if the username doesn't belong to anyone
    }
}
document.getElementById("goHome").onclick = function(){
    location.replace("/home/home.html")
    //functionality for the go home button
}
document.getElementById("goRegister").onclick = function(){
    location.replace("signup.html")
    //functionality for the go to register button
}



setInterval(() => {
    let loggedInParsed = JSON.parse(localStorage.getItem("loggedIn"))
    if(loggedInParsed == true){
        location.replace("profile.html")
        //to send you to the profile page if you are logged in(
    }
}, 500);