import {renameUser} from '/login/users.js'
var i
document.getElementById("usernameChangeSubmit").onclick = function(){
    
    //getting user input
    let newUsername = document.getElementById("newUsername").value
    let passwordCompare = document.getElementById("password").value
    
    let sesName = localStorage.getItem("SESSION_NAME")
    let tempUsersAcc = localStorage.getItem("Users")
    let UsersAcc = JSON.parse(tempUsersAcc)
    UsersAcc.forEach((element, index) => {
        if(element.username == sesName){
            i = index
        }
        
    })
    let password = UsersAcc[i].password //getting the users password from the users array
    if(passwordCompare == password ){//comparing the passwords
        renameUser(i, newUsername)     //renameUser function renames the user
        location.replace("/login/profile/profile.html")       //location is replaced with the profile page
    }else{
        document.getElementById("errLabel").innerHTML = "The password is incorrect" //password  incorrect label
    }
}

