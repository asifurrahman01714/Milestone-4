const firstClassPlusBtn = document.getElementById('firstClassPlusBtn');
firstClassPlusBtn.addEventListener('click',function(e){
    firstClassBtnHandler(true);
});

const firstClassMinusBtn = document.getElementById('firstClassMinusBtn');
firstClassMinusBtn.addEventListener('click',function(e){
    firstClassBtnHandler(false);
})

function firstClassBtnHandler(isIncrease) {
    const firstClass = document.getElementById('firstClass');
    const firstClassInput = parseInt(firstClass.value);
    if (isIncrease == true) {
        firstClass.value = firstClassInput + 1;
    }
    else{
        if (firstClassInput > 0) {
            firstClass.value = firstClassInput - 1;
        }
        else{
            return "It is not possible negative Input";
        }
    }

    const subTotal = document.getElementById('subTotal');
    subTotal.innerText = firstClass.value * 150;

    const tax = document.getElementById('tax');
    tax.innerText = subTotal.innerText * 0.1;

    const total = document.getElementById('total');
    total.innerText = parseInt(subTotal.innerText) + parseInt(tax.innerText);
}