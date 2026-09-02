async function createUser() {
  const userData = {
    name: 'morpheus',
    job: 'leader'
  };

  try {
    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('User created successfully:', data);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

createUser();