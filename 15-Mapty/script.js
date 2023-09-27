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

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {


        const coordinates = [position.coords.latitude, position.coords.longitude];
        // Getting the map From leaflet
        var map = L.map('map').setView(coordinates, 13);

        L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker(coordinates).addTo(map)
            .bindPopup('A pretty CSS popup.<br> Easily customizable.')
            .openPopup();
        // to identify the click coords in the map
        map.on('click', function (mapEvent) {
            const { lat, lng } = mapEvent.latlng;
            // console.log(lat, lng);
            const markerOptions = {
                autoClose: false,
                maxWidth: 250,
                maxHeight: 100,
                closeOnClick: false,
                className: 'running-popup'

            }
            L
                .marker([lat, lng]).addTo(map)
                .bindPopup(L.popup(markerOptions)).setPopupContent('Hellow World')
                .openPopup();

        });

    },
        function () {
            console.log("The second funciton will be used if the first didn't apply");
        }
    )
}
