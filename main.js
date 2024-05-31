// Contact-Me Form
document.addEventListener("DOMContentLoaded", () => {
    // Get all elements needed from the DOM
    const contactForm = document.querySelector("#contact-form");
    const submitBtn = document.querySelector(".submit-btn");
    const nameInput = document.querySelector("#user_name");
    const emailInput = document.querySelector("#user_email");
    const messageInput = document.querySelector("#message");

    // Get data needed from EmailJS
    const publicKey = "60nW90ojqv2DEgTTt";
    const serviceID = "service_n6vi3ce";
    const templateID = "template_3tkv2ao";

    // Initialize EmailJS with the public key
    emailjs.init(publicKey);

    // Add submit event to the contact form
    contactForm.addEventListener("submit", (e) => {
        // Prevent default behavior
        e.preventDefault();

        // Change button text
        submitBtn.innerText = "Just A Moment...";

        // Get all input field values
        const inputFields = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };

        // Send the email (Add service, template ID, & input field values)
        emailjs.send(serviceID, templateID, inputFields)
            .then(() => {
                // Change button text
                submitBtn.innerText = "Message Sent Successfully!";
                // Clear out all input fields
                nameInput.value = "";
                emailInput.value = "";
                messageInput.value = "";

                // Revert button text back to "Send Message" after 3000 milliseconds = 3 seconds
                setTimeout(() => {
                    submitBtn.innerText = "Send Message";
                }, 3000);
            }, (error) => {
                // Console log the error
                console.log(error);

                // Change button text
                submitBtn.innerText = "Something went wrong";
            });
    });
});



// Experience Section 
document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.getElementById("check");
    const links = document.querySelectorAll(".navbar a");

    links.forEach(link => {
        link.addEventListener("click", function() {
            checkbox.checked = false;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.timeline ul li');

    const isInView = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const run = () => {
        items.forEach(item => {
            if (isInView(item)) {
                item.classList.add('in-view');
            }
        });
    };

    window.addEventListener('load', run);
    window.addEventListener('resize', run);
    window.addEventListener('scroll', run);
});



// Scrollable arrow to the top
document.addEventListener('scroll', () => {
    const toTopButton = document.querySelector('#to-top');;

    if (window.scrollY > 550) {
        toTopButton.classList.add('show');
    } else {
        toTopButton.classList.remove('show');
    }
})



// Reveal-On-Scroll Arrow Button Effect
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    })
}

function reveal() {
    const onscroll = document.querySelectorAll('.reveal-on-scroll');

    for (let i = 0; i < onscroll.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = onscroll[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            onscroll[i].classList.add('active');
        } else {
            onscroll[i].classList.remove('active');
        }
    }
}
window.addEventListener('scroll', reveal);
