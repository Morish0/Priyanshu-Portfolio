// Function to toggle the dropdown for the clicked button
function toggleDropdown(event) {
    event.stopPropagation(); // Prevents window click from closing it immediately

    // Close any open dropdowns before opening a new one
    document.querySelectorAll(".dropdown-content").forEach(menu => {
        if (menu !== event.currentTarget.nextElementSibling) {
            menu.classList.remove("show");
        }
    });

    // Toggle the dropdown menu for the clicked button
    event.currentTarget.nextElementSibling.classList.toggle("show");
}

// Attach event listeners to all "View Project" buttons
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", toggleDropdown);
    });
});

// Close dropdown when clicking outside
window.onclick = function () {
    document.querySelectorAll(".dropdown-content").forEach(menu => {
        menu.classList.remove("show");
    });
};

