//Word to be in helix animation
const words = "C H R I S T I A N D E Z H A ' S P O R T F O L I O";

const ANIMATION_DURATION = 2000; //ms

//document element selectors
const headerComponent = document.querySelector("header");
const welcomeDiv = document.querySelector(".welcome");
const portfolioNameDiv = document.querySelector(".portfolio-name");
const aboutMeSection = document.getElementById("about-me");
const projectsSection = document.getElementById("projects");
const skillsSection = document.getElementById("skills-certifications");
const experienceSection = document.getElementById("experience")
const contactSection = document.getElementById("contact");
const footerSection = document.querySelector("footer");
const giftFairyWebsiteButton = document.querySelector(".giftfairy-website-button");
const giftFairyGithubButton = document.querySelector(".giftfairy-github-button");
const jammingGithubButton = document.querySelector(".jamming-github-button");
const trhWebsiteButton = document.querySelector(".trh-website-button");
const trhGithubButton = document.querySelector(".trh-github-button");


//Function to separate each character into it's own div
const characters = words.split("").forEach((char, i) => {
    function createElement(offset) {
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay= `${i * (ANIMATION_DURATION / 20) - offset}ms`
        return div;
    }

    document.getElementById("spiral").append(createElement(0));
    document.getElementById("spiral2").append(createElement(-1 * (4000 / 2)));
});


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
    footerSection.style.display = "block";
    portfolioNameDiv.classList.add("fade-in-text");
    headerComponent.classList.add("fade-in-text");
    clearInterval(interval2);
}, 5000);

const gfGoToWebsite = () => {
    window.open("https://giftfairy.netlify.app/", "_blank");
}

const gfGoToGithub = () => {
    window.open("https://github.com/kekedezha/GiftFairy-FE", "_blank");
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

giftFairyWebsiteButton.onclick = gfGoToWebsite;
giftFairyGithubButton.onclick = gfGoToGithub;
jammingGithubButton.onclick = jammingGoToGithub;
trhWebsiteButton.onclick = trhGoToWebsite;
trhGithubButton.onclick = trhGoToGithub;
