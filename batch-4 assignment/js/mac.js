const memory8GB = document.getElementById('memory8GB');
const memory16GB = document.getElementById('memory16GB');

//storeag cost
const storage256GB = document.getElementById('storage256GB');
const storage512GB = document.getElementById('storage512GB');
const storage1T = document.getElementById('storage1T');

//shipping
const free = document.getElementById('free');
const paid = document.getElementById('paid');

const memoryField = document.getElementById('shippincost');
const storageField = document.getElementById('storageField');
const shippingField = document.getElementById('shippingField');
const subTotalField = document.getElementById('subTotal');
//memory
memory8GB.addEventListener('click', function () {
    memoryField.innerText = '0';

});
memory16GB.addEventListener('click', function () {
    memoryField.innerText = '180';

});

//storage 
storage256GB.addEventListener('click', function () {
    storageField.innerText = '0';

});
storage512GB.addEventListener('click', function () {
    storageField.innerText = '100';

});
storage1T.addEventListener('click', function () {
    storageField.innerText = '180';


});

//shipping
free.addEventListener('click', function () {
    shippingField.innerText = '0';
});
paid.addEventListener('click', function () {
    shippingField.innerText = '20';
});

//update total
function getMS() {
    const memoryTotla = Number(memoryField.innerText);
    const storeTotla = Number(storageField.innerText);

    const granTotal = memoryTotla + storeTotla;
    subTotalField.innerText = granTotal;


    //const memoryTotla = Number(memoryField.innerText);

}
