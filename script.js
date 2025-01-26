document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var pickupLocation = document.getElementById("pickupLocation").value;
    var destination = document.getElementById("destination").value;
    console.log("Booking cab from " + pickupLocation + " to " + destination);
  });
