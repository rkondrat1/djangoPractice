// static/your_app/js/map.js

mapboxgl.accessToken = 'pk.eyJ1IjoicmtvbmRyYXQwMSIsImEiOiJjbTlkMWx4eHgweGd3MmpvZWRtaGR3OTlpIn0.uDVsrRaAs0YUkPc6d5tuWQ'

const map = new mapboxgl.Map({
  container: 'map', // id of div
  style: 'mapbox://styles/mapbox/streets-v11', // map style
  center: [-74.006, 40.7128], // New York City
  zoom: 10
});


//found online to get the title on the center map on top
map.on('load', function() {
  // Dynamically position the overlay based on map coordinates
  const left = 600;
  const top = 20;
  const point = map.project(coordinates); // Converts coordinates to screen pixels

  // Update the position of the overlay text
  const overlay = document.querySelector('.indexWrapper');
  overlay.style.left = `${point.x}px`;
  overlay.style.top = `${point.y}px`;
});