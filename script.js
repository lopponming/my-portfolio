
document.addEventListener("DOMContentLoaded", function() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    
    var links = document.querySelectorAll("nav a");
    
    links.forEach(function(link) {
        if (link.getAttribute("href") === page) {
            link.classList.add("active");
        }
    });
});