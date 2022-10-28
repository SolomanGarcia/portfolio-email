//TOGGLE NAVIGATION MENU AND ICONS
const menuToggleButton = document.querySelector('.menu-toggle-button');
const menuELement = document.querySelector('.menu');

const toggleMenu = () => {
  menuELement.classList.toggle('active');
  menuToggleButton.classList.toggle('active');
};

menuToggleButton.addEventListener('click', toggleMenu);

// REMOVE ACTIVE CLASS FROM AND ICON ON LINK CLICK
const removeActiveLinkClass = e => {
  if (e.target.classList.contains('list-link')) {
    menuELement.classList.remove('active');
    menuToggleButton.classList.remove('active');
  }
}

document.addEventListener('click', removeActiveLinkClass);

// !TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE

// !SCROLL REVEAL