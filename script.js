
const newWinner = document.getElementById("winner")

let button = document.getElementById("reset")
let randomImage = document.createElement("img")
var myPix = new Array("images/doug1.jpg","images/doug2.jpg","images/doug3.jpg");

function choosePic(image) {
    var randomNum = Math.floor(Math.random() * myPix.length);
    image.src = myPix[randomNum];
    return image
}

button.onclick = function(){
    
    newWinner.appendChild(choosePic(randomImage))
}