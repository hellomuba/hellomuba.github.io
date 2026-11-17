document.querySelectorAll('[data-filter]').forEach(button=>{button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(item=>{item.classList.toggle('selected',item===button);item.setAttribute('aria-pressed',String(item===button));});document.querySelectorAll('[data-category]').forEach(project=>{project.hidden=button.dataset.filter!=='all'&&project.dataset.category!==button.dataset.filter;});const count=[...document.querySelectorAll('[data-category]')].filter(project=>!project.hidden).length;document.getElementById('project-count').textContent=button.dataset.filter==='all'?'Showing all '+count+' projects':'Showing '+count+' '+(count===1?'project':'projects');updateProgress();});});

const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if(!reducedMotion.matches&&'IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll('.section-head,.project,.approach-grid,.stack,.timeline>div,.credentials,.freelance,.contact,.opensource-panel,.writing-card').forEach((el,index)=>{el.classList.add('reveal');el.style.setProperty('--reveal-delay',String(index%2*70)+'ms');observer.observe(el);});
 document.documentElement.classList.add('motion-ready');
 reducedMotion.addEventListener('change',event=>{if(event.matches)document.documentElement.classList.remove('motion-ready');});
}
const scrollProgress=document.querySelector('.scroll-progress');
let scrollPending=false;
function updateProgress(){const max=document.documentElement.scrollHeight-window.innerHeight;scrollProgress.style.transform='scaleX('+(max>0?Math.min(1,Math.max(0,window.scrollY/max)):0)+')';scrollPending=false;}
window.addEventListener('scroll',()=>{if(!scrollPending){scrollPending=true;requestAnimationFrame(updateProgress);}},{passive:true});
window.addEventListener('resize',updateProgress);updateProgress();

const menuToggle=document.querySelector('.menu-toggle');
const mainNav=document.getElementById('main-nav');
function closeMenu(){mainNav.classList.remove('mobile-open');menuToggle.setAttribute('aria-expanded','false');}
menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')!=='true';menuToggle.setAttribute('aria-expanded',String(open));mainNav.classList.toggle('mobile-open',open);});
mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&mainNav.classList.contains('mobile-open')){closeMenu();menuToggle.focus();}});

// Keep navigation state consistent across responsive breakpoints and outside clicks.
window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
document.addEventListener('click', event => { if (!mainNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu(); });
document.querySelectorAll('details').forEach(details => details.addEventListener('toggle', updateProgress));
if ('ResizeObserver' in window) new ResizeObserver(updateProgress).observe(document.body);
