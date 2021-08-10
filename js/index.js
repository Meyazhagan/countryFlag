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

fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((elements) => createCards(elements))
  .catch((err) => console.log(err));

function createCards(elements) {
  const container = document.createElement("div");
  container.className = "container";
  for (let i = 0; i < 15; i++) {
    container.innerHTML += createCard(elements[i]);
    console.log(elements[i]);
  }
  document.body.appendChild(container);
}
