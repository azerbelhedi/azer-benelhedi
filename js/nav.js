var menuIsOpen = false;
var menuButton = document.querySelector("#menu-button");
var menu = document.querySelector("#nav-list");

function openMenu() {
  menuIsOpen = true;
  menuButton.classList.remove("menu-button-open");
  menuButton.classList.add("menu-button-close");
  menu.style.visibility = "visible";
  var opacity = 0;
  var timer = setInterval(() => {
    menu.style.opacity = opacity;
    // console.log("op")
    if (opacity < 1) {
      opacity += 0.05;
    } else {
      clearInterval(timer);
    }
  }, 10);
}

function closeMenu() {
  menuIsOpen = false;
  menuButton.classList.remove("menu-button-close");
  menuButton.classList.add("menu-button-open");

  var opacity = 01;
  var timer = setInterval(() => {
    menu.style.opacity = opacity;
    // console.log("op")
    if (opacity > 0) {
      opacity -= 0.05;
    } else {
      clearInterval(timer);
      menu.style.visibility = "hidden";
    }
  }, 10);
}

function toggleMenu() {
  //   console.log(screen.width);
  if (screen.width < 796) {
    if (menuIsOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }
}
