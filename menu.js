const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        menu.style.display = "none";
    });
});
