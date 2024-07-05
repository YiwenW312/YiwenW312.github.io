document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById("projectModal");
    const closeModal = document.getElementsByClassName("close")[0];
    const projectDetails = document.getElementById("projectDetails");

    const projects = [
        {
            id: 'project1',
            title: 'Car Sharing Application',
            subtitle: 'Hackathon JavaScript Prototype',
            dates: 'Spring 2023',
            overview: 'Collaborated with a team of 5 to develop a car-sharing application prototype within 1.5 days using JavaScript during a hackathon, resulting in a functional demo showcased to judges.',
            role: 'Role: Collaborator',
            technologies: 'Technologies Used: JavaScript',
            responsibilities: 'Responsibilities: Collaborated on developing the front-end and back-end components of the application, ensuring smooth integration and functionality.',
            challenges: 'Challenges: The main challenge was the tight timeline of 1.5 days to develop a functional prototype. Effective team collaboration and time management were crucial.',
            outcomes: 'Results/Outcomes: Successfully showcased a functional demo to judges.',
            visuals: 'assets/project-screenshot.png',
            demoLink: 'https://youtu.be/l_4FXYJNsN4',
            githubLink: '#'
        },
        {
            id: 'project2',
            title: 'Gesture-based Musical Notation Editor',
            subtitle: 'Backend Java Application with GUI',
            dates: 'Spring 2023',
            overview: 'Developed a musical notation editor using Java, MVC design, and Swing, improving user experience by allowing intuitive gesture-based input for musical symbols. Engineered a shape trainer to recognize and interpret mouse gestures, enabling users to draw diverse symbols like bar lines with ease.',
            role: 'Role: Lead Developer',
            technologies: 'Technologies Used: Java, MVC, Shape Trainer, Swing',
            responsibilities: 'Responsibilities: Developed the gesture recognition system and the GUI, integrated MVC architecture, and implemented features for dynamic staff and system creation.',
            challenges: 'Challenges: Ensuring accurate gesture recognition and seamless integration with the GUI. Overcoming challenges in managing multiple layers for symbol positioning.',
            outcomes: 'Results/Outcomes: Successfully demonstrated the application in a live demo.',
            visuals: 'assets/project-screenshot.png',
            demoLink: 'https://youtu.be/uTOT1mf5a4o',
            githubLink: 'https://github.com/YiwenW312/MusicEditor'
        }
        // Add other projects here...
    ];

    function openModal(projectId) {
        const project = projects.find(p => p.id === projectId);
        if (project) {
            projectDetails.innerHTML = `
                <h2>${project.title}</h2>
                <h3>${project.subtitle}</h3>
                <p class="dates">${project.dates}</p>
                <div class="project-overview">
                    <h4>Project Overview</h4>
                    <p>${project.overview}</p>
                    <p>${project.role}</p>
                    <p>${project.technologies}</p>
                </div>
                <div class="key-contributions">
                    <h4>Key Contributions and Achievements</h4>
                    <p>${project.responsibilities}</p>
                    <p>${project.challenges}</p>
                    <p>${project.outcomes}</p>
                </div>
                <div class="visuals-links">
                    <h4>Visuals and Links</h4>
                    <img src="${project.visuals}" alt="Project Screenshot">
                    <p><a href="${project.demoLink}">Demo/Live Link</a></p>
                    <p><a href="${project.githubLink}">GitHub Repository</a></p>
                </div>
            `;
            modal.style.display = "block";
        }
    }

    document.querySelectorAll('.project').forEach(projectElement => {
        projectElement.addEventListener('click', function() {
            openModal(this.dataset.project);
        });
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
