import './css-Styles/about.css';

export default function aboutUsPageLoad() {
    const content = document.getElementById("content");

    // Create a wrapper div for the about us page
    const aboutUsPage = document.createElement("div");
    aboutUsPage.classList.add("about-us-page");

    // Create elements for the about us page content
    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "About Us";

    const aboutUsInfoSection = document.createElement("section");
    aboutUsInfoSection.classList.add("about-us-section");
    aboutUsInfoSection.innerHTML = "<h2>Our Story</h2><p>Welcome to Quincy's Lunch, where we believe in serving delicious meals with a smile. Established in 2010, Quincy's Lunch has been a beloved eatery in the heart of the city. Our mission is simple: to provide our customers with fresh, flavorful, and satisfying meals that leave them coming back for more.</p><p>At Quincy's Lunch, we source the finest ingredients and prepare each dish with care and passion. From our hearty sandwiches to our vibrant salads, every bite is a culinary delight. Whether you're grabbing a quick lunch or dining with friends, Quincy's Lunch is the perfect destination for food lovers.</p>";

    // Append the elements to the about us page wrapper
    aboutUsPage.appendChild(pageTitle);
    aboutUsPage.appendChild(aboutUsInfoSection);

    // Append the about us page wrapper to the content
    content.appendChild(aboutUsPage);
}
