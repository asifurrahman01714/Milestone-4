const firstClassPlusBtn = document.getElementById('firstClassPlusBtn');
firstClassPlusBtn.addEventListener('click',function(e){
    const firstClass = document.getElementById('firstClass');
    const firstClassInput = parseInt(firstClass.value);
    console.log(firstClassInput);
})