let slides = document.querySelectorAll('.people__testimonial');
let index = 0;

function next(){
    slides[index].classList.remove('people__testimonial--active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('people__testimonial--active');
}
function prev(){
    slides[index].classList.remove('people__testimonial--active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('people__testimonial--active');
}
function openMenu(){
    document.body.classList += " menu--open"
}
function closeMenu(){
    document.body.classList.remove('menu--open')
}
