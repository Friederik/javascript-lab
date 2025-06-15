

function setupBase() {
    const movies = []

    return {
        getAllMovie: function() {
            return movies.map((element) => element)
        },
        addMovie: function(title, year, genres, rating, watched) {
            movies.push({
                title: title,
                year: year,
                genres: genres,
                rating: rating,
                watched: watched
            })
        },
        getUnwatchedHighRated: function(minRating) {
            return movies.filter((movie) => movie.rating > minRating).filter((movie) => movie.watched === true).sort((m1, m2) => m2.rating - m1.rating)
        },
        groupByGenre: function() {
            const allGenres = new Set()
            movies.forEach((movie) => {
                movie.genres.split(', ').forEach((genre) => {
                    allGenres.add(genre)
                })
            })
            const moviesByGenres = new Map()
            allGenres.forEach((genre) => {
                moviesByGenres.set(genre, movies.filter((movie) => movie.genres.includes(genre)))
            })

            return moviesByGenres
        },
    }
}

const base = setupBase()

base.addMovie("Пульп фикшн", 1970, "Thriller, Horror", 9, true)
base.addMovie("Брат 2", 1982, "Drama, Horror", 10, false)
base.addMovie("Брат", 1981, "Drama, Comedy, Horror", 8, true)

// console.log(base.groupByGenre());


function setupMarket() {
    const purchases = []

    return  {
        addPurchase: function(name, price, quantity) {
            purchases.push({
                name: name,
                price: price,
                quantity: quantity
            })
            // console.log(purchases);            
        },
        getTotal: function() {
            return purchases.reduce((sum, purchase) => sum + purchase.price * purchase.quantity, 0)
        },
        getMostExpensive: function () {
            return purchases.reduce((maxPurchase, purchase) => {
                if (purchase.price * purchase.quantity > maxPurchase) return purchase.price * purchase.quantity
                else return maxPurchase
            }, 0)
        },
        filterByPrice: function(min, max) {
            return purchases.filter((purchase) => purchase.price * purchase.quantity <= max && purchase.price * purchase.quantity >= min)
        }
    }
}

const p = setupMarket()

p.addPurchase("Молоко", 50, 3)
p.addPurchase("Яблоко", 2, 20)
// console.log(p.filterByPrice(10, 500));



function createQuest(argExp) {
    const score = {
        totalExp: argExp,
        nowExp: 0
    }  


    return function(earnedExp) {
        score.nowExp += earnedExp
        if (score.totalExp < score.nowExp) {
            console.log('Победа!')
        } else {
            console.log(`${(score.nowExp / score.totalExp * 100).toFixed(1)}% Выполнено!`);
        }
    }
}

const q = createQuest(200)


// DATE

class DateManager {
    constructor() {
        this.dates = []
    }

    addMeeting(title, dateTime) {
        this.dates.push({
            title: title,
            dateTime: new Date(dateTime)
        })
    }

    getSorted() {
        return this.dates.sort((date1, date2) => date1.dateTime.getTime() - date2.dateTime.getTime())
    }

    getClosestMeeting() {
        const now = new Date()
        return this.getSorted().find(meeting => meeting.dateTime > now)
    }

    #getClosestMeetingTime() {
        return new Date(this.getClosestMeeting().dateTime - new Date())
    }

    getClosestMeetingHours() {
        return (this.#getClosestMeetingTime() / 1000 / 60 / 60).toFixed(0)
    }

    getClosestMeetingDays() {
        return (this.#getClosestMeetingTime() / 1000 / 60 / 60 / 24).toFixed(0)
    }
}

const meetings = new DateManager()
meetings.addMeeting('День рождения', 'June 15, 2025, 12:00')
meetings.addMeeting("Орган", 'June 19, 2025, 19:00')
meetings.addMeeting('УП', 'June 18, 2025, 10:00')
// console.log(meetings.getClosestMeetingHours());
// console.log(meetings.getSorted());


// MAP

class VisitManager {
    constructor() {
        this.visits = new Map()
    }

    addVisit(userId, page) {
        if (typeof userId !== 'number' || typeof page !== 'number') {
            console.error("Incorrect Data");
            return
        }
        if (!this.visits.has(userId)) {
            this.visits.set(userId, [])
        }
        this.visits.get(userId).push(page)
    }

    getUserVisits(userId) {
        if (this.visits.has(userId)) {
            return this.visits.get(userId)
        }
    }

    getMostActiveUser() {
        let mostUserId = null
        let maxVisits = -1

        for (let [userId, pages] of this.visits.entries()) {
            if (pages.length > maxVisits) {
                mostUserId = userId
                maxVisits = pages.length
            }
        }

        return {
            userId: mostUserId,
            visits: maxVisits
        }
    }
}

const v = new VisitManager()

v.addVisit(4, 6)
v.addVisit(4, 2)

v.addVisit(3, 1)
v.addVisit(3, 2)
v.addVisit(3, 4)

v.addVisit(5, 5)
v.addVisit(5, 5)

v.addVisit(2, 1)
v.addVisit(2, 2)
v.addVisit(2, 3)
v.addVisit(2, 4)

v.addVisit(1, 1)
v.addVisit(1, 3)

// console.log(v.visits.size);


// REGEXP

// // Просто обычная функция
// function loggerTag(strings, ...expressionValues) {
//   console.log(strings)
//   console.log(...expressionValues)
// }

// loggerTag`Булевых значений всего ${2}: они бывают либо ${true} либо ${false}`
// // ['Булевых значений всего ', ': они бывают либо ', ' либо ', '']
// // 2 true false


class Validate {
    static email(str) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(str)
    }

    static password(str) {
        const regex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{8,}$/
        return regex.test(str)
    }

    static username(str) {
        const regex = /^[а-яА-ЯЁё]{3,15}$/
        return regex.test(str)
    }
}

// console.log(Validate.password('123'));
// console.log(Validate.password('afe'));
// console.log(Validate.password('123f'));
// console.log(Validate.password('1234567A'));


// console.log(Validate.email('123@1232.com'));
// console.log(Validate.email('12@3@.'));
// console.log(Validate.email('1..2@3'));

// console.log(Validate.username('Илья'));
// console.log(Validate.username('Илья2'));
// console.log(Validate.username('Hikolay'));


// THIS

function createStore(startDiscount = 20) {
    let discount = startDiscount
    console.log(`Установлена скидка: ${discount}%`);
    
    return  {
        setDiscount(newDiscount) {
            discount = newDiscount
            console.log(`Установлена скидка: ${discount}%`);
        },
        getPrice(price) {
            return (price * (100 - discount) / 100).toFixed(2)
        }
    }
}

const store = createStore()

console.log(store.getPrice(200));
store.setDiscount(30)
console.log(store.getPrice(200));
