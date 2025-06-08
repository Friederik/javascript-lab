const customer = {
    name: 'Гость',
    wallet: 200,
    purchases: [],
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
    if (p.count > 0) {
        const pPrice = p.price * pCount
        if (customer.wallet > pPrice) {
            customer.purchases.push({name: p.name, price: pPrice})
            customer.wallet -= pPrice
            alert(`Вы добавили ${p.name} на ${pPrice}₽!`)
        } else {
            alert('Недостаточно средств.')
        }
    } else {
        alert(`${p.name} кончились.`)
    }
    console.log(customer.purchases);
    
}

while (true) {
    if (confirm(customer.name + `, желаете добавить товар в корзину? Доступные средства: ${customer.wallet}₽.`)) {
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

// while (true) {

// }