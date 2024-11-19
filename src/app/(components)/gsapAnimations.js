/* eslint-disable no-unused-vars */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation function for fade-in-up effect
export const animateFadeInUp = (elements, triggerElement) => {
    gsap.fromTo(
        elements,
        { opacity: 0, y: 150 }, // Starting state
        {
            opacity: 1,
            y: 0, // Final state
            duration: 0.5,
            ease: 'easeOut',
            stagger: 0.3,
            scrollTrigger: {
                trigger: triggerElement,
                start: 'top 60%', // Animation starts when 60% of the section is in view
            },
        }
    );
};

// Animation function for rotating the image
export const animateImageRotation = (image, triggerElement) => {
    gsap.to(image, {
        rotation: 360, // Rotate the image 360 degrees
        ease: 'none', // Smooth rotation
        scrollTrigger: {
            trigger: triggerElement,
            start: 'top center', // Animation starts when the top of the section hits the center of the viewport
            end: 'bottom top', // Animation ends when the section leaves the viewport
            scrub: true, // Allows smooth animation along with scroll
        },
    });
};

// Animation function for infinite smooth up and down motion
export const animateInfiniteUpDown = (element) => {
    gsap.to(element, {
        y: 50, // Move 50px down
        duration: 2, // Duration for one up-down cycle
        ease: 'power1.inOut', // Smooth easing
        repeat: -1, // Infinite repeat
        yoyo: true, // Reverse the animation (upward after downward)
    });
};

// Animation function for fade-in-up effect with flip
export const animateFadeInFlip = (elements, triggerElement) => {
    gsap.fromTo(
        elements,
        { opacity: 0, y: 50, rotationY: 90 }, // Starting state with a flip on Y-axis
        {
            opacity: 1,
            y: 0,
            rotationY: 0, // Final state with no rotation
            duration: 0.5,
            ease: 'easeOut',
            stagger: 0.3,
            scrollTrigger: {
                trigger: triggerElement,
                start: 'top 60%', // Animation starts when 60% of the section is in view
            },
        }
    );
};

// Animation function for flipping image on scroll
export const animateImageFlip = (image, triggerElement) => {
    gsap.to(image, {
        rotationY: 360, // Rotate the image 360 degrees along Y-axis
        ease: 'none',
        scrollTrigger: {
            trigger: triggerElement,
            start: 'top center', // Animation starts when the top of the section hits the center of the viewport
            end: 'bottom top', // Animation ends when the section leaves the viewport
            scrub: true, // Allows smooth animation along with scroll
        },
    });
};

// Infinite 3D flip animation
export const animateInfiniteFlip = (element) => {
    gsap.to(element, {
        rotationY: 360, // 360-degree rotation along Y-axis
        duration: 3, // Duration for one complete rotation
        ease: 'power1.inOut',
        repeat: -1, // Infinite repeat
        yoyo: false, // No reverse, continuous rotation in the same direction
    });
};

// Infinite smooth up-down motion combined with flip
export const animateInfiniteUpDownFlip = (element) => {
    gsap.to(element, {
        y: 50, // Move 50px down
        duration: 2, // Duration for one up-down cycle
        ease: 'power1.inOut',
        repeat: -1, // Infinite repeat
        yoyo: true, // Reverse the animation (upward after downward)
        rotationY: 360, // Add continuous flip while moving up and down
    });
};
