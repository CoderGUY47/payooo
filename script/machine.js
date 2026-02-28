console.log("This is machine.js file");

function getValueFromInput(id){
    const inputValue = document.getElementById(id).value;
    console.log(id, inputValue);
    return inputValue;
}

//machine balance
function getBalance(){
    const balance = document.getElementById("balance").innerText;
    console.log("Current Balance:", Number(balance));
    return Number(balance);
}

//set Balance
function setBalance(value){
    document.getElementById("balance").innerText = value;
}


//machine id > hide all> show id
function showOnly(id){
    console.log("Show only clicked");
    const addMoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const transferMoney = document.getElementById("transfer-money");
    // const getBonus = document.getElementById("get-bonus");
    // const payBill = document.getElementById("pay-bill");
    // const transactions = document.getElementById("transactions");

    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transferMoney.classList.add("hidden");
    cashout.classList.add("hidden");
    // getBonus.classList.add("hidden");
    // payBill.classList.add("hidden");
    // transactions.classList.add("hidden");

    //id wala element ta k show korate hobe
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");

}