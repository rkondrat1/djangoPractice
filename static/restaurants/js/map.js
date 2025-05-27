//// static/your_app/js/map.js
//
//// START: MAKE MAPBOX WORK CODE
//document.addEventListener('DOMContentLoaded', function () {
//  mapboxgl.accessToken = 'pk.eyJ1IjoicmtvbmRyYXQwMSIsImEiOiJjbTlkMWx4eHgweGd3MmpvZWRtaGR3OTlpIn0.uDVsrRaAs0YUkPc6d5tuWQ';
//  
//  const coordinates = [-74.0060, 40.7128]; // NYC coordinates
//
//  const map = new mapboxgl.Map({
//    container: 'map',
//    style: 'mapbox://styles/mapbox/streets-v11',
//    center: coordinates,
//    zoom: 10
//  });
//// END: MAKE MAPBOX WORK CODE
//
//  map.on('load', function () {
//    //START: let the title be on top of mapbox map
//    const left = 600;
//    const top = 20;
//    //const point = map.project(coordinates);
//    const overlayTitle = document.querySelector('.indexWrapper');
//    overlayTitle.style.left = left;
//    overlayTitle.style.top = top;
//    //END: let the title be on top of mapbox map
//  });
//});
//
//// make the drop down menu function
//const selected = document.querySelector(".selected");
//const optionsContainer = document.querySelector(".options-container");
//const optionsList = document.querySelectorAll(".option");
//
//
//if (selected && optionsContainer) {
//  selected.addEventListener("click", () => {
//    optionsContainer.classList.toggle("active");
//  });
//
//  optionsList.forEach(o => {
//    o.addEventListener("click", () => {
//      selected.innerHTML = o.querySelector("label").innerHTML;
//      optionsContainer.classList.remove("active");
//
//      // Optional: zoom to selected area
//      const id = o.querySelector("input").id;
//      if (id === "manhattan") {
//        map.flyTo({ center: [-73.9712, 40.7831], zoom: 12 }); // Manhattan
//      } else if (id === "brooklyn") {
//        map.flyTo({ center: [-73.9442, 40.6782], zoom: 12 }); // Brooklyn
//      }
//    });
//  });
//}
//});
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

  const loginTrigger = document.getElementById('loginTrigger');
  const loginModal = document.getElementById('loginModal');
  const closeModal = document.getElementById('closeModal');

  loginTrigger.addEventListener('click', () => {
    loginModal.style.display = 'block';
  });

  closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target == loginModal) {
      loginModal.style.display = 'none';
    }
  });

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