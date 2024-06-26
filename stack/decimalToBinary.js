const Stack = require("./Stack");

function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let rem;
    let binaryString = "";

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
}

module.exports = decimalToBinary;
