const phonePlus = document.getElementById('phonePlus');
phonePlus.addEventListener('click',function(e){
    console.log('phone plus clicked');
    const phoneInput = document.getElementById('phoneInput');
    console.log(phoneInput.value);
    const phoneInputNumber = parseInt(phoneInput.value);
    console.log(phoneInputNumber);

    phoneInput.value = phoneInputNumber + 1;

    const phonePrice = document.getElementById('phonePrice');
    console.log(phonePrice.innerText);
    const phonePriceNumber = parseInt(phonePrice.innerText);
    console.log(phonePriceNumber);
})