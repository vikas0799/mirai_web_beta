let num=49;

let temp=true;
for(let i=2;i<=num-1;i++){
    if(num%i==0){
        temp=false;
    }
}

if(temp==true){
    console.log("it is prime");
    
}
else{
    console.log("Not prime");
    
}




let n=123;
n=parseInt(n/10);
console.log(n);
