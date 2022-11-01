let pets = [
    { name: "Diffy", type: "Cat" },
    { name: "Clancy", type: "Cat" },
    { name: "Brandy", type: "Dog" },
    { name: "Visa", type: "Dog" },
    { name: "TK", type: "Cat" }
];
// let match1 = pets.findFirst( p => p.type == "Dog"); //FINDFIRST IS NOT A FUNCTION
let match2 = pets.find( p => p.type == "Dog"); // RETURNS FIRST OBJECT
let match3 = pets.filter( p => p.type == "Dog"); //RETURNS LIST OF MATCHING OBJECTS
//let match4 = pets.findFirst("Dog");//FINDFIRST IS NOT A FUNCTION
console.log("FIND", match2)
console.log("FILTER", match3);
