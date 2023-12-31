// // // // // // // https://restcountries.com/v3.1/name/{name}
'use strict';
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. ✅Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. ✅Check out the 'imgs' array in the console! Is it like you expected?
4. ✅Use a promise combinator function to actually get the images from the array 😉
5. ✅Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/
const wait = function (val) {
    return new Promise(function (resolve) {
        setTimeout(resolve, val * 1000);
    })
}
const showImg = function (imagePath) {
    return new Promise(function (resolve, reject) {

        imgEl.src = imagePath;
        imgEl.addEventListener('load', function () {
            imageContainer.insertAdjacentElement('beforeend', this);
            resolve(imgEl);
        });
        imgEl.addEventListener('error', function () {
            reject('img not found');
        })
    })

}
const clearImg = function (imgEl) {
    return new Promise(function (resolve, reject) {
        imageContainer.innerHTML = "";
        resolve(imgEl);
    })
}
const imageContainer = document.querySelector('.images');

const imgEl = document.createElement('img');
// (async function () {
//     try {

//         const call1 = await showImg("img/img-1.jpg");
//         await wait(2);
//         clearImg(imgEl);
//         const call2 = await showImg("img/img-2.jpg");
//         await wait(2);
//         clearImg(imgEl);
//         const call3 = await showImg("img/img-3.jpg");
//         await wait(2);
//         clearImg(imgEl);

//     } catch (err) {
//         console.log(err);
//     }
// })()

const loadAll = async function (imgArr) {
    try {
        const imgs = imgArr.map(path => showImg(path));
        console.log(imgs);
        const imgs2 = await Promise.all(imgs);

        imgs2.forEach(imgg => imgg.classList.add("parallel"))
        imgs2.forEach(imgg => console.log(imgg))

    } catch (err) {
        console.log(err);
    }
}

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"])



// const getJson = async function (url, err = "something went wrong") {
//     try {
//         const response = await fetch(url)
//         if (!response.ok)
//             throw (err);
//         if (response.status === 403)
//             throw (`${err},you're loading too fast (${data.status})`)
//         if (response.status === 404)
//             throw (`${err}, not found(fuck you)`);
//         return response.json();
//         // .then((data) => {
//         //     if (data.status === 403) {
//         //         reject(`${err},you're loading too fast (${data.status})`);
//         //     }
//         //     if (data.status === 404) {
//         //         reject(`${err}, not found(fuck you)`);
//         //     }
//         //     resolve(data.json());
//         // });
//     } catch (errr) {
//         throw (errr);
//     }
// }
// const get3Countries = async function (c1, c2, c3) {
//     try {
//         // in this code it really doesn't matter to make calls sequential. , but it hinders performance. we need to make them run in parallel
//         // const [country1] = await getJson(`https:restcountries.com/v3.1/name/${c1}`);
//         // const [country2] = await getJson(`https:restcountries.com/v3.1/name/${c2}`);
//         // const [country3] = await getJson(`https:restcountries.com/v3.1/name/${c3}`);
//         // promise.all ⭐⭐⭐⭐
//         // const countries = await Promise.all([
//         //     getJson(`https:restcountries.com/v3.1/name/${c1}`),
//         //     getJson(`https:restcountries.com/v3.1/name/${c2}`),
//         //     getJson(`https:restcountries.com/v3.1/name/${c3}`)
//         // ]
//         // )
//         // console.log(countries.map(c => c[0].capital[0]));
//         // promise race to get the fastest call ⭐⭐⭐⭐
//         // const [fastest] = await Promise.race([
//         //     getJson(`https:restcountries.com/v3.1/name/${c1}`),
//         //     getJson(`https:restcountries.com/v3.1/name/${c2}`),
//         //     getJson(`https:restcountries.com/v3.1/name/${c3}`)
//         // ]
//         // )
//         // console.log(fastest);
//         // console.log([country1.capital[0], country2.capital[0], country3.capital[0]]);

//     } catch (err) {
//         console.log(err);
//     }
// }
// // get3Countries('egypt', 'france', 'germany')

// // promise.allsettled==> return all either 

// // const btn = document.querySelector('.btn-country');
// // const countriesContainer = document.querySelector('.countries');

// // const renderCountry = function (data, className) {
// //     const html = `
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
// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// // }
// // const renderError = function (msg) {
// //     countriesContainer.innerHTML = ""
// //     countriesContainer.insertAdjacentText('beforeend', msg);
// // }
// // const getPosition = function () {
// //     return new Promise(function (resolve, reject) {
// //         navigator.geolocation.getCurrentPosition(resolve, reject);
// //     });
// // };

