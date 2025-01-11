document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
window.addEventListener('scroll', function () {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    sections.forEach(function (section) {
        var rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
            var id = section.getAttribute('id');
            navLinks.forEach(function (link) {
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const loadingSpinner = document.getElementById('loadingSpinner');
    const thankYouMessage = document.getElementById('thankYouMessage');

    // Show loading spinner
    loadingSpinner.classList.remove('d-none');
    thankYouMessage.classList.add('d-none');

    // Prepare the data to send to the backend
    const data = {
        name: name,
        email: email,
        message: message
    };

    // Send data to backend using Fetch API
    fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        loadingSpinner.classList.add('d-none');
        thankYouMessage.classList.remove('d-none');
    })
    .catch(error => {
        console.error('Error:', error);
        loadingSpinner.classList.add('d-none');
        alert('There was an error submitting your message.');
    });
});

/*footer */
document.getElementById('year').textContent = new Date().getFullYear();