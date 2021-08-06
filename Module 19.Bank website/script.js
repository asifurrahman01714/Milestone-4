const loginForm = document.getElementById('loginForm');
const calculation = document.getElementById('calculation');
const loginBtn = document.getElementById('loginBtn');
const email = document.getElementById('email');
const password = document.getElementById('password');
/* 
loginBtn.onclick = function(){
    calculation.style.display= "block";
    loginForm.style.display= "none";
    window.stop();
}
*/
loginBtn.addEventListener('click' ,function(e){
    if (email.value !== "" || password.value!== "") {
        calculation.style.display= "block";
        loginForm.style.display= "none";
        e.preventDefault();
    }else{
        alert("Please Fill in your email and password");
    }
})

const showDeposit = document.getElementById('showDeposit');
const showWithdraw = document.getElementById('showWithdraw');
const showBalance = document.getElementById('showBalance');
const depositAmount = document.getElementById('depositAmount');
const withdrawAmount = document.getElementById('withdrawAmount');
const submitDeposit = document.getElementById('submitDeposit');
const submitWithdraw = document.getElementById('submitWithdraw');
let totalBalance;

submitDeposit.addEventListener('click',function(e){
    /*
    showDeposit.innerText = depositAmount.value;
    totalBalance = parseInt(showBalance.innerText) + parseInt(showDeposit.innerText);
    showBalance.innerText = totalBalance;
    */
   calculateMe(showDeposit,depositAmount);
})
function calculateMe(a,b) {
    console.log(typeof b.value);
    a.innerText = b.value;
    if (a == showDeposit) {
        totalBalance = parseInt(showBalance.innerText) + parseInt(a.innerText);
    }else {
        totalBalance = parseInt(showBalance.innerText) - parseInt(a.innerText);
        if (totalBalance > 0) {
            showBalance.innerText = totalBalance;
        }else{
            alert("Don't have enough funds in your account..!!!");
            a.innerText = "00";
        }
    }

}

submitWithdraw.addEventListener('click',function(e){
    /*
    showWithdraw.innerText = withdrawAmount.value;
    totalBalance = parseInt(showBalance.innerText) - parseInt(showWithdraw.innerText);
    showBalance.innerText = totalBalance;
    */ 
    calculateMe(showWithdraw,withdrawAmount);
})