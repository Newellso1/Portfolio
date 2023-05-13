let activePage = 1;
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
    activePage++;
    titlePage.style.zIndex = activePage;
}

function aboutFront() {
    activePage++;
    aboutPage.style.zIndex = activePage;
}

function projectsFront() {
    activePage++;
    projectsPage.style.zIndex = activePage;
}

function contactFront() {
    activePage++;
    contactPage.style.zIndex = activePage;
}

titleTab.addEventListener('click', titleFront);
aboutTab.addEventListener('click', aboutFront);
projectsTab.addEventListener('click', projectsFront);
contactTab.addEventListener('click', contactFront);

// .JS for mobile device

const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');

let titleIndex = parseInt(getComputedStyle(titlePage).zIndex);
let aboutIndex = parseInt(getComputedStyle(aboutPage).zIndex);
let projectsIndex = parseInt(getComputedStyle(projectsPage).zIndex);
let contactIndex = parseInt(getComputedStyle(contactPage).zIndex);
let pages = [titlePage, aboutPage, projectsPage, contactPage];

function indexReset() {
    titleIndex = parseInt(getComputedStyle(titlePage).zIndex);
    aboutIndex = parseInt(getComputedStyle(aboutPage).zIndex);
    projectsIndex = parseInt(getComputedStyle(projectsPage).zIndex);
    contactIndex = parseInt(getComputedStyle(contactPage).zIndex);
}

function rightButtonSwitch() {
    if (titleIndex === activePage) {
        activePage++
        aboutPage.style.zIndex = activePage;
        indexReset();
    } else if (aboutIndex === activePage) {
        activePage++
        projectsPage.style.zIndex = activePage;
        indexReset();
    } else if (projectsIndex === activePage) {
        activePage++
        contactPage.style.zIndex = activePage
        indexReset();
    }
}

function leftButtonSwitch() {
    if (contactIndex > projectsIndex){
        activePage ++;
        projectsPage.style.zIndex = activePage;
        indexReset();
    } else if (projectsIndex > aboutIndex) {
        activePage ++;
        aboutPage.style.zIndex = activePage;
        indexReset();        
    } else if (aboutIndex >= activePage) {
        activePage ++;
        titlePage.style.zIndex = activePage;
        indexReset();
    }
}



rightButton.addEventListener('click', rightButtonSwitch);
leftButton.addEventListener('click', leftButtonSwitch);
