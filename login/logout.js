import { removeUser } from "./users.js"
document.getElementById("logoutPlease").onclick = function logout(){
    localStorage.setItem("loggedIn", JSON.stringify(false))
    localStorage.setItem("loggedInConst", JSON.stringify(false))
    localStorage.setItem("SESSION_NAME", "")
    location.replace("login.html")
    }
var i
document.getElementById("delAccount").onclick = function(){
    let sesName = localStorage.getItem("SESSION_NAME")
    let UsersAcc = JSON.parse(localStorage.getItem("Users"))
    let confirmAsk = confirm("Are you sure you want to delete your account?")

    if(confirmAsk == true){
        UsersAcc.forEach((element, index) => {
            
            if(element.username == sesName){
                console.log("got this far")
                i = index
            }
            
        })
        let deletedAcc = removeUser(i)
        console.log(deletedAcc)
            localStorage.setItem("loggedIn", JSON.stringify(false))
            localStorage.setItem("loggedInConst", JSON.stringify(false))
            localStorage.setItem("SESSION_NAME", "")
            location.replace("login.html")
    }
}