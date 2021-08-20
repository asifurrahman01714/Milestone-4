// const firstClassPlusBtn = document.getElementById('firstClassPlusBtn');
// firstClassPlusBtn.addEventListener('click',function(e){
//     firstClassBtnHandler(true);
// });

// const firstClassMinusBtn = document.getElementById('firstClassMinusBtn');
// firstClassMinusBtn.addEventListener('click',function(e){
//     firstClassBtnHandler(false);
// })
// Economy Class 

// const economyPlusBtn = document.getElementById('economyPlusBtn');
// economyPlusBtn.addEventListener('click',function(e){
//     economyBtnHandler(true);
// });

// const economyMinusBtn = document.getElementById('economyMinusBtn');
// economyMinusBtn.addEventListener('click',function(e){
//     economyBtnHandler(false);
// })


function productHandler(isIncrease, productName) {
    const productClass = document.getElementById(productName +'Class');
    const productClassInput = parseInt(productClass.value);
    if (isIncrease == true) {
        productClass.value = productClassInput + 1;
    }
    else{
        if (productClassInput > 0) {
            productClass.value = productClassInput - 1;
        }
        else{
            return "It is not possible negative Input";
        }
    }

    total();

}

function economyBtnHandler(isIncrease) {
    const economyClass = document.getElementById('economyClass');
    const economyClassInput = parseInt(economyClass.value);
    if (isIncrease == true) {
        economyClass.value = economyClassInput + 1;
    }
    else{
        if (economyClassInput > 0) {
            economyClass.value = economyClassInput - 1;
        }
        else{
            return "It is not possible negative Input";
        }
    }

    total();

}

function total() {
    const firstClass = document.getElementById("firstClass");
    const firstClassInput= parseInt(firstClass.value);

    const economyClass = document.getElementById('economyClass');
    const economyClassInput = parseInt(economyClass.value);


    const subTotal = document.getElementById('subTotal');
    subTotal.innerText = firstClassInput * 150 + economyClassInput * 100 ;

    const tax = document.getElementById('tax');
    tax.innerText = subTotal.innerText * 0.1;

    const total = document.getElementById('total');
    total.innerText = parseInt(subTotal.innerText) + parseInt(tax.innerText);
}