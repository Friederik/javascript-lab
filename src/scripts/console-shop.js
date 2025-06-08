const customer = {
    name: 'Гость',
    wallet: 200,
    purchases: [],
    payment: 0
}

customer.name = prompt("Введите имя покупателя", "Гость")
if (customer.name === null) customer.name = "Гость"

const products = [
    {
        name: 'Яблоко',
        price: 40,
        count: 20
    },
    {
        name: 'Молоко',
        price: 95,
        count: 5
    },
    {
        name: 'Шоколад',
        price: 150,
        count: 1
    },
]

function addProduct(pCount, pPos) {
    const p = products[pPos]
    if (pCount <= 0) return
    if (p.count > 0 && pCount <= p.count) {
        const pPrice = p.price * pCount
        if (customer.wallet > pPrice) {
            customer.purchases.push({name: p.name, price: pPrice})
            customer.wallet -= pPrice
            p.count -= pCount
            alert(`Вы добавили ${p.name} на ${pPrice}₽!`)
        } else {
            alert('Недостаточно средств.')
        }
    } else {
        alert(`${p.name} кончились.`)
    }
}

function calculatePayment() {
    customer.payment = 0
    for (p of customer.purchases) {
        customer.payment += p.price
    }
}

while (true) {
    if (confirm(customer.name + `, желаете добавить товар в корзину? \nДоступные средства: ${customer.wallet}₽.`)) {
        let availableProducts = ''
        for (let p of products) {
            if (p.count > 0) availableProducts += `${p.name}, `
        }
        if (availableProducts.length > 0) {
            availableProducts = availableProducts.slice(0, -2) + '.'
            let productName = prompt(`Выберите товар: ${availableProducts}`)
            switch (productName){
                case 'Яблоко':
                    addProduct(prompt(`Количество товаров (цена - ${products[0].price}₽):`), 0)
                    break
                case 'Молоко':
                    addProduct(prompt(`Количество товаров (цена - ${products[1].price}₽):`), 1)
                    break
                case 'Шоколад':
                    addProduct(prompt(`Количество товаров (цена - ${products[2].price}₽):`), 2)
                    break
                default:

            }
        } else {
            alert("Товары кончились.")
            break
        }
        
    } else {
        alert("Покупки кончились.")
        break
    }
}

while (true) {
    calculatePayment()
    if (confirm(customer.name + `, желаете последний товар? \nДоступные средства: ${customer.wallet}₽. \nСумма чека: ${customer.payment}₽. \nКоличество товаров: ${customer.purchases.length}.`)) {
        if (customer.purchases.length > 0) {
            customer.wallet += customer.purchases.pop().price
        } else {
            alert(`Удаление кончилось. \nВаш чек: ${customer.payment}₽!`)
            break
        }
    } else {
        alert(`Удаление кончилось. \nВаш чек: ${customer.payment}₽!`)
        break
    }
}