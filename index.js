const converterButton = document.querySelector("#converterButton");
const outputDecimalNumber = document.querySelector("#outputDecimalNumber");
const notBinaryNumber = document.querySelector("#notBinaryNumber");
const inputBinaryNumber = document.querySelector("#inputBinaryNumber");

converterButton.addEventListener('click', function(){
    const inputValue = inputBinaryNumber.value;
    if (validateBinaryNumber(inputValue)) {
        const decimalValue = convertBinaryToDecimal(convertBinaryStringToNumber(inputValue));
        outputDecimalNumber.innerHTML = `Número Decimal: ${decimalValue}`;
    } else {
        outputDecimalNumber.innerHTML = 'Número Decimal: ';
    }
});

function validateBinaryNumber(inputValue){
    for (let i = 0; i < inputValue.length; i++) {
        if (inputValue[i] !== '0' && inputValue[i] !== '1') {
            notBinaryNumber.innerHTML = 'Insira um número binário válido';
            notBinaryNumber.style.color = 'red';
            return false;
        }
    }
    notBinaryNumber.innerHTML = ' ';
    return true;
}

function convertBinaryStringToNumber(inputValue){
    const binaryNumberArray = [];
    for(let i = 0; i< inputValue.length; i++){
        if(inputValue[i] === '0'){
            binaryNumberArray[i] = 0;

        }else if(inputValue[i] === '1')
        {
            binaryNumberArray[i] = 1;
        }
    }
    return binaryNumberArray;
}

function convertBinaryToDecimal(binaryNumber) {
    let total = 0;
    for (let n = binaryNumber.length; n > 0; n--) {
        total += binaryNumber[binaryNumber.length - n] * Math.pow(2, n - 1);
    }
    return total;
}


