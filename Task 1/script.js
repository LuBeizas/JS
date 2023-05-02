/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

function kiloWeightConvert(event) {
  event.preventDefault();
  const kilogramsInputValue = document.getElementById('search').value;
  const outputPounds = document.getElementById('Pounds');
  const outputGrams = document.getElementById('Grams');
  const outputOunces = document.getElementById('Ounces');
  if (kilogramsInputValue) {
    const kilograms = Number(kilogramsInputValue);
    const Pounds = (kilograms * 2.2046).toFixed(1);
    const Grams = (kilograms / 0.001).toFixed(1);
    const Ounces = (kilograms * 35.274).toFixed(1);
    outputPounds.innerText = Pounds;
    outputGrams.innerText = Grams;
    outputOunces.innerText = Ounces;
  }
}

document.querySelector('form').addEventListener('submit', kiloWeightConvert);
