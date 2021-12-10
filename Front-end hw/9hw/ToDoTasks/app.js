but.addEventListener('click', (e) => {
    if (input.value ==='') 
        return;
    createDeleteElements(input.value);
    input.value = '';
})

function runScript(e) {
    if (e.keyCode == 13) {
        var tb = document.getElementById("input");
        createDeleteElements(input.value);
        input.value = '';
    }
}

function createDeleteElements(value) {
    var del = document.createElement('delet');
    var but = document.createElement('button');
    del.className = 'delet';
    del.textContent = value;
    but.className = 'but';
    but.textContent = 'x';
    del.appendChild(but);
    but.addEventListener('click', () => {
    result. removeChild(del);
    })

    result.appendChild(del);
}