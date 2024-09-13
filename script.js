// import gsap from 'https://cdn.skypack.dev/gsap@3.11.1';
// import ScrollTrigger from 'https://cdn.skypack.dev/gsap@3.11.1/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.to(".section2", {
    backgroundPosition: "0% 100%",
    scrollTrigger: {
        trigger: ".section2-parent",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: false
    }
});

gsap.to(".left", {
    x: -900,
    duration: 15,
    scrollTrigger: {
        trigger: '.left',
        start: "top 50%",
        end: "top 20%",
        toggleActions: "restart pause resume reset",
        scrub: true,
        // markers: true
    }
});

gsap.to(".right", {
    x: 900,
    duration: 15,
    scrollTrigger: {
        trigger: ".right",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "restart pause resume none",
        scrub: true,
        // markers: true
    }
});


const antheaTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".right",
        start: "top 20%",
        end: "top 10%",
        toggleActions: "play none none none",
        scrub: true,
        // markers: true
    }
});

antheaTimeline
    .to(".anthea", {
        scale: 0.6,
        duration: 5,
        ease: "power2.out"
    }, "+=2")
    .to(".anthea", {
        opacity: 1,
        duration: 5,
        ease: "power2.out"
    }, "+=0.5");

gsap.fromTo(".cards-container",
    { opacity: 0 },
    {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
            trigger: ".anthea",
            start: "top 50%",
            end: "top 30%",
            toggleActions: "play none none none",
            scrub: true,
            // markers: true 
        }
    }, "-=1.5 "
);

antheaTimeline
    .to(".anthea", {
        opacity: 0,
        duration: 5,
        ease: "power2.out"
    }, "+=0.5");

gsap.fromTo(".card",
    { opacity: 0, y: 30 },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".cards-container",
            start: "top 150%",
            end: "top 30%",
            toggleActions: "play none none none",
            // markers: true 
        }
    }
);

const mobileTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".cards-container",
        start: "top 40%",
        end: "top 10%",
        toggleActions: "play none none none",
        scrub: true,
        // markers: true
    }
});

mobileTimeline
    .set(".mobile-svg", { opacity: 0, scale: 0 })
    .to(".mobile-svg", {
        opacity: 1,
        scale: 1.0,
        duration: 5,
        ease: "power2.out"
    });


const finalCardTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".cards-container",
        start: "top 10%",
        end: "top 0%",
        scrub: true,
        // markers: true
    }
});

finalCardTimeline
.add(() => {
    gsap.set(".card", {
        display: "block",
        position: "absolute",
        width: "155px",
        height: "90px",
        display: "flex",
        background: "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))"
    });

    gsap.set(".card-heading", { fontSize: "12px" });
    gsap.set(".card-body", { fontSize: "14px" });
    gsap.set(".mgdL", { fontSize: "9px" });
    gsap.set(".high", { fontSize: "9px" });
})
    .to(".card1", {
        x: "221%",
        y: "47%",
        duration: 3,
        stagger: 0.1,
        ease: "power2.out"
    })
    .to(".card2", {
        x: "88%",
        y: "-177%",
        // width: "150px", 
        // height: "100px", 
        duration: 3,
        stagger: 0.1,
        ease: "power2.out"
    })
    .to(".card3", {
        x: "271%",
        y: "-358%",
        // width: "150px", 
        // height: "100px", 
        fontSize: "20px",
        duration: 3,
        stagger: 0.1,
        ease: "power2.out"
    })
    .to(".card4", {
        x: "-209%",
        y: "-98%",
        // width: "150px",
        // height: "100px", 
        duration: 3,
        // stagger: 0.1, 
        ease: "power2.out"
    })
    .to(".card5", {
        x: "-280%",
        y: "-197%",
        // width: "150px", 
        // height: "100px",
        duration: 3,
        // stagger: 0.1,
        ease: "power2.out"
    })
    .to(".card6", {
        x: "-16%",
        y: "-239%",
        // width: "150px", 
        // height: "100px", 
        duration: 3,
        // stagger: 0.1, 
        ease: "power2.out"
    });


