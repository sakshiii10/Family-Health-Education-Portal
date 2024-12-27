// Function to load an HTML file into a specific element
function loadSection(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(err => console.error(`Error loading ${file}: ${err}`));
}

// Load all sections
loadSection("header", "header.html");
loadSection("home", "home.html");
loadSection("resources", "resources.html");
loadSection("webinars", "webinars.html");
loadSection("about", "about.html");
loadSection("contact", "contact.html");
loadSection("footer", "footer.html");
