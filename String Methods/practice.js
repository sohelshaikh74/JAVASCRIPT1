let user = {
    name: 'sohel',
    address: {
        city: 'Mumbai',
        pincode: 400701
    }
};
console.log(user);
let shallowCopy = { ...user };
shallowCopy.address.city = 'Pune';

console.log(user.address.city)
console.log(shallowCopy.address.city)

console.log(user.name);
shallowCopy.name = 'Shaikh';
console.log(shallowCopy.name)