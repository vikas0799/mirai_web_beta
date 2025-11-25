// fetch(url).then(json data).then(data).catch(error)
fetch('https://fakestoreapi.com/products')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log("actual data..");
        
        console.log(data);
        displayDOM(data);
    })
    .catch((error)=>{
        console.log(error);
        
    });

    function displayDOM(productarr){
        //dom logics
        document.querySelector("h1").innerHTML=productarr[0].title;
    }