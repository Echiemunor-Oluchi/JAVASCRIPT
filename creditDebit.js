let normalBalance = 1000;

function debitWithdraw(){
  let accountBalance = document.getElementById('acc-bal');
  let usersAmount = parseInt(document.getElementById('amount').value);
  let selectOptions = document.getElementById('transaction-type').value;
  let messageDispaly = document.getElementById('eer-msg');

  const transactionType = {
    type1: 'withdraw',
    type2: 'deposit'
  }
  if (selectOptions === transactionType.type1){
    if(usersAmount <= normalBalance){
      normalBalance -= usersAmount;
      alert('Withdrawal successful!');
      accountBalance.innerText = `$${normalBalance}`;
    }
    else if(usersAmount > normalBalance){
      alert('Insufficient funds');
    }
  }
  else{
    normalBalance += usersAmount;
    alert('Deposit Successful');
    accountBalance.innerText = `$${normalBalance}`;
  }
}