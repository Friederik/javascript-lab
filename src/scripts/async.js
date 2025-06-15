// function fisrtCounter(time) {
//     // const timeOut = time

//     setTimeout(() => console.log(`Консольный лог ${time} секунд`), time * 1000)
// }

// counter(2)
// counter(1)
// counter(4)

// function recurtion(stamp, newFunc) {
//     stamp+=1
//     return setTimeout(() => newFunc(stamp), 2000)
// }

// let x = 0

// recurtion(x, recurtion(x, recurtion(x, () => console.log(x))))

// let x = 0

// setTimeout(() => {
//     x+=1
//     console.log(x, 'Первая')
//     setTimeout(() => {
//         x+=1
//         console.log(x, 'Вторая')
//         setTimeout(() => {
//             x+=1
//             console.log(x, 'Третья')
//         }, 3000)
//     }, 2000)
// }, 1000)

// const timer = setInterval(() => {
//     console.log(`Времени прошло: ${x+=1}`)
//     if (x === 5) clearInterval(timer)
// }, 1000)

// function randomDelay() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             let num = Number((Math.random()).toFixed(1))
//             if (num === 0) {
//                 console.log("Не может быть")
//                 num = 1
//             }
            
//             if (num > 0.5) {
//                 console.log(`Победа!`)
//                 res(num)
//             }
//             else {
//                 console.log(`Проигрыш!`)
//                 rej(num*10)
//             } 
//         }, 0)
//     })
// } 

// randomDelay()
//     .then(answer => {
//         const score = answer*10*505
//         console.log(`Очков набрано: ${score}`)
//         return score
//     })
//     .then(score => {
//         if (score % 2 == 0) {
//             console.log("Новый квест дан")
//         } else {
//             console.log("Не будет нового квеста")
//         }
//     })
//     .catch(err => console.log(`Итог: ${err}`))
//     .finally(() => console.log('Конец игры'))

const xhr = new XMLHttpRequest();

xhr.open("PATCH", "https://jsonplaceholder.typicode.com/todos/1", true);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status >= 200 && xhr.status < 300) {
      const data = JSON.parse(xhr.responseText);
      console.log("Данные получены:", data);
    } else {
      console.log("Ошибка:", xhr.status);
    }
  }
};

xhr.send(JSON.stringify({title: "МОЕ НАЗВАНИЕ"}));
