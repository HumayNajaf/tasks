async function addCard() {
  const response = await fetch("http://localhost:3000/cards");
  const card = await response.json();
  const cards = document.querySelector(".cards");
  try {
    const data = card.forEach((el) => {
      let cardInner = document.createElement("div");
      cardInner.className = "card";
      cardInner.innerHTML = `
        <div class="book"><a href="#"><img src=${el.img}></a></div>
            <div class="book-genre">
                <a href="#">${el.genre}</a>
            </div>
        `;
      cards.append(cardInner);
    });
  } catch (error) {
    console.log(error);
  }
}
addCard();
