export function runScrollAnimation() {
    const image = document.querySelector('.image_div') as HTMLElement; // Use type assertion to specify the type
    image.addEventListener('wheel', (evnt: WheelEvent) => {
      evnt.preventDefault();
      image.scrollLeft += evnt.deltaY;
    });
}
