// try {
//     //risky code
// } catch (error) {
//     //runds only when error occur
// } finally {
//     //runs always whether an error occur or not
//     console.log('cleanup done');
// };

// // custome error

// // throw new Error('Invalid age');

// // throw 'something went wrong';
// // throw 404;
// // throw { msg: 'user not found' };


// =================
// try {
//     console.log(a);
// } catch (error) {
//     console.log('Type:', error.name);
//     console.log('Message:', error.message);
//     console.log('Stack:', error.stack);
// } finally {
//     console.log('This will run every time');
// }


// ==================
// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'validationError';
//     };
// };

// throw new ValidationError('Invalid Email');


// =====================
// function divide(a, b) { //function declaration
//     if (b === 0) {
//         throw new Error('cannot divide by zero');
//     }
//     return a / b;
// }
// try {
//     console.log(divide(5, 0));
// } catch (error) {
//     console.log(error.message);
//     console.log(error.stack);
// }


//

// fetchData()
//     .then(res => console.log(res))
//     .catch(err => err.message);

// async and await
// async function getData() {
//     try {
//         let result = await fetchData();
//         console.log(result);
//     } catch (error) {
//         console.log('Error:', error.message);
//     }
// }


// 
try {
    let result = JSON.parse('{"name:"sohel"}');
    console.log(result);
} catch (error) {
    console.log('type:', error.type)
    console.log('message:', error.message)
    console.log('stack:', error.stack)
}