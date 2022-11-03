
// which quarter of the year?
// input is a month number 1-12
// output quart 1-4

// solve logically or or matmatically

function quarter(n){
    // if(n >= 1 && n <= 3){
    //     return 1;
    // }...
    return Math.ceil((n / 12) * 4)
}
console.log(quarter(1))
console.log(quarter(4))
console.log(quarter(11))
console.log(quarter(12))

