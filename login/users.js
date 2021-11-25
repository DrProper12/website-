export var allUsers = [
    {
        username: "Aadi",
        password: "Momo",
        email: "acjha990@gmail.com"
    },
    {
    username: "Abbu",
    password: "Abdullah",
    email: "abbu@example.com"
    }
]
let usersArrayInLocal = JSON.parse(localStorage.getItem("Users"))
    if(usersArrayInLocal == [] || usersArrayInLocal == null){
        localStorage.setItem("Users", JSON.stringify(allUsers))
    }
export function userCreate(usernameIn, passwordIn, emailIn){
    let objectName = usernameIn
    

    objectName={
        
        username: usernameIn,
        password: passwordIn,
        email: emailIn
        
    }
    

    
    let newData = (objectName)
    let oldData = JSON.parse(localStorage.getItem("Users"))

    oldData.push(newData)
    localStorage.setItem("Users", JSON.stringify(oldData))
}

export function setToLocalStorage(name, value){
    let temp = JSON.stringify(Users[value])
    localStorage.setItem(name, temp)
}
export function removeUser(index){
    let tempusersHere = localStorage.getItem("Users")
    let usersHere = JSON.parse(tempusersHere)
    var deltedAcc = usersHere.splice(index, 1)
    localStorage.setItem("Users", JSON.stringify(usersHere))
    return deltedAcc
}
