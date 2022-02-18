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
function updateBalanceTotal(amount, issAdding) {
  const balanceTotalField = document.getElementById('balance-total');
  const previousBalance = parseFloat(balanceTotalField.innerText);
  if (issAdding) {
    const newBalance = previousBalance + amount;
  }
  else {
    const newBalance = previousBalance - amount;
  }
  balanceTotalField.innerText = newBalance;
}
document.getElementById('deposit-btn').addEventListener('click', function () {
  const amount = getInputValue('deposit-input');
  updateTotal('deposit-total', amount);
  updateBalanceTotal(amount, true);
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
  const amount = getInputValue('withdraw-input');
  updateTotal('withdraw-total', amount);
  updateBalanceTotal(amount, false);
})