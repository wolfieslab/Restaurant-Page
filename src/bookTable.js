export default function bookTable() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const bookingContainer = document.createElement("div");
    bookingContainer.classList.add("booking-container");

    // in progress feature
    const inProgress = document.createElement("div");
    inProgress.textContent = "Feature in Progress 🕒 ";
    bookingContainer.appendChild(inProgress);

    content.appendChild(bookingContainer);
}