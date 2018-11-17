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

    

    var indX;
    var indY;
    for(var i = 0; i < list.length;i++){
        if(list[i][0] == this){
            indY = divList.length;
            indX = i;
        }
    }

    var flag = false
    var tmpclass = "player"+(counter+1);
    for(var i = 0; i <4;i++){
        
flag = flag ||(classCheck(list,indX-3+i,indY,tmpclass)
                &&classCheck(list,indX-2+i,indY,tmpclass)
                &&classCheck(list,indX-1+i,indY,tmpclass)
                &&classCheck(list,indX+i,indY,tmpclass))
            
                ||(classCheck(list,indX,indY-3+i,tmpclass)
                &&classCheck(list,indX,indY-2+i,tmpclass)
                &&classCheck(list,indX,indY-1+i,tmpclass)
                &&classCheck(list,indX,indY+i,tmpclass))

                ||(classCheck(list,indX-3+i,indY-3+i,tmpclass)
                &&classCheck(list,indX-2+i,indY-2+i,tmpclass)
                &&classCheck(list,indX-1+i,indY-1+i,tmpclass)
                &&classCheck(list,indX+i,indY+i,tmpclass))
               
                ||(classCheck(list,indX-3+i,indY+3-i,tmpclass)
                &&classCheck(list,indX-2+i,indY+2-i,tmpclass)
                &&classCheck(list,indX-1+i,indY+1-i,tmpclass)
                &&classCheck(list,indX+i,indY-i,tmpclass))



//            ((list[indX-3+i][indY].classList.contains(tmpclass))
  //          &&(list[indX-2+i][indY].classList.contains(tmpclass))
    //        &&(list[indX-1+i][indY].classList.contains(tmpclass))
      //      &&(list[indX+i][indY].classList.contains(tmpclass)))
    }
    
    if(flag)
    setTimeout(() => {
        alert(tmpclass+" won!!");
location.reload();
    }, 1);      
}}

function classCheck(list,x,y,className){
if(x<0||x>6||y<0||y>6) return false;
return list[x][y].classList.contains(className);
}

function CheckWinner(){
    for(var i; i<7;i++){
        for(var j; j<6;j++){
        
        }    
    }
}

})