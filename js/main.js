window.addEventListener('scroll',function(){
    const scrollToTopButton = document.querySelector('.btnScrollToTop');
    let header = document.querySelector('nav');
    let windowPosition = window.scrollY;
    header.classList.toggle('scrolling-active',windowPosition>0);
    scrollToTopButton.classList.toggle('displayScrollbtn',windowPosition>245);

});
//scrolltotopbutton properties
const scrollToTopButton = document.querySelector('.btnScrollToTop');
scrollToTopButton.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });
});
