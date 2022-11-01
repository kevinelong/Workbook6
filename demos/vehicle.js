class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this.odometer = 0;
    }
  
    getFullName() {
      return this.make + " " + this.model;
    }
  
    drive(miles) {
      this.odometer += miles;
    }
  
    getOdometerReading() {
      return this.odometer;
    }
  }
  let myVehicle = new Vehicle("Ford", "Explorer");
  
  myVehicle.drive(10);
  
  console.log(getFullName() + " has " +
  
    getOdometerReading() + " miles");
  let myVehicle = create("Ford", "Explorer");
  
  myVehicle.drive(10);
  
  console.log(getFullName() + " has " +
  
    getOdometerReading() + " miles");
  let myVehicle = new Vehicle("Ford", "Explorer");
  
  myVehicle.drive(10);
  
  console.log(myVehicle.getFullName() + " has " +
  
    myVehicle.getOdometerReading() + " miles");
  let myVehicle = constructor("Ford", "Explorer");
  
  myVehicle.drive(10);
  
  console.log(myVehicle.getFullName() + " has " +
  
    myVehicle.getOdometerReading() + " miles");
  