
// Select the theme toggle button
const themeToggleButton = document.getElementById("theme-toggle");

// Check and set the initial theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.add("dark");
  themeToggleButton.textContent = "Switch to Light Mode";
} else {
  themeToggleButton.textContent = "Switch to Dark Mode";
}

// Toggle theme on button click
themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    // Save the dark mode preference
    localStorage.setItem("theme", "dark");
    themeToggleButton.textContent = "Switch to Light Mode";
  } else {
    // Save the light mode preference
    localStorage.setItem("theme", "light");
    themeToggleButton.textContent = "Switch to Dark Mode";
  }
});