const firstClassPlusBtn = document.getElementById('firstClassPlusBtn');
firstClassPlusBtn.addEventListener('click',function(e){
    const firstClass = document.getElementById('firstClass');
    const firstClassInput = parseInt(firstClass.value);
    firstClass.value = firstClassInput + 1;
});

const firstClassMinusBtn = document.getElementById('firstClassMinusBtn');
firstClassMinusBtn.addEventListener('click',function(e){
    const firstClass = document.getElementById('firstClass');
    const firstClassInput = parseInt(firstClass.value);
    if (firstClassInput > 0) {
        firstClass.value = firstClassInput - 1;
    }
    else{
        return "It is not possible negative Input";
    }
})
