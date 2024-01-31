import initialPageLoad from './initial.js';
import menuPageLoad from './menu.js';
import contactPageLoad from './contact.js';
import aboutUsPageLoad from './about.js';

// Get references to the home and menu buttons
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contacts");
const content = document.getElementById("content");
const aboutBtn = document.getElementById("about");

initialPageLoad();

// Add event listeners to the buttons
homeBtn.addEventListener('click', function() {
    clearPage();
    initialPageLoad(); // Load initial page content
});

menuBtn.addEventListener('click', function() {
    clearPage();
    menuPageLoad(); // Load menu page content
});

contactBtn.addEventListener('click', function() {
    clearPage();
    contactPageLoad(); // Load menu page content
});
aboutBtn.addEventListener('click', function() {
    clearPage();
    aboutUsPageLoad(); // Load menu page content
});

// Function to clear existing page content
function clearPage() {
    content.innerHTML = ''; // Clears all existing body content
}
