const firstClassPlusBtn = document.getElementById('firstClassPlusBtn');
firstClassPlusBtn.addEventListener('click',function(e){
    const firstClass = document.getElementById('firstClass');
    const firstClassInput = parseInt(firstClass.value);
    console.log("Before Increasing Value",firstClassInput);
    firstClass.value = firstClassInput + 1;
    console.log("After Increasing Value",firstClass.value);
});

const firstClassMinusBtn = document.getElementById('firstClassMinusBtn');
firstClassMinusBtn.addEventListener('click',function(e){
    const firstClass = document.getElementById('firstClass');
    const firstClassInput = parseInt(firstClass.value);
    console.log("Before Increasing Value",firstClassInput);
    if (firstClassInput > 0) {
        firstClass.value = firstClassInput - 1;
    }
    else{
        return "It is not possible negative Input";
    }
    console.log("After Increasing Value",firstClass.value);
})
