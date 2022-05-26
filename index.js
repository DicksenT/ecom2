var slide = document.getElementById("slide");
var leftarrow = document.getElementById("leftarrow");
var rightarrow = document.getElementById("rightarrow");

let y = 0;

leftarrow.onclick = function(){
    if(y > -300){
    y = y - 300;
    slide.style.right = y + "px"
    }
}
rightarrow.onclick = function(){
    if(y > 0){
    y = y + 300;
    slide.style.right = y + "px"
    }
}
    