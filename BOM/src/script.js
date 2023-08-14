const ball = document.querySelector(".ball");
const ballImg = document.querySelector(".ball-img");
const person = document.querySelector('.person')
const section = document.querySelector("section");
const music = document.getElementById('play')

// window.addEventListener('load', () =>{
//   music.play()
//   console.log('test');
// })
  ball.addEventListener("click", () => {

    ball.classList.toggle('active')
    if (ball.classList.contains('active')) {
      ballImg.style.marginLeft=`${section.clientWidth / 2 - ballImg.clientWidth/2-person.clientWidth}px`
      ballImg.style.marginTop=`${section.clientHeight / 2 - ballImg.clientHeight/2}px`
    }
     
  });

  console.log(1<2<3);
  console.log(3>2>1);
