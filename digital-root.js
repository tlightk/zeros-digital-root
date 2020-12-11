function digitalRoot(num) {
    // throw error for invalid inputs, return single digits
    if (typeof num !== 'number') {
        throw console.error('argument is not a number!');
    } else if (num < 0) {
        throw console.error('number must not be negative!')
    } else if (num < 10) {
        return num;
    }
    
    let sumArray = [];
    stringNumber = num.toString();

    // create an array separating each number into an array element
    // then return a new array with the sum with each number separated
    function createOutput (strNum) {
        let output = [];
        for (let i = 0; i < strNum.length; i++) {
            output.push(Number(strNum[i]));
        }
        return output;
    }

    // find the sum of all numbers in an array and return a new array
    // each number is separated again
    function calculateSum (arr) {
        if (arr.length > 1) {
            let sum = arr.reduce((a, b) => {
                return a + b;
            })
            sumArray = createOutput(sum.toString());
            return sumArray;
        } else {
            return arr;
        }
    }

    // run once to set output and sumArray
    calculateSum(createOutput(stringNumber));

    // // loop check if sumArray length is 1
    while (sumArray.length > 1) {
        calculateSum(sumArray);
    }

    return sumArray[0];
}

module.exports = { digitalRoot };