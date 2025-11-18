function fact(n){
    let ans=1;
    for(let i=1;i<=n;i++){
        ans=ans*i;
    }
    return ans;

}

// function sum(n){
//     // 
// }

function memoization(fn){
    let cache={};
    return (n)=>{
        if(cache[n]){
            return cache[n];  //direct returning result
        }
        else{
            let result=fn(n);  //recalculating
            cache[n]=result;
            return cache[n];
        }
    }
}

let myfactorial=memoization(fact);
// (n)=>{
//         if(cache[n]){
//             return cache[n];  //direct returning result
//         }
//         else{
//             let result=fn(n);  //recalculating
//             cache[n]=result;
//             return cache[n];
//         }
//     }
console.log(myfactorial);
// myfactorial(5);
// myfactorial(5);
// myfactorial(5);
// myfactorial(5);
// myfactorial(5);
// myfactorial(5);
// myfactorial(5);


// myfactorial(3);
// myfactorial(3);

// console.log(myfactorial(4));

