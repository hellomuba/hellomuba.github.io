(() => {
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

})();
