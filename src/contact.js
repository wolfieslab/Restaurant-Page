export default function loadContact() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const contactTitle = document.createElement("h2");
    contactTitle.classList.add("title");
    contactTitle.textContent = "Contact Us";

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("contact-info");

    contactItems.forEach(item => {
        infoContainer.appendChild(
            createContactItem(item.title, item.content)
        );
    });

    contactContainer.append(contactTitle, infoContainer);
    content.appendChild(contactContainer);
}

const contactItems = [
    {
        title: "📍 Address",
        content: "123 Via Roma, Florence, Italy"
    },
    {
        title: "📞 Phone",
        content: "+39 055 123 4567"
    },
    {
        title: "✉️ Email",
        content: "contact@bellavita.com"
    },
    {
        title: "🕒 Opening Hours",
        content: `<p> Mon - Fri: 11:00 AM - 10:00 PM </p>
                <p> Sat - Sun: 12:00 PM - 11:00 PM </p>`
    }
];

function createContactItem(title, text) {
    const item = document.createElement("div");
    item.classList.add("contact-item");

    const heading = document.createElement("h3");
    heading.classList.add("heading");
    heading.textContent = title;

    const itemContent = document.createElement("p");
    itemContent.classList.add("item-content");
    itemContent.innerHTML = text;

    item.append(heading, itemContent);

    return item;
}