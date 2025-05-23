$(document).ready(function() {
    const progressFill = document.querySelector(".progress-fill");
    var swiper = new Swiper(".parallax-slider", {
        speed: 1000,
        parallax: true,
        loop: true,
        autoplay: {
            delay: 10000, // Adjust autoplay delay as needed
            disableOnInteraction: false
        },
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -1000]
            },
            next: {
                translate: ["100%", 0, 0]
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        on: {
            slideChange: function () {
                // Reset progress bar when slide changes
                progressFill.style.width = '0%';
            },
            autoplayTimeLeft(s, time, progress) {
                // Update progress bar width based on autoplay time left
                progressFill.style.width = (1 - progress) * 100 + '%';
            }
        }
    });
});