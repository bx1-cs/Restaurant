//slider
let nex=document.getElementById("next")
let prev=document.getElementById("prev")
let cont=document.getElementById("container_slider")
let container=document.querySelectorAll(".slid li");
let move=290;
let count=0;
prev.onclick=function (){
    if(count>=0){
        count-=290;
    }else if(count<=0){
        count=0
    }
    cont.scrollTo({
        left:count,
        behavior:"smooth"
    })}
    nex.onclick=function(){
        if(screen.width<=767){
            if(count<=(container.length)*290){
                count+=290;
            }
            else{count=0;}
            cont.scrollTo({
            left:count,
            behavior:"smooth"
        }
        )
    }else{
        if(count<=(container.length-3)*290){
            count+=290;
        }
        else{count=0;}
        cont.scrollTo({
        left:count,
        behavior:"smooth"
    }
    )
        
    }
       
};
    