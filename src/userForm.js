import { aside } from "./aside";
import { createProject } from "./logic";

export const createForm = (function(){
    let username;
    const section = document.querySelector('section');

    const formContainer = document.createElement('DIV');
    formContainer.classList.add('form-container');

    const h2Welcome = document.createElement('H2');
    h2Welcome.textContent = 'Welcome! Please enter your name';

    const submitBtn = document.createElement('BUTTON');
    submitBtn.textContent = 'Submit';

    const form = document.createElement('FORM');
    form.id = 'userName';

    const userName = document.createElement('INPUT');
    userName.classList.add('username-Form')
    userName.type = 'text';
    userName.name = 'name';
    userName.placeholder = 'John';

    form.appendChild(userName);
    formContainer.appendChild(h2Welcome);
    formContainer.appendChild(form);
    formContainer.appendChild(submitBtn);
    section.appendChild(formContainer);

    submitBtn.addEventListener('click', (e) => {
        section.innerText = '';
        e.preventDefault();
        const formData = new FormData(form);
        const usersName = formData.get('name');
        username = usersName;
        aside();
        createProject();
    })
})();