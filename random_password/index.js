
function generatePassword(lenght, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789"
    const symbol = "!@#$&-_"
    let allowedChars = "";
    let password = "";

    allowedChars+= includeLowerCase ? lowerCase : "";
    allowedChars+= includeUpperCase ? UpperCase : "";
    allowedChars+= includeNumbers ? numbers : "";
    allowedChars+= includeSymbols ? symbol : "";

    if (lenght <= 0) {
        return `(masukkin yang bener biji jangan 0 apa negatif)`
    }
    if (allowedChars.length === 0){
        return `(woi masukin include nya juga)`
    }

    for(let i = 0; i<lenght; i++){
        const RandomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[RandomIndex];
    }

    return password;
}

const lenght = 110;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = false;
const includeSymbols = false;

const password = generatePassword(lenght,
                                  includeLowerCase,
                                  includeUpperCase,
                                  includeNumbers,
                                  includeSymbols
)

console.log(`Generate Password: ${password}`);