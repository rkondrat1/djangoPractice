// static/your_app/js/map.js

mapboxgl.accessToken = 'pk.eyJ1IjoicmtvbmRyYXQwMSIsImEiOiJjbTlkMWx4eHgweGd3MmpvZWRtaGR3OTlpIn0.uDVsrRaAs0YUkPc6d5tuWQ'

const map = new mapboxgl.Map({
  container: 'map', // id of div
  style: 'mapbox://styles/mapbox/streets-v11', // map style
  center: [-74.006, 40.7128], // New York City starting point
  zoom: 10
});