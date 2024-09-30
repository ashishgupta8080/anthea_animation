
function updateTextBasedOnWidth() {
    const textElement = document.getElementById('body-text');

    if (window.innerWidth <= 600) {
        textElement.textContent = "It measures 6 vitals in 60 seconds.Non-invasive literally. No pricks, no pain";
    } else {
        textElement.textContent = "Step into the new age of wellness where monitoring Blood Glucose is effortless!";
    }
}

// Initial call to set the text when the page loads
updateTextBasedOnWidth();

// Event listener for window resize
window.addEventListener('resize', updateTextBasedOnWidth);

gsap.registerPlugin(ScrollTrigger);

gsap.to(".section2", {
    backgroundPosition: "0% 100%",
    scrollTrigger: {
        trigger: ".section2",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        // markers: true
    }
});

gsap.to(".left", {
    x: -500,
    duration: 5,
    scrollTrigger: {
        trigger: '.left',
        start: "top 50%",
        end: "top 10%",
        toggleActions: "restart pause resume reset",
        scrub: true,
        // markers: true
    }
});

gsap.to(".right", {
    x: 500,
    duration: 5,
    scrollTrigger: {
        trigger: ".right",
        start: "top 50%",
        end: "top 10%",
        toggleActions: "restart pause resume reset",
        scrub: true,
        // markers: true
    }
});


const antheaTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".right",
        start: "top 10%",
        end: "top 0%",
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
        duration: 1,
        ease: "power2.out"
    });

function getResponsiveValues() {
    if (window.matchMedia("(max-width: 425px)").matches) {
        return {
            card1: { x: "74%", y: "128%" },
            card2: { x: "34%", y: "37%" },
            card3: { x: "102%", y: "-70%" },
            card4: { x: "-35%", y: "10%" },
            card5: { x: "-47%", y: "-10%" },
            card6: { x: "0%", y: "-15%" }
        };
    } else if (window.matchMedia("(max-width: 1440px)").matches) {
        return {
            card1: { x: "180%", y: "-32%" },
            card2: { x: "78%", y: "-236%" },
            card3: { x: "216%", y: "-402%" },
            card4: { x: "-109%", y: "-168%" },
            card5: { x: "-166%", y: "-256%" },
            card6: { x: "36%", y: "-283%" }
        };
    }
    else {
        return {
            card1: { x: "221%", y: "47%" },
            card2: { x: "88%", y: "-177%" },
            card3: { x: "271%", y: "-358%" },
            card4: { x: "-209%", y: "-98%" },
            card5: { x: "-280%", y: "-197%" },
            card6: { x: "-16%", y: "-239%" }
        };
    }
}

const responsiveValues = getResponsiveValues();


const finalCardTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".cards-container",
        start: "top 10%",
        end: "top 0%",
        scrub: true,
        // markers: true
    }
});

// Initial setup for card positions
finalCardTimeline.add(() => {
    gsap.set(".card", {
        display: "block",
        position: "absolute",
        width: "155px",
        height: "90px",
        display: "flex",
        background: "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))"
    });

    // Set card styles
    gsap.set(".card-img", { width: "32px", height: "32px" })
    gsap.set(".card-heading", { fontSize: "12px" });
    gsap.set(".card-body", { fontSize: "14px" });
    gsap.set(".mgdl", { fontSize: "9px" });
    gsap.set(".high", { fontSize: "9px" });
});

// Define animations for cards
finalCardTimeline
    .to(".card1", {
        x: responsiveValues.card1.x,
        y: responsiveValues.card1.y,
        duration: 3,
        ease: "power2.out"
    })
    .to(".card2", {
        x: responsiveValues.card2.x,
        y: responsiveValues.card2.y,
        duration: 3,
        ease: "power2.out"
    })
    .to(".card3", {
        x: responsiveValues.card3.x,
        y: responsiveValues.card3.y,
        duration: 3,
        ease: "power2.out"
    })
    .to(".card4", {
        x: responsiveValues.card4.x,
        y: responsiveValues.card4.y,
        duration: 3,
        ease: "power2.out"
    })
    .to(".card5", {
        x: responsiveValues.card5.x,
        y: responsiveValues.card5.y,
        duration: 3,
        ease: "power2.out"
    })
    .to(".card6", {
        x: responsiveValues.card6.x,
        y: responsiveValues.card6.y,
        duration: 3,
        ease: "power2.out"
    });

const mm = gsap.matchMedia();
mm.add("(max-width: 425px)", () => {

})

