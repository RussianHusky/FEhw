but.addEventListener('click', (e) => {//происходит при нажетии (click) addEventListener событие /Детали произошедшего браузер записывает в «объект события»,
    if (input.value ==='') 
        return;//если input.value равно пустате то ничего не делаем
    createDeleteElements(input.value);//вызываем фун создания и удаления элемента
    input.value = '';
})

function runScript(e) {
    //See notes about 'which' and 'key'
    if (e.keyCode == 13) {
        var tb = document.getElementById("input");
        createDeleteElements(input.value);
        input.value = '';
    }
}

function createDeleteElements(value) {
    var del = document.createElement('delet');//кнопка add
    var but = document.createElement('button');
    del.className = 'delet';
    del.textContent = value;
    but.className = 'but';
    but.textContent = 'x';
    del.appendChild(but);
    //
    but.addEventListener('click', () => {// на наш элемент bth повесим отработчик событий
    result. removeChild(del);//удалить дочерний узел delete
    })

    result.appendChild(del);
}