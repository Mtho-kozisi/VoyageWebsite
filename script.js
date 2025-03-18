// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Example typewriter effect for homepage header
    const typewriterText = document.getElementById("typewriter");
    if (typewriterText) {
        const text = "Welcome to Voyatech!";
        let index = 0;

        function type() {
            if (index < text.length) {
                typewriterText.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }

        type();
    }

    // Form validation for contact form
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            const name = contactForm.querySelector("input[type='text']");
            const email = contactForm.querySelector("input[type='email']");
            const message = contactForm.querySelector("textarea");

            let valid = true;

            if (name.value.trim() === "") {
                valid = false;
                alert("Please enter your name.");
                name.focus();
            } else if (email.value.trim() === "") {
                valid = false;
                alert("Please enter your email address.");
                email.focus();
            } else if (message.value.trim() === "") {
                valid = false;
                alert("Please enter your message.");
                message.focus();
            }

            if (!valid) {
                e.preventDefault();
            }
        });
    }

    // Dynamic content loading for blog section
    const blogSection = document.getElementById("blog");
    if (blogSection) {
        const blogPosts = [
            {
                title: "Cybersecurity Trends 2024",
                content: "Learn about the latest threats and how to protect your business.",
                link: "#"
            },
            {
                title: "Optimizing Your Website",
                content: "Tips to improve speed, SEO, and user experience.",
                link: "#"
            },
            {
                title: "Why Cloud Security Matters",
                content: "Best practices for securing your cloud infrastructure.",
                link: "#"
            }
        ];

        const blogGrid = blogSection.querySelector(".grid");
        blogPosts.forEach(post => {
            const article = document.createElement("article");
            article.className = "bg-white p-6 shadow-lg rounded-lg";

            const h3 = document.createElement("h3");
            h3.className = "text-xl font-semibold";
            h3.textContent = post.title;

            const p = document.createElement("p");
            p.className = "mt-2 text-gray-700";
            p.textContent = post.content;

            const a = document.createElement("a");
            a.className = "text-blue-600 hover:underline mt-4 block";
            a.href = post.link;
            a.textContent = "Read More";

            article.appendChild(h3);
            article.appendChild(p);
            article.appendChild(a);

            blogGrid.appendChild(article);
        });
    }
});