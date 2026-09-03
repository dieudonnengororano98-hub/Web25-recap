const restaurantRow = (restaurant) => {
  const { name, company } = restaurant;
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${name}</td>
    <td>${company}</td>
  `;
  return tr;
};

const restaurantModal = (restaurant, menu) => {
  const { name, address, postalCode, city, phone, company } = restaurant;
  const { courses = [] } = menu;

  let menuHtml = '';
  courses.forEach(course => {
    menuHtml += `
      <li class="menu-item">
        <p class="course-name"><strong>${course.name || 'N/A'}</strong></p>
        <p class="course-price">Price: ${course.price || 'N/A'}</p>
        <p class="course-diets">Diets: ${course.diets || 'None'}</p>
      </li>
    `;
  });

  return `
    <div class="modal-header">
      <h2>${name}</h2>
      <p class="company">${company}</p>
    </div>
    <div class="modal-body">
      <div class="restaurant-info">
        <p><strong>Address:</strong> ${address}, ${postalCode} ${city}</p>
        <p><strong>Phone:</strong> ${phone || 'Not available'}</p>
      </div>
      <hr>
      <h3>Today's Menu</h3>
      <ul class="menu-list">
        ${menuHtml || '<li>No menu available for today.</li>'}
      </ul>
    </div>
  `;
};

export { restaurantRow, restaurantModal };