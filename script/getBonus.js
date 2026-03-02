document.getElementById("get-bonus-btn").addEventListener("click", function () {
  const bonusCuppon = document.getElementById("get-bonus-number").value;
  const cupponNumber = Number(bonusCuppon);
  const currentBalance = getBalance();

  if (!isNaN(cupponNumber) && cupponNumber >= 1 && cupponNumber <= 99) {
    if (currentBalance <= 50000) {
      const bonusAmount = currentBalance * (cupponNumber / 100);
      const newBalance = currentBalance + bonusAmount;
      setBalance(newBalance);
      alert("Received a bonus Balance: $" + newBalance);
      const newHistory = document.createElement("div");
      newHistory.className =
        "transaction-card flex items-center justify-between bg-white rounded-xl shadow-md p-6 mb-3";
      newHistory.innerHTML = `
              <div class="flex items-center">
                <div class="bg-orange-100 rounded-full p-2 mr-3">
                  <img src="assets/opt-4.png" alt="icon" class="w-6 h-6">
                </div>
                <div class="transaction-info">
                  <h3 class="font-bold text-gray-800">Bonus Received</h3>
                  <p class="text-sm text-gray-500">${new Date().toLocaleTimeString()}</p>
                </div>
              </div>
              <button class="text-gray-400 hover:text-gray-600"
                onclick="showTransactionDetails('Bonus Received', 'Coupon', '${cupponNumber}', '${bonusAmount.toFixed(2)}', '${new Date().toLocaleTimeString()}')">
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </button>
            `;
      addToHistory(newHistory);
    } else {
      const bonusAmount = cupponNumber * 150;
      const newBalance = currentBalance + bonusAmount;
      setBalance(newBalance);
      alert("Received a bonus Balance: $" + newBalance);

      const newHistory = document.createElement("div");
      newHistory.className =
        "transaction-card flex items-center justify-between bg-white rounded-xl shadow-md p-6 mb-3";
      newHistory.innerHTML = `
          <div class="flex items-center">
            <div class="bg-orange-100 rounded-full p-2 mr-3">
              <img src="assets/opt-4.png" alt="icon" class="w-6 h-6">
            </div>
            <div class="transaction-info">
              <h3 class="font-bold text-gray-800">Bonus Received</h3>
              <p class="text-sm text-gray-500">${new Date().toLocaleTimeString()}</p>
            </div>
          </div>
          <button class="text-gray-400 hover:text-gray-600"
            onclick="showTransactionDetails('Bonus Received', 'Coupon', '${cupponNumber}', '${bonusAmount}', '${new Date().toLocaleTimeString()}')">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
        `;
      addToHistory(newHistory);
    }
  } else {
    alert("Enter only 2 Digits.");
  }
});
