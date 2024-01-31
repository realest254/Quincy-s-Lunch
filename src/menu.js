import './css-Styles/menu.css';

export default function menuPageLoad() {
    const content = document.getElementById("content");

    // Create a wrapper div for the entire content
    const container = document.createElement("div");
    container.id = "container";

    // Create a wrapper div for the menu page
    const menuPage = document.createElement("div");
    menuPage.classList.add("menu-page");

    // Create elements for the menu page content
    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "Menu";

    const appetizersSection = document.createElement("section");
    appetizersSection.classList.add("menu-section");
    appetizersSection.innerHTML = "<h2>Appetizers</h2><p>Delightful starters to kick off your meal!</p>";

    const appetizer1 = createMenuItem("Caprese Salad", "$8.99", "Fresh tomatoes, mozzarella, basil, balsamic glaze");
    const appetizer2 = createMenuItem("Spinach Artichoke Dip", "$6.99", "Creamy dip served with tortilla chips");

    const mainsSection = document.createElement("section");
    mainsSection.classList.add("menu-section");
    mainsSection.innerHTML = "<h2>Main Courses</h2><p>Hearty mains to satisfy your hunger!</p>";

    const main1 = createMenuItem("Grilled Chicken Sandwich", "$10.99", "Juicy grilled chicken breast on ciabatta");
    const main2 = createMenuItem("Vegetable Stir Fry", "$12.99", "Assorted vegetables stir-fried with tofu");

    menuPage.appendChild(appetizersSection);
    appendMenuItems(appetizersSection, [appetizer1, appetizer2]);
    menuPage.appendChild(mainsSection);
    appendMenuItems(mainsSection, [main1, main2]);

    // Append the menu page wrapper to the container
    container.appendChild(pageTitle);
    container.appendChild(menuPage);

    
    content.innerHTML = ''; 
    content.appendChild(container);
}

//function to create a menu item element
function createMenuItem(name, price, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemName = document.createElement("h3");
    itemName.textContent = name;

    const itemPrice = document.createElement("span");
    itemPrice.textContent = price;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemPrice);
    menuItem.appendChild(itemDescription);

    return menuItem;
}

//function to append menu items to a section
function appendMenuItems(section, items) {
    items.forEach(item => {
        section.appendChild(item);
    });
}
