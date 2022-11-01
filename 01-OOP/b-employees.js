
class Employee{
    constructor(){
        this.name = "unnamed";
        this.rate = 20;
        this.weeklyHours = 40;
    }
    getWeekly(){
        return this.weeklyHours * this.rate;
    }
    displayWeekly(){
        return this.name + " gets: $" + this.getWeekly().toFixed(2) + " per week.";
    }
}
let e1 = new Employee();
e1.name = "Worker Bee";
let text = e1.displayWeekly();
console.log(text);
//expect Worker Bee gets: $800.00 per week.

class Engineer extends Employee{ //Engineer is-a Employee
    constructor(){
        super()// call parent/super-class's constructor
        this.rate = 30; //OVERRIDE THE RATE
    }
    displayWeekly(){
        return "ENGINEER, " + super.displayWeekly()
    }
}

let e2 = new Engineer();
e2.name = "Busy Bee";
let text2 = e2.displayWeekly();
console.log(text2);

