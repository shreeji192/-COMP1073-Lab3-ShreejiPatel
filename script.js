// ToyCar class definition
class ToyCar {
  constructor(make, model, color, scale, material, dimensions, weight, price, features, stock) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.scale = scale;
    this.material = material;
    this.dimensions = dimensions;
    this.weight = weight;
    this.price = price;
    this.features = features;
    this.stock = stock;
    this.isAvailable = stock > 0;
  }

  // Method to update the stock quantity and availability status
  updateStock(newStock) {
    this.stock = newStock;
    this.isAvailable = newStock > 0;
  }

  // Method to update the color of the car
  updateColor(newColor) {
    this.color = newColor;
  }
}
// Create an instance of ToyCar
const corvette1959 = new ToyCar(
  "Chevrolet",
  "Corvette Convertible",
  "Red",
  "1:24",
  "Die-Cast Metal",
  { length: 7.5, width: 3, height: 2.5 },
  1.2,
  15.99,
  ["opening doors", "detailed interior", "free-rolling wheels"],
  5
);

// DOM elements
const carTitle = document.getElementById("car-title");
const carDetails = document.getElementById("car-details");
const availability = document.getElementById("availability");
const carImage = document.getElementById("car-image");

// Function to display the car information
function displayCarInfo(car) {
  carTitle.textContent = `${car.make} ${car.model}`;
  carDetails.innerHTML = `
    <strong>Color:</strong> ${car.color}<br>
    <strong>Scale:</strong> ${car.scale}<br>
    <strong>Material:</strong> ${car.material}<br>
    <strong>Dimensions:</strong> ${car.dimensions.length} x ${car.dimensions.width} x ${car.dimensions.height} inches<br>
    <strong>Weight:</strong> ${car.weight} oz<br>
    <strong>Price:</strong> $${car.price.toFixed(2)}<br>
    <strong>Features:</strong> ${car.features.join(", ")}
  `;
  availability.textContent = car.isAvailable ? "Available" : "Out of Stock";
  availability.style.color = car.isAvailable ? "#28a745" : "#dc3545";

  // Update the car image based on the selected color
  carImage.src = colorImages[car.color];
}

// Initial display of car information
displayCarInfo(corvette1959);

// Toggle the visibility of car details when "Show Properties of the Car" button is clicked
document.getElementById("show-details").addEventListener("click", () => {
  carDetails.style.display = carDetails.style.display === "none" ? "block" : "none";
});

// Toggle the availability status when "Toggle Car Availability" button is clicked
document.getElementById("toggle-availability").addEventListener("click", () => {
  corvette1959.isAvailable = !corvette1959.isAvailable;
  displayCarInfo(corvette1959);
});

// Update stock quantity when the form is submitted
document.getElementById("update-stock-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const newStock = parseInt(document.getElementById("stock").value);
  corvette1959.updateStock(newStock);
  displayCarInfo(corvette1959);
  document.getElementById("stock").value = ''; // Clear input field after submission
});

// Update the car color based on the dropdown selection
document.getElementById("color-select").addEventListener("change", (event) => {
  const selectedColor = event.target.value;
  corvette1959.updateColor(selectedColor);
  displayCarInfo(corvette1959);
});

// Initialize the car details to be hidden by default
carDetails.style.display = "none";
