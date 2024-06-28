// animations.js

export const animateOnScroll = (element, animation) => {
  if (!element) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animation);
        } else {
          entry.target.classList.remove(animation);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(element);

  return observer; // Return the observer so it can be disconnected later
};
