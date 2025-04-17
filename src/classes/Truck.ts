// import the Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Truck class extends the Vehicle class
class Truck extends Vehicle {
  // Declare properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor that accepts properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // Call the constructor of the parent class, Vehicle
    super();

    // Initialize the properties of the Truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    // Check if the wheels array has 4 elements
    // If not, create 4 new default Wheel objects
    // Otherwise, use the provided wheels array
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // Implement the tow method
  tow(vehicle: Vehicle): void {
    let vehicleMakeModel = '';
    if ('make' in vehicle && 'model' in vehicle) {
      vehicleMakeModel = `${(vehicle as any).make} ${(vehicle as any).model}`;
    }

    if ('weight' in vehicle && (vehicle as any).weight <= this.towingCapacity) {
      console.log(`${vehicleMakeModel} is being towed`);
    } else {
      console.log(`${vehicleMakeModel} is too heavy to be towed`);
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing capacity: ${this.towingCapacity}`);
    console.log(`Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`);
    console.log(`Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`);
    console.log(`Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`);
    console.log(`Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`);
  }

  // Drift method (only for Truck)
  override drift(): void {
    if (this.started && this.currentSpeed >= 30) {
      console.log(`${this.make} ${this.model} is drifting!`);
    } else {
      console.log(`${this.make} ${this.model} can't drift — make sure it's started and going at least 30 mph.`);
    }
  }
  
}

// Export the Truck class as the default export
export default Truck;
