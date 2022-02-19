<template>
    <div id="search-page">
        <div ref="searchbox"></div>
        <div></div>
        <FilterData
            :services="services"
            @apply-filter="applyFilter($event)"
        ></FilterData>
        <MyMap
            :center="results.position"
            :flats="flats"
            :layer="layer"
            v-if="results"
        ></MyMap>
        <FlatsResults :flats="flats"> </FlatsResults>
    </div>
</template>

<script>
import MyMap from "./MyMap.vue";
import FlatsResults from "./FlatsResults.vue";
import { services } from "@tomtom-international/web-sdk-services";
import SearchBox from "@tomtom-international/web-sdk-plugin-searchbox";
import FilterData from "./FilterData.vue";

export default {
    name: "SearchPage",
    props: {
        services: Array,
    },
    components: { MyMap, FlatsResults, FilterData },
    data() {
        return {
            results: null,
            flats: [],
            filter: {
                polygon: [],
                rooms: 1,
                beds: 1,
                bathrooms: 1,
                activeServices: [],
                range: "20000",
            },
        };
    },
    mounted() {
        this.results = JSON.parse(sessionStorage.getItem("location"));

        this.applyFilter(this.filter);

        let searchBox = this.$refs.searchbox;

        var options = {
            searchOptions: {
                key: "xBR8QUT6VbrPi6uqGXoWGBZbcR4mSfgR",
                language: "it-IT",
                limit: 1,
                countrySet: "IT",
            },
            autocompleteOptions: {
                key: "xBR8QUT6VbrPi6uqGXoWGBZbcR4mSfgR",
                language: "it-IT",
            },
            labels: {
                placeholder: "Cerca una località",
            },
        };
        const ttSearchBox = new SearchBox(services, options);
        const searchHtml = ttSearchBox.getSearchBoxHTML();
        searchBox.append(searchHtml);
        ttSearchBox.setValue(this.results.address.freeformAddress);

        ttSearchBox.on("tomtom.searchbox.resultsfound", (data) => {
            if (data.data.metadata.triggeredBy === "submit") {
                this.results = data.data.results.fuzzySearch.results[0];
                this.applyFilter(this.filter);
            }
        });
    },
    methods: {
        callAxios() {
            axios
                .post("/api/search", this.filter)
                .then((resp) => {
                    this.flats = resp.data.flats;
                })
                .catch((error) => console.log(error));
        },
        getReachableRange(range) {
            services
                .calculateReachableRange({
                    key: "xBR8QUT6VbrPi6uqGXoWGBZbcR4mSfgR",
                    origin: this.results.position,
                    distanceBudgetInMeters: range,
                })
                .then((rangeData) => {
                    this.filter.polygon =
                        rangeData.toGeoJson().geometry.coordinates[0];
                    this.filter.lat = this.results.position.lat;
                    this.filter.lng = this.results.position.lng;
                    this.callAxios();
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        applyFilter(event) {
            this.filter = event;
            this.getReachableRange(event.range);
        },
    },
};
</script>

<style></style>
