
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
        projectForm();
    });

    const projectForm = () => {
        const submitProject = document.createElement('BUTTON');
        submitProject.textContent = 'Submit';

        const projectForm = document.createElement('FORM');
        projectForm.id = 'project-Form';

        const projectTitle = document.createElement('INPUT');
        projectTitle.classList.add = 'project-Text';
        projectTitle.type = 'text';
        projectTitle.name = 'title';
        projectTitle.placeholder = 'Project Title';
        
        const projectText = document.createElement('INPUT');
        projectText.classList.add = 'project-Text';
        projectText.type = 'text';
        projectText.name = 'text';
        projectText.placeholder = 'Today, I will do...';

        projectForm.appendChild(projectTitle);
        projectForm.appendChild(projectText);
        projectForm.appendChild(submitProject);
  

        modal.appendChild(projectForm);
       
        submitProject.addEventListener('click', (e) => {
            e.preventDefault();

            const projectData = new FormData(projectForm);
            const title = projectData.get('title');
            const text = projectData.get('text');

            const newtitle = title;
            const newText = text;
            
            project(newtitle, newText);
            modal.close();
        });
    };

    function delCurrent(){
        const projectform = document.querySelector('#project-Form');

        if(projectform.firstChild){
            projectform.remove(projectform.firstChild);
        }
    };

    function project(title, text){
        const projectDiv = document.createElement('DIV');

        const displayTitle = document.createElement('H2');
        displayTitle.textContent = title;

        const displayText = document.createElement('P');
        displayText.textContent = text;

        projectDiv.appendChild(displayTitle);
        projectDiv.appendChild(displayText);

        document.body.appendChild(projectDiv);
    };
};