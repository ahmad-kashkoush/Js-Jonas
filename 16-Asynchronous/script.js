// https://restcountries.com/v3.1/name/{name}
'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data, className) {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)}M</p>
    <p class="country__row"><span>🗣️</span>${Object.keys(data.languages)}</p>
    <p class="country__row"><span>💰</span>${Object.keys(data.currencies)}</p>
  </div >
</article >
  `
  countriesContainer.insertAdjacentHTML('beforeend', html);
}
const renderError = function (msg) {
  countriesContainer.innerHTML = ""
  countriesContainer.insertAdjacentText('beforeend', msg);
}

const getCountry = function (countryName) {
  // fetch, then convert response, then render
  const request = fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => {
      if (!response.ok)
        throw (`country ${countryName} not found`);
      return response.json()
    })
    .then((data) => {
      renderCountry(data[0])
      const neighbour = data[0]?.borders[2];
      console.log(neighbour);
      if (!neighbour) return;
      const request2 = fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
      return request2;
    })
    .then(neighbour => neighbour.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => renderError(`${err}😢😢😢`))
    .finally(() => {
      // finally code happens on fullfilled or rejected promises
      countriesContainer.style.opacity = 1;

    })
}
btn.addEventListener('click', function () {
  getCountry("lablabla");
})











// const getCountry = function (countryName) {
//   // open connection
//   const request = new XMLHttpRequest();// synchrounous
//   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);// synchronous
//   request.send();// synchrounous




// //   request.addEventListener('load', function () {// asynchronous , the after code will execute while this code will wait for loading
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);
// //     const [currency] = Object.keys(data.currencies);
// //     renderCountry(data);


// //     // for call back Hell 

// //     const neighbour = data?.borders[0];
// //     if (!neighbour) return;
// //     const request2 = new XMLHttpRequest();// synchrounous
// //     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);// synchronous
// //     request2.send();
// //     request2.addEventListener('load', function () {
// //       const [country2] = JSON.parse(request2.responseText);
// //       console.log(country2);
// //       renderCountry(country2, 'neighbour');

// //     })

// //   });
// // }
// // // But this way you didn't determine what comes first
// // // solution ⭐⭐⭐⭐
// // // callback Hell or use promises
// // getCountry("canada");

