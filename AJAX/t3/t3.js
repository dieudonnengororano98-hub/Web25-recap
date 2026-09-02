async function fetchNonExistentUser() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23');

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Data retrieved:', data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchNonExistentUser();