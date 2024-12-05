function findRepeatedNumbers() {
    let seenNumbers = new Set();
    let repeatedNumbers = new Set(); 
  
    
    for (let i = 1; i <= 100; i++) {
        let number = i;
  
        
        if (number % 2 === 0) {
            number = number * 5;
        }
  
        
        if (number % 3 === 0) {
            number = number / 3;
        }
  
        
        if (seenNumbers.has(number)) {
            repeatedNumbers.add(number);
        } else {
            seenNumbers.add(number); 
        }
    }
  
    return Array.from(repeatedNumbers); 
  }
  

console.log("Repeated numbers after operations:", findRepeatedNumbers());