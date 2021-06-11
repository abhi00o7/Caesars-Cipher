// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    // create an array from [A-Z] using Array.fill & map
    const alphabet = new Array(26).fill(1).map((_, index) => String.fromCharCode(65 + index))


    return str
                .split('')
                .map((element) => alphabet.indexOf(element) != -1 ? alphabet.indexOf(element) > 12 ? element = alphabet[alphabet.indexOf(element) - 13] : element = alphabet[alphabet.indexOf(element) + 13] : element)
                .join('')

}

console.log(rot13("SERR PBQR PNZC"))
