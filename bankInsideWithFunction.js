function getInputFieldValue(infutFieldId) {
    const inputFieldAmount = document.getElementById(infutFieldId);
    const inputFieldString = inputFieldAmount.value;
    const convertInputFieldStringToNumber = parseFloat(inputFieldString);
    inputFieldAmount.value = '';
    return convertInputFieldStringToNumber;
}
function getFinanceBoxValue(FinanceBoxId) {
    const financeBoxFieldAmount = document.getElementById(FinanceBoxId);
    const FinanceBoxFieldString = financeBoxFieldAmount.innerText;
    const convertFinanceBoxFieldStringToNumber = parseFloat(FinanceBoxFieldString);
    return convertFinanceBoxFieldStringToNumber;
}
function setFinanceBoxNewValue(FinanceBoxId, newValue) {
    const financeBoxFieldAmount = document.getElementById(FinanceBoxId);
    financeBoxFieldAmount.innerText = newValue;
}

document.getElementById('depositBtn').addEventListener('click', function () {
    // ***************************deposit & balance box**********************
    const depositFieldAmount = getInputFieldValue('depositAmount');
    const depositBoxAmount = getFinanceBoxValue('deposit')
    const totalDepositAmount = depositFieldAmount + depositBoxAmount;

    if (isNaN(depositFieldAmount)) {
        alert('please enter deposit amount');
        return;
    }
    setFinanceBoxNewValue('deposit', totalDepositAmount);

    const balanceBoxAmount = getFinanceBoxValue('balance');
    const totalBalanceAmount = balanceBoxAmount + depositFieldAmount;
    setFinanceBoxNewValue('balance', totalBalanceAmount);

})

document.getElementById('withdrawBtn').addEventListener('click', function () {
    // ***************************deposit & balance box**********************
    const withdrawFieldAmount = getInputFieldValue('withdrawAmount');
    const withdrawBoxAmount = getFinanceBoxValue('withdraw')

    if (isNaN(withdrawFieldAmount)) {
        alert('please enter withdraw amount');
        return;
    }

    const balanceBoxAmount = getFinanceBoxValue('balance');

    if (withdrawFieldAmount > balanceBoxAmount) {
        alert('insufficient balance');
        return;
    }

    const totalWithdrawAmount = withdrawFieldAmount + withdrawBoxAmount;
    setFinanceBoxNewValue('withdraw', totalWithdrawAmount);


    const totalBalanceAmount = balanceBoxAmount - withdrawFieldAmount;
    setFinanceBoxNewValue('balance', totalBalanceAmount);
})