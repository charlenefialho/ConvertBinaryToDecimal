const converterButton = document.querySelector("#converterButton");
const outputDecimalNumber = document.querySelector("#outputDecimalNumber");

converterButton.addEventListener('click', callFunctionConvertBinaryToDecimal);

function callFunctionConvertBinaryToDecimal(){
    const inputBinaryNumber = document.querySelector("#inputBinaryNumber");
    const inputValue = inputBinaryNumber.value;
    convertBinaryToDecimal(inputValue);
 }

function convertBinaryToDecimal(inputValue){
    const newArray = [];
    for(let i = 0; i< inputValue.length; i++){
        if(inputValue[i] === '0'){
            newArray[i] = 0;
        }else if(inputValue[i] === '1'){
            newArray[i] = 1;
        }else{
            console.log("Não é número binário");
        }
    }
        let total = 0, i = 0;
       for(let n = newArray.length; n > 0; n--){
         total += newArray[i] * Math.pow(2,n - 1);
         i += 1;
       }
       outputDecimalNumber.innerHTML = `Numero Decimal: ${total}`;
     }