// // const whereAmI = async function () {
// //     try {
// //         // Geolocation
// //         const pos = await getPosition();
// //         const { latitude: lat, longitude: lng } = pos.coords;
// //         // console.log(pos);
// //         // Reverse geocoding
// //         const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=JSON`);

// //         if (!resGeo.ok) throw new Error('Problem getting location data');
// //         const dataGeo = await resGeo.json();
// //         console.log(dataGeo);
// //         // Country data
// //         const res = await fetch(
// //             `https://restcountries.com/v3.1/alpha/${dataGeo.prov}`
// //         );

// //         if (!res.ok) throw new Error('Problem getting country');
// //         const data = await res.json();

// //         renderCountry(data[0]);
// //         console.log(data[0]);
// //         return `You are in ${data[0].capital[0]}, ${data[0].name.common}`;
// //     } catch (err) {
// //         console.error(`${err} 💥`);
// //         renderError(`💥 ${err.message}`);

// //         // Reject promise returned from async function
// //         throw err;
// //     }
// // };
// // (async function () {
// //     try {

// //         const city = await whereAmI();
// //         console.log(city);
// //     } catch (err) {
// //         console.log(err);
// //     }

// // })()


// // // // /* 
// // // // Build the image loading functionality that I just showed you on the screen.

// // // Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

// // // PART 1
// // // 1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

// // // If this part is too tricky for you, just watch the first part of the solution.

// // // PART 2
// // // 2. Comsume the promise using .then and also add an error handler;
// // // 3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
// // // 4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
// // // 5. After the second image has loaded, pause execution for 2 seconds again;
// // // 6. After the 2 seconds have passed, hide the current image.

// // // TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

// // // GOOD LUCK 😀
// // // */
// // // const wait = function (val) {
// // //     return new Promise(function (resolve) {
// // //         setTimeout(resolve, val * 1000);
// // //     })
// // // }
// // // const showImg = function (imagePath) {
// // //     return new Promise(function (resolve, reject) {

// // //         imgEl.src = imagePath;
// // //         imgEl.addEventListener('load', function () {
// // //             imageContainer.insertAdjacentElement('beforeend', this);
// // //             resolve(imgEl);
// // //         });
// // //         imgEl.addEventListener('error', function () {
// // //             reject('img not found');
// // //         })
// // //     })

// // // }
// // // const clearImg = function (imgEl) {
// // //     return new Promise(function (resolve, reject) {
// // //         imageContainer.innerHTML = "";
// // //         resolve(imgEl);
// // //     })
// // // }
// // // const imageContainer = document.querySelector('.images');

// // // const imgEl = document.createElement('img');
// // // showImg("img/img-1.jpg")
// // //     .then(() => wait(2))
// // //     .then(() => clearImg(imgEl))
// // //     .then(() => showImg("img/img-2.jpg"))
// // //     .then(() => wait(2))
// // //     .then(() => clearImg())
// // //     .then(() => showImg("img/img-3.jpg"))
// // //     .catch((err) => console.log(`fuck ${err}`));




























// // // // // Promisify geolocation

// // // // const dateFormat = function (date) {
// // // //   const dte = new Date(date);
// // // //   return `${dte.getDate()}, ${dte.getMonth() + 1}, ${dte.getFullYear()}`
// // // // }
// // // // const checkDate = function (a, b) {
// // // //   const aa = dateFormat(a);
// // // //   const bb = dateFormat(b);
// // // //   return aa === bb;
// // // // }
// // // // const getJson = function (url, err = "something went wrong") {
// // // //   return new Promise(function (resolve, reject) {
// // // //     fetch(url)
// // // //       .then((data) => {
// // // //         if (data.status === 403) {
// // // //           reject(`${err},you're loading too fast (${data.status})`);
// // // //         }
// // // //         if (data.status === 404) {
// // // //           reject(`${err}, not found(fuck you)`);
// // // //         }
// // // //         resolve(data.json());
// // // //       });
// // // //   })
// // // // }



// // // // //////////////////////////////////
// // // // const getAzan = function () {
// // // //   getCurrentPosition()
// // // //     .then((loc) => {
// // // //       // get time and place
// // // //       const date = new Date();
// // // //       const curDate = `${date.getFullYear()}/${date.getMonth() + 1}`;
// // // //       const { latitude: lat, longitude: lng } = loc.coords;


