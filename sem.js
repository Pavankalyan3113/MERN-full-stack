// Constructor function to manage student profiles
function Student(name, dob, contact, studentId, department, courses, grades, feesStatus) {
    // Personal Details
    this.name = name;
    this.dob = dob;
    this.contact = contact;

    // Academic Details
    this.courses = courses; // List of courses the student is enrolled in
    this.grades = grades; // Corresponding grades for the courses
    this.attendance = []; // Placeholder for attendance data (can be added later)

    // Administrative Details
    this.studentId = studentId;
    this.department = department;
    this.feesStatus = feesStatus; // Boolean indicating whether fees are paid or not

    // Method to update academic details (grades, courses, attendance)
    this.updateAcademicDetails = function(newCourses, newGrades, newAttendance) {
        this.courses = newCourses;
        this.grades = newGrades;
        this.attendance = newAttendance;
    };

    // Method to update personal details (contact, etc.)
    this.updatePersonalDetails = function(newContact) {
        this.contact = newContact;
    };

    // Method to update administrative details (fees status, etc.)
    this.updateAdminDetails = function(newFeesStatus) {
        this.feesStatus = newFeesStatus;
    };

    // Method to delete the student profile (called when student graduates)
    this.deleteProfile = function() {
        console.log(`Deleting profile for student: ${this.name}`);
        // Clear all data
        this.name = null;
        this.dob = null;
        this.contact = null;
        this.studentId = null;
        this.department = null;
        this.courses = null;
        this.grades = null;
        this.attendance = null;
        this.feesStatus = null;
    };

    // Method to display the student's profile
    this.displayProfile = function() {
        console.log(`Student Profile:`);
        console.log(`Name: ${this.name}`);
        console.log(`Date of Birth: ${this.dob}`);
        console.log(`Contact: ${this.contact}`);
        console.log(`Student ID: ${this.studentId}`);
        console.log(`Department: ${this.department}`);
        console.log(`Courses: ${this.courses.join(", ")}`);
        console.log(`Grades: ${this.grades.join(", ")}`);
        console.log(`Fees Status: ${this.feesStatus ? "Paid" : "Unpaid"}`);
    };
}

// Example of managing a student's profile
let student1 = new Student(
    "John Doe",
    "1999-05-15",
    "123-456-7890",
    "S12345",
    "Computer Science",
    ["Math 101", "CS 201", "Physics 101"],
    ["A", "B+", "A-"],
    true
);

// Display the student's profile
student1.displayProfile();

// Update academic details for the student
student1.updateAcademicDetails(
    ["Math 102", "CS 202", "Physics 102"],
    ["A", "A+", "B"],
    ["Present", "Absent", "Present"]
);

// Update personal details
student1.updatePersonalDetails("987-654-3210");

// Update administrative details
student1.updateAdminDetails(false); // Fees unpaid

// Display the updated profile
student1.displayProfile();

// Delete the student's profile after they graduate
student1.deleteProfile();
