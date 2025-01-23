
export function dashboard(){
    const section = document.querySelector('section');
    const modal = document.createElement('DIALOG');
    const close = document.createElement('BUTTON');

    close.textContent = 'Close';
    modal.append(close);

    close.addEventListener('click', () => {
        modal.close();
        delCurrent();
    });

    const addProject = document.querySelector('.addBtn')
    addProject.addEventListener('click', () => {
        section.appendChild(modal);
        modal.showModal();
        newProject();
    });
    const newProject = () => {
        const submitProject = document.createElement('BUTTON');
        const projectForm = document.createElement('FORM');
        projectForm.classList.add('project-Form');

        const projectTitle = document.createElement('INPUT');
        projectTitle.classList.add = 'project-Text';
        projectTitle.type = 'text';
        projectTitle.name = 'title';
        projectTitle.placeholder = 'Project Title';
        
        const projectText = document.createElement('INPUT');
        projectText.classList.add = 'project-Text';
        projectText.type = 'text';
        projectText.name = 'text';
        projectText.placeholder = 'Today, I will do...'

        projectForm.appendChild(projectTitle);
        projectForm.appendChild(projectText);

        modal.appendChild(projectForm);

        submitProject.addEventListener('click', () => {
            const projectData = new FormData(projectForm);
            const title = projectData.get('title');
            const text = projectData.get('text');

        });
    };

    const returnForm = () => {
        
    }
    function delCurrent(){
        const projectform = document.querySelector('.project-Form');
        if(projectform.firstChild){
            projectform.remove(projectform.firstChild);
        }
    };
};