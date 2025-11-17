function createCounter(){
    let count=0;

    // let Counter=()=>{

    // }
    function Counter(){
        count++;
        console.log(count);
        
    }
    return Counter;
}


let ans=createCounter();
console.log(ans);

ans();
ans();


let panday=createCounter();
panday();
panday();
panday();
