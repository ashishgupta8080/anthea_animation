
function updateTextBasedOnWidth() {
    const textElement = document.getElementById('body-text');

    if (window.innerWidth <= 600) {
        textElement.textContent = "It measures 6 vitals in 60 seconds.Non-invasive literally. No pricks, no pain";
    } else {
        textElement.textContent = "Step into the new age of wellness where monitoring Blood Glucose is effortless!";
    }
}

updateTextBasedOnWidth();

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

function setAnimations() {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    if (mediaQuery.matches) {
        gsap.to(".left", {
            x: -500,
            duration: 5,
            scrollTrigger: {
                trigger: '.left',
                start: "top 50%",
                end: "top top",
                toggleActions: "restart pause resume reset",
                scrub: 1,
                // markers: true
            }
        });

        gsap.to(".right", {
            x: 500,
            duration: 5,
            scrollTrigger: {
                trigger: ".right",
                start: "top 50%",
                end: "top top",
                toggleActions: "restart pause resume reset",
                scrub: 1,
                // markers: true
            }
        }, "+=2");
    } else {
        gsap.to(".left", {
            opacity: 0,
            duration: 5,
            scrollTrigger: {
                trigger: '.left',
                start: "top 50%",
                end: "top 20%",
                toggleActions: "restart pause resume reset",
                scrub: 1,
                // markers: true
            }
        });

        gsap.to(".right", {
            opacity: 0,
            duration: 5,
            scrollTrigger: {
                trigger: ".right",
                start: "top 50%",
                end: "top 20%",
                toggleActions: "restart pause resume reset",
                scrub: 1,
                // markers: true
            }
        }, "+=2");
    }
}

setAnimations();

window.addEventListener('resize', setAnimations);

const antheaTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".right",
        start: "top 40%",
        end: "top 10%",
        toggleActions: "play none none none",
        scrub: 1,
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
        duration: 5,
        scrollTrigger: {
            trigger: ".anthea",
            start: "top 50%",
            end: "top 20%",
            toggleActions: "play none none none",
            scrub: 1,
            // markers: true 
        }
    }
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
        stagger: 0.5,
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
        start: "top 80%",
        end: "top 40%",
        toggleActions: "play none none none",
        scrub: 1,
        // markers: true
    }
});

mobileTimeline
    .set(".mobile-svg", { opacity: 0, scale: 0 })
    .to(".mobile-svg", {
        opacity: 1,
        scale: 0.9,
        duration: 5,
        ease: "power2.out"
    });

mobileTimeline
    .set(".btn-container", { opacity: 0, scale: 0 })
    .to(".btn-container", {
        opacity: 1,
        scale: 1.0,
        duration: 0.1,
        ease: "power2.out"
    }, "+=1");

if (window.innerWidth > 768) {
    mobileTimeline.set(".left-thumb", { opacity: 0, scale: 0 })
        .to(".left-thumb", {
            opacity: 1,
            scale: 1.0,
            duration: 0.1,
            ease: "power2.out"
        }, "+=1");

    mobileTimeline
        .set(".right-thumb", { opacity: 0, scale: 0 })
        .to(".right-thumb", {
            opacity: 1,
            scale: 1.0,
            duration: 0.1,
            ease: "power2.out"
        }, "+=1");

}

function getResponsiveValues() {
    if (window.matchMedia("(max-width: 425px)").matches) {
        return {
            width: "36vw",
            height: "10vh",
            card1: { x: "74%", y: "90%" },
            card2: { x: "34%", y: "-13%" },
            card3: { x: "102%", y: "-126%" },
            card4: { x: "-37%", y: "-33%" },
            card5: { x: "-50%", y: "-55%" },
            card6: { x: "-5%", y: "-70%" }
        };
    } else if (window.matchMedia("(max-width: 768px)").matches) {
        return {
            width: "20vw",
            height: "10vh",
            card1: { x: "174%", y: "59%" },
            card2: { x: "114%", y: "-6%" },
            card3: { x: "203%", y: "-93%" },
            card4: { x: "-148%", y: "-39%" },
            card5: { x: "-153%", y: "-57%" },
            card6: { x: "-94%", y: "-83%" }
        };
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
        return {
            width: "15vw",
            height: "10vh",
            card1: { x: "101%", y: "8%" },
            card2: { x: "36%", y: "-73%" },
            card3: { x: "108%", y: "-191%" },
            card4: { x: "-62%", y: "-75%" },
            card5: { x: "-167%", y: "-70%" },
            card6: { x: "-49%", y: "-98%" }
        };
    } else if (window.matchMedia("(max-width: 1440px)").matches) {
        return {
            width: "11vw",
            height: "10vh",
            card1: { x: "102%", y: "20%" },
            card2: { x: "29%", y: "-70%" },
            card3: { x: "91%", y: "-198%" },
            card4: { x: "-70%", y: "-40%" },
            card5: { x: "-161%", y: "-77%" },
            card6: { x: "-36%", y: "-94%" }
        };
    }
    else {
        return {
            width: "8vw",
            height: "10vh",
            card1: { x: "182%", y: "13%" },
            card2: { x: "84%", y: "-55%" },
            card3: { x: "171%", y: "-165%" },
            card4: { x: "-128%", y: "-42%" },
            card5: { x: "-250%", y: "-69%" },
            card6: { x: "-78%", y: "-69%" }
        };
    }
}

const responsiveValues = getResponsiveValues();


const finalCardTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".cards-container",
        start: "top 20%",
        end: "top 0%",
        scrub: true,
        markers: true
    }
});

finalCardTimeline.add(() => {
    gsap.set(".card", {
        display: "block",
        position: "absolute",
        width: responsiveValues.width,
        height: responsiveValues.height,
        display: "flex",
        background: "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))"
    });

    gsap.set(".card-img", { width: "32px", height: "32px" })
    gsap.set(".card-heading", { fontSize: "12px" });
    gsap.set(".card-body", { fontSize: "14px" });
    gsap.set(".mgdl", { fontSize: "9px" });
    gsap.set(".high", { fontSize: "9px" });
});

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



