/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'https://api.github.com/users';

// let output = document.getElementById('output');
// function fetchData() {
//   fetch('https://api.github.com/users')
//     .then((response) => response.json())
//     .then((data) => {
//       output.innerHTML += 'id = ' + data.id;
//     });
// }

function fetchData() {
  fetch('https://api.github.com/users')
    .then((response) => response.json())
    .then((data) => {
      let outputHtml = '';
      data.forEach((user) => {
        outputHtml += `<div class="user">
                            <img src="${user.avatar_url}" alt="${user.login}">
                            <h2>${user.login}</h2>
                          </div>`;
      });
      document.getElementById('output').innerHTML = outputHtml;
    })
    .catch((error) => {
      document.getElementById('message').textContent = 'Error fetching data';
      console.error(error);
    });
}
