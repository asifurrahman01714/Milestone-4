const phonePlus = document.getElementById('phonePlus');
phonePlus.addEventListener('click',function(e){
    handleProductChange(true);
})

const phoneMinus = document.getElementById('phoneMinus');
phoneMinus.addEventListener('click',function(e){
    handleProductChange(false);
});

function handleProductChange(isIncrease) {
    console.log('phone minus clicked');

    const phoneInput = document.getElementById('phoneInput');
    console.log(phoneInput.value);
    let phoneInputNumber = parseInt(phoneInput.value);
    console.log(phoneInputNumber);
    let phoneNewInputNumber;
    if (isIncrease) {
        phoneNewInputNumber = phoneInputNumber + 1;
    } else {
        phoneNewInputNumber = phoneInputNumber - 1;
    }
    console.log("phoneNewInputNumber", phoneNewInputNumber);

    if (phoneNewInputNumber >= 0) {
        phoneInput.value = phoneNewInputNumber;
        const phonePrice = document.getElementById('phonePrice');
        phonePrice.innerText = 100 * phoneNewInputNumber;
    }
}