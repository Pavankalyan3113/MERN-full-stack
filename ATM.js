function atmWithdrawal(balance, amount) {
  if (amount % 10 !== 0) {
    return "Error: Withdrawal amount must be in multiples of 10.";
  }

  if (amount > 500) {
    return "Error: Maximum withdrawal amount is $500.";
  }
  if (balance < amount) {
    return "Error: Insufficient funds.";
  }

  return `Success: You have successfully withdrawn $${amount}. Your remaining balance is $${balance - amount}.`;
}
console.log(atmWithdrawal(1000, 250));  
console.log(atmWithdrawal(1000, 550));
console.log(atmWithdrawal(1000, 7));   
console.log(atmWithdrawal(1000, 2000)); 