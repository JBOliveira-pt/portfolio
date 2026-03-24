// ── Theme Toggle ──
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function applyTheme(isDark) {
    if (isDark) {
        document.documentElement.classList.add("dark");
        themeIcon.textContent = "light_mode";
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.classList.remove("dark");
        themeIcon.textContent = "dark_mode";
        localStorage.setItem("theme", "light");
    }
}

// Set icon to match the current state (dark class is set by inline FOUC script)
applyTheme(document.documentElement.classList.contains("dark"));

themeToggle.addEventListener("click", function () {
    var isDark = document.documentElement.classList.contains("dark");
    applyTheme(!isDark);
});

// ── Language Switcher ──
var savedLang = localStorage.getItem("lang") || "en";
var langOrder = ["en", "pt", "es"];
var mobileLangToggle = document.getElementById("mobile-lang-toggle");
var mobileLangLabel = document.getElementById("mobile-lang-label");

function updateMobileLangLabel(lang) {
    mobileLangLabel.textContent = lang.toUpperCase();
}

applyLanguage(savedLang);
updateMobileLangLabel(savedLang);

document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        applyLanguage(lang);
        updateMobileLangLabel(lang);
    });
});

mobileLangToggle.addEventListener("click", function () {
    var current = localStorage.getItem("lang") || "en";
    var idx = langOrder.indexOf(current);
    var next = langOrder[(idx + 1) % langOrder.length];
    applyLanguage(next);
    updateMobileLangLabel(next);
});

// ── Certifications Carousel ──
(function () {
    var track = document.getElementById("certs-track");
    var prevBtn = document.getElementById("certs-prev");
    var nextBtn = document.getElementById("certs-next");
    var currentPage = 0;
    var totalPages = 2;

    function updateCarousel() {
        track.style.transform = "translateX(-" + currentPage * 50 + "%)";
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === totalPages - 1;
    }

    prevBtn.addEventListener("click", function () {
        if (currentPage > 0) {
            currentPage--;
            updateCarousel();
        }
    });
    nextBtn.addEventListener("click", function () {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateCarousel();
        }
    });
})();

// ── Contact Form ──
var contactForm = document.getElementById("contact-form");
var contactFeedback = document.getElementById("contact-feedback");
var contactSubmit = document.getElementById("contact-submit");

var feedbackMessages = {
    en: {
        success: "Message sent successfully!",
        error: "Something went wrong. Please try again.",
        sending: "Sending...",
    },
    pt: {
        success: "Mensagem enviada com sucesso!",
        error: "Algo deu errado. Tente novamente.",
        sending: "Enviando...",
    },
    es: {
        success: "¡Mensaje enviado con éxito!",
        error: "Algo salió mal. Inténtalo de nuevo.",
        sending: "Enviando...",
    },
};

function getFeedbackMsg(key) {
    var lang = localStorage.getItem("lang") || "en";
    return (feedbackMessages[lang] || feedbackMessages.en)[key];
}

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = contactForm.elements.name.value.trim();
    var email = contactForm.elements.email.value.trim();
    var message = contactForm.elements.message.value.trim();

    if (!name || !email || !message) return;

    contactSubmit.disabled = true;
    contactFeedback.textContent = getFeedbackMsg("sending");
    contactFeedback.className =
        "text-sm font-label text-center text-on-surface-variant";

    fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, email: email, message: message }),
    })
        .then(function (res) {
            return res.json().then(function (data) {
                if (!res.ok) throw new Error(data.error || res.status);
                contactFeedback.textContent = getFeedbackMsg("success");
                contactFeedback.className =
                    "text-sm font-label text-center text-primary";
                contactForm.reset();
            });
        })
        .catch(function (err) {
            console.error("Contact form error:", err);
            contactFeedback.textContent = getFeedbackMsg("error");
            contactFeedback.className =
                "text-sm font-label text-center text-error";
        })
        .finally(function () {
            contactSubmit.disabled = false;
        });
});
