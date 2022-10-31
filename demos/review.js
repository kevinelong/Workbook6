
text = "Now is the time"
//get last letter
console.log(text[text.length - 1])

//print all but the last letter - loop or substr/slice

//list = text.split("") //convert to array from string example 1
list = [...text];//convert to array from string example 2 using newer ES6

list.forEach((e, i) => {
    if (i < text.length - 1) {
        console.log(e)
    }
});

///convert back into a string
//reverse a string
output = ""
//LOOPING BACKWARDS!
for (i = text.length - 1; i >= 0; i--) {
    output += text[i]
}
console.log(output);

console.log([...text].reverse().join("")) //join converts an array back into a string

// reverse the words in a string
console.log(text.split(" ").reverse().join(" ")) //join converts an array back into a string

//TERNARY OPERATOR ? : IS A ONE LINE IF/ELSE
function getIsOfAgeMessage(age) {
    return age >= 21 ? "YES" : "NO";
}
console.log(getIsOfAgeMessage(99))