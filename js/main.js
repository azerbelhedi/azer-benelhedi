function scrollNav() {
  let scroll = document.body.scrollTop || window.pageYOffset;
  let op = min(200, scroll / 5);
  document.querySelector("#navbar").style.backgroundColor =
    "rgba(0, 0, 0, " + op / 20 + ")";

  document.querySelector("#navbar").style.boxShadow =
    "0px 25px 30px rgba(9, 9, 9, " + op / 20 + 20 * op + ")";

  let aboutPosition = document.querySelector("#about").offsetTop;
  let skillsPosition = document.querySelector("#skills").offsetTop;
  let projectsPosition = document.querySelector("#projects").offsetTop;

  // console.log(aboutPosition)
  if (scroll < aboutPosition - 100) {
    document
      .querySelector("#about-nav-item")
      .classList.remove("selected-nav-item");
  }

  if (scroll > aboutPosition - 100 && scroll < skillsPosition - 250) {
    // alert("now")
    document
      .querySelector("#about-nav-item")
      .classList.add("selected-nav-item");
    document
      .querySelector("#skills-nav-item")
      .classList.remove("selected-nav-item");
  } else if (scroll > skillsPosition - 250 && scroll < projectsPosition - 250) {
    document
      .querySelector("#about-nav-item")
      .classList.remove("selected-nav-item");
    document
      .querySelector("#skills-nav-item")
      .classList.add("selected-nav-item");
  }
}
// "0px 25px 30px rgba(17, 17, 17, " + op / 20 + ")";

window.onscroll = function () {
  scrollNav();
};

const min = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};
