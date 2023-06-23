module.exports = convertBinaryToDecimal;

function convertBinaryToDecimal(binaryNumber) {
    let total = 0;
    for (let n = binaryNumber.length; n > 0; n--) {
        total += binaryNumber[binaryNumber.length - n] * Math.pow(2, n - 1);
    }
    return total;
}