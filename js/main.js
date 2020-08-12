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
  scrollNav2();
};

const min = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
};

let scrollArray = [
  {
    targetedId: "#about",
    reactId: "#about-nav-item",
    reactionClass: ".selected-nav-item",
  },
  {
    targetedId: "#skills",
    reactId: "#skills-nav-item",
    reactionClass: ".selected-nav-item",
  },
  {
    targetedId: "#projects",
    reactId: "#projects-nav-item",
    reactionClass: ".selected-nav-item",
  },
  {
    targetedId: "#experience",
    reactId: "#experience-nav-item",
    reactionClass: ".selected-nav-item",
  },
  {
    targetedId: "#education",
    reactId: "#education-nav-item",
    reactionClass: ".selected-nav-item",
  },
  {
    targetedId: "#s",
    reactId: "#education-nav-item",
    reactionClass: ".selected-nav-item",
  },
];

function scrollNav2() {
  let scroll = document.body.scrollTop || window.pageYOffset;
  let op = min(200, scroll / 5);
  document.querySelector("#navbar").style.backgroundColor =
    "rgba(0, 0, 0, " + op / 20 + ")";

  document.querySelector("#navbar").style.boxShadow =
    "0px 25px 30px rgba(9, 9, 9, " + op / 20 + 20 * op + ")";

  for (let i = 0; i < scrollArray.length - 1; i++) {
    let firstTargetPosition = document.querySelector(scrollArray[i].targetedId)
      .offsetTop;

    // let secondTargetPosition = document.querySelector(scrollArray[i + 1].targetedId)
    //   .offsetTop || 400;
    let secondTargetPosition =
      firstTargetPosition +
      document.querySelector(scrollArray[i].targetedId).offsetHeight;

    // console.log(document.querySelector(scrollArray[i].targetedId).offsetHeight);

    if (i < scrollArray.length - 2) {
      secondTargetPosition = document.querySelector(
        scrollArray[i + 1].targetedId
      ).offsetTop;
    } else {
      // console.log(secondTargetPosition);
    }

    if (
      scroll > firstTargetPosition - 100 &&
      scroll < secondTargetPosition - 100
    ) {
      // console.log(firstTargetPosition)
      document
        .querySelector(scrollArray[i].reactId)
        .classList.add("selected-nav-item");
    } else {
      document
        .querySelector(scrollArray[i].reactId)
        .classList.remove("selected-nav-item");
    }

    // if (
    //   scroll > firstTargetPosition - 100 &&
    //   scroll < secondTargetPosition - 250
    // ) {
    //   console.log(i);

    //   document
    //     .querySelector(scrollArray[i].reactId)
    //     .classList.add("selected-nav-item");
    //   document
    //     .querySelector(scrollArray[i + 1].reactId)
    //     .classList.remove("selected-nav-item");
    // }
  }

  // console.log(aboutPosition)
}
