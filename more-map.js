const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const fLength = friends.map(friend => friend.length);
//console.log(fLength);

const products = [
    { name: 'water bollte', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 5000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
]
/* function getName(p){
    console.log(p); 
    return p.name;
} */
/* const getName=function (p){
    return p.name;
} */
const getName = p => p.name;

// old system
/* output2=[];
for (const product of products) {
    const result = getName(product);
    output2.push(result);
}
console.log(output2); */
const productNames = products.map(getName);
const productPrices = products.map(p => p.price);
// console.log(productNames);
// console.log(productPrices);
//products.forEach(product=>console.log(product));
products.map(product=>console.log(product));