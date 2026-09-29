document.addEventListener("DOMContentLoaded", () => {
    // 1. فتح وإغلاق قائمة الجوال (Mobile Menu Toggle)
    const mobileMenuBtn = document.getElementById("mobileMenu");
    const navLinks = document.getElementById("navLinks");

    mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        // تغيير أيقونة القائمة عند الفتح/الإغلاق
        const icon = mobileMenuBtn.querySelector("i");
        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    // إغلاق قائمة الجوال عند النقر على أي رابط
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            const icon = mobileMenuBtn.querySelector("i");
            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });
    });

    // 2. نمط التنسيق للرابط النشط عند التمرير (Active Scroll Effect)
    const sections = document.querySelectorAll("section, header");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href").includes(current)) {
                item.classList.add("active");
            }
        });
    });

    // 3. التحقق والتفاعل مع نموذج الاتصال (Contact Form Handling)
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (name && email) {
            // محاكاة إرسال البيانات
            formFeedback.style.color = "#16a34a"; // لون أخضر للنجاح
            formFeedback.textContent = `شكراً لك يا ${name}! تم إرسال رسالتك بنجاح وسنتواصل معك قريباً.`;
            
            // تفريغ الحقول
            contactForm.reset();
        } else {
            formFeedback.style.color = "#dc2626"; // لون أحمر للخطأ
            formFeedback.textContent = "يرجى ملء جميع الحقول المطلوبة بشكل صحيح.";
        }
    });
});
