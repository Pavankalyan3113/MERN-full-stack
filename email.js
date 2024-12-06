const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let emailPasswordList = []; 
function getEmailPassword(index) {
    if (index > 5) {
        
        console.log("\nEntered email-password pairs:");
        emailPasswordList.forEach((entry, idx) => {
            console.log(`Email ${idx + 1}: ${entry.email}, Password: ${entry.password}`);
        });
        rl.close();
        return;
    }

    rl.question(`Enter email ${index}: `, (email) => {
        rl.question(`Enter password for email ${index}: `, (password) => {
            emailPasswordList.push({ email, password }); 
            getEmailPassword(index + 1);  
        });
    });
}
getEmailPassword(1);
