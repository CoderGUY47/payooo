document.getElementById("add-money-btn").addEventListener("click", function () {
  //bank account get
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount === "Select a Bank") {
    alert("Please select a bank.");
    return;
  }

  //account number get
  const accountNumber = getValueFromInput("add-money-number");
  if (accountNumber.length != 11) {
    alert("Invalid account number.");
    return;
  }
  //amount get
  const amount = getValueFromInput("add-money-amount");
  const newBalance = getBalance() + Number(amount);
  console.log("New Balance: $" + newBalance);

  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(
      `Money added successfull with $${bankAccount} Bank at ${new Date().toLocaleTimeString()}`,
    );
    setBalance(newBalance);

    const newHistory = document.createElement("div");
    newHistory.className =
      "transaction-card flex items-center justify-between bg-white rounded-xl shadow-md p-6 mb-3";
    newHistory.innerHTML = `
          <div class="flex items-center">
            <div class="bg-orange-100 rounded-full p-2 mr-3">
              <img src="assets/opt-1.png" alt="icon" class="w-6 h-6">
            </div>
            <div class="transaction-info">
              <h3 class="font-bold text-gray-800">Money Added</h3>
              <p class="text-sm text-gray-500">${new Date().toLocaleTimeString()}</p>
            </div>
          </div>
          <button class="text-gray-400 hover:text-gray-600"
            onclick="showTransactionDetails('Money Added', '${bankAccount}', '${accountNumber}', '${amount}', '${new Date().toLocaleTimeString()}')">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
        `;
    addToHistory(newHistory);
  } else {
    alert("Invalid pin number.");
    return;
  }
});
