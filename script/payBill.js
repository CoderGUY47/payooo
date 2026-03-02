document.getElementById("pay-bill-btn").addEventListener("click", function () {
  const bankAccount = getValueFromInput("pay-bill-bank");
  if (bankAccount === "Select a Bank") {
    alert("Please select a bank.");
    return;
  }

  const accountNumber = getValueFromInput("pay-bill-number");
  if (accountNumber.length != 11) {
    alert("Invalid account number.");
    return;
  }

  const amount = getValueFromInput("pay-bill-amount");
  const currentBalance = getBalance();
  if (Number(amount) > currentBalance) {
    alert("Insufficient balance.");
    return;
  } else {
    const newBalance = currentBalance - Number(amount);
    console.log("New Balance: $" + newBalance);

    const pin = getValueFromInput("pay-bill-pin");
    if (pin == "1234") {
      alert(
        "Bill paid successfully with $" +
          bankAccount +
          " Bank at " +
          new Date().toLocaleTimeString(),
      );
      setBalance(newBalance);

      //history conainer k shoray nibo

      const newHistory = document.createElement("div");
      newHistory.className =
        "transaction-card flex items-center justify-between bg-white rounded-xl shadow-md p-6 mb-3";
      const transactionTitle = bankAccount;
      const transactionTime = new Date().toLocaleTimeString();

      newHistory.innerHTML = `
          <div class="flex items-center">
            <div class="bg-orange-100 rounded-full p-2 mr-3">
              <img src="assets/opt-5.png" alt="icon" class="w-6 h-6">
            </div>
            <div class="transaction-info">
              <h3 class="font-bold text-gray-800">${transactionTitle}</h3>
              <p class="text-sm text-gray-500">${transactionTime}</p>
            </div>
          </div>
          <button class="text-gray-400 hover:text-gray-600"
            onclick="showTransactionDetails('${transactionTitle}', '${bankAccount}', '${accountNumber}', '${amount}', '${transactionTime}')">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
        `;
      addToHistory(newHistory);
    } else {
      alert("Invalid pin number.");
      return;
    }
  }
});
