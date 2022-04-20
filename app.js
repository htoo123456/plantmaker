const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navliston = document.querySelector(".nav-list-on");
// let animation = $("#service").waypoint(function () {
//   const circleImages = document.querySelectorAll(".service .circle-image")
//   circleImages.forEach(img => {
//     img.classList.add("rotate-center")
//   })
// });

hamburgerMenu.addEventListener("click", () => {
  if (hamburgerMenu.classList.contains("on")) {
    document.querySelector(".first").classList.remove("first-rotate");
    document.querySelector(".second").classList.remove("second-hide");
    document.querySelector(".third").classList.remove("third-rotate");
    document.querySelector(".nav-list-on").classList.remove("slide-in");
    document.querySelector(".nav-list-on").classList.add("slide-out");
    hamburgerMenu.classList.remove("on");
    document.querySelector("body").style.overflowY = "visible";
  } else {
    document.querySelector(".first").classList.add("first-rotate");
    document.querySelector(".second").classList.add("second-hide");
    document.querySelector(".third").classList.add("third-rotate");
    document.querySelector(".nav-list-on").classList.add("slide-in");
    document.querySelector(".nav-list-on").classList.remove("slide-out");
    document.querySelector("body").style.overflowY = "hidden";
    hamburgerMenu.classList.add("on");
    window.addEventListener("click", (e) => {
      if (e.target.tagName == "A") {
        document.querySelector(".first").classList.remove("first-rotate");
        document.querySelector(".second").classList.remove("second-hide");
        document.querySelector(".third").classList.remove("third-rotate");
        document.querySelector(".nav-list-on").classList.remove("slide-in");
        document.querySelector(".nav-list-on").classList.remove("slide-out");
        hamburgerMenu.classList.remove("on");
        document.querySelector("body").style.overflowY = "visible";
      }
    });
  }
});

const changeBg = () => {};
