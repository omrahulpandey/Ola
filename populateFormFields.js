// Function to send form data to the server
const sendDataToServer = async (formData) => {
    try {
        // Check if 'requirement' is 'Other'
        if (formData.requirement === 'Other') {
            // Replace 'requirement' value with value from 'otherRequirement'
            formData.requirement = formData.otherRequirement;
        }
        
        const response = await fetch('YOUR_APPS_SCRIPT_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({formData})
        });
        const data = await response.json();
        console.log(data);
        // Handle response from server if needed
    } catch (error) {
        console.error('Error sending data to server:', error);
    }
};

// Example usage:
const formData = {
    Name: 'John Doe',
    mobileNumber: '1234567890',
    email: 'john@example.com',
    location: 'New York',
    budget: '$1000',
    requirement: 'Some requirement',
    otherRequirement: 'Other requirement',
    message: 'This is a message'
};

sendDataToServer(formData);
