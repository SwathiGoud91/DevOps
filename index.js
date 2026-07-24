function validateForm() { 
let isValid = true;
const name = document.getElementById('name'); const email = document.getElementById('email'); const phone = document.getElementById('phone'); const event = document.getElementById('event');
document.getElementById('nameError').innerText = ''; document.getElementById('emailError').innerText = ''; document.getElementById('phoneError').innerText = ''; document.getElementById('eventError').innerText = '';
if (name.value.trim() === '') {
document.getElementById('nameError').innerText = 'Name is required.'; isValid = false;
}
if (email.value.trim() === '') {
document.getElementById('emailError').innerText = 'Email is required.'; isValid = false;
} else if (!/\S+@\S+\.\S+/.test(email.value)) { document.getElementById('emailError').innerText = 'Invalid email format.'; isValid = false;
}
if (phone.value.trim() === '') {
document.getElementById('phoneError').innerText = 'Phone number is required.'; isValid = false;
} else if (!/^\d{10}$/.test(phone.value)) {
document.getElementById('phoneError').innerText = 'Invalid phone number. Must be 10 digits.'; isValid = false;
}
if (event.value === '') {
document.getElementById('eventError').innerText = 'Please select an event.'; isValid = false;
}
if (isValid) {
alert('Registration successful!'); document.getElementById('registrationForm').reset();
}
}
