const panels = document.querySelectorAll(".panel");

panels.forEach((panel1) => {
    panel1.addEventListener("click", () => {
        removeActiveClasses();
        panel1.classList.add("active");
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    })
}