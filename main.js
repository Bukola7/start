let searchMe = document.getElementById('search');
let searchTab = document.getElementById('first');
let closeMe = document.getElementById('close');
let closeTab = document.getElementById('second');

searchMe.addEventListener('click', function(){
    closeTab.style.display = 'block';
    searchTab.style.display = 'none';
});

closeMe.addEventListener('click', function(){
    closeTab.style.display = 'none';
    searchTab.style.display = 'block';
});