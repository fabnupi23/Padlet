// Funcionalidad para expandir y contraer secciones
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".mural-section");

    sections.forEach((section) => {
        const header = section.querySelector("h2");
        header.addEventListener("click", () => {
            const content = section.querySelector("p, img, iframe, ul");
            if (content.style.display === "none") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});
