document.addEventListener("DOMContentLoaded", function() {
    var list = [];
    
    for(var i = 0; i<7;i++){
        list[i] = [];
        var bt = document.createElement("button")
        list[i].push(bt);
        bt.style.left = i*153;
        bt.style.top = 100;
        bt.classList.add("colomn"+i);     
        bt.addEventListener("click",playControl);   

        document.body.appendChild(bt);
 

        for(var j = 0; j < 6; j++){
            var tmp = document.createElement("div");
        //    tmp.setAttribute("position","absolute") 
        //    tmp.setAttribute("left",i*153);
            document.body.appendChild(tmp);
            tmp.style.left = i*153;
            tmp.style.top = 100+(j+1)*53;
            tmp.classList.add("colomn"+i);     
            
                list[i].push(tmp);
            }
        }

        var counter = 0

function playControl() 
{
    
var divList = document.getElementsByClassName(this.classList)

if(divList.length>1)
{
    counter = (counter + 1)%2;
    divList[divList.length-1].classList.add("player"+(counter+1));
    divList[divList.length-1].classList.remove(this.classList);
}

}

})