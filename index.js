const converterButton = document.querySelector("#converterButton");
const outputDecimalNumber = document.querySelector("#outputDecimalNumber");
const notBinaryNumber = document.querySelector("#notBinaryNumber");//mudar para error message
const inputBinaryNumber = document.querySelector("#inputBinaryNumber");

//kebab-case
converterButton.addEventListener('click', function(){
    const inputValue = inputBinaryNumber.value;//separar o dom da lógica
    //input binary
    //mudar para validate
    if (validateBinaryNumber(inputValue)) {
        const decimalValue = convertBinaryToDecimal(convertBinaryStringToNumber(inputValue));
        outputDecimalNumber.innerText = `${decimalValue}`;
    } else {
        outputDecimalNumber.innerText = '';
    }
});

//refatorar mudar nome para validate,simplicar mais
function validateBinaryNumber(inputValue){
    for (let i = 0; i < inputValue.length; i++) {
        if (inputValue[i] !== '0' && inputValue[i] !== '1') {
            notBinaryNumber.innerText = 'Insira um número binário válido';
            notBinaryNumber.style.color = 'red';
            return false;
        }
    }
    notBinaryNumber.innerText = ' ';
    return true;
}

//mudar nome e usar reduce e simplificar
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

//usar reduce, mudar nome do n, mudar nome do total , serparar responsabilidade
function convertBinaryToDecimal(binaryNumber) {
    let total = 0;
    for (let n = binaryNumber.length; n > 0; n--) {
        total += binaryNumber[binaryNumber.length - n] * Math.pow(2, n - 1);
    }
    return total;
}


