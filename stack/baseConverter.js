const Stack = require("./Stack");

function baseConverter(decNumber, base) {
    const remStack = new Stack();
    let rem;
    let baseString = "";

    const digits = "0123456789ABCDEF";

    // handle errors
    if (!decNumber || !base) {
        throw new Error ("decimal and base number must be provided")
    } 

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    // formating base prefix
    if (base === 16) {
        baseString = "0x" + baseString;
    } else if (base === 8) {
        baseString = "0o" + baseString;
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;
}

module.exports = baseConverter;
