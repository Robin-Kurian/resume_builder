# Resume Maker Application

## Overview
This application is a simple, client-side resume maker that allows users to create a professional resume using their personal information. The application is built using **HTML**, **CSS**, and **JavaScript** without any web frameworks. It fetches user data from a JSON file and dynamically populates the resume template.
The application is designed to be printed in A4 format, ensuring that the resume looks good when printed.

## Features
- **Dynamic Resume Generation**: The application fetches user data from a JSON file and populates the resume sections automatically.
- **Print Functionality**: Users can print their resumes directly from the application.
- **Responsive Design**: The application is designed to be printed in A4 format, ensuring that the resume looks professional when printed.
- **Customizable Sections**: Users can add their personal information, skills, experience, projects, education, interests, strengths, and languages.

## File Structure
The application consists of the following files:
- `resume.html`: The main HTML file that contains the structure of the resume.
- `style.css`: The CSS file for styling the resume.
- `scriptWithData.js`: A JavaScript file that contains hardcoded personal information and populates the resume.
- `scriptUsingJson.js`: A JavaScript file that fetches user data from a JSON file (`data.json`) and populates the resume.
- `data.json`: A JSON file that contains user data.

## Usage

### 1. HTML Structure (`resume.html`)
The HTML file contains the structure of the resume, including sections for personal information, skills, experience, projects, education, interests, strengths, and languages. The key elements include:
- **Title**: The title of the resume is dynamically updated using JavaScript.
- **Contact Details**: Contains email and phone number with icons.
- **Main Details**: Displays the user's name and profile image.
- **Sections**: Each section (Skills, Expertise, Experience, Projects, Education, Interests, Strengths, Languages) is structured using `<section>` tags.

### 2. CSS Styling (`style.css`)
The CSS file styles the resume for both screen and print. Key styles include:
- **Page Layout**: The resume is designed to fit A4 size with appropriate margins.
- **Print Styles**: Specific styles are applied when printing to ensure a clean layout.
- **Responsive Design**: The layout adjusts for different screen sizes, ensuring usability.

### 3. JavaScript Functionality
#### a. Hardcoded Data (`scriptWithData.js`)
This script contains a hardcoded object `personalInfo` that holds all the necessary information for the resume. It populates the HTML elements with this data when the DOM is fully loaded. Key functionalities include:
- Updating the title and personal details.
- Populating sections like skills, experience, projects, education, interests, strengths, and languages.

#### b. Fetching Data from JSON (`scriptUsingJson.js`)
This script fetches user data from `data.json` and populates the resume. It includes error handling for network issues. Key functionalities include:
- Fetching data from `data.json`.
- Updating the title and personal details.
- Populating sections with skills, technical expertise, experience, projects, education, interests, strengths, and languages.

### 4. Print Functionality
The application includes a button that triggers the `printResume()` function, allowing users to print their resumes. The print styles ensure that the resume is formatted correctly for printing.

### 5. JSON Data Structure (`data.json`)
The JSON file contains structured data for the user, including:
- **Personal Information**: First name, last name, email, phone, and profile image.
- **Objective**: A brief statement about the user's career goals.
- **Skills**: A list of skills relevant to the user's profession.
- **Technical Expertise**: A list of technical skills.
- **Experience**: An array of job experiences, each with a title, company, location, and duration.
- **Projects**: An array of projects, each with a title, description, technologies used, links, and duration.
- **Education**: An array of educational qualifications.
- **Interests**: A list of personal interests.
- **Languages**: A list of languages spoken.
- **Strengths**: A list of personal strengths.

## How to Run the Application
1. **Clone the Repository**: Clone the repository to your local machine.
2. **Open `resume.html`**: Open the `resume.html` file in a web browser.
3. **View the Resume**: The resume will be populated with the data from `data.json` or the hardcoded data in `scriptWithData.js`.
4. **Print the Resume**: Click the "Print Resume" button to print the resume.

## Conclusion
This resume maker application provides a simple and effective way for users to create and print their resumes. With the ability to fetch data from a JSON file or use hardcoded data, it offers flexibility and ease of use. The application can be further enhanced by adding features such as user input forms, saving resumes, or integrating with backend services for data storage.


NOTE FROM DEVELOPER:

## Tweaks
1. **Move the page breaks to different sections**: if you want to move the page breaks to different sections, you can do so by adding the class "page-break" to the section you want to move the page break to. or you can add your own classes or styles and add class "no-print" to the section you want to hide when printing. play around with it.

2. **Add multiple github links**: If you want to link one more github repo (as backend repo), you can do so by adding the github link to the project in the JSON file as 'github2'.


There are plans to Convert the application into nextjs framework in future.



