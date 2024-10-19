/ Define an object
const car = {
    type: "Toyota",
    model: "Camry",
    year: 2020,
    displayInfo: function() {
        console.log(`Car: ${this.year} ${this.type} ${this.model}`);
    }
};

// Use the object
car.displayInfo(); // Outputs: Car: 2020 Toyota Camry

// Modify the object properties
car.year = 2021;
car.displayInfo(); // Outputs: Car: 2021 Toyota Camry

// Adding a new property
car.color = "Blue";
console.log(car); // Outputs the car object with the new color property
