const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(bigNumbers); 
// console.log(smallNumbers);

const products = [
    { name: 'water bollte', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 5000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
]
const expensive = products.filter(product => product.price < 100);
//console.log(expensive);
const blackItem = products.find(product => product.color =='black');
console.log(blackItem);