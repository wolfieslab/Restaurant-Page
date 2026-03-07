import "./styles.css";
import loadMenu from "./menu";
import loadHome from "./home";


const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");


menuBtn.addEventListener("click", loadMenu);
homeBtn.addEventListener("click", loadHome);

loadHome();

// alert("Working!");