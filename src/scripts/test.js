// OBJECT

// const book = {
//     title: 'Диффуры 20 века',
//     author: "Пелевин",
//     year: '1995'
// }

// for (let [key, value] of Object.entries(book)) {
//     console.log(key, value);
// }

// Object.assign(book, {rating: 5})


// const book2 = {...book, rating: 3}

// console.log(book, book2);


// ARRAY

const nums = [1,2,3]
nums.push(5)
nums.push(9)
console.log(nums.pop());
nums.unshift(7)

const doubled = nums.map(n => n*2)
console.log(doubled);
