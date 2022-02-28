let map = document.getElementById('map')
import tt, { Marker } from "@tomtom-international/web-sdk-maps";

const lat  = map.dataset.lat
const lng = map.dataset.lon

console.log(lat,lng)


map = tt.map({
    key: "xBR8QUT6VbrPi6uqGXoWGBZbcR4mSfgR",
                container: "map",
                center: {lng,lat},
                zoom: 17,
                minZoom: 4,
               
});
let marker = new tt.Marker().setLngLat({lng,lat}).addTo(map)
