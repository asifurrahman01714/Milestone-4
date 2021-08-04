const loginForm = document.getElementById('loginForm');
const calculation = document.getElementById('calculation');
const loginBtn = document.getElementById('loginBtn');
/* 
loginBtn.onclick = function(){
    calculation.style.display= "block";
    loginForm.style.display= "none";
    window.stop();
}
*/
loginBtn.addEventListener('click' ,function(e){
    calculation.style.display= "block";
    loginForm.style.display= "none";
    e.preventDefault();
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
    a.innerText = b.value;
    if (a == showDeposit) {
        totalBalance = parseInt(showBalance.innerText) + parseInt(a.innerText);
    }else {
        totalBalance = parseInt(showBalance.innerText) - parseInt(a.innerText);
    }
    showBalance.innerText = totalBalance;
}

submitWithdraw.addEventListener('click',function(e){
    /*
    showWithdraw.innerText = withdrawAmount.value;
    totalBalance = parseInt(showBalance.innerText) - parseInt(showWithdraw.innerText);
    showBalance.innerText = totalBalance;
    */ 
    calculateMe(showWithdraw,withdrawAmount);
})