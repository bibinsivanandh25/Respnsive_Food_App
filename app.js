window.addEventListener("scroll", function () {
  let header = this.document.getElementById("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});
