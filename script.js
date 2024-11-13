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
