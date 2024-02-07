//document element selectors
const headerComponent = document.querySelector("header");
const welcomeDiv = document.querySelector(".welcome");
const portfolioNameDiv = document.querySelector(".portfolio-name");
const aboutMeSection = document.getElementById("about-me");
const projectsSection = document.getElementById("projects");
const skillsSection = document.getElementById("skills-certifications");
const experienceSection = document.getElementById("experience")
const contactSection = document.getElementById("contact");
const extraSection = document.getElementById("extra");
const footerSection = document.querySelector("footer");
const giftFairyWebsiteButton = document.querySelector(".giftfairy-website-button");
const giftFairyGithubButton = document.querySelector(".giftfairy-github-button");
const jammingGithubButton = document.querySelector(".jamming-github-button");
const trhWebsiteButton = document.querySelector(".trh-website-button");
const trhGithubButton = document.querySelector(".trh-github-button");
const aboutButton = document.querySelector(".about-button");
const projectsButton = document.querySelector(".projects-button");
const skillsButton = document.querySelector(".skills-button");
const experienceButton = document.querySelector(".experience-button");
const contactButton = document.querySelector(".contact-button");
const extraButton = document.querySelector(".extra-button");

//Interval set up to display "welcome" message for 3 seconds on page load/reload
const interval1 = setInterval(() => {
    welcomeDiv.classList.add("fade-out-text");
    clearInterval(interval1);
}, 3000);

//Interval to hide welcome message and display rest of page
const interval2 = setInterval(() => {
    welcomeDiv.style.display = "none";
    headerComponent.style.display = "flex";
    portfolioNameDiv.style.display = "flex";
    aboutMeSection.style.display = "flex";
    projectsSection.style.display = "block";
    skillsSection.style.display = "block";
    experienceSection.style.display = "block"
    contactSection.style.display = "block";
    extraSection.style.display = "block";
    footerSection.style.display = "block";
    portfolioNameDiv.classList.add("fade-in-text");
    headerComponent.classList.add("fade-in-text");
    clearInterval(interval2);
}, 5000);

const gfGoToWebsite = () => {
    window.open("https://giftfairy.netlify.app/", "_blank");
}

const gfGoToGithub = () => {
    window.open("https://github.com/kekedezha/GIFTFaiRY_FE", "_blank");
}

const jammingGoToGithub = () => {
    window.open("https://github.com/kekedezha/jamming_pp", "_blank");
}

const trhGoToWebsite = () => {
    window.open("https://trhfilms.netlify.app/", "_blank");
}

const trhGoToGithub = () => {
    window.open("https://github.com/kekedezha/TRHFilms", "_blank");
}

const goToAboutSection = () => {
    location.href = "#about-me";
}

const goToProjectsSection = () => {
    location.href = "#projects";
}

const goToSkillsSection = () => {
    location.href = "#skills-certifications";
}

const goToExperienceSection = () => {
    location.href = "#experience";
}

const goToContactSection = () => {
    location.href = "#contact";
}

const goToExtraSection = () => {
    location.href = "#extra";
}

giftFairyWebsiteButton.onclick = gfGoToWebsite;
giftFairyGithubButton.onclick = gfGoToGithub;
jammingGithubButton.onclick = jammingGoToGithub;
trhWebsiteButton.onclick = trhGoToWebsite;
trhGithubButton.onclick = trhGoToGithub;
aboutButton.onclick = goToAboutSection;
projectsButton.onclick = goToProjectsSection;
skillsButton.onclick = goToSkillsSection;
experienceButton.onclick = goToExperienceSection;
contactButton.onclick = goToContactSection;
extraButton.onclick = goToExtraSection;