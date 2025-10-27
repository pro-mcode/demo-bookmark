const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

btn.addEventListener("click", navToggle);
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    logo.setAttribute("src", "./assets/images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./assets/images/logo-bookmark.svg");
  }
}

// const btn = document.getElementById("menu-btn");
// const menu = document.getElementById("menu");

// btn.addEventListener("click", () => {
//   btn.classList.toggle("open");
//   menu.classList.toggle("active");
// });

// Ensure only first panel is visible on load
// window.addEventListener("DOMContentLoaded", () => {
//   panels.forEach((panel, index) => {
//     if (index !== 0) panel.classList.add("hidden"); // hide all except first
//   });

//   // Activate first tab styles
//   tabs[0].children[0].classList.add(
//     "border-secondary",
//     "border-b-2",
//     "md:border-b-0"
//   );
// });
// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-secondary",
      "border-b-2",
      "md:border-b-0"
    );
  });

  // Hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  // Activate the clicked tab
  e.currentTarget.children[0].classList.add(
    "border-secondary",
    "border-b-2",
    "md:border-b-0"
  );

  // Show the corresponding panel
  const classString = e.currentTarget.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}
