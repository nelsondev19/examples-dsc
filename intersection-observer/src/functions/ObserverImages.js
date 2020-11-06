export const ObserverImages = (ref, setShowImage) => {
  const observer = new IntersectionObserver((enteries, observer) => {
    enteries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      setShowImage(true);
      observer.disconnect();
    });
  });
  observer.observe(ref);
};
