import './css-Styles/contact.css';

export default function contactPageLoad() {
    const content = document.getElementById("content");

    // Create a wrapper div for the contact page
    const contactPage = document.createElement("div");
    contactPage.classList.add("contact-page");

    // Create elements for the contact page content
    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "Contact Us";

    const contactInfoSection = document.createElement("section");
    contactInfoSection.classList.add("contact-section");
    contactInfoSection.innerHTML = "<h2>Contact Information</h2>";

    const contactInfo1 = createContactItem("Address", "123 Main Street, City, Country");
    const contactInfo2 = createContactItem("Phone", "+123-456-7890");
    const contactInfo3 = createContactItem("Email", "info@example.com");

    const contactForm = createContactForm();

    contactInfoSection.appendChild(contactInfo1);
    contactInfoSection.appendChild(contactInfo2);
    contactInfoSection.appendChild(contactInfo3);
    contactInfoSection.appendChild(contactForm);

    // Append the elements to the contact page wrapper
    contactPage.appendChild(pageTitle);
    contactPage.appendChild(contactInfoSection);

    // Append the contact page wrapper to the content
    content.appendChild(contactPage);
}

//function to create a contact form
function createContactForm() {
    const form = document.createElement("form");
    form.classList.add("contact-form");

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "name");

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    const emailInput = document.createElement("input");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("name", "email");

    const messageLabel = document.createElement("label");
    messageLabel.textContent = "Message:";
    const messageInput = document.createElement("textarea");
    messageInput.setAttribute("name", "message");

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Submit";

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(messageLabel);
    form.appendChild(messageInput);
    form.appendChild(submitButton);

    return form;
}
function createContactItem(label, value) {
    const contactItem = document.createElement("div");
    contactItem.classList.add("contact-item");

    const itemLabel = document.createElement("h3");
    itemLabel.textContent = label;

    const itemValue = document.createElement("p");
    itemValue.textContent = value;

    contactItem.appendChild(itemLabel);
    contactItem.appendChild(itemValue);

    return contactItem;
}
