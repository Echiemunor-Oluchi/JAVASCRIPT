/*assignment: create a user account object, give it at least 3 to 5 properties
eg bank name, acc no, acc balance, bvn,account type
create a function for the account,
add money, deposit, withdraw, transfer, check your balance
do at least three things
create deposit method, withdraw method and get account balance method */

// functional procedure                                                                                                     
const userAccount = {
  bankName: 'UBA',
  accNo: 2179805541,
  accBalance: 0,
  bvn: 12347897653,
  accountType: 'savings',

  depositMoney(amount) {
    this.accBalance += amount;
  },

  getBalance(){
   return this.accBalance;
  },

  withdrawMoney(amount) {
    this.accBalance -= amount;
  },

  getBalance(){
    return this.accBalance;
   },

}

// For Deposit
let balanceDisplay = document.querySelector('#showBalance');
let depositMoneyBtn = document.querySelector('#btn1');
depositMoneyBtn.addEventListener('click', () => {
let userInput = prompt('Enter amount to deposit');
userAccount.depositMoney(parseInt(userInput));
balanceDisplay.innerText = `Available Balance: $${userAccount.getBalance()}`
});

//For Withdrawal
let withdrawMoneyBtn = document.querySelector('#btn2');
withdrawMoneyBtn.addEventListener('click', () =>{
 let withdrawalInput = prompt('How much do you want to withdraw from your account?');
  userAccount.withdrawMoney(parseInt(withdrawalInput));
  balanceDisplay.innerText = `Available Balance: $${userAccount.getBalance()}`
});

// For Transfer

