// Get the form element
const appointmentForm = document.getElementById('appointmentForm');

// Handle form submission
appointmentForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission
  
  // Simulate successful booking
  const isBooked = true;

  if (isBooked) {
    alert('Appointment booked successfully!');
    // Optionally, you can reset the form after successful booking
    appointmentForm.reset();
  } else {
    alert('Sorry, the appointment could not be booked. Please try again later.');
  }
});
