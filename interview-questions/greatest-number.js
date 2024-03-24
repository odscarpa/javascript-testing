function findGreatestNumber(numbers) {
    if (numbers.length === 0) {
        // Handle empty array case
        return undefined;
    }

    let greatestNumber = numbers[0]; // Assume the first element is the greatest

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > greatestNumber) {
            greatestNumber = numbers[i];
        }
    }

    return greatestNumber;
}

// Example usage:
const numbersArray = [10, 5, 8, 20, 15, 76];
const result = findGreatestNumber(numbersArray);
console.log(result);