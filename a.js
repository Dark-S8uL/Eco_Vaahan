// JavaScript to show/hide dropdown on click
document.addEventListener("click", function (event) {
  var dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(function (dropdown) {
    var dropdownContent = dropdown.querySelector(".dropdown-content");
    if (event.target === dropdown.querySelector(".pickup-input")) {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }
  });
});

// JavaScript to handle form submission
document
  .getElementById("rideForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Fetch drivers data based on selected pickup and destination locations
    var pickupLocation = document.getElementById("pickupLocation").value;
    var destination = document.getElementById("destination").value;

    // Here you can implement logic to fetch drivers based on pickup and destination locations
    // Once you have the data, you can display it in the drivers list container (driversListContainer)

    // For demonstration purposes, let's just display a sample message
    var driversListContainer = document.getElementById("driversListContainer");
    driversListContainer.innerHTML =
      "<p>Drivers list for pickup location: " +
      pickupLocation +
      " and destination: " +
      destination +
      "</p>";
  });
