function fibonacci(n) {
    let fibSequence = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }

    return fibSequence;
}

// Compute the first 100 Fibonacci numbers
const first100Fibonacci = fibonacci(100);
console.log(first100Fibonacci);