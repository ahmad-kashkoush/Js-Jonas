'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Geolocation
let map;
let mapEvent;
class App {
    constructor() {
        this._getPosition();
    }
    _getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    this._loadMap(position);
                    // My code to implement the form  features🏆
                    // });

                },
                function () {
                    console.log("The second funciton will be used if the first didn't apply");
                }
            );
        }
    }



    _loadMap(position) {
        const coordinates = [position.coords.latitude, position.coords.longitude];
        // Getting the map From leaflet
        map = L.map('map').setView(coordinates, 13);

        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker(coordinates).addTo(map)
            .bindPopup('A pretty CSS popup.<br> Easily customizable.')
            .openPopup();
        // to identify the click coords in the map
        map.on('click', function (e) {
            mapEvent = e;
        });
    }
    _showForm() {
        form.classList.remove('hidden');
        inputDistance.focus();
    }
    _changeFields() {
        // change field based on type
        //  he has done it using toggeling
        // But I think it's better to keep it as generic as possible
        inputType.addEventListener('change', function (e) {
            if (inputType.value.toLowerCase() == 'cycling') {
                inputElevation.closest('.form__row').classList.remove('form__row--hidden');
                inputCadence.closest('.form__row').classList.add('form__row--hidden');
            } else if (inputType.value.toLowerCase() == 'running') {
                inputElevation.closest('.form__row').classList.add('form__row--hidden');
                inputCadence.closest('.form__row').classList.remove('form__row--hidden');
            }
        });

    }
}

//  What I've Done is
// 1. I've written spaggettie code by 
// 2. I should've writen marker and map code at submit from event
form.addEventListener('submit', function (e) {
    e.preventDefault();
    inputDistance.value = inputDuration.value = inputCadence.value = '';
    const inputTypeValue = inputType.value.toLowerCase();



    // console.log(lat, lng);
    let className = 'cycling-popup';
    const dateOptions = {
        month: "long",
        day: "numeric",
    }
    const today = new Intl.DateTimeFormat("en-US", dateOptions).format(Date.now())
    let popUpContent = `🚴‍♀️ Cycling on ${today}`;
    if (inputTypeValue == 'running') {
        className = 'running-popup';
        popUpContent = `🏃‍♂️ Running on ${today}`;
    }
    // display Marker
    const { lat, lng } = mapEvent.latlng;
    const markerOptions = {
        autoClose: false,
        maxWidth: 250,
        maxHeight: 100,
        closeOnClick: false,
        className: className

    }
    L
        .marker([lat, lng]).addTo(map)
        .bindPopup(L.popup(markerOptions)).setPopupContent(popUpContent)
        .openPopup();

});

