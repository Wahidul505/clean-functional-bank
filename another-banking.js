function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  inputField.value = '';
  return inputValue;
}
function getInTextValue(fieldId) {
  const field = document.getElementById(fieldId);
  const value = parseFloat(field.innerText);
  return value;
}
function updateTotal(totalId, amount) {
  const previousTotal = getInTextValue(totalId);
  const newTotal = previousTotal + amount;
  document.getElementById(totalId).innerText = newTotal;
}
function updateBalanceTotal() {
  const depositValue = getInTextValue('deposit-total');
  const withdrawValue = getInTextValue('withdraw-total');
  document.getElementById('balance-total').innerText = depositValue - withdrawValue + 1250;
}
document.getElementById('deposit-btn').addEventListener('click', function () {
  const amount = getInputValue('deposit-input');
  if (amount > 0) {
    updateTotal('deposit-total', amount);
    updateBalanceTotal();
  }
})
document.getElementById('withdraw-btn').addEventListener('click', function () {
  const amount = getInputValue('withdraw-input');
  const balance = getInTextValue('balance-total');
  if (amount > 0 && amount <= balance) {
    updateTotal('withdraw-total', amount);
    updateBalanceTotal();
  }
})