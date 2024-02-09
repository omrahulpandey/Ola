document.addEventListener("DOMContentLoaded", function() {
    // Function to open the pop-up form
    window.openQuoteForm = function() {
        document.getElementById("quoteFormContainer").style.display = "flex";
    };

    // Function to close the pop-up form
    window.closeQuoteForm = function() {
        document.getElementById("quoteFormContainer").style.display = "none";
    };

    // Function to submit the form (you can add your logic here)
    document.getElementById("quoteFormContent").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Add your form submission logic here
        // For this example, just show a confirmation message
        document.getElementById("quoteConfirmation").textContent = "Quote received! We'll get back to you within 24 hours.";

        // Optionally, you can close the form after submission
        setTimeout(function() {
            window.closeQuoteForm();
            document.getElementById("quoteConfirmation").textContent = ""; // Clear the confirmation message
        }, 3000); // Adjust the timeout as needed
    });
});


function toggleOtherField() {
    var requirement = document.getElementById("requirement");
    var otherRequirementInput = document.getElementById("otherRequirement");

    if (requirement.value === "Others") {
        otherRequirementInput.style.display = "block";
    } else {
        otherRequirementInput.style.display = "none";
        otherRequirementInput.value = ""; // Clear the input field
    }
}