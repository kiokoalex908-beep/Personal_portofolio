
const themeButton = document.getElementById("theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

function updateButton() {
    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
    }
}

updateButton();

// Change theme when clicked
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const theme = document.body.classList.contains("dark-mode")
        ? "dark"
        : "light";

    localStorage.setItem("portfolio-theme", theme);

    updateButton();
});


const readMoreButtons = document.querySelectorAll(".read-more");

readMoreButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const skillCard = button.parentElement;

        skillCard.classList.toggle("show-description");

        if (skillCard.classList.contains("show-description")) {
            button.textContent = "Read Less";
        } else {
            button.textContent = "Read More";
        }

    });
});
