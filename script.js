document.querySelectorAll('[data-filter]').forEach(button=>{button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(item=>{item.classList.toggle('selected',item===button);item.setAttribute('aria-pressed',String(item===button));});document.querySelectorAll('[data-category]').forEach(project=>{project.hidden=button.dataset.filter!=='all'&&project.dataset.category!==button.dataset.filter;});});});

const videoDialog=document.getElementById('video-dialog');
const videoFrame=document.getElementById('video-frame');
let videoTrigger=null;
document.querySelectorAll('[data-video]').forEach(button=>button.addEventListener('click',()=>{
 videoTrigger=button;
 document.getElementById('video-heading').textContent=button.dataset.title;
 document.getElementById('youtube-link').href='https://www.youtube.com/watch?v='+button.dataset.video;
 const iframe=document.createElement('iframe');
 iframe.src='https://www.youtube-nocookie.com/embed/'+button.dataset.video+'?autoplay=1&rel=0';
 iframe.title=button.dataset.title;
 iframe.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';
 iframe.allowFullscreen=true;
 iframe.referrerPolicy='strict-origin-when-cross-origin';
 videoFrame.replaceChildren(iframe);
 videoDialog.showModal();document.body.classList.add('video-open');
}));
document.getElementById('close-video').addEventListener('click',()=>videoDialog.close());
videoDialog.addEventListener('click',event=>{if(event.target===videoDialog){const r=videoDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)videoDialog.close();}});
videoDialog.addEventListener('close',()=>{videoFrame.replaceChildren();document.body.classList.remove('video-open');videoTrigger?.focus();});

const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if(!reducedMotion.matches&&'IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll('.section-head,.project,.approach-grid,.stack,.timeline>div,.credentials,.freelance,.contact').forEach((el,index)=>{el.classList.add('reveal');el.style.setProperty('--reveal-delay',String(index%2*70)+'ms');observer.observe(el);});
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
