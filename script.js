const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));/* Image loader:
   - Upload your image files into the assets/ folder with the exact file names used in index.html.
   - If an image file is not uploaded yet, the blue placeholder text will stay visible.
   - When the image loads successfully, the card switches automatically to the real photo.
*/
document.querySelectorAll('.portrait-img, .proof-img').forEach((img) => {
  const wrapper = img.closest('.portrait-card, .photo-drop');
  const showImage = () => {
    if (img.naturalWidth > 0 && wrapper) {
      wrapper.classList.add('is-loaded');
    }
  };
  const hideBrokenImage = () => {
    if (wrapper) {
      wrapper.classList.remove('is-loaded');
    }
    img.style.display = 'none';
  };

  if (img.complete) {
    showImage();
  }

  img.addEventListener('load', showImage);
  img.addEventListener('error', hideBrokenImage);
});
