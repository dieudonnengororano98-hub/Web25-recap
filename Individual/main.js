const API_URL = 'https://10.120.32.94/restaurant/api/v1';

let restaurants = [];
let filteredRestaurants = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentMenuType = 'daily';
let map;
let markers = [];

const logoutBtn = document.getElementById("logout");
const profileUpload = document.getElementById("profile-upload");
const profilePicture = document.getElementById("profile-picture");
const searchInput = document.getElementById("search-input");
const citySelect = document.getElementById("city-select");
const providerSelect = document.getElementById("provider-select");
const favCheckbox = document.getElementById("fav-checkbox");
const btnNearest = document.getElementById("btn-nearest");
const btnReset = document.getElementById("btn-reset");
const btnDaily = document.getElementById("btn-daily");
const btnWeekly = document.getElementById("btn-weekly");
const restaurantCount = document.getElementById("restaurant-count");
const restaurantList = document.getElementById("restaurant-list");

logoutBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});

const logout = document.getElementById("logout");

logout.addEventListener("click", function() {
    window.location.href = "index.html";
});



profileUpload.addEventListener("change", () => {
    const file = profileUpload.files[0];
    if (file) {
        profilePicture.src = URL.createObjectURL(file);
    }
});

function initMap() {
    map = L.map('map').setView([60.1699, 24.9384], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
}

async function fetchRestaurants() {
    try {
        const response = await fetch(`${API_URL}/restaurants`);
        restaurants = await response.json();
        filteredRestaurants = [...restaurants];
        applyFilters();
    } catch (error) {
        console.error(error);
    }
}

function renderRestaurants(list) {
    restaurantCount.textContent = `${list.length} RESTAURANTS`;
    restaurantList.innerHTML = '';

    list.forEach(restaurant => {
        const isFav = favorites.includes(restaurant._id);
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.innerHTML = `
            <h3>${restaurant.name}</h3>
            <p>${restaurant.address}, ${restaurant.city}</p>
            <p>Provider: ${restaurant.company}</p>
            <button class="fav-btn">${isFav ? '★ Unfavorite' : '☆ Favorite'}</button>
            <button class="menu-btn">View Menu</button>
            <div class="menu-container" id="menu-${restaurant._id}"></div>
        `;

        card.querySelector('.fav-btn').addEventListener('click', () => toggleFavorite(restaurant._id));
        card.querySelector('.menu-btn').addEventListener('click', () => loadMenu(restaurant._id));

        restaurantList.appendChild(card);
    });
}

function renderMapMarkers(list) {
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    list.forEach(r => {
        if (r.location && r.location.coordinates) {
            const [lng, lat] = r.location.coordinates;
            const marker = L.marker([lat, lng])
                .addTo(map)
                .bindPopup(`<b>${r.name}</b><br>${r.address}`);
            markers.push(marker);
        }
    });
}

async function loadMenu(id) {
    const menuContainer = document.getElementById(`menu-${id}`);
    const endpoint = currentMenuType === 'daily' 
        ? `${API_URL}/restaurants/daily/${id}/fi`
        : `${API_URL}/restaurants/weekly/${id}/fi`;

    try {
        const response = await fetch(endpoint);
        const menuData = await response.json();
        
        if (currentMenuType === 'daily') {
            const courses = menuData.courses || [];
            menuContainer.innerHTML = courses.length ? courses.map(c => `<p><strong>${c.name}</strong> -
             ${c.price || ''} (${c.diets || ''})</p>`).join('') : '<p>No menu today.</p>';
        } else {
            const days = menuData.days || [];
            menuContainer.innerHTML = days.length ? days.map(d => `<div><strong>${d.date}</strong>${d.courses.map(c =>
             `<p>${c.name} - ${c.price || ''}</p>`).join('')}</div>`).join('') : '<p>No weekly menu.</p>';
        }
    } catch (err) {
        menuContainer.innerHTML = '<p>Failed to load menu.</p>';
    }
}

function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    applyFilters();
}

function applyFilters() {
    const searchValue = searchInput.value.toLowerCase();
    const cityValue = citySelect.value;
    const providerValue = providerSelect.value;
    const favOnly = favCheckbox.checked;

    filteredRestaurants = restaurants.filter(r => {
        const matchesSearch = r.name.toLowerCase().includes(searchValue) ||
         r.address.toLowerCase().includes(searchValue);
        const matchesCity = !cityValue || r.city === cityValue;
        const matchesProvider = !providerValue || r.company === providerValue;
        const matchesFav = !favOnly || favorites.includes(r._id);

        return matchesSearch && matchesCity && matchesProvider && matchesFav;
    });

    renderRestaurants(filteredRestaurants);
    renderMapMarkers(filteredRestaurants);
}

function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function findNearest() {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(position => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        let nearest = null;
        let minDistance = Infinity;

        restaurants.forEach(r => {
            if (r.location && r.location.coordinates) {
                const [lng, lat] = r.location.coordinates;
                const dist = getDistance(userLat, userLng, lat, lng);
                if (dist < minDistance) {
                    minDistance = dist;
                    nearest = r;
                }
            }
        });

        if (nearest) {
            filteredRestaurants = [nearest];
            renderRestaurants(filteredRestaurants);
            renderMapMarkers(filteredRestaurants);
            const [lng, lat] = nearest.location.coordinates;
            map.setView([lat, lng], 15);
        }
    });
}

searchInput.addEventListener("input", applyFilters);
citySelect.addEventListener("change", applyFilters);
providerSelect.addEventListener("change", applyFilters);
favCheckbox.addEventListener("change", applyFilters);
btnNearest.addEventListener("click", findNearest);

btnReset.addEventListener("click", () => {
    searchInput.value = '';
    citySelect.value = '';
    providerSelect.value = '';
    favCheckbox.checked = false;
    applyFilters();
});

btnDaily.addEventListener("click", () => {
    currentMenuType = 'daily';
    btnDaily.classList.add('active');
    btnWeekly.classList.remove('active');
});

btnWeekly.addEventListener("click", () => {
    currentMenuType = 'weekly';
    btnWeekly.classList.add('active');
    btnDaily.classList.remove('active');
});

initMap();
fetchRestaurants();