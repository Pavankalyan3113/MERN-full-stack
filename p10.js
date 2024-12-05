function printReverseAlphabets() {
    
    for (let i = 25; i >= 0; i--) {
        let letter = String.fromCharCode(65 + i); 
        console.log(letter);
    }
}
printReverseAlphabets();
