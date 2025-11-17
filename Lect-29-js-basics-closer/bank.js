function openbankaccount(){
    let balance=0;

    function deposite(n){
        balance=balance+n;
        console.log(`updated balance is = ${balance}`);
        
    }

    function withdrawl(n){
        balance=balance-n;
        console.log(`updated balace is =${balance}`);
        
    }

    return {deposite,withdrawl};
}

let panday=openbankaccount();
// console.log(panday);
panday.deposite(1500);
panday.deposite(1000);
panday.withdrawl(1000);


let himanshu=openbankaccount();
himanshu.deposite(1000);
himanshu.withdrawl(2000);
himanshu.withdrawlz(1000);