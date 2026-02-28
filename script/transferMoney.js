document.getElementById("transfer-money-btn").addEventListener("click", function(){
    console.log("Transfer Money button clicked");
    //get the user account number to transfer
    const transferNumber = getValueFromInput("transfer-money-number");
    if(transferNumber.length != 11){
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
    if(newBalance < 0){
       alert("Insufficient balance.");
        return;
    }

    //Get the pin and verify
    const transferPin = getValueFromInput("transfer-money-pin");
    if(transferPin === "1234"){
        alert('Transfer successful to ' + transferNumber);
        console.log("New Balance: $" + newBalance);
        setBalance(newBalance);
    }
    else {
        alert("Incorrect PIN.");
    }
})
