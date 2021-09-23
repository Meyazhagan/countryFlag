function createCard(element) {
  return `<div class="card">
  <img
    src="${element.flag}"
    alt=""
    class="flag"
  />
  <div class="content">
      <h2>${element.name}</h2>
      <p><span class="bold">Population : </span>${element.population}</p>
      <p><span class="bold">Region : </span>${element.region}</p>
      <p><span class="bold">Captial :</span> ${element.capital}</p>
  </div>
  </div>`;
}

function createCards(elements, n) {
  const container = document.querySelector(".container");
  container.innerHTML = "";
  for (let i = 0; i < n; i++) {
    container.innerHTML += createCard(elements[i]);
  }

  document.body.appendChild(container);
}

async function getData() {
  const res = await fetch("https://restcountries.com/v3/all");
  const data = await res.json();
  return data;
}

let country;

(async () => {
  country = await getData();
  update();
})();

function update() {
  let n = +document.querySelector("#limit").value;
  if (n <= country.length) {
    createCards(country, n);
  }
}
