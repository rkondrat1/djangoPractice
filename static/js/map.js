/* ========================================
  Make Mapbox Map Visible - NYC
======================================== */
document.addEventListener('DOMContentLoaded', function () {
  // Mapbox setup
  mapboxgl.accessToken = 'pk.eyJ1IjoicmtvbmRyYXQwMSIsImEiOiJjbTlkMWx4eHgweGd3MmpvZWRtaGR3OTlpIn0.uDVsrRaAs0YUkPc6d5tuWQ';
  const coordinates = [-74.0060, 40.7128];
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: coordinates,
    zoom: 10
  });

  /* ========================================
    Option Drop Down Functionality
======================================== */
const selectBoxes = document.querySelectorAll('.select-box'); //CSS class
selectBoxes.forEach(box => {
  const selected = box.querySelector('.selected'); //CSS class
  const optionsContainer = box.querySelector('.options-container'); //CSS class
  const options = box.querySelectorAll('.option'); //CSS class

  // Toggle options dropdown
  selected.addEventListener('click', () => {
    // Close all other open dropdowns
    document.querySelectorAll('.options-container.active').forEach(container => {
      if (container !== optionsContainer) container.classList.remove('active');
    });
    optionsContainer.classList.toggle('active');
  });

  // When an option is clicked, update selected text
  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.textContent = option.textContent;
      optionsContainer.classList.remove('active');
      console.log(`Selected: ${option.textContent}`);
    });
  });
});

document.addEventListener('click', e => {
  if (!e.target.closest('.select-box')) {
    document.querySelectorAll('.options-container.active').forEach(container => {
      container.classList.remove('active');
    });
  }
});
});

  /* ========================================
    Modal Close Functionality
======================================== */

function closeModal() {
  const modal = document.getElementById("user-modal");
  const content = document.getElementById("modal-content");

  if (modal) modal.style.display = "none";
  if (content) content.innerHTML = '';
}

  /* ========================================
    Dynamically Change Modal Content
    - login.html
    - signup.html
======================================== */

function siwtchToLogin() {
  const modal = document.getElementById("user-modal");
  const content = document.getElementById("modal-content");
  const loginTemplate = document.getElementById("login-template");

  if (loginTemplate && content) {
    content.innerHTML = `
      <span class="close-modal" onclick="closeModal()">&times;</span>
      ${loginTemplate.innerHTML}
    `;
    modal.style.display = "block";
  }
}

function switchToSignup() {
  const content = document.getElementById("modal-content");
  const signupTemplate = document.getElementById("signup-template");

  if (signupTemplate && content) {
    content.innerHTML = `
      <span class="close-modal" onclick="closeModal()">&times;</span>
      ${signupTemplate.innerHTML}
    `;
  }
}
