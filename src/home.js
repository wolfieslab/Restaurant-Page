import bookTable from "./bookTable";
import loadMenu from "./menu";

export default function loadHome(){
    const content = document.getElementById("content");
    content.innerHTML = "";

    const hero = document.createElement("div");
    hero.classList.add("hero");

    const title = document.createElement("h1");
    title.textContent = "Bella Vita";

    const subtitle = document.createElement("p");
    subtitle.textContent = "Experience the Taste of Italy, One Plate at a Time.";

    const viewMenuBtn = document.createElement("button");
    viewMenuBtn.classList.add("view-menu");
    viewMenuBtn.textContent = "View Menu";

    const bookTableBtn = document.createElement("button");
    bookTableBtn.classList.add("book-table");
    bookTableBtn.textContent = "Book Table";

    const heroBtns = document.createElement("div");
    heroBtns.classList.add("hero-buttons");

    heroBtns.append(viewMenuBtn, bookTableBtn);

    hero.append(title, subtitle, heroBtns);
    content.appendChild(hero);


    viewMenuBtn.addEventListener("click", loadMenu);
    bookTableBtn.addEventListener("click", bookTable);
}