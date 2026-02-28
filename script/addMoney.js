document.getElementById("add-money-btn").addEventListener("click", function(){
     //bank account get
      const bankAccount = getValueFromInput("add-money-bank");
      if(bankAccount === "Select a Bank"){
         alert("Please select a bank.");
         return;
      }

      //account number get
      const accountNumber = getValueFromInput("add-money-number");
      if(accountNumber.length != 11){
          alert("Invalid account number.");
          return;
      }
      //amount get
      const amount = getValueFromInput("add-money-amount");
      const newBalance = getBalance() + Number(amount);
      console.log("New Balance: $" + newBalance);

      const pin = getValueFromInput("add-money-pin");
      if(pin == "1234"){
        alert(`Money added successfull with $${bankAccount} Bank at ${new Date().toLocaleTimeString()}`);
        setBalance(newBalance);
      }
      else{
        alert("Invalid pin number.");
        return;
      }
})