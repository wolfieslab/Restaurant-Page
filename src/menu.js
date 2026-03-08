import margheritaPizza from "./resources/images/mozzarella-pizza-margherita.jpg";
import fettuccineAlfredo from "./resources/images/Fettuccine-Alfredo.jpg";
import bruschetta from "./resources/images/Bruschetta.jpg";
import spaghettiBolognese from "./resources/images/spaghetti-bolognese.jpeg";
import capreseSalad from "./resources/images/Caprese-salad.jpg";
import tiramisu from "./resources/images/tiramisu.jpg";

export default function loadMenu() {
    const content = document.getElementById("content");
    content.textContent = "";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const itemsContainer = document.createElement("div");
    itemsContainer.classList.add("items-container");

    const menuTitle = document.createElement("h2");
    menuTitle.classList.add("title");
    menuTitle.textContent = "Menu";

    menuContainer.appendChild(menuTitle);

    menuItems.forEach(item => {
        itemsContainer.appendChild(
            createMenuItem(item.name, item.description, item.image, item.price)
        );
    });

    menuContainer.appendChild(itemsContainer);
    content.appendChild(menuContainer);
}

const menuItems = [
    {
        name: "Margherita Pizza",
        description: "Classic Italian pizza topped with San Marzano tomato sauce, fresh mozzarella, basil, and extra virgin olive oil.",
        image: margheritaPizza,
        price: 399,
    },
    {
        name: "Fettuccine Alfredo",
        description: "Fresh fettuccine pasta tossed in a rich and creamy parmesan Alfredo sauce.",
        image: fettuccineAlfredo,
        price: 349
    },
    {
        name: "Bruschetta",
        description: "Grilled artisan bread topped with fresh tomatoes, basil, garlic, and olive oil.",
        image: bruschetta,
        price: 249
    },
    {
        name: "Spaghetti Bolognese",
        description: "Traditional Italian pasta with slow-cooked beef ragu, tomatoes, and herbs.",
        image: spaghettiBolognese,
        price: 379
    },
    {
        name: "Caprese Salad",
        description: "Fresh mozzarella, vine tomatoes, and basil drizzled with olive oil and balsamic glaze.",
        image: capreseSalad,
        price: 279
    },
    {
        name: "Tiramisu",
        description: "Classic Italian dessert made with espresso-soaked ladyfingers and mascarpone cream.",
        image: tiramisu,
        price: 229
    }
];

function createMenuItem(name, description, image, price){
    const item = document.createElement("div");
    item.classList.add("menu-item");

    const itemImage = document.createElement("img");
    itemImage.src = image;
    itemImage.alt = name;

    const menuInfo = document.createElement("div");
    menuInfo.classList.add("menu-info");

    const itemName = document.createElement("h3");
    itemName.classList.add("name");
    itemName.textContent = name;

    const itemDescrip = document.createElement("p");
    itemDescrip.classList.add("description");
    itemDescrip.textContent = description;

    const itemPrice = document.createElement("p");
    itemPrice.classList.add("price");
    itemPrice.innerHTML = `Price: <span>${price}Rs</span>`;

    menuInfo.append(itemName, itemDescrip, itemPrice);
    item.append(itemImage, menuInfo);

    return item;
}