const products = [4, 6, 8, 10];
const output2 = [];

const doubleIt = number => number * 2;

for (const number of products) {
    const result = doubleIt(number);
    output2.push(result);
}
console.log(output2);

//const output = numbers.map(doubleIt);
const output = products.map(number => number * 2);
//console.log(output);