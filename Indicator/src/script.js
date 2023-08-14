const scroll = document.querySelector('.scroll')

window.onscroll =()=>{
    const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const indicator = (scrolled/height)*100;

    scroll.style.width = indicator + '%';
    scroll.innerHTML = `${indicator.toFixed(0)}%`;


}
