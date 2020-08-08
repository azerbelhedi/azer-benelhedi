function scrollNav() {
  let scroll = document.body.scrollTop || window.pageYOffset;
  let op = min(200, scroll / 5);
  document.querySelector("#navbar").style.backgroundColor =
    "rgba(0, 0, 0, " + op / 20 + ")";

  document.querySelector("#navbar").style.boxShadow =
    "0px 15px 30px rgba(17, 17, 17, " + op / 20 + ")";
}

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
