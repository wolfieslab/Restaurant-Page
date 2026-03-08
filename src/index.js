import "./styles.css";
import loadMenu from "./menu";
import loadHome from "./home";
import loadContact from "./contact";


const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");


menuBtn.addEventListener("click", loadMenu);
contactBtn.addEventListener("click", loadContact);
homeBtn.addEventListener("click", loadHome);

loadHome();

// alert("Working!");