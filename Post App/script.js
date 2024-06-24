let storynames = document.querySelectorAll(".story-section .story p");

storynames.forEach(function (storyname) {
  if (storyname.textContent.length > 8) {
    storyname.textContent = storyname.textContent.slice(0, 8) + "...";
  }
});

let comments = document.querySelectorAll(".add-comment input");
let postbtns = document.querySelectorAll(".add-comment button");

comments.forEach((comment, index) => {
  comment.addEventListener("input", function () {
    if (comment.value.length > 0) {
      postbtns[index].style.visibility = "visible";
    } else {
      postbtns[index].style.visibility = "hidden";
    }
  });
});


