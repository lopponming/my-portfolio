// underlined active page for nav bar
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


// toggle grayscale in accessibility dropdown
document.addEventListener("DOMContentLoaded", function() {
    // check if grayscale mode is enabled in localStorage
    const isGrayscale = localStorage.getItem('grayscale') === 'true';
    
    if (isGrayscale) {
        document.body.classList.add('grayscale');
    }

    document.querySelector('.dropdown-content ul li:nth-child(4)').addEventListener('click', function() {
        toggleGrayscale();
    });

    function toggleGrayscale() {
        const body = document.body;
        body.classList.toggle('grayscale');
        localStorage.setItem('grayscale', body.classList.contains('grayscale'));
    }
});

