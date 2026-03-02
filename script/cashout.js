document.getElementById("cashout-btn").addEventListener("click", function () {
  //get the agent number from input
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length !== 11) {
    alert("Please enter a valid 11-digit number.");
    return;
  }
  //get the cashout amount from input
  const cashoutAmount = getValueFromInput("cashout-amount");
  //get the current balance
  const currentBalance = getBalance();
  console.log("Current Balance:", currentBalance);

  //calculate new balance
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log("New Balance:", newBalance);
  if (newBalance < 0) {
    alert("Insufficient balance.");
    return;
  }

  //Get the pin and verify
  const cashoutPin = getValueFromInput("cashout-pin");
  if (cashoutPin === "1234") {
    alert("Cashout successfull");
    console.log("Cashout successfull, New Balance: $" + newBalance);
    setBalance(newBalance);

    //history conainer k shoray nibo

    const newHistory = document.createElement("div");
    newHistory.className =
      "transaction-card flex items-center justify-between bg-white rounded-xl shadow-md p-6 mb-3";
    newHistory.innerHTML = `
          <div class="flex items-center">
            <div class="bg-orange-100 rounded-full p-2 mr-3">
              <img src="assets/opt-2.png" alt="icon" class="w-6 h-6">
            </div>
            <div class="transaction-info">
              <h3 class="font-bold text-gray-800">Money Cashout</h3>
              <p class="text-sm text-gray-500">${new Date().toLocaleTimeString()}</p>
            </div>
          </div>
          <button class="text-gray-400 hover:text-gray-600"
            onclick="showTransactionDetails('Money Cashout', 'Agent', '${cashoutNumber}', '${cashoutAmount}', '${new Date().toLocaleTimeString()}')">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
        `;
    addToHistory(newHistory);
  } else {
    alert("Invalid pin number.");
  }
});

// document.getElementById("cashout-btn").addEventListener("click", function(){
//     const cashoutNumber = document.getElementById("cashout-number").value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length !== 11){
//         alert("Please enter a valid 11-digit number.");
//         return;
//     }

//     const cashoutAmount = document.getElementById("cashout-amount").value;
//     if(cashoutAmount < 0){
//         alert("Please enter a valid amount.");
//         return;
//     }
//     console.log(cashoutAmount);

//     //get the current balance
//     const currentBalance = document.getElementById("balance").innerText;
//     console.log(currentBalance);

//     //calculate new balance
//     const newBalance = Number(currentBalance) - Number(cashoutAmount);
//     console.log("New Balance:", newBalance);

//     if(newBalance < 0){
//         alert("Insufficient balance.");
//         return;
//     }

//     const cashoutPin = document.getElementById("cashout-pin").value;
//     console.log(cashoutPin);

//     if(cashoutPin === "1234"){
//         alert("Cashout successfull with $" + newBalance);
//         console.log("Cashout successful! New Balance: $" + newBalance);
//         balance.innerText = newBalance;
//     }
//     else{
//         alert("Invalid pin number. Please try again.");
//     }
// })
