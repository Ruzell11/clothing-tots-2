document.getElementById("scroll-to-contacts").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector(".contacts-section").scrollIntoView({
        behavior: "smooth"
    });
});