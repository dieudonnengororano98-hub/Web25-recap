'use strict';

const targetElement = document.querySelector('#target');

const agent = navigator.userAgent;
let browserName = 'Unknown Browser';
let browserVersion = 'Unknown Version';

if (agent.includes('Firefox/')) {
  browserName = 'Mozilla Firefox';
  browserVersion = agent.split('Firefox/')[1];
} else if (agent.includes('Edg/')) {
  browserName = 'Microsoft Edge';
  browserVersion = agent.split('Edg/')[1].split(' ')[0];
} else if (agent.includes('Chrome/')) {
  browserName = 'Google Chrome';
  browserVersion = agent.split('Chrome/')[1].split(' ')[0];
} else if (agent.includes('Safari/')) {
  browserName = 'Apple Safari';
  browserVersion = agent.split('Version/')[1]?.split(' ')[0] || 'Unknown';
}

let osName = 'Unknown OS';
if (agent.includes('Win')) osName = 'Windows';
else if (agent.includes('Mac')) osName = 'macOS';
else if (agent.includes('Linux')) osName = 'Linux';
else if (agent.includes('Android')) osName = 'Android';
else if (agent.includes('like Mac')) osName = 'iOS';

const now = new Date();

const date = now.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const time = now.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});

targetElement.innerHTML = `
  <p>Browser: ${browserName}, ${browserVersion}</p>
  <p>Operating System: ${osName}</p>
  <p>Screen Size: ${screen.width} x ${screen.height}</p>
  <p>Available Screen Space: ${screen.availWidth} x ${screen.availHeight}</p>
  <p>Current Date: ${date}</p>
  <p>Current Time: ${time}</p>
`;