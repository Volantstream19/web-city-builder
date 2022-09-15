/* Imports */

/* Get DOM Elements */
const nameInput = document.getElementById('nameEl');
const weatherType = document.getElementById('weather-type');
const cityType = document.getElementById('population');
const display = document.getElementById('cityNameDisplay');
const weatherImage = document.getElementById('weatherImage');
const Cityimage = document.getElementById('Cityimage');
const cityDisaster = document.getElementById('population');
const disasterEl = document.getElementById('disasterEl');
const disasterButton = document.getElementById('disaster-Button');
const disasterList = document.getElementById('disaster-List');




/* State */
const = city = {
    name: 'Utopia',
    weather: 'lake',
    population: 'Modern',
    disaster: [],

};



/* Events */
nameInput.addEventListener('input', () => {
    city.name = nameInput.value;
    displayCity();
})
nameInput.addEventListener('change', () => {
    city.weather = weatherType.value;
    displayCity();
})
cityType.addEventListener('change', () => {
    city.population = cityType.value;
    displayCity();
})




/* Display Functions */
function displayCity() {
    cityDisaster.classList.value = '';
    cityDisaster.classList.add(city.weather, city.population);
    display.textContent = city.name;
    clientImage.src = 
}






// (don't forget to call any display functions you want to run on page load!)
