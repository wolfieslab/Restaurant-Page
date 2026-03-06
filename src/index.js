import "./styles.css";
import loadHome from "./home";

const homeBtn = document.getElementById("home");

homeBtn.addEventListener("click", loadHome());

loadHome();

// alert("Working!");