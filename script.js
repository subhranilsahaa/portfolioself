const dot = document.querySelector(".cursor-dot");
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});
