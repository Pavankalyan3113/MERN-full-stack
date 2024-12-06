function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true; 
}

function printSquaresOfPrimes() {
    let count = 0;
    let num = 2; 
    
    while (count < 10) {
        if (isPrime(num)) {
            console.log(`Square of prime number ${num}: ${num * num}`);
            count++; 
        }
        num++; 
    }
}

printSquaresOfPrimes();
