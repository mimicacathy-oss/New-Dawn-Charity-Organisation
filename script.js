// Mobile menu toggle
function toggleMenu() {
    const navbar = document.querySelector("#navbar ul");
    navbar.classList.toggle("show");
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });

        // Close menu on mobile after click
        document.querySelector("#navbar ul").classList.remove("show");
    });
});
