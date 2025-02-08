const navSCR = document.querySelector('.navbar');

window.addEventListener('scroll', () =>{
    if (window.scrollY >= 100) {
        navSCR.classList.add('navbar-scrolled')

    } else if (window.scrollY < 100){
        navSCR.classList.remove('navbar-scrolled')
    }
})