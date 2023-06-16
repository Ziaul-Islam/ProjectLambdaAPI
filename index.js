
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', async () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const requestBody = {
            name: name,
            email: email,
            message: message
        };
        console.log(requestBody);
        try {
            const response = await fetch('https://3kxnugbjfg.execute-api.ca-central-1.amazonaws.com/Prod', {
                method: 'POST',
                body: JSON.stringify(requestBody)
            });
            console.log(response);
            if (response.ok) {
                // Handle success response
                alert('Data saved successfully.');
                // Reset form fields if needed
            } else {
                // Handle error response
                alert('Error saving data to API.');
            }
        } catch (error) {
            // Handle network or other errors
            console.log(error);
            alert('Error:', error.message);
        }
    });
});
