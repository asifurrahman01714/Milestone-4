const phonePlus = document.getElementById('phonePlus');
phonePlus.addEventListener('click',function(e){
    console.log('phone plus clicked');

    const phoneInput = document.getElementById('phoneInput');
    console.log(phoneInput.value);
    const phoneInputNumber = parseInt(phoneInput.value);
    console.log(phoneInputNumber);
    const phoneNewInputNumber = phoneInputNumber + 1;
    console.log("phoneNewInputNumber", phoneNewInputNumber);
    phoneInput.value = phoneNewInputNumber;


    const phonePrice = document.getElementById('phonePrice');
   
    phonePrice.innerText = 100 * phoneNewInputNumber;
})

const phoneMinus = document.getElementById('phoneMinus');
phoneMinus.addEventListener('click',function(e){
    console.log('phone minus clicked');
    
    
    const phoneInput = document.getElementById('phoneInput');
    console.log(phoneInput.value);
    const phoneInputNumber = parseInt(phoneInput.value);
    console.log(phoneInputNumber);
    const phoneNewInputNumber = phoneInputNumber - 1;
    console.log("phoneNewInputNumber", phoneNewInputNumber);

    if (phoneNewInputNumber >= 0) {
        phoneInput.value = phoneNewInputNumber;
        const phonePrice = document.getElementById('phonePrice');
        phonePrice.innerText = 100 * phoneNewInputNumber;
    } else {
        return "Negative product is not acceptable";
    }

})