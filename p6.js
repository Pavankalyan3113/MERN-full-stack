function processNumber(number) {
    if (number % 2 === 0) {
        number *= 5;
    }
    if (number % 3 === 0) {
        number /= 3;
    }
    return number;
}

let results = [];
for (let i = 1; i <= 100; i++) {
    results.push(processNumber(i)); 
}


console.log("Processed numbers from 1 to 100:");
console.log(results);
