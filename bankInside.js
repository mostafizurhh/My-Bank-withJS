/****************************Deposit & Balance Part*********************************/

// get deposit button and set eventlistener
document.getElementById('depositBtn').addEventListener('click', function () {
    // get value from deposit amount input field
    const depositAmountField = document.getElementById('depositAmount');
    const currentDepositAmountValue = depositAmountField.value;
    // convert value to number
    const convertDepositAmount = parseFloat(currentDepositAmountValue);
    // empty deposit amount field
    depositAmountField.value = '';
    console.log(convertDepositAmount);

    // get value from deposit box
    const depositAmount = document.getElementById('deposit');
    const currentDepositBoxValue = depositAmount.innerText;
    // convert value to number
    const convertDepositBoxValue = parseFloat(currentDepositBoxValue);
    // adding deposit and deposit amount
    const totalDepositAmount = convertDepositBoxValue + convertDepositAmount;
    // set new deposit
    depositAmount.innerText = totalDepositAmount;
    console.log(totalDepositAmount);

    /*********************************Balance Part******************************/
    // get value from balance
    const balanceAmount = document.getElementById('balance');
    const currentBalanceBoxValue = balanceAmount.innerText;
    // convert value to number
    const convertBalanceBoxValue = parseFloat(currentBalanceBoxValue);
    // adding deposit with current balance amount
    const totalBalanceAmount = convertBalanceBoxValue + convertDepositAmount;
    // set new balance
    balanceAmount.innerText = totalBalanceAmount;
    console.log(totalBalanceAmount);
})

/*****************************Withdraw & Balance Part**************************/

document.getElementById('withdrawBtn').addEventListener('click', function () {
    // get value from withdraw amount input field
    const withdrawAmountField = document.getElementById('withdrawAmount');
    const currentWithdrawAmountValue = withdrawAmountField.value;
    // convert value to number
    const convertWithdrawAmount = parseFloat(currentWithdrawAmountValue);
    // empty withdraw amount field
    withdrawAmountField.value = '';

    // get value from withdraw box
    const withdrawAmount = document.getElementById('withdraw');
    const currentWithdrawBoxValue = withdrawAmount.innerText;
    // convert value to number
    const convertWithdrawBoxValue = parseFloat(currentWithdrawBoxValue);


    /*********************************Balance Part******************************/
    // get value from balance
    const balanceAmount = document.getElementById('balance');
    const currentBalanceBoxValue = balanceAmount.innerText;
    // convert value to number
    const convertBalanceBoxValue = parseFloat(currentBalanceBoxValue);

    if (convertWithdrawAmount > convertBalanceBoxValue) {
        alert('insufficient balance');
        return;
    }
    // adding withdraw and withdraw amount
    const totalWithdrawAmount = convertWithdrawBoxValue + convertWithdrawAmount;
    // set new withdraw amount
    withdrawAmount.innerText = totalWithdrawAmount;

    // removing withdraw amount from current balance amount
    const totalBalanceAmount = convertBalanceBoxValue - convertWithdrawAmount;
    // set new balance
    balanceAmount.innerText = totalBalanceAmount;
    console.log(totalBalanceAmount);
})