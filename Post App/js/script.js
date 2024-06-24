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

let morebtns = document.querySelectorAll(".main-span .bx");

let mainspans = document.querySelectorAll(".main-span");

mainspans.forEach((mainspan, index) => {
  mainspan.addEventListener("mouseover", function () {
    morebtns[index].style.visibility = "visible";
  });
  mainspan.addEventListener("mouseleave", function () {
    morebtns[index].style.visibility = "hidden";
  });
});

let commentbtns = document.querySelectorAll(".left-icon button");
let showcomment = document.querySelectorAll(".comments");

commentbtns.forEach((commentbtn, index) => {
  commentbtn.addEventListener("click", function () {
    if (showcomment[index].style.display === "none" || showcomment[index].style.display === "") {
      showcomment[index].style.display = "flex";
    } else {
      showcomment[index].style.display = "none";
    }
  });
});

