import { gsap } from 'gsap';

export function runCursorAnimation() {
  const $  = jQuery;
  const cursor = $('.cursor');
  const follower = $('.cursor-follower');

  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;

  gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: () => {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      gsap.set(follower, {
        css: {
          left: posX - 20,
          top: posY - 20,
        },
      });

      gsap.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY,
        },
      });
    },
  });

  $(document).on('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  const addCursorListeners = (project: string) => {
    const projectElement = $(`.row .${project}`);

    projectElement.on('mouseenter', () => {
      cursor.addClass('active');
      follower.addClass('active');
    });

    projectElement.on('mouseleave', () => {
      cursor.removeClass('active');
      follower.removeClass('active');
    });
  };

  addCursorListeners('project1');
  addCursorListeners('project2');
  addCursorListeners('project3');
  addCursorListeners('project4');
  addCursorListeners('project5');
  addCursorListeners('project6');
  addCursorListeners('project7');
  addCursorListeners('project8');
  addCursorListeners('project9');
  addCursorListeners('project10');
  addCursorListeners('project11');
  addCursorListeners('project12');
  addCursorListeners('project13');
}
