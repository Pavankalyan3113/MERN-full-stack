// Function to print the alphabet in reverse order
function printReverseAlphabets() {
    // Loop through the alphabet letters 'Z' to 'A'
    for (let i = 25; i >= 0; i--) {
        let letter = String.fromCharCode(65 + i); // Convert number to corresponding alphabet letter
        console.log(letter);
    }
}

// Call the function
printReverseAlphabets();
