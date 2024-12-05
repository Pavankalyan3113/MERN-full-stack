// Function to categorize student based on their score
function categorizeStudent(score) {
    if (score >= 90 && score <= 100) {
        return "Category: A (Excellent)";
    } else if (score >= 75 && score < 90) {
        return "Category: B (Good)";
    } else if (score >= 50 && score < 75) {
        return "Category: C (Average)";
    } else if (score >= 35 && score < 50) {
        return "Category: D (Pass)";
    } else if (score < 35) {
        return "Category: F (Fail)";
    } else {
        return "Invalid score. Please enter a valid score between 0 and 100.";
    }
}

// Example usage
let studentScore = 95;  // Example student score
let categoryMessage = categorizeStudent(studentScore);

console.log(categoryMessage);
