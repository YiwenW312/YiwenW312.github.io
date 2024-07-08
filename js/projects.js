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
            role: 'Lead & Collaborator',
            technologies: 'JavaScript',
            responsibilities: 'Responsibilities: Collaborated on developing the front-end and back-end components of the application, ensuring smooth integration and functionality.',
            challenges: 'The main challenge was the tight timeline of 1.5 days to develop a functional prototype. Effective team collaboration and time management were crucial.',
            outcomes: 'Successfully showcased a functional demo to judges.',
            visuals: 'assets/HuskyLovesShare.gif',
            demoLink: 'https://youtu.be/l_4FXYJNsN4',
            githubLink: 'https://github.com/HuskyLovesShare/NEUCarPool'
        },
        {
            id: 'project2',
            title: 'Gesture-based Musical Notation Editor',
            subtitle: 'Backend Java Application with GUI',
            dates: 'Spring 2023',
            overview: 'Developed a musical notation editor using Java, MVC design, and Swing, improving user experience by allowing intuitive gesture-based input for musical symbols. Engineered a shape trainer to recognize and interpret mouse gestures, enabling users to draw diverse symbols like bar lines with ease.',
            role: 'Developer',
            technologies: 'Java, MVC, Shape Trainer, Swing',
            responsibilities: 'Developed the gesture recognition system and the GUI, integrated MVC architecture, and implemented features for dynamic staff and system creation.',
            challenges: 'Ensuring accurate gesture recognition and seamless integration with the GUI. Overcoming challenges in managing multiple layers for symbol positioning.',
            outcomes: 'Successfully demonstrated the application in a live demo.',
            visuals: 'assets/MusicEditorDemo.GIF',
            demoLink: 'https://youtu.be/uTOT1mf5a4o',
            githubLink: 'https://github.com/YiwenW312/MusicEditor'
        },
        {
            id: 'project3',
            title: 'Checker Game',
            subtitle: 'Backend Python Application with GUI',
            dates: 'Spring 2023',
            overview: 'Developed an interactive 2-player chess game in Python with a GUI using the Processing library, implementing comprehensive chess rules and an intuitive drag-and-drop interface.',
            role: 'Developer',
            technologies: 'Python, Processing',
            responsibilities: 'Developed the game logic and GUI, ensuring smooth gameplay and visual feedback for users.',
            challenges: 'Implementing complex game rules and providing visual hints for potential moves.',
            outcomes: 'Enhanced user experience with visual hints for potential moves and automatic detection of check and checkmate scenarios.',
            visuals: 'assets/checkergameDemo.png',
            demoLink: 'https://github.com/YiwenW312/CheckerGame',
            githubLink: 'https://github.com/YiwenW312/CheckerGame'
        },
        {
            id: 'project4',
            title: 'Health Check and Report System',
            subtitle: 'Backend Java Application with GUI',
            dates: 'Summer 2023',
            overview: 'Developed a robust health report system using Java and the MVC design pattern, with JavaFX for the GUI to ensure a user-friendly interface.',
            role: 'Developer',
            technologies: 'Java, MVC, JavaFX, Object-oriented programming, Git',
            responsibilities: 'Applied object-oriented design patterns to enhance functionality and extensibility.',
            challenges: 'Engineering a system capable of generating comprehensive health reports and vital health warnings.',
            outcomes: 'Improved user awareness and health management.',
            visuals: 'assets/iSeeHealth_ui2.png',
            demoLink: 'https://github.com/YiwenW312/iSeeHealth',
            githubLink: 'https://github.com/YiwenW312/iSeeHealth'
        },
        {
            id: 'project5',
            title: 'Online Payment Platform',
            subtitle: 'Backend Python Web Application with full SDLC',
            dates: 'Fall 2023',
            overview: 'Developed an online payment platform prototype using Python, MySQL, RESTful APIs, and FASTAPI. Leveraged AWS for deployment and Docker for containerization to ensure scalable and secure architecture.',
            role: 'Developer',
            technologies: 'Python, MySQL, AWS, Docker, RESTful APIs, FASTAPI, SDLC, Authentication, Git',
            responsibilities: 'Implemented comprehensive features like card validation, user authentication, account creation, balance calculation, and history tracking.',
            challenges: 'Ensuring scalable and secure architecture through containerization and deployment.',
            outcomes: 'Improved overall payment processing functionality.',
            visuals: 'assets/PaymentProject-UI2.png',
            demoLink: 'https://www.youtube.com/watch?v=UUgq4tRaCn0',
            githubLink: 'https://github.com/TrinityGo/opp-api'
        },
        {
            id: 'project6',
            title: 'Neighborhood Review Platform',
            subtitle: 'Database Management Project with MySQL & Java',
            dates: 'Spring 2024',
            overview: 'Designed and implemented a UML database model for the system, utilizing MySQL for table creation, data insertion, and retrieval, and employed JDBC for database management and data manipulation.',
            role: 'Developer',
            technologies: 'Java, MySQL, JDBC, Git',
            responsibilities: 'Managed database creation, data insertion, and retrieval operations.',
            challenges: 'Ensuring accurate and efficient data manipulation and management.',
            outcomes: 'Successfully implemented a comprehensive neighborhood review platform.',
            visuals: 'assets/LifeHubLogo.png',
            demoLink: 'https://github.com/CS5200-Team1-LifeHubApp/LifeHubApp',
            githubLink: 'https://github.com/CS5200-Team1-LifeHubApp/LifeHubApp'
        },
        {
            id: 'project7',
            title: 'Conway\'s Game of Life',
            subtitle: 'JavaScript Web Development',
            dates: 'Spring 2024',
            overview: 'Developed an interactive Game of Life using JavaScript and React: Implemented dynamic grid customization, real-time cell toggling, and state management with React Context API.',
            role: 'Developer',
            technologies: 'JavaScript, React, CSS, HTML, Git',
            responsibilities: 'Created functions for computing cell generations, neighbor counting, and cell state transitions.',
            challenges: 'Enhancing user experience with intuitive UI and heatmap visualization.',
            outcomes: 'Successfully developed an engaging and interactive web-based Game of Life.',
            visuals: 'assets/gameoflife.gif',
            demoLink: 'https://yiwen-wang-project2.onrender.com/',
            githubLink: 'https://github.com/YiwenW312/Conway-s-Game-of-Life'
        },
        {
            id: 'project8',
            title: 'Password Manager',
            subtitle: 'Full-Stack Web Application',
            dates: 'Spring 2024',
            overview: 'Developed a secure password management web application using JavaScript for full-stack development. Built the backend with Express and Node.js, and the frontend with React, deploying on Heroku.',
            role: 'Developer',
            technologies: 'JavaScript, React, Express, Node.js, Heroku, MongoDB, Security, User Authentication, CSS, HTML, Git',
            responsibilities: 'Implemented features like secure password generation, user authentication, user authorization, and encrypted sensitive data.',
            challenges: 'Ensuring security and user-friendliness in password management.',
            outcomes: 'Successfully developed a secure and user-friendly password management application.',
            visuals: 'assets/PasswordManagerProject.png',
            demoLink: 'https://yiwen-password-manager-09cea1536aab.herokuapp.com/',
            githubLink: 'https://github.com/YiwenW312/Password_Manager'
        },
        {
            id: 'project9',
            title: 'E-Portfolio Site',
            subtitle: 'Static Web Development',
            dates: 'Spring 2024',
            overview: 'Created a personal e-portfolio site using GitHub Pages, leveraging JavaScript, CSS, and HTML to showcase projects and skills in a visually appealing and professional manner.',
            role: 'Developer',
            technologies: 'JavaScript, CSS, HTML, Git',
            responsibilities: 'Designed and developed the e-portfolio site with a focus on visual appeal and professional presentation.',
            challenges: 'Ensuring a visually appealing and professional design.',
            outcomes: 'Successfully created an impressive personal e-portfolio site.',
            visuals: 'assets/eport.png',
            demoLink: 'https://yiwenw312.github.io/',
            githubLink: 'https://github.com/YiwenW312/YiwenW312.github.io'
        },
        {
            id: 'project10',
            title: 'Tech@Crossroads Publishing Platform',
            subtitle: 'Full-Stack Web Application',
            dates: 'Spring 2024 - present',
            overview: 'Led the development of a full-stack publishing platform using JavaScript, React, Express, Node.js, and MongoDB, facilitating content sharing and exploration of interdisciplinary opportunities for Northeastern University Seattle Campus students.',
            role: 'Project Lead & Developer',
            technologies: 'JavaScript, React, Express, Node.js, MongoDB, User Authentication, CSS, HTML, Git, SDLC, Project Management',
            responsibilities: 'Managed the project through the entire SDLC, ensuring adherence to best practices and project timelines from requirements gathering to deployment.',
            challenges: 'Ensuring successful project management and delivery through the full SDLC.',
            outcomes: 'Successfully developed a functional and effective publishing platform.',
            visuals: 'assets/1_Homepage_1_all.png',
            demoLink: 'https://github.com/Tech-Crossroads/techCrossroads',
            githubLink: 'https://github.com/Tech-Crossroads/techCrossroads'
        }
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
                    <p><strong>Role:</strong> ${project.role}</p>
                    <p><strong>Technologies Used:</strong> ${project.technologies}</p>
                </div>
                <div class="key-contributions">
                    <h4>Key Contributions and Achievements</h4>
                    <ul>
                        <li>${project.responsibilities}</li>
                        <li>${project.challenges}</li>
                        <li>${project.outcomes}</li>
                    </ul>
                </div>
                <div class="visuals-links">
                    <h4>Visuals and Links</h4>
                    <img src="${project.visuals}" alt="Project Screenshot">
                    <p><a href="${project.demoLink}" target="_blank">Demo/Live Link</a></p>
                    <p><a href="${project.githubLink}" target="_blank">GitHub Repository</a></p>
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
