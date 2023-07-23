const navMenu = document.getElementById('nav-menu')
const navOpen = document.getElementById('nav-open')
const navClose = document.getElementById('nav-close')
const navItem = document.querySelectorAll('.nav__item')

/* Open navigation menu */
navOpen.addEventListener('click', () => {
    navMenu.classList.add('nav__menu--open')
})

/* Close navigation menu */
navClose.addEventListener('click', ()=> {
     navMenu.classList.remove('nav__menu--open')
})

navItem.forEach(item => {
    item.addEventListener('click', () => {
         navMenu.classList.remove('nav__menu--open')
    })
})

// Header scroll
const header = document.getElementById('l-header')

window.addEventListener('scroll', () =>{
    if (window.scrollY > 50){
        header.classList.add('l-header--scroll')
    }else{
        header.classList.remove('l-header--scroll')
    }
})

// Swiper
const testimonialSwiper = new Swiper(".testimonial__wrapper", {
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
})

// Variável que contém o ID do vídeo do YouTube que você deseja exibir
var videoId = "SEU_ID_DO_VIDEO";

// Função para criar o player do YouTube
function onYouTubeIframeAPIReady() {
    new YT.Player("youtube-player", {
        height: "315",
        width: "560",
        videoId: videoId,
        playerVars: {
            // Você pode adicionar opções de reprodução adicionais aqui, se necessário
        },
    });
}