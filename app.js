const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navliston = document.querySelector(".nav-list-on")
let animation = $("#contact").waypoint(function () {
  console.log("I'm Here");
  $("#contact").addClass("white");
});

hamburgerMenu.addEventListener("click", () => {
  if (hamburgerMenu.classList.contains("on")) {
    document.querySelector(".first").classList.remove("first-rotate");
    document.querySelector(".second").classList.remove("second-hide");
    document.querySelector(".third").classList.remove("third-rotate");
    document.querySelector(".nav-list-on").style.opacity = "-1";
    hamburgerMenu.classList.remove("on");
    document.querySelector("body").style.overflowY = "visible"
  } else {
    document.querySelector(".first").classList.add("first-rotate");
    document.querySelector(".second").classList.add("second-hide");
    document.querySelector(".third").classList.add("third-rotate");
    document.querySelector(".nav-list-on").style.opacity = "1";
    document.querySelector("body").style.overflowY = "hidden"
    hamburgerMenu.classList.add("on");
    window.addEventListener("click", (e) => {
        if(e.target.tagName == "A") {
            document.querySelector(".first").classList.remove("first-rotate");
            document.querySelector(".second").classList.remove("second-hide");
            document.querySelector(".third").classList.remove("third-rotate");
            document.querySelector(".nav-list-on").style.opacity = "-1";
            hamburgerMenu.classList.remove("on");
            document.querySelector("body").style.overflowY = "visible";
        }
    })
  }
});

const changeBg = () => {
    
}