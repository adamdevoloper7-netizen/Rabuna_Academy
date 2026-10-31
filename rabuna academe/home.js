
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-up");

    if (!("IntersectionObserver" in window)) {
        elements.forEach(function (element) {
            element.classList.add("show");
        });
        return;
    }

    const observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");

                    // إيقاف المراقبة بعد ظهور العنصر
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -30px 0px"
        }
    );

    elements.forEach(function (element) {
        observer.observe(element);
    });
});

