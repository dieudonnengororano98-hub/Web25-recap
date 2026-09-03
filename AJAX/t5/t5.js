import { baseUrl } from './variables.js';
import { fetchData } from './utils.js';
import { restaurantRow, restaurantModal } from './components.js';

const modal = document.querySelector('dialog');
const table = document.querySelector('table');

const main = async () => {
  try {
    const restaurants = await fetchData(`${baseUrl}/restaurants`);

    restaurants.sort((a, b) => a.name.localeCompare(b.name));

    restaurants.forEach((restaurant) => {
      const row = restaurantRow(restaurant);

      row.addEventListener('click', async () => {
        try {
          const menu = await fetchData(`${baseUrl}/restaurants/daily/${restaurant._id}/fi`);
          modal.innerHTML = restaurantModal(restaurant, menu);
          modal.showModal();
        } catch (error) {
          console.error('Failed to fetch menu:', error);
        }
      });

      table.appendChild(row);
    });
  } catch (error) {
    console.error('Failed to fetch restaurants:', error);
  }
};

main();