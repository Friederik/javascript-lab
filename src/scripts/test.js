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

// const nums = [1,2,3]
// nums.push(5)
// nums.push(9)
// console.log(nums.pop());
// nums.unshift(7)

// const doubled = nums.map(n => n*2)
// const sorted = doubled.toSorted((a,b) => b-a)
// console.log(sorted);

// const sum = (acc, item) => acc + item

// const erased = sorted.slice(2,2+3).filter((item) => item < 5)
// console.log(sorted, erased);


// FUNCTION

// function Animal() {
//     if (!(this instanceof Animal)) {
//         throw Error('Error: Incorrect invocation!')
//     }

//     this.foo = 'efefef'
//     return {
//         bo: function (n) {
//             this.foo += n
//             return this.foo
//         },
//         raw: function() {
//             return this.foo.toUpperCase()
//         },
//         takeThis: function() {
//             console.log(this)
//         }
//     }
// }

// const animal = Animal()

// console.log(animal);

// function User() {
//   console.log(this instanceof User)
//   // true
//   this.name = 'Alex'
// }

// const firstUser = new User()
// firstUser instanceof User
// // true

// 'use strict'
// function sayThis() {
//     this.foo = 'asdf'
//     console.log(this);
// }

// const a = new sayThis()

// 'use strict'
// const user = {
//   name: 'Alex',
//   greet() {
//     console.log(this.name);
//   }
// };
// const greeting = user.greet.bind(user);
// greeting(); // что выведется?

// 'use strict'
// function introduce(greeting, punctuation) {
//   console.log(`${greeting}, я – ${this.name}${punctuation}`);
// }

// const person = { name: 'НИКОЛАЙ' };

// introduce.apply(person, ["Здарова", "?"])
// introduce("ПРивет", "вы")



// function Animal(type, name) {
//   this.type = type;
//   this.name = name;
// }

// // const a = new Animal('cat', "Звездочка")
// const b = Animal('dog', 'Бублик')

// console.log(b);

'use strict'
const user = {
  name: 'Анна',
  timeoutGreet() {
    setTimeout(function() {
      console.log('Голосом обычной:', this.name); // ?
    }.bind(this), 100);

    setTimeout(() => {
      console.log('Голосом стрелочной:', this.name); // Анна
    }, 200);
  }
};
user.timeoutGreet();
