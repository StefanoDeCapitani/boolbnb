<template>
    <div>
        <div id="map" class="map"></div>
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
        activeFlatPosition: Object,
    },
    watch: {
        center(newValue) {
            this.map.flyTo({ center: newValue, zoom: 10 });
        },
        activeFlatPosition(newValue) {
            this.map.flyTo({ center: newValue, zoom: 17 });
        },
        flats(newValue) {
            for (let marker of this.markers) {
                marker.remove();
            }
            if (newValue) {
                for (let flat of newValue) {
                    let element = document.createElement("div");
                    element.id = "marker";
                    element.addEventListener("click", () => {
                        this.$emit("marker-clicked", flat.id);
                        this.map.flyTo({
                            center: { lon: flat.lon, lat: flat.lat },
                            zoom: 15,
                        });
                    });
                    let marker = new tt.Marker({ element: element })
                        .setLngLat({ lon: flat.lon, lat: flat.lat })
                        .addTo(this.map);
                    this.markers.push(marker);
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

<style lang="scss" scoped>
.map {
    width: 100%;
    height: 70vh;
    border-radius: 10px;
    box-shadow: 0px 3px 8px 0px #dee4ec !important;
}

@media screen and(max-width: 1199px) {
    .map {
        height: 300px;
        margin-bottom: 1rem;
    }
}
</style>
