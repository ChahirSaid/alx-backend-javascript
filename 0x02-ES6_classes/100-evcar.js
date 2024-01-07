/* eslint-disable */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    if (typeof range !== 'string') {
      throw TypeError('Range must be a string');
    }
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }
}
