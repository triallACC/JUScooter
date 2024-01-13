function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "student@" && password === "1") {
        document.getElementById("loginContainer").style.display = "none";
        showSuccessAlert("Successful login! Let's find a scooter 🛴");
    } else {
        showErrorAlert("Invalid Email or Password!");
    }
}

function showSuccessAlert(message) {
    document.getElementById("successlogin").style.display = "block";
    showAlert(message, "success");
}

function showErrorAlert(message) {
    showAlert(message, "error");
}

function showAlert(message, type) {
    var alertDiv = document.createElement("div");
    alertDiv.id = "customAlert";
    alertDiv.innerHTML = message;

    if (type === "success") {
        alertDiv.className = "success";
    } else if (type === "error") {
        alertDiv.className = "error";
    }

    document.body.appendChild(alertDiv);

    setTimeout(function () {
        document.body.removeChild(alertDiv);

        if (type === "success") {
            document.getElementById("successlogin").style.display = "none";
            displayMap();
        }
    }, 3000);
}

function displayMap() {
    document.getElementById("juMap").style.display = "block";
    document.getElementById("findBtn").style.display = "block";
	    document.getElementById("billingContainer").style.display = "none";
		    document.getElementById("paymentModal").style.display = "none";


	
}

function choosePaymentMethod() {
    document.getElementById("juMap").style.display = "none";
    document.getElementById("findBtn").style.display = "none";
    document.getElementById("paymentModal").style.display = "block";
}

function choosePayment(paymentMethod) {
    document.getElementById("paymentModal").style.display = "none";

    if (paymentMethod === 'creditCard') {
        showCreditCardSection();
    } else if (paymentMethod === 'paypal') {
        showPaypalSection();
    }
}

function showCreditCardSection() {
    document.getElementById("creditCardSection").style.display = "block";
}

function hideCreditCardSection() {
    document.getElementById("creditCardSection").style.display = "none";
    displayPaymentPage();
}

function confirmCreditCardPayment() {
    showBilling();
}

function showPaypalSection() {
    document.getElementById("paypalSection").style.display = "block";
}

function hidePaypalSection() {
    document.getElementById("paypalSection").style.display = "none";
    displayPaymentPage();
}

function confirmPaypalPayment() {
    // Add logic for confirming PayPal payment
    showBilling();
}

function showBilling() {
	    document.getElementById("creditCardSection").style.display = "none";

	 document.getElementById("paypalSection").style.display = "none";
    document.getElementById("billingContainer").style.display = "block";
}
function findScooters() {
    // Simulate getting user's current/specified location (replace with actual logic)
    const userLocation = prompt("Enter your location:");

    // Filter available scooters based on user's location
    const nearbyScooters = availableScooters.filter(scooter =>
        scooter.location.toLowerCase().includes(userLocation.toLowerCase())
    );

    // Display the list of available scooters
    displayScooters(nearbyScooters);
}

function displayScooters(scooters) {
    const scooterListContainer = document.getElementById('scooterListContainer');
    const scooterList = document.getElementById('scooterList');

    // Clear previous scooter list
    scooterList.innerHTML = '';

    // Display each scooter in the list
    scooters.forEach(scooter => {
        const listItem = document.createElement('li');
        listItem.textContent = `${scooter.name} - Location: ${scooter.location}`;
        scooterList.appendChild(listItem);
    });

    // Show the scooter list container
    scooterListContainer.style.display = 'block';
}
