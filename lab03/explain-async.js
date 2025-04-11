// setTimeout(() => {console.log('1', 'is the loneliest number')}, 0);
// setTimeout(() => {console.log('2', 'can be as bas as one')}, 10);

// Promise.resolve('hi').then((data)=> console.log('2', data));

// console.log('3','is a crowd');

// // Promise 1
// const promise = new Promise((resolve, reject) => {
//     if (true) {
//             throw Error
//         resolve('Stuff Worked');
//     } else{
//         reject('Error, it broke');
//     }
// })

// promise
//     .then(result => result + '!')
//     .catch(() => console.log('error!'))

// // Promise 2 ==> pending and wait all promises results come back
// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve('Stuff Worked');
//     } else{
//         reject('Error, it broke');
//     }
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'Hihi')
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'Bye')
// })

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 5000, 'Hi Again')
// })

// Promise.all([promise, promise2, promise3, promise4])
//     .then(values => {
//         console.log(values);
//     })
//     .catch(() => console.log('error!'))

// //Async Await => on top of promises

// // make code easier to read -> Promises
// movePlayer(100, 'Left')
//     //chaining the functions
//     .then(() => movePlayer(400,'Left'))
//     .then(() => movePlayer(10,'Right'))
//     .then(() => movePlayer(300,'Left'))

// async function playerStart() {
//     //use the await keyword in front of any function that returns a promise => when the function is resolved, then it will move to the next line
//     //the first and second will have the result of each function => the variable store the return, we don't have to chaning 
//     const first = await movePlayer(100, 'Left'); //pause this function, until i have something for you -> so we're waiting the response
//     const second = await movePlayer(400,'Left'); //pause, and await the next move
//     await movePlayer(10,'Right'); //pause
//     await movePlayer(330,'Left'); //pause
// }

// // Console: fetch() fuction is a promise (https://jsonplaceholder.typicode.com/users)
// fetch("https://api.exchangeratesapi.io/v1/latest?access_key=6b234af1aaa5cc46c808ce6fe25928b7&base=EUR&symbols=HKD")
//     .then(resp => resp.json())
//     .then(console.log)

// //Depends on your preference
// async function fetchCurrency(){
//     const resp = await fetch("https://api.exchangeratesapi.io/v1/latest?access_key=6b234af1aaa5cc46c808ce6fe25928b7&base=EUR&symbols=HKD")
//     const data = await resp.json();
//     console.log(data);
// }
// fetchCurrency()

//Promise all
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

// Promise.all(urls.map(url => 
//     fetch(url).then(resp => resp.json())
// )).then(array => {
//     console.log('users', array[0])
//     console.log('posts', array[0])
//     console.log('albums', array[0])
// }).catch('oops');

//Promise all => async

const getData = async function() {
    //try catch block equal to catach in Promise
    try{
        //[var, var, var] <= ES6 syntax  
        const [ users, posts, albums ] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users)
        console.log('posts', posts)
        console.log('albums', albums)
    } catch {
        console.log('oops!');
    }
}
getData()