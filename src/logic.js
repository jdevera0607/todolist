
export function createProject(){
    const section = document.querySelector('section');
    const modal = document.createElement('DIALOG');
    const close = document.createElement('BUTTON');

    close.textContent = 'Close';
    modal.append(close);

    close.addEventListener('click', () => {
        modal.close();
    });

    const addProject = document.querySelector('.addBtn')
    addProject.addEventListener('click', () => {
        section.appendChild(modal);
        modal.showModal();
        newProject();
    });
    const newProject = () => {
        const projectContainer = document.createElement('DIV');
        projectContainer.classList.add('projectContainer');
        modal.append(projectContainer);
        
        const projectForm = document.createElement('FORM');
        projectForm.classList.add('project-Form');
        projectContainer.append(projectForm);

        const projectTitle = document.createElement('INPUT');
        projectTitle.classList.add = 'project-Text';
        projectTitle.type = 'text';
        projectTitle.placeholder = 'Project Title';
        
        const projectText = document.createElement('INPUT');
        projectText.classList.add = 'project-Text';
        projectText.type = 'text';
        projectText.placeholder = 'Today, I will do...'

        projectForm.appendChild(projectTitle);
        projectForm.appendChild(projectText);
    };
    
    function delCurrent(){
      
    };
};