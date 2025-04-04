// Initialize EmailJS with your public key
emailjs.init("9Fyn7hOcGFaBIxTdT");

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navabr = document.querySelector('.navabr');
    const body = document.body;

    // Toggle menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navabr.classList.toggle('active');
        body.style.overflow = navabr.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navabr.contains(event.target) && !hamburger.contains(event.target) && navabr.classList.contains('active')) {
            hamburger.classList.remove('active');
            navabr.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navabr.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Close menu when scrolling
    window.addEventListener('scroll', function() {
        if (navabr.classList.contains('active')) {
            hamburger.classList.remove('active');
            navabr.classList.remove('active');
            body.style.overflow = '';
        }
    });
});

// Rating form submission
document.getElementById("ratingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form elements
    const form = event.target;
    const submitButton = document.getElementById("submitButton");
    const originalText = submitButton.textContent;

    // Get form values
    const rating = form.querySelector('input[name="rating"]:checked')?.value;
    const userName = form.querySelector('input[name="userName"]').value.trim();
    const userEmail = form.querySelector('input[name="userEmail"]').value.trim();
    const feedback = form.querySelector('textarea[name="feedback"]').value.trim();

    // Validate form
    if (!rating) {
        alert("Please select a rating");
        return;
    }

    if (!userName) {
        alert("Please enter your name");
        return;
    }

    if (!userEmail) {
        alert("Please enter your email");
        return;
    }

    if (!feedback) {
        alert("Please provide your feedback");
        return;
    }

    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    // Send email using EmailJS
    emailjs.send("service_ez2tr5c", "template_8p3knbn", {
        from_name: "Tejas Machhi",
        from_email: "tejasmachhi2710@gmail.com",
        to_name: userName,
        to_email: userEmail,
        to: userEmail,
        email: userEmail,
        rating: rating,
        message: "Thank you for your feedback! I appreciate you taking the time to rate my website."
    })
    .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thank you for your rating! Your feedback has been submitted successfully. Please check your email for a thank you message.");
        form.reset();
    })
    .catch(function(error) {
        console.error("EmailJS Error:", error?.text || error?.message || "Unknown error");
        alert("Sorry, there was an error submitting your rating. Please try again later.");
    })
    .finally(function() {
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    });
});

// Image 3D tilt effect
const aboutImg = document.querySelector('.about-img');
if (aboutImg) {
    aboutImg.addEventListener('mousemove', (e) => {
        const rect = aboutImg.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        aboutImg.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        aboutImg.classList.add('moving');
    });

    aboutImg.addEventListener('mouseleave', () => {
        aboutImg.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        aboutImg.classList.remove('moving');
    });
} 