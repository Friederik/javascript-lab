const btn = document.getElementById('saveBtn')
const input = document.getElementById('noteInput')
const output = document.getElementById('output')

const buffer = JSON.parse(localStorage.getItem('name'))
if (buffer) {
    output.textContent = buffer
}

btn.addEventListener('click', () => {
    localStorage.setItem('name', JSON.stringify(input.value))
    output.textContent = input.value 
})
