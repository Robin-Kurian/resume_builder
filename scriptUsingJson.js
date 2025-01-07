// Fetch data from data.json
fetch('./data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log("Data fetched successfully:", response); // Log the fetched data to the console
        return response.json();
    })
    .then(personalInfo => {
        document.getElementById("titleName").innerHTML = `Resume | ${personalInfo.firstName}`;
        document.getElementById("firstName").innerHTML = personalInfo.firstName;
        document.getElementById("lastName").innerHTML = personalInfo.lastName;
        document.querySelector(".contactDetails .fa-envelope").parentElement.innerHTML = `<a href="mailto:${personalInfo.email}"><i class="fa fa-envelope">&nbsp;&nbsp;</i>${personalInfo.email}</a>`;
        document.querySelector(".contactDetails .fa-phone").parentElement.innerHTML = `<a href="tel:+91${personalInfo.phone}"><i class="fa fa-phone" aria-hidden="true">&nbsp;&nbsp;</i>${personalInfo.phone}</a>`;
        document.getElementById("avatar").src = personalInfo.profileImage;

        // Populate objective
        document.getElementById("objective").innerHTML = personalInfo.objective;

        // Populate skills section
        const skillsList = document.getElementById("skillsList");
        personalInfo.skills.forEach(skill => {
            const li = document.createElement("li");
            li.innerText = skill;
            skillsList.appendChild(li);
        });

        // Populate technical expertise section
        const expertiseList = document.getElementById("expertiseList");
        personalInfo.technicalExpertise.forEach(expertise => {
            const li = document.createElement("li");
            li.innerText = expertise;
            expertiseList.appendChild(li);
        });

        // Populate experience section
        const experienceList = document.getElementById("experienceList");
        personalInfo.experience.forEach((exp, index) => {
            const li = document.createElement("li");
            li.innerHTML = `<span class="subDetails">${exp.title} &nbsp;</span><span class="bold"></span>- ${exp.company}, ${exp.location} <br>${exp.duration}${index < personalInfo.experience.length - 1 ? '<br><br>' : ''}`;
            experienceList.appendChild(li);
        });


        // Populate projects section
        const projectsList = document.getElementById("projectsList");
        personalInfo.projects.forEach((project, index) => {
            const li = document.createElement("li");
            let projectLink = '';
            if (project.link) {
                projectLink += `<a href="${project.link}" target="_blank">View Project</a> &nbsp;&nbsp;`;
            }
            if (project.github) {
                projectLink += `<a href="${project.github}" target="_blank">GitHub</a>`;
            }
            if (project.github2) {
                projectLink += `<a href="${project.github2}" target="_blank">&nbsp;&nbsp; GitHub(Backend)</a>`;
            }
            let projectDetails = `<span class="subDetails">${project.title} &nbsp;</span><span class="bold"></span>- ${project.description} <br>`;
            if (project.duration) {
                projectDetails += `${project.duration} <br>`;
            }
            projectDetails += `${projectLink}${index < personalInfo.projects.length - 1 ? '<br><br>' : ''}`;
            li.innerHTML = projectDetails;
            projectsList.appendChild(li);
        });

        // Populate education section
        const educationList = document.getElementById("educationList");
        personalInfo.education.forEach((edu, index) => {
            const li = document.createElement("li");
            li.innerHTML = `<span class="subDetails">${edu.degree} &nbsp;</span><span class="bold"></span>- ${edu.institution} <br>${edu.duration}${index < personalInfo.education.length - 1 ? '<br><br>' : ''}`;
            educationList.appendChild(li);
        });

        // Populate interests section
        const interestsList = document.getElementById("interestsList");
        personalInfo.interests.forEach(interest => {
            const li = document.createElement("li");
            li.innerText = interest;
            interestsList.appendChild(li);
        });
        interestsList.appendChild(document.createElement("br"));

        // Populate strengths section
        const strengthsList = document.getElementById("strengthsList");
        personalInfo.strengths.forEach(strength => {
            const li = document.createElement("li");
            li.innerText = strength;
            strengthsList.appendChild(li);
        });
        // Populate languages section
        const languagesList = document.getElementById("languagesList");
        personalInfo.languages.forEach(language => {
            const li = document.createElement("li");
            li.innerText = language;
            languagesList.appendChild(li);
        });

    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

function printResume() {
    window.print();
}
