<template>
    <div class="h-100">
        <button
            type="button"
            class="btn btn-primary text-white btn_filter"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        >
            Filtra
        </button>

        <!-- Modal -->
        <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-lg modal-fullscreen-sm-down">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Filtri
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <label for="">numero stanze</label>
                            <button @click="filters.rooms--">-</button>
                            <input
                                type="number"
                                readonly
                                v-model="filters.rooms"
                            />
                            <button @click="filters.rooms++">+</button>
                        </div>
                        <div>
                            <label for="">numero letti</label>
                            <button @click="filters.beds--">-</button>
                            <input
                                type="number"
                                readonly
                                v-model="filters.beds"
                            />
                            <button @click="filters.beds++">+</button>
                        </div>
                        <div>
                            <label for="">numero bagni</label>
                            <button @click="filters.bathrooms--">-</button>
                            <input
                                type="number"
                                readonly
                                v-model="filters.bathrooms"
                            />
                            <button @click="filters.bathrooms++">+</button>
                        </div>
                        <div>
                            <div v-for="service in services" :key="service.id">
                                <label :for="service.name">{{
                                    service.name
                                }}</label>
                                <input
                                    :id="service.name"
                                    type="checkbox"
                                    v-model="filters.activeServices"
                                    :value="service.id"
                                />
                            </div>
                        </div>
                        <div>
                            <label for="">Seleziona raggio di ricerca</label>
                            <select v-model="filters.range">
                                <option value="10000">10 km</option>
                                <option value="20000" selected>20 km</option>
                                <option value="50000">50 km</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            @click="resetFilters"
                        >
                            Reset
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-dismiss="modal"
                            @click="apply()"
                        >
                            Applica
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FilterData",
    props: {
        services: Array,
    },
    data() {
        return {
            filters: {
                rooms: 1,
                beds: 1,
                bathrooms: 1,
                activeServices: [],
                range: "20000",
            },
        };
    },
    methods: {
        apply() {
            this.$emit("apply-filter", this.filters);
        },
        resetFilters() {
            this.filters = {
                rooms: 1,
                beds: 1,
                bathrooms: 1,
                activeServices: [],
                range: "20000",
            };
        },
    },
};
</script>
<style lang="scss">


.btn_filter{
    height: 100%;
    border-radius: 0px 15px 15px 0px;
    background-color: #001632;
    padding: 0px 30px;
    border-color: #001632;
}
.btn-primary:active{
    background-color: #001632!important;
        border-color: #001632;
}
.btn-primary:hover{
    background-color: #001632!important;
        border-color: #001632;
}
.btn-primary:focus{
    background-color: #001632!important;
        border-color: #001632;
    box-shadow:none;
}
</style>