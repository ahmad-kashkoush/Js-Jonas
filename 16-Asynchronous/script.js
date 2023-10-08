// // // https://restcountries.com/v3.1/name/{name}
'use strict';

// Promisify geolocation
const dateFormat = function (date) {
  const dte = new Date(date);
  return `${dte.getDate()}, ${dte.getMonth() + 1}, ${dte.getFullYear()}`
}
const checkDate = function (a, b) {
  const aa = dateFormat(a);
  const bb = dateFormat(b);
  return aa === bb;
}
const getJson = function (url, err = "something went wrong") {
  return fetch(url)
    .then((data) => {
      console.log(data);
      if (data.status === 403) {
        throw (`${err},you're loading too fast (${data.status})`);
      }
      if (data.status === 404) {
        throw (`${err}, not found(fuck you)`);
      }
      return data.json()
    });
}
const getCurrentPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
}
getCurrentPosition().then(loc => {
  console.log(loc);
  const date = new Date();
  const curDate = `${date.getFullYear()}/${date.getMonth() + 1}`;
  const [lat, lng] = [loc.coords.latitude, loc.coords.longitude];


  return getJson(`http://api.aladhan.com/v1/calendar/${curDate}?latitude=${lat}&longitude=${lng}&method=5`)
    .then(response => {
      response.data.forEach(ele => {
        if (checkDate(ele.date.readable, new Date())) {
          console.log(ele.timings);
        }
      });
    })
}
)


// http://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2http://api.aladhan.com/v1/calendar/2019?latitude=51.508515&longitude=-0.1254872&method=2
// // building promises
// const lotteryTicket = new Promise(function (resolve, reject) {
//   // set timer so that promise code would be asynchronous code
//   setTimeout(function () {

//     let num = Math.random();
//     if (num >= .5) {
//       // winning a lottery
//       resolve(`you've won 🏆`)
//     } else {
//       reject(new Error(`you've failed 😢 `))
//     }
//   }, 1000);

// })
// lotteryTicket
//   .then((res) => (console.log(res)))
//   .catch((err) => console.error(err));


// // Coding Challenge 1

// /*
// In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

// Here are your tasks:

// PART 1
// 1.✅ Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
// 2. ✅Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
// The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
// 3. ✅Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
// 4. ✅Chain a .catch method to the end of the promise chain and log errors to the console
// 5. ✅This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

// TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
// TEST COORDINATES 2: 19.037, 72.873
// TEST COORDINATES 2: -33.933, 18.474

// GOOD LUCK 😀
// */
// const getJson = function (url, err = "something went wrong") {
//   return fetch(url)
//     .then((data) => {
//       console.log(data);
//       if (data.status === 403) {
//         throw (`${err},you're loading too fast (${data.status})`);
//       }
//       if (data.status === 404) {
//         throw (`${err}, not found(fuck you)`);
//       }
//       return data.json()
//     });
// }
// const whereAmI = function (lat, lng) {
//   const request = getJson(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(data => {

//       console.log(`you are in ${data.state}, ${data.country}`);
//     })
//     .catch(err => {
//       console.log(err);
//     })

// }
// whereAmI(52.508, 13.381)






















































// // const btn = document.querySelector('.btn-country');
// // const countriesContainer = document.querySelector('.countries');

// // ///////////////////////////////////////
// // const renderCountry = function (data, className) {
// //   const html = `
// //   <article class="country ${className}">
// //   <img class="country__img" src="${data.flags.png}" />
// //   <div class="country__data">
// //     <h3 class="country__name">${data.name.common}</h3>
// //     <h4 class="country__region">${data.region}</h4>
// //     <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)}M</p>
// //     <p class="country__row"><span>🗣️</span>${Object.keys(data.languages)}</p>
// //     <p class="country__row"><span>💰</span>${Object.keys(data.currencies)}</p>
// //   </div >
// // </article >
// //   `
// //   countriesContainer.insertAdjacentHTML('beforeend', html);
// // }
// // const renderError = function (msg) {
// //   countriesContainer.innerHTML = ""
// //   countriesContainer.insertAdjacentText('beforeend', msg);
// // }
// // const getJson = function (url, err = `something went wrong`) {
// //   return fetch(url)
// //     .then((response) => {
// //       if (!response.ok)
// //         throw (`${err} (${response.status})`);
// //       return response.json();
// //     })
// // }
// // const getCountry = function (countryName) {
// //   // fetch, then convert response, then render
// //   const request = getJson(`https://restcountries.com/v3.1/name/${countryName}`)
// //     .then((data) => {
// //       renderCountry(data[0])
// //       const neighbour = data[0]?.borders[2];

// //       if (!neighbour)
// //         throw ("this country has no neighbour");
// //       const request2 = getJson(`https://restcountries.com/v3.1/alpha/${neighbour}`, "neighbour");
// //       return request2;
// //     })
// //     .then(data => renderCountry(data[0], 'neighbour'))
// //     .catch(err => renderError(`${err}😢😢😢`))
// //     .finally(() => {
// //       // finally code happens on fullfilled or rejected promises
// //       countriesContainer.style.opacity = 1;

// //     })
// // }
// // btn.addEventListener('click', function () {
// //   getCountry("egypt");
// // })











// // // const getCountry = function (countryName) {
// // //   // open connection
// // //   const request = new XMLHttpRequest();// synchrounous
// // //   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);// synchronous
// // //   request.send();// synchrounous




// // // //   request.addEventListener('load', function () {// asynchronous , the after code will execute while this code will wait for loading
// // // //     const [data] = JSON.parse(this.responseText);
// // // //     console.log(data);
// // // //     const [currency] = Object.keys(data.currencies);
// // // //     renderCountry(data);


// // // //     // for call back Hell 

// // // //     const neighbour = data?.borders[0];
// // // //     if (!neighbour) return;
// // // //     const request2 = new XMLHttpRequest();// synchrounous
// // // //     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);// synchronous
// // // //     request2.send();
// // // //     request2.addEventListener('load', function () {
// // // //       const [country2] = JSON.parse(request2.responseText);
// // // //       console.log(country2);
// // // //       renderCountry(country2, 'neighbour');

// // // //     })

// // // //   });
// // // // }
// // // // // But this way you didn't determine what comes first
// // // // // solution ⭐⭐⭐⭐
// // // // // callback Hell or use promises
// // // // getCountry("canada");

