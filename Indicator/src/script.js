// const scroll = document.querySelector('.scroll')

// window.onscroll =()=>{
//     const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
//     const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     const indicator = (scrolled/height)*100;

//     scroll.style.width = indicator + '%';
//     scroll.innerHTML = `${indicator.toFixed(0)}%`;
// }


document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("backToTopBtn");
    const progressBar = document.getElementById("progressBar");
  
    // Show/hide the button and update progress based on scroll position
    window.addEventListener("scroll", function() {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrolledPercentage = (window.scrollY / totalHeight) * 100;
  
      if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
  
      progressBar.style.width = `${scrolledPercentage}%`;
    });
  
    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  