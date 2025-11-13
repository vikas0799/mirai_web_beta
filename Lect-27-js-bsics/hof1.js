let arr=[1,2,3,4,5,6];

// arr.forEach(xyz)
// arr.forEach(()=>{console.log("hi")});
// arr.forEach((Element,index,arr)=>{
//     console.log(Element,index,arr);
    
// })



 let ans=arr.map((Element,index,arr)=>{
  return Element*2;
 })


 console.log(ans);
 