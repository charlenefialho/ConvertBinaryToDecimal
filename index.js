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
    for(let i = 0; i< inputValue.length; i++){
        if(inputValue[i] === '0'){
            binaryNumberArray[i] = 0;
            notBinaryNumber.innerHTML = ' ';
            notBinaryNumber.style.color = 'red'

        }else if(inputValue[i] === '1'){
            binaryNumberArray[i] = 1;
            notBinaryNumber.innerHTML = ' ';
            notBinaryNumber.style.color = 'red'
            
        }else{
            notBinaryNumber.innerHTML = 'Insira um número binário válido';
            notBinaryNumber.style.color = 'red'
           
        }
    }
        let total = 0, i = 0;
       for(let n = binaryNumberArray.length; n > 0; n--){
         total += binaryNumberArray[i] * Math.pow(2,n - 1);
         i += 1;
       }
       outputDecimalNumber.innerHTML = `Numero Decimal: ${total}`;
     }