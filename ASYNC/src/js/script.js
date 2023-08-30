// fetch('https://api.github.com/users/humaynajaf')
// .then(response => response.json())
// .then(user => fetch(`https://api.github.com/users/${user.login}`))
// .then(response => response.json())
// .then(githubUser => {
//     let div = document.createElement('div');
//     div.className = "avatar-example"
//     document.body.append(`${id}`);

// })

fetch('https://api.github.com/users/humaynajaf')
  .then(response => response.json())
  .then(githubUser => fetch(`https://api.github.com/users/${githubUser.login}`))
  .then(response => response.json())
  .then(detailedUser => {
    let tableTd = document.createElement('td');
    tableTd.className = "tableTd";
    div.innerText = detailedUser.login;
    document.body.append(div);
  })
  .catch(error => {
    console.error('Hata:', error);
  });


for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

