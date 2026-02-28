document.getElementById("cashout-btn").addEventListener("click", function(){
    //get the agent number from input
    const cashoutNumber = getValueFromInput("cashout-number");
    if(cashoutNumber.length !== 11){
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
    if(newBalance < 0){
       alert("Insufficient balance.");
        return;
    }

    //Get the pin and verify
    const cashoutPin = getValueFromInput("cashout-pin");
    if(cashoutPin === "1234"){
        alert("Cashout successfull");
        console.log("Cashout successfull, New Balance: $" + newBalance);
        setBalance(newBalance);
    }
    else{
        alert("Invalid pin number.");
    }
})










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


