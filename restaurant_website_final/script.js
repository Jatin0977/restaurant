document.getElementById('reservationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const people = document.getElementById('people').value;

  if (!name || !email || !date || !time || !people) {
    alert('Please fill in all details to make a reservation.');
    return;
  }

  // Simple email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  const confirmation = document.getElementById('confirmation');
  confirmation.textContent = `Thank you, ${name}! Your reservation for ${people} people on ${date} at ${time} has been received. We look forward to serving you!`;

  this.reset();
});