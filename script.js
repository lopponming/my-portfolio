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

// POP-UP portfolio works on the homepage
function openPopup(image, title, tag, description, timestamp, hours) {
    // Create the popup container
    const popup = document.createElement('div');
    popup.classList.add('popup');

    // Create the image element
    const img = document.createElement('img');
    img.src = image;
    img.alt = title;
    img.classList.add('popup-image');

    // Create the tag element
    const tagElement = document.createElement('div');
    tagElement.textContent = tag;
    tagElement.classList.add('homepage-work-tag');

    // Create the title element
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    // Create the timestamp and hours elements
    const timestampHoursContainer = document.createElement('div');
    timestampHoursContainer.classList.add('timestamp-hours-container');

    const timestampElement = document.createElement('p');
    timestampElement.innerHTML = `<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="3.5" width="21" height="16" rx="1" stroke="#96B194" stroke-width="2"/>
    <line x1="5" y1="6.5" x2="5" y2="0.5" stroke="#96B194" stroke-width="2"/>
    <line x1="3.98804" y1="9.53596" x2="6.98782" y2="9.50007" stroke="#96B194" stroke-width="2"/>
    <line x1="3.98804" y1="14.536" x2="6.98782" y2="14.5001" stroke="#96B194" stroke-width="2"/>
    <line x1="9.98804" y1="9.53596" x2="12.9878" y2="9.50007" stroke="#96B194" stroke-width="2"/>
    <line x1="9.98804" y1="14.536" x2="12.9878" y2="14.5001" stroke="#96B194" stroke-width="2"/>
    <line x1="15.988" y1="9.53596" x2="18.9878" y2="9.50007" stroke="#96B194" stroke-width="2"/>
    <line x1="15.988" y1="14.536" x2="18.9878" y2="14.5001" stroke="#96B194" stroke-width="2"/>
    <line x1="18" y1="6.5" x2="18" y2="0.5" stroke="#96B194" stroke-width="2"/>
    </svg> ${timestamp}`;

    const hoursElement = document.createElement('p');
    hoursElement.innerHTML = `<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.5 10.5C20.5 15.4056 16.3132 19.5 11 19.5C5.68677 19.5 1.5 15.4056 1.5 10.5C1.5 5.59443 5.68677 1.5 11 1.5C16.3132 1.5 20.5 5.59443 20.5 10.5Z" stroke="#96B194" stroke-width="3"/>
    <line x1="11" y1="5" x2="11" y2="11" stroke="#96B194" stroke-width="2"/>
    <line x1="16.0149" y1="10.9999" x2="10.0156" y2="11.0935" stroke="#96B194" stroke-width="2"/>
    </svg> ${hours}`;

    timestampHoursContainer.appendChild(timestampElement);
    timestampHoursContainer.appendChild(hoursElement);

    // Create the description element
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;

    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.classList.add('popup-close-btn');
    closeButton.addEventListener('click', function () {
        popup.remove();
    });

    // Append elements to the popup container
    popup.appendChild(img);
    popup.appendChild(tagElement);
    popup.appendChild(titleElement);
    popup.appendChild(timestampHoursContainer);
    popup.appendChild(descriptionElement);
    popup.appendChild(closeButton);

    // Append the popup to the body
    document.body.appendChild(popup);
}
