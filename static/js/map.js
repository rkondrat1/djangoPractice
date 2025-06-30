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
    Dynamically Change Modal Content
    - login.html
    - signup.html
    - add_deal_modal.html
======================================== */

function openModal(templateId) {
  console.log("openModal called with:", templateId); // Add this
  const modal = document.getElementById("user-modal");
  const body = document.getElementById("modal-body");
  const template = document.getElementById(templateId);

    if (template && body) {
    body.innerHTML = `
      ${template.innerHTML}
    `;
    modal.style.display = "block";
    console.log("openModal called with, end of code", templateId); // Add this

} }
  /* ========================================
    Modal Close Functionality
======================================== */
function closeModal() {
  console.log("close modal called "); // Add this
  const modal = document.getElementById("user-modal");
  const body = document.getElementById("modal-body");

  if (modal) modal.style.display = "none";
  if (body) body.innerHTML = '';
  console.log("end of close modal"); // Add this

}

  /* ========================================
    Establishment Deals Dynamic Updates
    - establishment_deal.html
======================================== */
const dealsByDay = {
  Monday: {
    address: "BED STUY",
    details: "2-for-1 Margaritas 5-7pm",
    website: "https://www.instagram.com/bushwicktacocompany/?hl=en"
  },
  Tuesday: {
    address: "LES",
    details: "yum",
    website: "https://www.instagram.com/lego/"
  },
  Wednesday: {
    address: "green point",
    details: "tacos omfofmfo wifjewijf ewoijf weoifjweoif jweoi j wefijewofijewfojewfoiwejfoi wejofij ew iofewj fiojfoweifjweoifj",
    website: "https://www.instagram.com/taylorfrankiepaul/?hl=en"
  }
};

function updateDeal(day) {
  const deal = dealsByDay[day];
  if (deal) {
    document.getElementById("address").textContent = deal.address;
    document.getElementById("details").textContent = deal.details;

    const username = extractInstagramUsername(deal.website);
    const websiteEl = document.getElementById("website");
    websiteEl.href = deal.website;
    websiteEl.textContent = username || deal.website;
  }
}


function extractInstagramUsername(url) {
  try {
    const parsedUrl = new URL(url);
    const pathname = parsedUrl.pathname; // e.g. "/bushwicktacocompany/"
    const segments = pathname.split('/').filter(Boolean); // removes empty strings
    if (segments.length > 0) {
      return "@" + segments[0];
    }
  } catch (e) {
    console.error("Invalid URL", e);
  }
  return null;
}

