document.getElementById("logoutPlease").onclick = function logout(){
    localStorage.setItem("loggedIn", JSON.stringify(false))
    localStorage.setItem("loggedInConst", JSON.stringify(false))
    localStorage.setItem("SESSION_NAME", "")
    location.replace("/login/login.html")
}

document.getElementById("settingPage").onclick = function(){
    location.replace("./userSettings/settings.html")
}
