function fizzBuzzBaz(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            console.log('baz');
        } else if (i % 2 === 0) {
            console.log('fizz');
        } else if (i % 3 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

// Example usage:
fizzBuzzBaz(1, 10);