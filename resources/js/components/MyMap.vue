<template>
    <div class="" style="position: sticky; top: 200px;">
        <div id="map" style='width: 100%; height: 600px; border-radius: 10px;'></div>
    </div>
</template>

<script>
import tt from "@tomtom-international/web-sdk-maps";

export default {
    name: "MyMap",
    data() {
        return {
            map: null,
            markers: [],
        };
    },
    props: {
        center: Object,
        flats: Array,
    },
    watch: {
        center(newValue) {
            this.map.flyTo({ center: newValue, zoom: 10 });
        },
        flats(newValue) {
            for (let marker of this.markers) {
                marker.remove();
            }
            if (newValue) {
                for (let flat of newValue) {
                    this.markers.push(
                        new tt.Marker()
                            .setLngLat({ lon: flat.lon, lat: flat.lat })
                            .addTo(this.map)
                    );
                }
            }
        },
    },
    mounted() {
        this.startMap();
    },
    methods: {
        startMap() {
            this.map = tt.map({
                key: "xBR8QUT6VbrPi6uqGXoWGBZbcR4mSfgR",
                container: "map",
                center: this.center,
                zoom: 10,
                minZoom: 4,
                maxBounds: [
                    [5.7499552751, 35.619987291],
                    [19.4802470232, 48.1153931748],
                ],
            });
        },
    },
};
</script>

<style></style>
