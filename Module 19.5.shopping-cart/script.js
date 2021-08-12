const phonePlus = document.getElementById('phonePlus');
phonePlus.addEventListener('click',function(e){
    console.log('phone plus clicked');
    const phoneInput = document.getElementById('phoneInput');
    console.log(phoneInput.value);
    const phoneInputNumber = parseInt(phoneInput.value);
    console.log(phoneInputNumber);
})