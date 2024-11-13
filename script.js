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
