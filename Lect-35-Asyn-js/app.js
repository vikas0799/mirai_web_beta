//  async function display(){

//     //   ..st1
//    await //st2. asynct task
//     //st3
//     await //st4 async task

// }

// display();


async function getData() {
    try {
        let url=`https://fakestoreapi.com/products`;
        // let responce = await fetch(url,{method:"get", });
        let responce=await fetch(url);

        let data = await responce.json();
        console.log(data);
        displayDOM(data);
    } catch (error) {
        console.log(error);
        console.log("thik karo");

    }

}


getData();



// displayDOM(productarr){
//     ////
// }




