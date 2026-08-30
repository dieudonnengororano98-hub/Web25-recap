const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');

const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const loginBtn = document.querySelector('.login-1');
const signupBtn = document.querySelector('.signup-1');

signupTab.addEventListener('click', function() {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');

    firstName.classList.remove('hide');
    lastName.classList.remove('hide');
    signupBtn.classList.remove('hide');
    loginBtn.classList.add('hide');
});

loginTab.addEventListener('click', function() {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');

    firstName.classList.add('hide');
    lastName.classList.add('hide');
    signupBtn.classList.add('hide');
    loginBtn.classList.remove('hide');
});

loginBtn.addEventListener('click', function() {
    window.location.href = "main.html";
});

signupBtn.addEventListener('click', function() {
    window.location.href = "main.html";
});


