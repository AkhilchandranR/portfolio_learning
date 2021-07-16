window.addEventListener('scroll',function(){
    let header = document.querySelector('nav');
    let windowPosition = window.scrollY;
    console.log(windowPosition)
    header.classList.toggle('scrolling-active',windowPosition>0);
});