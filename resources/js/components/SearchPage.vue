<template>
    <div id="search-page " class='container py-5 mt-4'>
        <div
            class="d-flex justify-content-center align-items-center searchbar_cont"
        >
            <div ref="searchbox" class="search_box"></div>
            <FilterData
                :services="services"
                @apply-filter="applyFilter($event)"
            ></FilterData>
        </div>
        <h4 class="mt-5">Abbiamo trovato {{ flats.length }} risultati:</h4>
        <div class="row flats-container d-flex flex-column-reverse">
            <div class="col-12 col-xl-6 flats-column">
                <FlatsResults :flats="flats"> </FlatsResults>
            </div>

            <div class="col-12 col-xl-6">
                <MyMap
                    :center="results.position"
                    :flats="flats"
                    v-if="results"
                ></MyMap>
            </div>
        </div>
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

<style lang="scss">
.searchbar_cont {
    height: 45px;
    .search_box {
        width: 50%;
        height: 100%;
        @media screen and (max-width: 768px) {
            width: 90%;
        }
        .tt-search-box {
            margin-top: 0% !important;
            .tt-search-box-input-container {
                border-radius: 15px 0px 0px 15px;
            }
        }
    }
}

@media screen and(min-width: 1200px) {
    .flats-container {
        height: 700px;
        overflow: hidden;
        .flats-column {
            height: 100%;
            overflow: scroll;
        }
        /*Scrollbar style*/

        /* width */
        ::-webkit-scrollbar {
            width: 8px;
            height: 0;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            background: #adadad5d;
            border-radius: 5px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: rgba(110, 110, 110, 0.5);
            border-radius: 5px;
            box-shadow: 0 0 0 1px inset #adadad;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(85, 85, 85, 0.418);
        }
    }
}
</style>
