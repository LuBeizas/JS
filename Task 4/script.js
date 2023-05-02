/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => {
    let outputHtml = '';
    data.forEach((brand) => {
      outputHtml += `<div class="wrapper">
                        <div class="container">
                          <h2>${brand.brand}</h2>
                          <ul>`;
      brand.models.forEach((model) => {
        outputHtml += `<li>${model}</li>`;
      });
      outputHtml += `</ul>
                     </div>
                   </div>`;
    });
    document.getElementById('output').innerHTML = outputHtml;
  });
