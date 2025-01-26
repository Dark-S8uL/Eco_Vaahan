function logout() {  // Add logout functionality
  alert("Logging out...");
}

function openPillbox() {
  // Add code to navigate to the pillbox
  alert("Redirecting to Rides...");
}

// Add this JavaScript to dynamically generate the calendar
const calendarContainer = document.getElementById("calendar");

// Get the current date
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const daysInMonth = new Date(
  currentDate.getFullYear(),
  currentMonth + 1,
  0
).getDate();

// Generate calendar days
for (let day = 1; day <= daysInMonth; day++) {
  const calendarDay = document.createElement("div");
  calendarDay.classList.add("calendar-day");
  calendarDay.textContent = day;

  // Simulate taken dates (modify as needed)
  if (day % 1 === 0 && day < 7) {
    calendarDay.classList.add("taken");
  }

  calendarContainer.appendChild(calendarDay);
}

function startChat(doctorName) {
  alert(`Start chat with ${doctorName}`);
  // Add your chat logic here
}

function startVideoCall(doctorName) {
  alert(`Start video call with ${doctorName}`);
  // Add your video call logic here
}

function subscribe(planName) {
  alert(`Subscribe to ${planName}`);
  // Add your subscription logic here
}

function validateName() {
  var name = document.getElementById("nameInput").value;
  if (/\d/.test(name)) {
    alert("Name should not contain numbers");
  }
}

function submitForm() {
  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;
  var message = document.getElementById("messageInput").value;
  if (!name || !email || !message) {
    alert("Please fill in all fields");
    return;
  }
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }
  var formData = {
    name: name,
    email: email,
    message: message,
  };
  console.log("Form data:", formData);
  document.getElementById("contactForm").reset();
}
