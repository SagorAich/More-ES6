const fish={id:58,name:'king hilsha',price:'9000',phone:'017175555555',address:'chandpur',dress:'silver'};
/* const phone=fish.phone;
const price=fish.price;
const id=fish.id; */

const{phone,price,dress,id}=fish;

// console.log(price);
// console.log(phone);

const company={name:'GP',
        ceo:{id:1,name:'ajmol',food:'fuchka'},
        web:{work:'website development',employee:22,framework:'react'}
    };
const {work,framework}=company.web;
const {name,food}=company.ceo;

console.log(work);