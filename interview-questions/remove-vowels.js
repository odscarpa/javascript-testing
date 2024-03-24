function removeVowels(inputString) {
    const vowels = /[aeiouAEIOU]/g;
    const result = inputString.replace(vowels, '');
    return result;
}

// Example usage:
const inputStr = "ooga booga ";
const resultStr = removeVowels(inputStr);
console.log(resultStr);