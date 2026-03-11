import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element, delay = 0) => {
    gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        }
    );
};

export const fadeIn = (element, delay = 0) => {
    gsap.fromTo(
        element,
        { opacity: 0 },
        {
            opacity: 1,
            duration: 1,
            delay,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        }
    );
};

export const scaleIn = (element, delay = 0) => {
    gsap.fromTo(
        element,
        { opacity: 0, scale: 0.8 },
        {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        }
    );
};

export const slideInLeft = (element, delay = 0) => {
    gsap.fromTo(
        element,
        { opacity: 0, x: -100 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        }
    );
};

export const slideInRight = (element, delay = 0) => {
    gsap.fromTo(
        element,
        { opacity: 0, x: 100 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        }
    );
};
