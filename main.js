const signUpBtn = document.getElementById('SignUp')
const signInBtn = document.getElementById('SignIn')
const container = document.getElementById('container')

signInBtn.addEventListener('click', () => {
    container.classList.remove('right-panel-active')
});

signUpBtn.addEventListener('click', () => {
    container.classList.add('right-panel-active')
});
