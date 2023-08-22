export function runIntroAnimation() {
    const intro = document.querySelector('.intro') as HTMLElement;
    const logo1Span = document.querySelectorAll('.logo1');
  
    setTimeout(() => {
      logo1Span.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add('active');
        }, (idx + 1) * 400);
      });
  
      setTimeout(() => {
        logo1Span.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx + 1) * 50);
        });
      }, 2000);
  
      setTimeout(() => {
        intro.style.top = '-100vh';
      }, 2300);
    }, 1000); // Adjust the delay as needed
  }