// classes:
// function-container
// user-container

export function aside(){
    const aside = document.querySelector('aside');

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
    function displayUser(name){
        const userName = document.createElement('H3');
        userName.textContent = name;
        const userContainer = document.createElement('DIV');
        userContainer.classList.add('user-container');
        
        userContainer.appendChild(userName);
        aside.append(userContainer);
    }
    createButtons();

    return {
        displayUser,
    }
};




