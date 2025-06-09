function saveLocal(newTasks) {
    localStorage.setItem('task', JSON.stringify(newTasks))
}

function getLocal() {
    const local = localStorage.getItem('task')
    
    if (local) return JSON.parse(local)
    else return []
}

function renderTask(task) {
    const list = document.getElementById('list')

    const article = document.createElement('article')
    const h2 = document.createElement('h2')
    const div = document.createElement('div')
    const btnDone = document.createElement('button')
    const btnDelete = document.createElement('button')


    article.id = `t-${task.index}`
    article.classList.add('task')

    h2.classList.add('task__header')
    h2.textContent = task.name

    div.classList.add('task__btns')

    btnDone.classList.add('task__btn', task.isDone ? 'task__btn--released' : 'task__btn--release')
    btnDone.textContent = task.isDone ? 'Отменить' : 'Выполнить'
    btnDelete.classList.add('task__btn', 'task__btn--delete')
    btnDelete.textContent = 'Удалить'

    btnDone.addEventListener('click', () => {
        if (btnDone.classList.contains('task__btn--released')){
            btnDone.classList.remove('task__btn--released')
            btnDone.classList.add('task__btn--release')

            btnDone.textContent = 'Выполнить'
        } else {
            btnDone.classList.remove('task__btn--release')
            btnDone.classList.add('task__btn--released')

            btnDone.textContent = 'Отменить'
        }
        changeTask(task.index)
    })

    btnDelete.addEventListener('click', () => {
        article.remove()
        deleteTask(task.index)
    })

    div.append(btnDone, btnDelete)
    article.append(h2, div)
    
    list.prepend(article)
}

function renderList() {
    const list = document.getElementById('list')
    list.innerHTML = ''
    const allTasks = getLocal()

    if (allTasks.length === 0) {
        const noTask = document.createElement('article')
        noTask.classList.add('task')
        noTask.classList.add('task--no-children')
        noTask.classList.add('task__header')
        noTask.textContent = "Добавьте задачи!"
        list.appendChild(noTask)
    } else {
        const selectedFilter = document.getElementById('filter')
        console.log(selectedFilter.value);
        
        switch (selectedFilter.value) {
            case '0':
                for (let task of allTasks) {
                    renderTask(task)
                }  
                break
            case '1':
                const filtredTasksTrue = allTasks.filter(task => task.isDone === true) 
                for (let task of filtredTasksTrue) {
                    renderTask(task)
                }  
                break     
            case '2':
                const filtredTasksFalse = allTasks.filter(task => task.isDone === false) 
                for (let task of filtredTasksFalse) {
                    renderTask(task)
                }  
                break 
        }
        
    }

}

function addTask() {
    const input = document.getElementById('input')
    
    if (input.value.trim() !== '') {
        const local = getLocal()
        local.push({
            name: input.value.trim(),
            index: Date.now(),
            isDone: false
        })
        saveLocal(local)
        renderList()
        input.value = ''
    }
}

function deleteTask(index) {
    const local = getLocal()
    const newLocal = local.filter(task => task.index !== index)
    saveLocal(newLocal)
    renderList()
}

function changeTask(index) {
    const local = getLocal()
    const task = local.find(task => task.index === index)
    if (task) {
        task.isDone = !task.isDone  
        saveLocal(local)
    }
    
}


document.getElementById('add-btn').addEventListener('click', addTask)
document.getElementById('filter').addEventListener('change', renderList)
renderList()
