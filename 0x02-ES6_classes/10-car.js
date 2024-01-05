export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const car = Object.create(this);
    car._brand = undefined;
    car._motor = undefined;
    car._color = undefined;
    return car;
  }
}
