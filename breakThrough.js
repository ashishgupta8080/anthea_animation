gsap.registerPlugin(ScrollTrigger);

function createAnimations() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2-parent",
            start: "top top",
            end: "bottom top",
            toggleActions: "restart pause resume reset",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            // markers: true
        }
    });

    const mm = gsap.matchMedia();

    mm.add("(max-width: 425px)", () => {
        tl.to(".eyva-img", { y: -650, scale: 0.8, duration: 3 })
            .to(".breakThrough-txt", { opacity: 0, duration: 1.8 }, "-=1.2")
            .fromTo(".break-through-content", { opacity: 0, y: 0 }, { opacity: 1, y: 1, duration: 3 }, "-=1.2");
    });

    mm.add("(min-width: 426px) and (max-width: 767px)", () => {
        tl.to(".eyva-img", { y: -700, scale: 0.9, duration: 3, ease: "power2.out", })
            .to(".breakThrough-txt", { opacity: 0, duration: 1.8 }, "-=1.2")
            .fromTo(".break-through-content", { opacity: 0, y: 0 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1.2");
    });

    mm.add("(min-width: 768px)", () => {
        tl.to(".eyva-img", { y: -700, scale: 0.8, duration: 3, ease: "power2.out" })
            .to(".breakThrough-txt", { opacity: 0, duration: 1.5 }, "-=1")
            .fromTo(".break-through-content", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 3, ease: "power2.out" }, "-=1");
    });

    ScrollTrigger.refresh();
}

createAnimations();
