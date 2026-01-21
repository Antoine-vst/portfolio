setInterval(creerFlocon, 300);

function creerFlocon() {
    const flocon = document.createElement("div");
    flocon.classList.add("neige");
    flocon.innerHTML = "❄";

    flocon.style.left = Math.random() * window.innerWidth + "px";
    flocon.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.body.appendChild(flocon);

    setTimeout(() => {
        flocon.remove();
    }, 6000);
}
