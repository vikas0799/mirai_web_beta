   // promise consume kiye jate hain
//resolve->.then(***)
//reject->.catch(**)
//    console.log(love);
   
   
   let love= new Promise((resolve,reject)=>{
    //    resolve("registration completed");
    console.log("balance checking...");
    //fetch ka 
    // reject("insuffient balance")
    setTimeout(() => {
        let balance=3000;
        // resolve(`sbi balance  : ${balance}`);
    reject("insuffient balance")

    }, 3000);
   });

love.then((data)=>{
    console.log(data);
    console.log("tranfer money");
    // return promise
}) 
.catch((error)=>{
    console.log(error);
    console.log("paylater");  
    console.log("sahi karo");
})


// Promise().then( ).catch()
// Promise().then( return promise ).then( return promise).then().catch()
