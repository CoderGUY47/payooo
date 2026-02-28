document.getElementById("login-btn").addEventListener("click", function(){
    // Get the input value from mobile number and pin
    //  match with pin & mobile
    //--> true:::>> alert> homepage
    //--> false:::>> alert> return

    const numberInput = document.getElementById("input-number").value;
    console.log(numberInput);

    const pinInput = document.getElementById("input-pin").value;
    console.log(pinInput);

    //match the number and pin via set values
    if(numberInput === "01234567890" && pinInput === "1234"){
        alert("Login successful! Redirecting to homepage.");

        //window.location.replace("/home.html"); //store the values  but when go back to see the login page, it will redirect only home.html
        window.location.assign("/home.html"); // store the values even after login when redirecting to the homepage
    }
    else{
        alert("Invalid mobile number or pin. Please try again.");
    }
})