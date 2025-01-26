document.addEventListener("click", function (event) {  var dropdown = document.querySelector(".dropdown");
  if (event.target.matches(".pickup-input")) {
    dropdown.querySelector(".dropdown-content").style.display = "block";
  } else {
    dropdown.querySelector(".dropdown-content").style.display = "none";
  }
});

function searchRides(event) {
  event.preventDefault();
  var pickupLocation = document.getElementById("pickupLocation").value;
  var destination = document.getElementById("destination").value;
  var driversListContainer = document.getElementById("driversListContainer");
  driversListContainer.innerHTML =
    "<p>Drivers list for pickup location: " +
    pickupLocation +
    " and destination: " +
    destination +
    "</p>";
}
function updatePickupAddress() {
  var selectElement = document.getElementById("pickupLocation");
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;
  document.getElementById("pickupLocation").value = selectedOption;
}

function updateDestinationAddress() {
  var selectElement = document.getElementById("destination");
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;
  document.getElementById("destination").value = selectedOption;
}
