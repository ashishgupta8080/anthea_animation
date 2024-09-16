gsap.registerPlugin(ScrollTrigger);

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function createAnimations() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2-parent",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
        }
    });

    const viewportWidth = window.innerWidth;

    if (viewportWidth == 768) {
        tl.to(".eyva-img", {
            y: -700,
            scale: 0.8,
            ease: "power2.out",
            duration: 3,
        });

        tl.to(".breakThrough-txt", {
            opacity: 0,
            duration: 1.5,
        }, "-=1");

        tl.fromTo(".break-through-content",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 3,
                ease: "power2.out",
            }, "-=1");
    }
    else if (viewportWidth >= 320 && viewportWidth <= 425) {
        tl.to(".eyva-img", {
            y: -650,
            scale: 0.9,
            ease: "power2.out",
            duration: 5,
        });

        tl.to(".breakThrough-txt", {
            opacity: 0,
            duration: 1.8,
        }, "-=1.2");

        tl.fromTo(".break-through-content",
            { opacity: 0, y: 0 },
            {
                opacity: 1,
                y: -0,
                duration: 1,
                ease: "power2.out",
            }, "-=1.2");
    }
    else if (viewportWidth >= 426 && viewportWidth <= 767) {
        tl.to(".eyva-img", {
            y: -700,
            scale: 0.9,
            ease: "power2.out",
            duration: 5,
        });

        tl.to(".breakThrough-txt", {
            opacity: 0,
            duration: 1.8,
        }, "-=1.2");

        tl.fromTo(".break-through-content",
            { opacity: 0, y: 0 },
            {
                opacity: 1,
                y: -0,
                duration: 1,
                ease: "power2.out",
            }, "-=1.2");
    }
    else {
        tl.to(".eyva-img", {
            y: -650,
            scale: 0.7,
            ease: "power2.out",
            duration: 4,
        });

        tl.to(".breakThrough-txt", {
            opacity: 0,
            duration: 2,
        }, "-=1.5");

        tl.fromTo(".break-through-content",
            { opacity: 0, y: 65 },
            {
                opacity: 1,
                y: 0,
                duration: 5,
                ease: "power2.out",
            }, "-=1.5");
    }

    ScrollTrigger.refresh();
}
createAnimations();
window.addEventListener('resize', debounce(createAnimations, 200));
