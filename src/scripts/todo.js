const block = document.getElementById('block')

block.addEventListener('click', (e) => {
    if (e.target.classList.contains('item')) {
        e.target.style.backgroundColor = 'green'
        
    }
})