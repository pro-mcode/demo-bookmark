const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-secondary",
      "border-b-2",
      "md:border-b-0"
    );
  });

  // Hide all panels with transition
  panels.forEach((panel) => {
    panel.classList.remove("opacity-100", "translate-y-0");
    panel.classList.add("opacity-0", "-translate-y-4", "pointer-events-none");
  });

  // Activate the clicked tab
  e.currentTarget.children[0].classList.add(
    "border-secondary",
    "border-b-2",
    "md:border-b-0"
  );

  // Show the corresponding panel smoothly
  const classString = e.currentTarget.getAttribute("data-target");
  const targetPanel = document
    .getElementById("panels")
    .getElementsByClassName(classString)[0];

  targetPanel.classList.remove(
    "opacity-0",
    "-translate-y-4",
    "pointer-events-none"
  );
  targetPanel.classList.add("opacity-100", "translate-y-0");
}
