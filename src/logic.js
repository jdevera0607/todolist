
export function createProject(){
    const addProject = document.querySelector('.addBtn')
    addProject.addEventListener('click', () => {
        newProject();
    });

    function newProject(){
        const projectContainer = document.createElement('DIV');
        projectContainer.classList.add('projectContainer');
        
        const projectForm = document.createElement('FORM');
        projectForm.classList.add('project-Form');
        projectForm.id = 'projectTodo';

        const projectTitle = document.createElement('INPUT');
        projectTitle.classList.add = 'project-Text';
        projectTitle.type = 'text';
        projectTitle.placeholder = 'Project Title';
        
        const projectText = document.createElement('INPUT');
        projectText.classList.add = 'project-Text';
        projectText.type = 'text';
        projectText.placeholder = 'Today, I will do...'

        projectForm.append(projectTitle);
        projectForm.append(projectText);


        document.body.append(projectForm)
    };
};