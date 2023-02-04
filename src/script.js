//Background gradient

import { Gradient } from './Gradient.js'

// Create your instance
const gradient = new Gradient()

// Call `initGradient` with the selector to your canvas

gradient.initGradient('#gradient-canvas')

//card-paragraph

let heading = document.querySelector('.heading')
let para = document.querySelector('.para')
let number = document.querySelector('.number')

document.querySelector('#about').addEventListener('click', (e) => {
    heading.innerHTML = 'ABOUT'
    para.innerHTML = "Hi, I'm Hashir Dar lives in Faisalabad, Pakistan. I'm Web Developer love to make interactive, animated and 3D websites as it looks more interasting and fascinating compared to simple or conventional websites."
})

document.querySelector('#experience').addEventListener('click', (e) => {
    heading.innerHTML = 'EXPERIENCE'
    para.innerHTML = "I have been working in this field for 3 years and have honed my skills during this time. I have a strong understanding of this and am constantly seeking new ways to improve my abilities. And I'm confident in my ability to deliver exceptional and creative solutions for clients."
})

document.querySelector('#skills').addEventListener('click', (e) => {
    heading.innerHTML = 'SKILLS'
    para.innerHTML = "I have a broad knowledge of programming languages and expertise in frameworks and libraries like GSAP, Three.js, React, and React Three Fiber and always being in a will to learn new things. I have a passion for pushing the limits of what's possible in complex animations and 3D graphics."
})

document.querySelector('.number').addEventListener('click', (e) => {
    number.innerHTML = "+92 303 6675050"
})

//project-image-slider

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
 });

 window.addEventListener('scroll',()=>{
    console.log(scrollY)
 })