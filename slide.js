// ABOUT ME SECTION SLIDE EFFECT
const aboutMeClass = document.querySelector(".about-me-container");
// Create the about me observer
const observerAboutMeLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutMeClass.classList.add('slideLeft');
          return;
        }
        aboutMeClass.classList.remove('slideLeft');
    });
});
// Tell the observer which elements to track
observerAboutMeLeft.observe(document.getElementById("about-me"));

// SKILLS & CERTS SECTION SLIDE EFFECT
const skills = document.querySelector(".skills-certs-main-container")
// Create the right observer
const observerSkillsLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          skills.classList.add('slideLeft');
          return;
        }
        skills.classList.remove('slideLeft');
    });
});
// Tell the observer which elements to track
observerSkillsLeft.observe(document.getElementById("skills-certifications"));

// EXPERIENCE SECTION SLIDE EFFECT
const experience = document.querySelector(".experience-container")
// Create the right observer
const observerExperienceRight = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          experience.classList.add('slideRight');
          return;
        }
        experience.classList.remove('slideRight');
    });
});
// Tell the observer which elements to track
observerExperienceRight.observe(document.getElementById("experience"));


// CONTACT SECTION SLIDE EFFECT
const contact = document.querySelector(".contact-container")
// Create the right observer
const observerContactLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          contact.classList.add('slideLeft');
          return;
        }
        contact.classList.remove('slideLeft');
    });
});
// Tell the observer which elements to track
observerContactLeft.observe(document.getElementById("contact"));

// EXTRA SECTION SLIDE EFFECT
const extra = document.querySelector(".extra-container")
// Create the right observer
const observerExtraRight = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          extra.classList.add('slideRight');
          return;
        }
        extra.classList.remove('slideRight');
    });
});
// Tell the observer which elements to track
observerExtraRight.observe(document.getElementById("extra"));