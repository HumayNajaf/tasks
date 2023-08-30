const API_URL = "http://localhost:3000/users";
const form = document.querySelector(".addForm");

const getUser = async function getUser() {
  const person = document.querySelector("table");
  try {
    const response = await fetch(API_URL);
    const users = await response.json();

    if (response.status !== 200) {
      throw new Error("ERRORRRRRRRRRRRRRRRRR");
    }
    const data = users.forEach((user) => {
      person.innerHTML += `
        <tr id =${user.id}>
        <td class="name">${user.name}</td>
        <td>${user.surname}
        </td>
        <td class="icon"><button class="deleteBtn">
        <i class="fa-solid fa-x"></i>
        </button></td>
        </tr>
      `;
      const deleteBtn = document.querySelectorAll(".deleteBtn");
      deleteBtn.forEach(el=>{
        el.addEventListener('click',()=>{
        let de=  el.parentElement.parentElement.getAttribute('id')
          async function del(){
            
               const response=await fetch(`${API_URL}/${de}`,{
                method:'DELETE'
               })
          }
          del()
        })
      })
    });



  } catch (error) {
    console.log(error);
    person.innerHTML += error;
  }
};

const addUser = async () => {
  const name = document.querySelector(".name");
  const surname = document.querySelector(".surname");

  if (name.value === "" && surname.value === "") {
    return;
  } else {
    name.value.trim;
  }
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify({ name: name.value, surname: surname.value }),
    headers: {
      "Content-type": "application/json",
    },
  });
};

getUser();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addUser();
});





