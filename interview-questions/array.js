function countOccurrences(inputArray) {
    // Initialize an array to store the count of each number
    const maxVal = Math.max(...inputArray);
    const countArray = Array(maxVal + 1).fill(0);

    // Iterate through the input array and update counts
    for (const number of inputArray) {
        countArray[number]++;
    }

    // Return the count array
    return countArray;
}

// Example usage
const inputArray = [1, 5, 3, 1, 3, 7];
const result = countOccurrences(inputArray);
console.log(result);