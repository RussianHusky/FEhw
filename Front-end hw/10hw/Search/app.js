const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
icon.onclick = function(){
    search.classList.toggle('active')
}

const clear = document.querySelector('.clear')
const mysearch = document.getElementById('mysearch')

clear.onclick = function(){
    mysearch.value = '';
}