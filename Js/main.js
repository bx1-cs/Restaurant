let send=document.getElementById("send")
let tex=document.getElementById("text_area")
let up=document.getElementById("S2_two")
let arr;
if(localStorage.comment!=null){
     arr=JSON.parse(localStorage.comment)
}else{
    arr=[]
}
send.onclick=function(){
   if(tex.value!=""){
    let obj={
        com:tex.value,
    }
        arr.push(obj)   
    localStorage.setItem('comment',JSON.stringify(arr) )
    tex.value="";
    view();
   }else{}
}
function view(){
    let vie=``;
for(let i=0 ;i<arr.length;i++){
    vie +=`
    <div id="comment_">
            <i id="user_comment" class="fa-solid fa-user"></i>
            <div><p>${arr[i].com}</p></div>
           </div>
           `            
        }
        up.innerHTML=vie;
}
view();
/*------login--------*/
