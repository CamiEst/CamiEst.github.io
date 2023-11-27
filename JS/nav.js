function showNav(){
    const item = document.querySelectorAll('.nav__item');
    const list = document.querySelector('ul#nav__list');
    const stylee =  window.getComputedStyle(list).display;
    
    if(stylee === "none"){
        list.style.display = 'flex';
        item.forEach((nav, index)=>{
            nav.classList.remove('reverseAnimation');
            nav.classList.add('animation');
            nav.style.animationDuration = `1.${(index + 1) * 2}s`;
        });
    } else{
        item.forEach((nav, index)=>{
            nav.classList.remove('animation');  
            nav.classList.add('reverseAnimation');
            nav.style.animationDuration = `1.${(index - 4) * -2}s`;
        })
        setTimeout(()=>{list.style.display = 'none'}, 1200);
    }

}