import './css-Styles/style.css';

export default function initialPageLoad() {
    const content = document.getElementById("content");

    // Create a wrapper div for the page contents
    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("content-wrapper");

    const pageName = document.createElement("h1");
    pageName.textContent = "QUINCY'S LUNCH";

    const info = document.createElement("p");
    info.textContent = "Quincy's Lunch is a cozy and welcoming eatery nestled in the heart of the city, known for its delectable array of lunch options that tantalize taste buds and satisfy cravings. The menu at Quincy's Lunch boasts a diverse selection of culinary delights, ranging from hearty sandwiches and wraps to fresh salads bursting with flavor. Each dish is thoughtfully prepared using only the finest ingredients, ensuring every bite is a savory sensation.";

    // Append the elements to the content wrapper
    contentWrapper.appendChild(pageName);
    contentWrapper.appendChild(info);

    // Append the content wrapper to the main content area
    content.appendChild(contentWrapper);
}
