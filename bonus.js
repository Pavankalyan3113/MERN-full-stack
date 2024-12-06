function calculateBonus(experience, performanceScore) {
    let bonusPercentage;

    if (experience > 5 && performanceScore > 8) {
        bonusPercentage = 20;  
    } else if (experience > 3 && experience <= 5 && performanceScore > 7) {
        bonusPercentage = 10;
    } else if (experience <= 3) {
        bonusPercentage = 5;  
    } else {
        bonusPercentage = 0;  
    }

    return bonusPercentage;
}

let experience = 6;
let performanceScore = 10;
let bonus = calculateBonus(experience, performanceScore);

console.log(`The bonus percentage for an employee with ${experience} years of experience and a performance score of ${performanceScore} is: ${bonus}%`);
