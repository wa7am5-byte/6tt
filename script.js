document.addEventListener("DOMContentLoaded", () => {
    // 1. فتح وإغلاق قائمة الجوال
    const mobileMenuBtn = document.getElementById("mobileMenu");
    const navLinks = document.getElementById("navLinks");

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            const icon = mobileMenuBtn.querySelector("i");
            if (navLinks.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });
    }

    // 2. معالجة إرسال نموذج التواصل (في صفحة contact.html)
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();

            if (name) {
                formFeedback.style.color = "#16a34a";
                formFeedback.textContent = `شكراً لك ${name}! تم إرسال رسالتك بنجاح.`;
                contactForm.reset();
            } else {
                formFeedback.style.color = "#dc2626";
                formFeedback.textContent = "يرجى تعبئة كافة الحقول بشكل صحيح.";
            }
        });
    }
});
