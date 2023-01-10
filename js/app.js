const userPass = document.querySelector('#user_password');
const confPass = document.querySelector('#confirm_password');

const message = document.querySelector('#pass_message');

const submit = document.querySelector('.submit-btn');

const input = document.querySelectorAll('input');
console.log(input);

submit.addEventListener('click', ()=> {
    if (userPass.value !== confPass.value) {
        message.textContent = '* Passwords do not match';
        userPass.style.outline = '1px solid red';
        confPass.style.outline = '1px solid red';
    } else {
        location.reload();
    }
});


