async function testConnection() {
  console.log('Testing connection to Metropolia Restaurant API...');
  try {
    const response = await fetch('https://10.120.32.94/restaurant/api/v1/restaurants');
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();
    console.log('SUCCESS! Retrieved', data.length, 'restaurants.');
    alert(`Success! Connected and found ${data.length} restaurants.`);
  } catch (error) {
    console.error('CONNECTION FAILED:', error.message);
    alert('Connection Failed! Check console (F12) for details.');
  }
}

testConnection();