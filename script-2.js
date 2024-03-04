function removeVowels(inputString) {
    const vowels = /[aeiouAEIOU]/g;
    const result = inputString.replace(vowels, '');
    return result;
}

// Example usage:
const inputStr = "Hello, World!";
const resultStr = removeVowels(inputStr);
console.log(resultStr);