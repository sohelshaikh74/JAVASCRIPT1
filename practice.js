let user = {
    name: "sohel",
    address: {
        city: "Mumbai",
        country: "India"
    }
}
//withoug optional chaning
console.log(user.address.city)
console.log(user.contact?.phone)

let userss = {
    greet: () => 'hello'
}
console.log(userss.greet?.())
console.log(userss.sayGoodBye?.())