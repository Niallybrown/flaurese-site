let sectionIndex = 0;

const logoSection = document.getElementById("logoSection");
const aboutSection = document.getElementById("aboutSection");
const servicesSection1 = document.getElementById("servicesSection1");
const servicesSection2 = document.getElementById("servicesSection2");
const contactSection = document.getElementById("contactSection");

const sections = [logoSection, aboutSection, servicesSection1, servicesSection2, contactSection];



document.getElementById("scroll-button").addEventListener("click", () => {
    sections[sectionIndex + 1].scrollIntoView({behavior: "smooth"});
    sectionIndex += 1;
})
