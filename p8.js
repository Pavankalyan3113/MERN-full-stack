// Function to print numbers based on the given multiples
function printNumbers() {
    let count = 1; // Counter to keep track of how many numbers have been printed

    // Print first 5 multiples of 2
    for (let i = 1; count <= 5; i++) {
        console.log(i * 2);
        count++;
    }

    // Print next 5 multiples of 5
    for (let i = 1; count <= 10; i++) {
        console.log(i * 5);
        count++;
    }

    // Print next 5 multiples of 7
    for (let i = 1; count <= 15; i++) {
        console.log(i * 7);
        count++;
    }

    // Print next 5 multiples of 10
    for (let i = 1; count <= 20; i++) {
        console.log(i * 10);
        count++;
    }
}

// Call the function to print the numbers
printNumbers();
