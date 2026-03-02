// find the button with ID 'signup-btn' and wait for it to be clicked.
document.getElementById("signup-btn").addEventListener("click", function (event) {
    // Stop the page from refreshing when the button is clicked (prevent default form behavior).
    event.preventDefault();
    // 3. Get the text from the 'Username' field and remove any extra spaces from the start/end (.trim()).
    const name = document.getElementById("signup-name").value.trim();
    const address = document.getElementById("signup-address").value.trim();
    const number = document.getElementById("signup-number").value.trim();
    const pin = document.getElementById("signup-pin").value.trim();

    // Basic validation
    if (!name) {
      alert("Please enter a username.");
      return;
    }

    if (!address) {
      alert("Please enter your address.");
      return;
    }

    if (number.length !== 11 || isNaN(number)) {
      alert("Please enter a valid 11-digit mobile number.");
      return;
    }

    if (pin.length !== 4 || isNaN(pin)) {
      alert("Please enter a 4-digit PIN.");
      return;
    }

    // Log the data to the browser's developer console (for testing/debugging).
    console.log("Signing up...", { name, address, number, pin });

    // Provide feedback to the user
    const signupBtn = document.getElementById("signup-btn");
    signupBtn.innerText = "Creating Account...";
    signupBtn.classList.add("btn-disabled");

    setTimeout(() => {
      // Store user information in localStorage
      const userData = {
        name: name,
        address: address,
        number: number,
        pin: pin,
      };
       
      //এই ডাটা-প্যাকেটটি ব্রাউজারের মেমোরিতে (localStorage) 'user' নামে সেভ করে রাখা হয়েছে। (stringify দিয়ে ডাটা টেক্সটে রূপান্তর করা হয়েছে)।
      localStorage.setItem("user", JSON.stringify(userData));

      alert(
        `Account created successfully for ${name}!`,
      );
      window.location.href = "./index.html"; // Redirect to login page
    }, 1000);
  });
