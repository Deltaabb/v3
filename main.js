// Simple GSAP animation example

// On page load, fade in the main headings if present
window.addEventListener("load", () => {
  // Check if there's an element with class "title"
  const title = document.querySelector(".title");
  if (title) {
    gsap.from(title, {
      duration: 1.5,
      opacity: 0,
      y: -50,
      ease: "power2.out",
    });
  }

  // Check if there's an element with class "subtitle"
  const subtitle = document.querySelector(".subtitle");
  if (subtitle) {
    gsap.from(subtitle, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      delay: 0.5,
    });
  }
});
