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
            toggleActions: "restart pause resume none",
            // scrub: true, 
            pin: true,
            anticipatePin: 1,
            markers: false, 
            invalidateOnRefresh: true
        }
    });

    const mm = gsap.matchMedia();

    mm.add("(max-width: 425px)", () => {
        tl.to(".eyva-img", { y: -650, scale: 0.9, duration: 3 }) 
          .to(".breakThrough-txt", { opacity: 0, duration: 1.5 })
          .fromTo(".break-through-content", { opacity: 0, y: 0 }, { opacity: 1, y: 0, duration: 1 });
    });

    mm.add("(min-width: 426px) and (max-width: 767px)", () => {
        tl.to(".eyva-img", { y: -700, scale: 0.9, duration: 3 }) 
          .to(".breakThrough-txt", { opacity: 0, duration: 1.5 }, "-=1.2")
          .fromTo(".break-through-content", { opacity: 0, y: 0 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=1.2");
    });

    mm.add("(min-width: 768px)", () => {
        tl.to(".eyva-img", { y: -700, scale: 0.8, duration: 2 }) 
          .to(".breakThrough-txt", { opacity: 0, duration: 1 }, "-=1")
          .fromTo(".break-through-content", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2, ease: "power2.out" }, "-=1");
    });

    ScrollTrigger.refresh();
}

createAnimations();
window.addEventListener('resize', debounce(createAnimations, 200)); 
