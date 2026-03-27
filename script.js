const textElement = document.getElementById("typing-text");

const phrases = ["Computer Science Student", "Machine Learning Enthusiast", "Java Developer", "Salesforce Learner"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }
    setTimeout(typeEffect, typeSpeed);
}

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
            el.classList.add("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
    reveal(); 
});

window.addEventListener("scroll", reveal);

const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            window.location.href = "https://mansikhairnar003.github.io/thanks.html";
        } else {
            alert("Something went wrong!");
        }
    }).catch(error => {
        alert("Error submitting form!");
    });
});
