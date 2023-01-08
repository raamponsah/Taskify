const todoInput     = document.querySelector('.todo-input');
const add           = document.querySelector('.todo-button');
const todos         = document.querySelector('.todos');
const todoList      = document.createElement('ul');
const todoItem      = document.createElement('li');
const clearListBtn  = document.createElement('button');


clearListBtn.innerText = 'Clear List';
clearListBtn.setAttribute('class', 'clear-list');
clearListBtn.onclick = () => {
    todoList.innerHTML = '';
}

let items = []

add.addEventListener('click', () => {
    
    if(todoInput.value != ''){

        let todoObj = {
            todo: todoInput.value,
            complete: false
        }

        let li = document.createElement('li')
        let opt = document.createElement('input')
        let ctrls = document.createElement('div')
        ctrls.setAttribute('class', 'ctrls')
        opt.setAttribute('type', 'checkbox')
        opt.setAttribute('class', `complete`)
        opt.setAttribute('name', `${todoObj.todo}`)
    
        let del = document.createElement('button')
        del.innerText = 'X'
        del.setAttribute('class', 'delete')
        del.onclick = () => {
            li.remove();
            items = [...getUpdatedNodeList()]
            if(items.length === 0) {
                clearListBtn.remove();
            }   
        }
    
        
    
        li.innerText = todoObj.todo;
        opt.checked = todoObj.complete;
    
        opt.addEventListener('click', () => {
            li.innerHTML = `<strike>${todoObj.todo}</strike>`
        })

        ctrls.appendChild(opt)
        ctrls.appendChild(del)
        li.appendChild(ctrls)


        todoList.appendChild(li);
        items.push(opt);
        todoInput.value = '';
    
        items = [...getUpdatedNodeList()]
        if(items.length > 0) {
            todoList.append(clearListBtn);
        }
    
    }
});


function getUpdatedNodeList() {
    return document.querySelectorAll('.complete');
}





todos.appendChild(todoList);