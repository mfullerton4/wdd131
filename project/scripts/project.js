// Welcome message
document.addEventListener("DOMContentLoaded", () => {
    const welcome = document.createElement("p");
    welcome.textContent = "Welcome back to TTRPG Hub!";
    document.querySelector("header").appendChild(welcome);
})

// Last visit tracker
const lastVisit = localStorage.getItem("lastVisit");
localStorage.setItem("lastVisit", new Date().toLocaleString());

// footer
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastmodified").textContent = `Last Modified: ${document.lastModified}`;


