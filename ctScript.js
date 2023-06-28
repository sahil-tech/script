// Function to make a POST request to an API
function postEvent(eventName, data) {
  // Create the payload
  var payload = {
    event: eventName,
    data: data,
  };

  // Convert the payload to JSON
  var jsonPayload = JSON.stringify(payload);

  // Make the POST request
  fetch('https://api.example.com/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: jsonPayload,
  })
    .then(function (response) {
      if (response.ok) {
        console.log('Event posted successfully');
      } else {
        console.error('Failed to post event');
      }
    })
    .catch(function (error) {
      console.error('Error occurred:', error);
    });
}

// Add the function to the window object
window.postEvent = postEvent;
