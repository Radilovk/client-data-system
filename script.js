document.getElementById('diet-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        dietary_preferences: document.getElementById('dietary_preferences').value,
        allergies: document.getElementById('allergies').value
    };

    try {
        const response = await fetch('/save-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            console.log('Data saved successfully');
        } else {
            console.error('Error saving data');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
