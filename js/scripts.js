//Sticky Header
const header = document.querySelector('.header');
let headerHeight = header.scrollHeight;
const main = document.querySelector('main');
main.style.paddingTop = headerHeight + 'px';

document.addEventListener('resize', function(){
    headerHeight = header.scrollHeight;
    main.style.paddingTop = headerHeight + 'px';
})

// document.addEventListener('scroll', ()=> {
//     let height = header.scrollHeight;
//     if (scrollY > height) {
//         header.classList.add('header--fixed');
//     } else {
//         header.classList.remove('header--fixed');
//     }
// })

//Menu
const menuBtn = document.querySelector('.header__burger-svg');
const navMenu = document.querySelector('.header__list');
const body = document.body;
const html = document.querySelector('html');

function nav() {
    navMenu.classList.toggle('header__list--open');
    menuBtn.classList.toggle('header__burger-svg--open');

    if (html.style.overflow === 'hidden') {
        body.style.overflow = '';
        html.style.overflow = '';

    } else {
        body.style.overflow = 'hidden';
        html.style.overflow = 'hidden';
    }
}

menuBtn.addEventListener('click', nav);

//scroll
$("a, .scroll").not('.policy').click(function(e) {
    e.preventDefault();
    if (body.style.overflow === 'hidden') {
        body.style.overflow = '';
        html.style.overflow = '';
        navMenu.classList.toggle('header__list--open');
        menuBtn.classList.toggle('header__burger-svg--open');
    }
    if (e.target.classList.contains('scroll')) {
        $('html,body').animate({scrollTop: $('.form__form').offset().top - headerHeight},'slow');
    } else {
        let aid = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aid).offset().top - headerHeight}, 'slow');
    }
});

//timer

const hour = document.querySelectorAll('.timer__num--hours');
const minute = document.querySelectorAll('.timer__num--minutes');
const second = document.querySelectorAll('.timer__num--seconds');

let time = new Date();
let next = new Date(60 * 60 * 24 * 1000 + time.getTime());
next.setHours(0, 0,0,0,);
let realtime = next - new Date();

function timeRender(el, data) {
    for (var i = 0; i < el.length; i++) {
        el[i].innerHTML = data > 9 ? data : '0' + data;
    }
}


let timer = setInterval( ()=> {
    realtime = next - new Date();
    const hours =  Math.floor(((realtime / 1000 /60 /60) % 24));
    const minutes = Math.floor(((realtime / 1000  /60) % 60));
    const seconds = Math.floor(((realtime / 1000) % 60));
    timeRender(hour, hours);
    timeRender(minute, minutes);
    timeRender(second, seconds);
}, 1000);

//Slider

$(document).ready(function(){

    $('.review__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: false,
                }
            }
        ],
    });

    let controlsInfo = document.querySelectorAll('.review__slider .slick-dots li');
    for (var i = 0; i < controlsInfo.length; i++) {
        let itemText = controlsInfo[i].innerText;
        controlsInfo[i].innerText = itemText + '/' + controlsInfo.length;
    }

});

(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
ym(69478285, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
});