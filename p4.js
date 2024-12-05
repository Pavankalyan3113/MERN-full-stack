function isEligibleForExam(attendancePercentage) {
    if (attendancePercentage >= 75) {
        return "You are eligible for the semester exam.";
    } else {
        return "You are not eligible for the semester exam due to insufficient attendance.";
    }
}


let attendance = 80;  
let eligibilityMessage = isEligibleForExam(attendance);

console.log(eligibilityMessage);
