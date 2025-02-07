const navSCR = document.querySelector('.navbar');

window.addEventListener('scroll', () =>{
    if (window.scrollY >= 250) {
        navSCR.classList.add('navbar-scrolled')

    } else if (window.scrollY < 250){
        navSCR.classList.remove('navbar-scrolled')
    }
})