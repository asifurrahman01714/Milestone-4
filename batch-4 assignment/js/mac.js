const memoryBtn8GB = document.getElementById('memoryBtn8GB');
const memoryBtn16GB = document.getElementById('memoryBtn16GB');

//storeag cost
const storageBtn256GB = document.getElementById('storageBtn256GB');
const storageBtn512GB = document.getElementById('storageBtn512GB');
const storageBtn1T = document.getElementById('storageBtn1T');

//shipping
const free = document.getElementById('free');
const paid = document.getElementById('paid');

const memoryField = document.getElementById('shippincost');
const storageField = document.getElementById('storageField');
const shippingField = document.getElementById('shippingField');
const subTotalField = document.getElementById('subTotal');



// Total Price
let totalPrice = document.getElementById('totalPrice');
let grandTotal = document.getElementById('grandTotal');

//memory
memoryBtn8GB.addEventListener('click', function () {
    memoryField.innerText = 0;

});
memoryBtn16GB.addEventListener('click', function () {
    memoryField.innerText = 180;
    totalPrice.innerText = parseInt(totalPrice.innerText) + parseInt( memoryField.innerText);
    grandTotal.innerText = totalPrice.innerText;
});

//storage 
storageBtn256GB.addEventListener('click', function () {
    storageField.innerText = 0;

});
storageBtn512GB.addEventListener('click', function () {
    storageField.innerText =  100 ;
    totalPrice.innerText = parseInt(totalPrice.innerText) + parseInt( storageField.innerText);
    grandTotal.innerText = totalPrice.innerText;
});
storageBtn1T.addEventListener('click', function () {
    storageField.innerText = 180;
    totalPrice.innerText = parseInt(totalPrice.innerText) + parseInt( storageField.innerText);
    grandTotal.innerText = totalPrice.innerText;

});

//shipping
free.addEventListener('click', function () {
    shippingField.innerText = '0';
});
paid.addEventListener('click', function () {
    shippingField.innerText = 20;
    totalPrice.innerText = parseInt(totalPrice.innerText) + parseInt( shippingField.innerText);
    grandTotal.innerText = totalPrice.innerText;
});



// //update total
// function getMS() {
//     const memoryTotla = Number(memoryField.innerText);
//     const storeTotla = Number(storageField.innerText);

//     const granTotal = memoryTotla + storeTotla;
//     subTotalField.innerText = granTotal;


//     //const memoryTotla = Number(memoryField.innerText);

// }
