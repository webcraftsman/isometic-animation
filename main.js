const marqueeElement = document.querySelector('.item');
const container = document.querySelectorAll('.rotate-container');
const viewportWidth = window.innerWidth;
const marqueeElementWidth = marqueeElement.offsetWidth;
const marqueeElementVPWidth = ((marqueeElementWidth / viewportWidth) * 100) + 'vw';
let root = document.documentElement;
root.style.setProperty('--marquee-element-adjusted-width', marqueeElementVPWidth);

container.forEach(function (element) {
   element.classList.add('animate');
});
