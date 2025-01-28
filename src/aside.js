// classes:
// function-container
// user-container

export function aside(){
    const aside = document.querySelector('aside');

    const displayUser = (name) =>{
        const userName = document.createElement('P');
        userName.textContent = `Welcome ${name}!`;
        const userContainer = document.createElement('DIV');
        userContainer.classList.add('user-container');

        userContainer.appendChild(userName);
        aside.append(userContainer);
    }

    function createButtons(){
        const functionContainer = document.createElement('DIV');
        functionContainer.classList.add('function-container');
    
        const addBtn = document.createElement('BUTTON');
        addBtn.textContent = 'Add task';
        addBtn.classList.add('addBtn')
        const projectsBtn = document.createElement('BUTTON');
        projectsBtn.textContent = 'My Projects';
    
        functionContainer.append(addBtn);
        functionContainer.append(projectsBtn);

        aside.append(functionContainer);
    }
    createButtons();
    return{
        displayUser,
    }
};




