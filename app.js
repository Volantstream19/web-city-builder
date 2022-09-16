const nameInput = document.getElementById('nameEl');
const weatherType = document.getElementById('weather-type');
const cityType = document.getElementById('population');

const display = document.getElementById('cityNameDisplay');
const weatherImage = document.getElementById('weatherImage');
const cityImage = document.getElementById('Cityimage');

const cityDisaster = document.getElementById('population');
const disasterEl = document.getElementById('disasterEl');
const disasterButton = document.getElementById('disaster-Button');
const disasterList = document.getElementById('disaster-List');

const city = {
    name: 'utopia',
    weatherType: 'spring',
    population: 'Modern',
    disaster: [],
};

nameInput.addEventListener('input', () => {
    city.name = nameInput.value;
    displayCity();
});

nameInput.addEventListener('change', () => {
    city.weather = weatherType.value;
    displayCity();
});

cityType.addEventListener('change', () => {
    city.cityDisaster = weatherType.value;
    displayCity();
});

weatherType.addEventListener('change', () => {
    weatherImage.src = `/assets/weather/${weatherType.value}.jpg`;
});
cityType.addEventListener('change', () => {
    cityImage.src = `/assets/population/${cityType.value}.jpg`;
});

function displayCity() {
    cityDisaster.classList.value = '';
    cityDisaster.classList.add(city.weather, city.cityType);
    display.textContent = city.name;
}

function displayRule() {
    nameInput.value = city.name;
    weatherType.value = city.weather;
    cityType.value = city.city;
}

function displayDisaster() {
    disasterList.innerHTML = '';

    for (const disaster of city.disaster) {
        const li = document.createElement('li');
        li.textContent = disaster;
        disasterList.append(li);
    }
}

disasterButton.addEventListener('click', () => {
    city.disaster.push(disasterEl.value);
    displayDisaster();
    disasterEl.value = '';
});

displayRule();
displayCity();
displayDisaster();
