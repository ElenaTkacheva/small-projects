const searchInput = document.querySelector('#search');
const divs = document.querySelectorAll('.ballet');

searchInput.addEventListener('keyup', (e) => {
    const word = e.target.value.toLowerCase();
    divs.forEach(item => {
        item.querySelector('p').textContent.toLowerCase().includes(word) ? 
        item.style.display = 'block' : 
        item.style.display = 'none' ;
    });
});