// Function to submit the form
document.getElementById("quoteFormContent").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get form data
    const formData = new FormData(document.getElementById("quoteFormContent"));
    const requirementValue = formData.get("requirement");
    let otherRequirementValue = formData.get("otherRequirement");

    // Check if requirement is 'Others', if not, set otherRequirementValue to null
    if (requirementValue !== "Others") {
        otherRequirementValue = null;
    }

    // Add your logic to send data to Google Sheets
    sendDataToGoogleSheet(formData);

    // Show confirmation message
    document.getElementById("quoteConfirmation").textContent = "Quote received! We'll get back to you within 24 hours.";

    // Optionally, you can close the form after submission
    setTimeout(function() {
        window.closeQuoteForm();
        document.getElementById("quoteConfirmation").textContent = ""; // Clear the confirmation message
    }, 3000); // Adjust the timeout as needed
});

// Function to send form data to Google Sheets
function sendDataToGoogleSheet(formData) {
    const requestData = {};
    formData.forEach((value, key) => {
        requestData[key] = value;
    });

    // Send data to Google Sheets using fetch API
    fetch('YOUR_APPS_SCRIPT_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => {
        if (response.ok) {
            console.log("Data sent to Google Sheets successfully.");
        } else {
            throw new Error('Failed to send data to Google Sheets.');
        }
    })
    .catch(error => {
        console.error('Error sending data to Google Sheets:', error);
    });
}
