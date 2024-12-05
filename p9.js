function printOddDigitsFromAlphabets() {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'; 
    for (let i = 0; i < alphabets.length; i++) {
      if (i % 2 !== 0) {  
        console.log(alphabets[i]);  
      }
    }
  }
printOddDigitsFromAlphabets();