// // // //       return getJson(`http://api.aladhan.com/v1/calendar/${curDate}?latitude=${lat}&longitude=${lng}&method=5`)
// // // //         .then(response => {
// // // //           let [{ timings }] =
// // // //             response.data.filter(ele => {
// // // //               if (checkDate(ele.date.readable, new Date()))
// // // //                 return ele;
// // // //             })
// // // //           if (!timings)
// // // //             throw ("not valid link");
// // // //           return timings;

// // // //         })
// // // //         .then(ele => console.log(ele))
// // // //         .catch(err => console.log(err))
// // // //     });
// // // // }
// // // // getAzan();
// // // // // http://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2http://api.aladhan.com/v1/calendar/2019?latitude=51.508515&longitude=-0.1254872&method=2
// // // // // // building promises
// // // // // const lotteryTicket = new Promise(function (resolve, reject) {
// // // // //   // set timer so that promise code would be asynchronous code
// // // // //   setTimeout(function () {

// // // // //     let num = Math.random();
// // // // //     if (num >= .5) {
// // // // //       // winning a lottery
// // // // //       resolve(`you've won 🏆`)
// // // // //     } else {
// // // // //       reject(new Error(`you've failed 😢 `))
// // // // //     }
// // // // //   }, 1000);

// // // // // })
// // // // // lotteryTicket
// // // // //   .then((res) => (console.log(res)))
// // // // //   .catch((err) => console.error(err));


// // // // // // Coding Challenge 1

// // // // // /*
// // // // // In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

// // // // // Here are your tasks:

// // // // // PART 1
// // // // // 1.✅ Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
// // // // // 2. ✅Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
// // // // // The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
// // // // // 3. ✅Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
// // // // // 4. ✅Chain a .catch method to the end of the promise chain and log errors to the console
// // // // // 5. ✅This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

// // // // // PART 2
// // // // // 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// // // // // 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

// // // // // TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
// // // // // TEST COORDINATES 2: 19.037, 72.873
// // // // // TEST COORDINATES 2: -33.933, 18.474

// // // // // GOOD LUCK 😀
// // // // // */






















































// // // // // // const btn = document.querySelector('.btn-country');
// // // // // // const countriesContainer = document.querySelector('.countries');

// // // // // // ///////////////////////////////////////

// // // // // // const getCountry = function (countryName) {
// // // // // //   // fetch, then convert response, then render
// // // // // //   const request = getJson(`https://restcountries.com/v3.1/name/${countryName}`)
// // // // // //     .then((data) => {
// // // // // //       renderCountry(data[0])
// // // // // //       const neighbour = data[0]?.borders[2];

// // // // // //       if (!neighbour)
// // // // // //         throw ("this country has no neighbour");
// // // // // //       const request2 = getJson(`https://restcountries.com/v3.1/alpha/${neighbour}`, "neighbour");
// // // // // //       return request2;
// // // // // //     })
// // // // // //     .then(data => renderCountry(data[0], 'neighbour'))
// // // // // //     .catch(err => renderError(`${err}😢😢😢`))
// // // // // //     .finally(() => {
// // // // // //       // finally code happens on fullfilled or rejected promises
// // // // // //       countriesContainer.style.opacity = 1;

// // // // // //     })
// // // // // // }
// // // // // // btn.addEventListener('click', function () {
// // // // // //   getCountry("egypt");
// // // // // // })
















// // // // // // // const getCountry = function (countryName) {
// // // // // // //   // open connection
// // // // // // //   const request = new XMLHttpRequest();// synchrounous
// // // // // // //   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);// synchronous
// // // // // // //   request.send();// synchrounous




// // // // // // // //   request.addEventListener('load', function () {// asynchronous , the after code will execute while this code will wait for loading
// // // // // // // //     const [data] = JSON.parse(this.responseText);
// // // // // // // //     console.log(data);
// // // // // // // //     const [currency] = Object.keys(data.currencies);
// // // // // // // //     renderCountry(data);


// // // // // // // //     // for call back Hell 

// // // // // // // //     const neighbour = data?.borders[0];
// // // // // // // //     if (!neighbour) return;
// // // // // // // //     const request2 = new XMLHttpRequest();// synchrounous
// // // // // // // //     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);// synchronous
// // // // // // // //     request2.send();
// // // // // // // //     request2.addEventListener('load', function () {
// // // // // // // //       const [country2] = JSON.parse(request2.responseText);
// // // // // // // //       console.log(country2);
// // // // // // // //       renderCountry(country2, 'neighbour');

// // // // // // // //     })

// // // // // // // //   });
// // // // // // // // }
// // // // // // // // // But this way you didn't determine what comes first
// // // // // // // // // solution ⭐⭐⭐⭐
// // // // // // // // // callback Hell or use promises
// // // // // // // // getCountry("canada");

