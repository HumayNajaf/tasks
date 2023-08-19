const xhttp = new XMLHttpRequest();
xhttp.open("GET", "/Promise/json/support.json");
let cardContainer = document.querySelector(".card-container");

xhttp.onload = function () {
  if (this.status === 200) {
    const data = JSON.parse(this.responseText);
    data.forEach((element) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
            <div><img src="${element.src}"></div>
            <h1><a href="#">${element.title}</a></h1>
            <span>${element.text}</span>
            `;
      cardContainer.appendChild(card);
    });
    mouseMoveAddActive();
  } 
};
xhttp.send();

function mouseMoveAddActive(){
const cards = document.querySelectorAll(".card");
    cards.forEach(cardEl => { 
        cardEl.addEventListener('mousemove', () => {

            cards.forEach(card => {
                card.classList.remove('active')
            })
            cardEl.classList.add('active')
        })
    });
}

