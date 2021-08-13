function phoneProductChange(isIncrease) {
    
    const phoneInput = document.getElementById('phoneInput');
    let phoneInputNumber = parseInt(phoneInput.value);
    let phoneNewInputNumber;
    if (isIncrease) {
        phoneNewInputNumber = phoneInputNumber + 1;
    } else {
        phoneNewInputNumber = phoneInputNumber - 1;
    }
    if (phoneNewInputNumber >= 0) {
        phoneInput.value = phoneNewInputNumber;
        const phonePrice = document.getElementById('phonePrice');
        phonePrice.innerText = 100 * phoneNewInputNumber;
    }
}




// function phoneProductChange(isIncrease) {
//     console.log('phone minus clicked');

//     const phoneInput = document.getElementById('phoneInput');
//     console.log(phoneInput.value);
//     let phoneInputNumber = parseInt(phoneInput.value);
//     console.log(phoneInputNumber);
//     let phoneNewInputNumber;
//     if (isIncrease) {
//         phoneNewInputNumber = phoneInputNumber + 1;
//     } else {
//         phoneNewInputNumber = phoneInputNumber - 1;
//     }
//     console.log("phoneNewInputNumber", phoneNewInputNumber);

//     if (phoneNewInputNumber >= 0) {
//         phoneInput.value = phoneNewInputNumber;
//         const phonePrice = document.getElementById('phonePrice');
//         phonePrice.innerText = 100 * phoneNewInputNumber;
//     }
// }


// function caseProductChange(isIncrease) {
//     console.log('case minus clicked');

//     const caseInput = document.getElementById('caseInput');
//     console.log(caseInput.value);
//     let caseInputNumber = parseInt(caseInput.value);
//     console.log(caseInputNumber);
//     let caseNewInputNumber;
//     if (isIncrease) {
//         caseNewInputNumber = caseInputNumber + 1;
//     } else {
//         caseNewInputNumber = caseInputNumber - 1;
//     }
//     console.log("phoneNewInputNumber", caseNewInputNumber);

//     if (caseNewInputNumber >= 0) {
//         caseInput.value = caseNewInputNumber;
//         const casePrice = document.getElementById('casePrice');
//         casePrice.innerText = 50 * caseNewInputNumber;
//     }
// }