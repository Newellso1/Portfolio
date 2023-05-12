let activePage = 4;
const titleTab = document.querySelector('.tab1');
const aboutTab = document.querySelector('.tab2');
const projectsTab = document.querySelector('.tab3');
const contactTab = document.querySelector('.tab4');

const titlePage = document.querySelector('.folder1');
const aboutPage = document.querySelector('.folder2');
const projectsPage = document.querySelector('.folder3');
const contactPage = document.querySelector('.folder4');


// Functions for bringing the selected tab to the forefront

function titleFront() {
    activePage ++;
    titlePage.style.zIndex = activePage;
}

function aboutFront() {
    activePage ++;
    aboutPage.style.zIndex = activePage;
}

function projectsFront() {
    activePage ++;
    projectsPage.style.zIndex = activePage;
}

function contactFront() {
    activePage ++;
    contactPage.style.zIndex = activePage;
}

titleTab.addEventListener('click', titleFront);
aboutTab.addEventListener('click', aboutFront);
projectsTab.addEventListener('click', projectsFront);
contactTab.addEventListener('click', contactFront);

// .JS for mobile device

const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right')

const titleIndex = parseInt(getComputedStyle(titlePage).zIndex);
const aboutIndex = parseInt(getComputedStyle(aboutPage).zIndex);
const projectsIndex = parseInt(getComputedStyle(projectsPage).zIndex);
const contactIndex = parseInt(getComputedStyle(contactPage).zIndex);

function rightButtonSwitch() {
    if (titleIndex === 1) {
        console.log ("New Page")
    } else {
        console.log("Stay here")
    }
}