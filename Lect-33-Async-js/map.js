// let arr=[23,45,27,78,98,1223,1,4,0];
let arr = [
    {
        fname: "vikas",
        percentage: 23,
        dist:"azamgarh",
        sem:1,
        payment:"paid"
    },
    {
        fname: "shereya",
        percentage: 45,
        dist:"santkabirnagar",
        sem:5,
        payment:"paid"
    },
    {
        fname: "dhruv",
        percentage: 27,
        dist:"azamgarh",
        sem:1,
        payment:"unpaid"
    },
    {
        fname: "shreeeadya",
        percentage: 98,
        dist:"azamgarh",
        sem:1,
        payment:"paid"
    }
];

let main = document.querySelector("main");
// main.innerHTML=`first day ${arr[0]}`;
main.innerHTML = arr.map((Element) => {
    return `
    <section> 
    <h1> myname : ${Element.fname} </h1>
    <h4> mypercentage : ${Element.percentage} </h4>
    <p> district: ${Element.dist} </p>
    <p> semester : ${Element.sem} <p>
    <p> payment status : ${Element.payment} </p>
    </section>
    `
}).join("");