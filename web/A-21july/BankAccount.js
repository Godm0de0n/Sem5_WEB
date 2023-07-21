class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    console.log(`A/c No.: ${accountNumber}`);
    console.log(`Opening Balance: $${balance}`);
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: $${amount}`);
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: $${amount}`);
    } else {
      console.log(`Want to withdraw: $${amount}`);
      console.log('Insufficient balance');
    }
  }
  displayBalance() {
    console.log(`Account Balance: $${this.balance}`);
  }
}

function getUserInput(promptText) {
  const userInput = prompt(promptText);
  if (userInput === null) {
    return null;
  }
  return parseFloat(userInput);
}

const accountNumber = getUserInput('Enter your account number:');
if (accountNumber === null) {
  console.log('Operation canceled by the user.');
} else {
  const initialBalance = getUserInput('Enter your opening balance:');
  if (initialBalance === null) {
    console.log('Operation canceled by the user.');
  } else {
    const account = new BankAccount(accountNumber, initialBalance);

    const deposit = getUserInput('Enter the amount you want to deposit:');
    if (deposit !== null) {
      account.deposit(deposit);
    }

    const withdraw = getUserInput('Enter the amount you want to withdraw:');
    if (withdraw !== null) {
      account.withdraw(withdraw);
    }

    account.displayBalance();
  }
}