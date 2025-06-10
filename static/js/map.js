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
  

  // const loginTrigger = document.getElementById('loginTrigger');
  // const loginModal = document.getElementById('loginModal');
  // const closeModal = document.getElementById('closeModal');
// 
  // loginTrigger.addEventListener('click', () => {
  //   loginModal.style.display = 'block';
  // });
// 
  // closeModal.addEventListener('click', () => {
  //   loginModal.style.display = 'none';
  // });
// 
  // window.addEventListener('click', (event) => {
  //   if (event.target == loginModal) {
  //     loginModal.style.display = 'none';
  //   }
  // });

  const selectBoxes = document.querySelectorAll('.select-box');

  selectBoxes.forEach(box => {
    const selected = box.querySelector('.selected');
    const optionsContainer = box.querySelector('.options-container');
    const options = box.querySelectorAll('.option');

    selected.addEventListener('click', () => {
      // close boxes
      document.querySelectorAll('.options-container.active').forEach(container => {
        if (container !== optionsContainer) container.classList.remove('active');
      });
      optionsContainer.classList.toggle('active');
    });

    options.forEach(option => {
      option.addEventListener('click', () => {
        selected.textContent = option.textContent;
        optionsContainer.classList.remove('active');
        console.log(`Selected: ${option.textContent}`);
      });
  
  });

  // Close dropdowns if clicked outside
  document.addEventListener('click', e => {
    if (!e.target.closest('.select-box')) {
      document.querySelectorAll('.options-container.active').forEach(container => {
        container.classList.remove('active');
      });
    }
  });
});
});

  // open modal , has to be outside of DOMContentLoaded
  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  // close modal , has to be outside of DOMContentLoaded
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }