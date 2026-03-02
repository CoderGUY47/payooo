document.getElementById("transfer-money-btn").addEventListener("click", function () {
    console.log("Transfer Money button clicked");
    //get the user account number to transfer
    const transferNumber = getValueFromInput("transfer-money-number");
    if (transferNumber.length != 11) {
      alert("Please enter a valid 11-digit number.");
      return;
    }
    //get the amount to transfer
    const transferAmount = getValueFromInput("transfer-money-amount");
    //get the current balance
    const currentBalance = getBalance();
    console.log("Current Balance:", currentBalance);

    //calculate new balance
    const newBalance = currentBalance - Number(transferAmount);
    console.log("New Balance:", newBalance);
    if (newBalance < 0) {
      alert("Insufficient balance.");
      return;
    }

    //Get the pin and verify
    const transferPin = getValueFromInput("transfer-money-pin");
    if (transferPin === "1234") {
      alert("Transfer successful to " + transferNumber);
      console.log("New Balance: $" + newBalance);
      setBalance(newBalance);

      const newHistory = document.createElement("div");
      newHistory.className =
        "transaction-card flex items-center justify-between bg-white rounded-xl shadow-md p-6 mb-3";
      newHistory.innerHTML = `
          <div class="flex items-center">
            <div class="bg-orange-100 rounded-full p-2 mr-3">
              <img src="assets/opt-3.png" alt="icon" class="w-6 h-6">
            </div>
            <div class="transaction-info">
              <h3 class="font-bold text-gray-800">Transfer Money</h3>
              <p class="text-sm text-gray-500">${new Date().toLocaleTimeString()}</p>
            </div>
          </div>
          <button class="text-gray-400 hover:text-gray-600"
            onclick="showTransactionDetails('Transfer Money', 'User Account', 
            '${transferNumber}', 
            '${transferAmount}', 
            '${new Date().toLocaleTimeString()}')">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
        `;
      addToHistory(newHistory);
    } else {
      alert("Incorrect PIN.");
    }
  });
