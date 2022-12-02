let menuButton = document.getElementById('menu-btn');
let navList = document.getElementById('menu')

menuButton.addEventListener('click', menuOpen)

function menuOpen() {
    menuButton.classList.toggle('open');
    navList.classList.toggle('hidden')
}