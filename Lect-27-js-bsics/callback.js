function display(callback){
//     x=()=>{
//     console.log("hello");
//     console.log("mirai");
// }
    console.log(callback);
      callback();
    
      

}

// let a=23;
let a=()=>{
    console.log("hello");
    console.log("mirai");
};
display(a);