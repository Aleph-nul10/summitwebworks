const nav=document.querySelector('.site-header');
const links=document.querySelector('.nav-links');
document.querySelector('.nav-toggle')?.addEventListener('click',()=>links.classList.toggle('open'));
window.addEventListener('scroll',()=>nav?.classList.toggle('shrink',window.scrollY>18));
const obs=new IntersectionObserver((entries)=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
