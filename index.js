// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Log a message to the console
    console.log("Page is fully loaded!");

    // Example: Add a click event listener to all navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default behavior of the link
            const targetId = link.getAttribute("href").substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll to the target section
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Example: Toggle a class on a section when it's clicked
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.addEventListener("click", () => {
            section.classList.toggle("highlight");
        });
    });
});
