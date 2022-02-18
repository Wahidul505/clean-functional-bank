function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  inputField.value = '';
  return inputValue;
}
function updateTotal(totalId, amount) {
  const fieldId = document.getElementById(totalId);
  const previousTotal = parseFloat(fieldId.innerText);
  const newTotal = previousTotal + amount;
  fieldId.innerText = newTotal;
}
function getPreviousValue(fieldId) {
  const field = document.getElementById(fieldId);
  const previousValue = parseFloat(field.innerText);
  return previousValue;
}
function updateBalanceTotal(amount, issAdding) {
  const previousBalance = getPreviousValue('balance-total');
  let newBalance;
  if (issAdding) {
    newBalance = previousBalance + amount;
  }
  else {
    newBalance = previousBalance - amount;
  }
  document.getElementById('balance-total').innerText = newBalance;
}
document.getElementById('deposit-btn').addEventListener('click', function () {
  const amount = getInputValue('deposit-input');
  if (amount > 0) {
    updateTotal('deposit-total', amount);
    updateBalanceTotal(amount, true);
  }
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
  const amount = getInputValue('withdraw-input');
  const previousBalance = getPreviousValue('balance-total');
  if (amount > 0 && amount <= previousBalance) {
    updateTotal('withdraw-total', amount);
    updateBalanceTotal(amount, false);
  }
})