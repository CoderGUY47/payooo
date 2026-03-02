document.getElementById("login-btn").addEventListener("click", function () {
  // Get the input value from mobile number and pin
  //  match with pin & mobile
  //--> true:::>> alert> homepage
  //--> false:::>> alert> return

  const numberInput = document.getElementById("input-number").value;
  console.log(numberInput);

  const pinInput = document.getElementById("input-pin").value;
  console.log(pinInput);

  // Retrieve stored user data
  const storedUser = JSON.parse(localStorage.getItem("user"));

  //match the number and pin via stored values
  if (
    storedUser &&
    numberInput === storedUser.number &&
    pinInput === storedUser.pin
  ) {
    alert("Login successful! Redirecting to homepage.");
    window.location.assign("/home.html");
  }
  // Fallback for default credentials (optional, keeping it for your testing)
  else if (numberInput === "01234567890" && pinInput === "1234") {
    alert("Login successful! Redirecting to homepage.");
    window.location.assign("/home.html");
  } else {
    alert("Invalid mobile number or pin. Please try again.");
  }
});
