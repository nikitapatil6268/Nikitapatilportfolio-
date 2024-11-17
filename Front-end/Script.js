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

/* form validation for contact me */
document.getElementById("contactForm").addEventListener("submit", function(event) {
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;

    if (name === "" || email === "") {
        alert("Please fill in both fields before submitting.");
        event.preventDefault();  // Prevent form submission
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});

function validateEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

/*success eror and feedback*/
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
});

/*display the message after form submission*/
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    document.getElementById("thankYouMessage").style.display = "block";
});

