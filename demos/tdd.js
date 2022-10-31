
//SOLUTION
function add(a, b) {
    //TODO calculate result 
    let result = Number(a) + Number(b);
    return result;
}

//TEST
const testCaseList = [
    { a: 6, b: 7, expected: 13 },
    { a: "6", b: "7", expected: 13 },
    { a: 11, b: "22", expected: 33 },
];

// MINI "TEST FRAMEWORK"
testCaseList.forEach(testCase => {
    let actual = add(testCase.a, testCase.b);
    let worked = testCase.expected === actual;    
    if (worked){
        console.log("SUCCESS: (GREEN LIGHT)", testCase)
    }else{
        console.log("FAIL: (RED LIGHT)", actual, testCase)
    }
});
