document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menuIcon');
  const closeButton = document.getElementById('closeButton');
  const planetsContainer = document.getElementById('planetsContainer');
  const planetContent = document.querySelector('.planet-content');

  // Add click event listeners
  menuIcon.addEventListener('click', toggleMenu);
  closeButton.addEventListener('click', toggleMenu);

  function toggleMenu() {
    // Toggle visibility of menu icon and close button
    menuIcon.style.display = menuIcon.style.display === 'none' ? 'inline' : 'none';
    closeButton.style.display = closeButton.style.display === 'none' ? 'inline' : 'none';

    // Toggle visibility of planets container and planet content
    planetsContainer.style.display = planetsContainer.style.display === 'none' ? 'flex' : 'none';
    planetContent.style.display = planetContent.style.display === 'none' ? 'block' : 'none';
  }
});

//Get Json Data
async function fetchJson() {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
}