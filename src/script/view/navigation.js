

function naviBar() {
  var x = document.querySelector("nav-bar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

export default naviBar;