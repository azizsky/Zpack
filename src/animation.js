import { useEffect } from 'react';

const useIntersectionAnimation = (selector, animationClass, threshold = 0.1) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            entry.target.classList.remove('hidden');
          } else {
            entry.target.classList.remove(animationClass);
            entry.target.classList.add('hidden');
          }
        });
      },
      { threshold }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [selector, animationClass, threshold]);
};

export default useIntersectionAnimation;
