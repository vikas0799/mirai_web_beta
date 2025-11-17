let arr=[23,45,3,223,1];
// arr.sort();  lexographically sorting
arr.sort((a,b)=>{
    return b-a;
})
console.log(arr);
