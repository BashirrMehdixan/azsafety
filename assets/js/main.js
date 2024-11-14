const bannerSlides = document.querySelectorAll('.banner_glide .glide__slide');

bannerSlides.forEach(item => {
    item.style.backgroundImage = `url(${item.dataset.bg}`
})

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter_item span");

    const options = {
        root: null,
        threshold: 0.5,
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const targetValue = parseInt(element.getAttribute("data-client") ||
                    element.getAttribute("data-equipment") ||
                    element.getAttribute("data-warranty"));

                if (!isNaN(targetValue)) {
                    animateCount(element, targetValue);
                    observer.unobserve(element);
                }
            }
        });
    };

    const animateCount = (element, target) => {
        let current = 0;
        const increment = Math.ceil(target / 50);

        const updateCount = () => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
            } else {
                element.textContent = current;
                requestAnimationFrame(updateCount);
            }
        };

        updateCount();
    };
    const observer = new IntersectionObserver(observerCallback, options);
    counters.forEach(counter => observer.observe(counter));
});
