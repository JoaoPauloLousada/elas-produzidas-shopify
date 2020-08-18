export default (() => {
  document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("Testimonials", function(e) {
      console.log("Testimonials Event Triggered", e.detail);
    });
  });
})();
