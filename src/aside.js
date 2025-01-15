
export function createButtons(){
    const functionContainer = document.querySelector('.function-btns');

    const addBtn = document.createElement('BUTTON');
    addBtn.textContent = 'Add task';
    const projectsBtn = document.createElement('BUTTON');
    projectsBtn.textContent = 'My Projects';

    functionContainer.append(addBtn,projectsBtn);
}
export function displayUser(){
    const userName = document.createElement('h3');
    userName.textContent = 'Jade';

    const userContainer = document.querySelector('.user-container');

    userContainer.appendChild(userName);
}



