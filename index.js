const converterButton = document.querySelector("#converterButton");
const outputDecimalNumber = document.querySelector("#outputDecimalNumber");
const notBinaryNumber = document.querySelector("#notBinaryNumber");

converterButton.addEventListener('click', callFunctionConvertBinaryToDecimal);

function callFunctionConvertBinaryToDecimal(){
    const inputBinaryNumber = document.querySelector("#inputBinaryNumber");
    const inputValue = inputBinaryNumber.value;
    convertBinaryToDecimal(inputValue);
 }

function convertBinaryToDecimal(inputValue){
    const binaryNumberArray = [];
    let isBinaryNumber = false;
    for(let i = 0; i< inputValue.length; i++){
        if(inputValue[i] === '0'){
            binaryNumberArray[i] = 0;
            isBinaryNumber = true;
            notBinaryNumber.innerHTML = ' ';

        }else if(inputValue[i] === '1'){
            binaryNumberArray[i] = 1;
            isBinaryNumber = true;
            notBinaryNumber.innerHTML = ' ';

        }else{
            isBinaryNumber = false;
            notBinaryNumber.innerHTML = 'Insira um número binário válido';
            notBinaryNumber.style.color = 'red'
            break;
           
        }
    }
        let total = 0, i = 0;
        if(isBinaryNumber){
            for(let n = binaryNumberArray.length; n > 0; n--){
                total += binaryNumberArray[i] * Math.pow(2,n - 1);
                i += 1;
              }
              outputDecimalNumber.innerHTML = `Número Decimal: ${total}`;
        }else{
            outputDecimalNumber.innerHTML = 'Número Decimal: ';
        }
       
     }