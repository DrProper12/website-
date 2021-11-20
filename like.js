let likes = 0
document.getElementById("recipeLike").onclick = function likeFunction(){
    likes++
    document.getElementById("recipeLikes").innerHTML = likes
}
