export function project(title, text){
    const delProject = document.createElement('BUTTON');
    const confirmDel = document.createElement('DIALOG');

    delProject.textContent = 'Delete Project';
    
    const section = document.querySelector('section');
    const projectDiv = document.createElement('DIV');
    projectDiv.classList.add('project-container');

    const displayTitle = document.createElement('H2');
    displayTitle.textContent = title;
    displayTitle.classList.add('display-title')

    const displayText = document.createElement('P');
    displayText.textContent = text;
    displayText.classList.add('display-text');

    projectDiv.appendChild(displayTitle);
    projectDiv.appendChild(displayText);
    projectDiv.appendChild(delProject);

    section.appendChild(projectDiv);

    delProject.addEventListener('click', () => {
        section.appendChild(confirmDel);
        confirmDel.showModal();
       
        const askDelete = document.createElement('P');
        askDelete.textContent = 'Are you sure you want to delete this project?';

        const confirmDeleteBtn = document.createElement('BUTTON');
        confirmDeleteBtn.textContent = 'Delete';
        const cancelDeleteBtn = document.createElement('BUTTON');
        cancelDeleteBtn.textContent = 'Cancel';

        confirmDel.appendChild(askDelete);

        confirmDel.appendChild(confirmDeleteBtn);
        confirmDel.appendChild(cancelDeleteBtn);

        confirmDeleteBtn.addEventListener('click', () => {
            if(projectDiv.firstChild){
                projectDiv.remove(projectDiv.firstChild);
                confirmDel.close();
            }
        });
        cancelDeleteBtn.addEventListener('click', () => {
            confirmDel.close();
        });
      
    });
};