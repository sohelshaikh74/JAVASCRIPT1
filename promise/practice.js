// const fetchData = async () => {
//     try {
//         let result = await fetch("https://dummyjson.com/users")
//         let { users } = await result.json()
//         console.log(users)
//     }
//     catch (error) {
//         console.log("error while fethced data:", error)
//     }
// }
// fetchData()

//fetch product details (title and price)
// let fetchedProducts = async () => {
//     try {
//         const productsDetails = await fetch("https://dummyjson.com/products")
//         let { products } = await productsDetails.json()
//         products.forEach(product => {
//             console.log("Title:" + product.title, "Price:" + product.price)
//         });
//     }
//     catch (error) {
//         console.log('Error occured while fetching product details', error.message)
//     }
// }
// fetchedProducts()


//task->Multiple API Calls
// const fetcheUserDeatils = async () => {
//     const usersDetails = await fetch("https://dummyjson.com/users")
//     const { users } = await usersDetails.json()
//     return users;
// }
// const fetchProductDetails = async () => {
//     const productsDetails = await fetch("https://dummyjson.com/products")
//     const { products } = await productsDetails.json()
//     return products
// }
// const fetchData = async () => {
//     const [product, users] = await Promise.all([fetcheUserDeatils(), fetchProductDetails()])
//     console.log(product, users)
// }
// fetchData()


//task 3==> Multiple API Calls with Promise.all
let fetcheUsersDetails = async () => {
    try {
        const usersDetails = await fetch("https://dummyjson.com/users")
        const { users } = await usersDetails.json()
        // console.log('users', users);

        return users;
    }
    catch (error) {
        console.log('Error occured while fetching Users Details', error.message)
    }
}
let fetchProductDetails = async () => {
    try {
        const productsDetails = await fetch("https://dummyjson.com/products")
        const { products } = await productsDetails.json()
        // console.log("products", products);
        return products;
    }
    catch (error) {
        console.log('Error occured while fetching Products Details', error.message)
    }
}
let fetchPosts = async () => {
    try {
        const postsDetails = await fetch("https://dummyjson.com/posts")
        const { posts } = await postsDetails.json()
        return posts;
    }
    catch (error) {
        console.log('Error occured while fetching Post Details', error.message)
    }
}
fetcheUsersDetails()
fetchProductDetails()
fetchPosts()

let fetchData = async () => {
    try {
        const [users, products, posts] = await Promise.all([fetcheUsersDetails(), fetchProductDetails(), fetchPosts()])
        // console.log(users, products, posts);

        console.log(users.map((user) => user.firstName))
        console.log(products.map((product) => product.title + product.price))
        console.log(posts.map((post) => post.title))
        return {
            users, products, posts
        }
    }
    catch (error) {
        console.log('Error occured while fetching Post Details', error.message)
    }
}
fetchData()
