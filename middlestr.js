// Define the string
let str = "bosco";

// Find the middle index
let middleIndex = Math.floor(str.length / 2);

// If the string length is odd, print the middle character
// If the string length is even, print the two middle characters
if (str.length % 2 === 1) {
    console.log(str[middleIndex]); // Middle character for odd-length string
} else {
    console.log(str[middleIndex - 1] + str[middleIndex]); // Two middle characters for even-length string
}
