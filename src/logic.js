//IDs:
//project-form

//classes:
//project-Tite
//project-Text
//project-Container
//display-Title
//display-text

import { project } from "./displayProject";

export function dashboard(){
    const section = document.querySelector('section');
    const modal = document.createElement('DIALOG');
    const close = document.createElement('BUTTON');
    const addProject = document.querySelector('.addBtn')

    close.textContent = 'Close';
    modal.append(close);

    close.addEventListener('click', () => {
        modal.close();
        delForm();
    });

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
        projectTitle.classList.add = 'project-Title';
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
            delForm();
        });
    };
    //This function was created to remove the previous form data if the form was not successfully processed.
    //I.E closing or submitting an empty form. - WIP to require form to be FILLED!

    function delForm(){
        const projectform = document.querySelector('#project-Form');

        if(projectform.firstChild){
            projectform.remove(projectform.firstChild);
        }
    };
};