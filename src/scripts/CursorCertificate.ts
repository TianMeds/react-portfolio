import { gsap } from 'gsap';
import $ from 'jquery';

export function runCursorCertificateAnimation() {
  const cursors = $(".cursors");
  const followers = $(".cursor-followers");

  let posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

  gsap.to({}, {
    repeat: -1,
    onRepeat: () => {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      gsap.set(followers, {
        left: posX - 20,
        top: posY - 20
      });

      gsap.set(cursors, {
        left: mouseX,
        top: mouseY
      });
    },
    duration: 0.016
  });

  $(document).on("mousemove", (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  const addCursorListeners = () => {
    const awardBodyCerts = $(".award-body .cert");

    awardBodyCerts.on("mouseenter", () => {
      cursors.addClass("active");
      followers.addClass("active");
    });

    awardBodyCerts.on("mouseleave", () => {
      cursors.removeClass("active");
      followers.removeClass("active");
    });
  };

  addCursorListeners();
}
