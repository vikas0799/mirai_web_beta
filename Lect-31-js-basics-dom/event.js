var aura=0;
let head=document.querySelectorAll("h1");
function display(){
    //reaction code
    console.log("button clicked");
    console.log("reachtion code executed");
      aura++;
      console.log(aura);
      head[0].innerHTML=`Cart Count=${aura}`;
}

function decrease()
{
    aura--;
    if(aura>=0){
      head[0].innerHTML=`Cart Count=${aura}`;
        
    }
    else{
        aura=0;
    }
}