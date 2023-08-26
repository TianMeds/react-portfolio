import { gsap, Expo } from 'gsap';

export async function runMenuAnimation() {
  const t1 = gsap.timeline({ paused: true });

  t1.to('.nav-container', {
    duration: 1,
    left: 0,
    ease: Expo.easeInOut,
  });

  t1.staggerFrom(
    '.menu > div',
    0.5,
    {
      y: 100,
      opacity: 0,
      ease: Expo.easeOut,
      stagger: 0.1,
    },
    '-=0.4'
  );

  t1.staggerTo(
    '.menu > div',
    0.5,
    {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
      stagger: 0.1,
    },
    '-=0.4'
  );

  t1.staggerFrom(
    '.socials',
    0.5,
    {
      y: 100,
      opacity: 0,
      ease: Expo.easeOut,
      stagger: 0.1,
    },
    '-=0.4'
  );

  t1.staggerTo(
    '.socials',
    0.5,
    {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
      stagger: 0.1,
    },
    '-=0.4'
  );

  t1.reverse();


  $(document).on('click', '.menu-open', function () {
    t1.reversed(!t1.reversed());
  });

  $(document).on('click', '.menu-close', function () {
    t1.reversed(!t1.reversed());
  });
  
} 
