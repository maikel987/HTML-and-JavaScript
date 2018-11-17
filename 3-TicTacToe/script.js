var element = document.querySelectorAll(".block");
var count = 0;

for (var i = 0; i < element.length; i++){
    element[i].addEventListener("click",changeColor);
}

function changeColor(){

    if(count%2 == 0){
this.classList.add("o");
    }else{
        this.classList.add("x");
        
    }
    this.removeEventListener("click",changeColor)
    count++;

    if(count == 9){ alert("Game is Over")}

}
