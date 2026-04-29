const toggle=document.querySelector('.nav-toggle');
const links=document.querySelector('.nav-links');
toggle?.addEventListener('click',()=>links.classList.toggle('open'));
window.addEventListener('scroll',()=>document.querySelector('.site-header')?.classList.toggle('shrink',window.scrollY>20));
