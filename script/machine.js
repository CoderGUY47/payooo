console.log("This is machine.js file");

//get value from input field
function getValueFromInput(id) {
  const inputValue = document.getElementById(id).value;
  console.log(id, inputValue);
  return inputValue;
}

//machine balance from balance id
function getBalance() {
  const balance = document.getElementById("balance").innerText;
  console.log("Current Balance:", Number(balance));
  return Number(balance);
}

//machine value -> set Balance
function setBalance(value) {
  document.getElementById("balance").innerText = value;
}

function getHistoryContainer() {
  return document.getElementById("history-container");
}

function addToHistory(newHistoryElement) {
  // Full History logic
  const history = getHistoryContainer();
  const noTransactions = document.getElementById("no-transactions");
  if (noTransactions) {
    noTransactions.classList.add("hidden");
  }
  // Add to the top of full history
  history.prepend(newHistoryElement);

  //Latest Payments logic (Only shows top 2)
  const latestHistory = document.getElementById("latest-history-container");
  const noLatest = document.getElementById("no-latest-transactions");
  const viewAllLink = document.getElementById("view-all-link");

  if (noLatest) {
    noLatest.classList.add("hidden");
  }

  // Clone the element for the latest section
  const latestClone = newHistoryElement.cloneNode(true);
  latestHistory.prepend(latestClone);

  // If more than 2, remove the oldest from the latest section and show View All
  const latestCards = latestHistory.querySelectorAll(".transaction-card");
  if (latestCards.length > 2) {
    latestCards[latestCards.length - 1].remove();
    viewAllLink.classList.remove("hidden");
  }
}

function showTransactionDetails(type, bank, accNo, amount, time) {
  document.getElementById("modal-title").textContent = type;
  document.getElementById("modal-details").innerHTML = `
    <p><strong>Bank:</strong> ${bank}</p>
    <p><strong>Account No:</strong> ${accNo}</p>
    <p><strong>Amount:</strong> $${amount}</p>
    <p><strong>Time:</strong> ${time}</p>
  `;
  document.getElementById("transaction_modal").showModal();
}

//machine id > hide all> show id
function showOnly(id) {
  console.log("Show only clicked:", id);
  const home = document.getElementById("main-home");
  const addMoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  const transferMoney = document.getElementById("transfer-money");
  const getBonus = document.getElementById("get-bonus");
  const payBill = document.getElementById("pay-bill");
  const transactions = document.getElementById("transactions");

  home.classList.add("hidden");
  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");
  transferMoney.classList.add("hidden");
  getBonus.classList.add("hidden");
  payBill.classList.add("hidden");
  transactions.classList.add("hidden");

  const selected = document.getElementById(id);
  if (selected) {
    selected.classList.remove("hidden");
  }
}
