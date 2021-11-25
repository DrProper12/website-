import {removeUser} from "/login/users.js"
var i
document.getElementById("delAccount").onclick = function(){
    let sesName = localStorage.getItem("SESSION_NAME")
    let UsersAcc = JSON.parse(localStorage.getItem("Users"))
    let confirmAsk = confirm("Are you sure you want to delete your account?")

    if(confirmAsk == true){
        UsersAcc.forEach((element, index) => {
            //for each loop loops through the element.username which is the usernames of users
            
            if(element.username == sesName){
                console.log("got this far")
                i = index //index to access array
            }
            
        })
        let deletedAcc = removeUser(i)
        console.log(deletedAcc) //removeUser function returns username of the deleted account.
            localStorage.setItem("loggedIn", JSON.stringify(false))
            localStorage.setItem("loggedInConst", JSON.stringify(false))
            localStorage.setItem("SESSION_NAME", "")
            location.replace("/login/login.html")
    }
}