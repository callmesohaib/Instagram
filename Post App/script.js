let storynames = document.querySelectorAll(".story-section .story p");

storynames.forEach(function (storyname) {
  if (storyname.textContent.length > 8) {
    storyname.textContent = storyname.textContent.slice(0, 8) + "...";
  }
});
