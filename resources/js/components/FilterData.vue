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
            class="modal"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div
                id="filter-modal"
                class="modal-dialog modal-lg modal-fullscreen-lg-down"
            >
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
                        <div class="numeric-filters">
                            <div class="mb-4 d-flex align-items-center">
                                <label class="me-4" for=""
                                    >Seleziona raggio di ricerca:
                                </label>
                                <select
                                    class="form-select"
                                    v-model="filters.range"
                                >
                                    <option value="10000">10 km</option>
                                    <option value="20000" selected>
                                        20 km
                                    </option>
                                    <option value="50000">50 km</option>
                                </select>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <div
                                    class="input-group w-50 increment-decrement"
                                >
                                    <button
                                        class="input-group-text"
                                        @click="
                                            filters.rooms > 1
                                                ? filters.rooms--
                                                : filters.rooms
                                        "
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        class="form-control"
                                        min="1"
                                        max="10"
                                        readonly
                                        :value="filters.rooms"
                                    />
                                    <button
                                        class="input-group-text"
                                        @click="
                                            filters.rooms < 10
                                                ? filters.rooms++
                                                : filters.rooms
                                        "
                                    >
                                        +
                                    </button>
                                </div>
                                <label class="ms-4" for="">stanze</label>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <div
                                    class="input-group w-50 increment-decrement"
                                >
                                    <button
                                        class="input-group-text"
                                        @click="
                                            filters.beds > 1
                                                ? filters.beds--
                                                : filters.beds
                                        "
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        class="form-control"
                                        min="1"
                                        max="10"
                                        readonly
                                        :value="filters.beds"
                                    />
                                    <button
                                        class="input-group-text"
                                        @click="
                                            filters.beds < 10
                                                ? filters.beds++
                                                : filters.beds
                                        "
                                    >
                                        +
                                    </button>
                                </div>
                                <label class="ms-4" for="">letti</label>
                            </div>
                            <div class="d-flex align-items-center mb-3">
                                <div
                                    class="input-group w-50 increment-decrement"
                                >
                                    <button
                                        class="input-group-text"
                                        @click="
                                            filters.bathrooms > 1
                                                ? filters.bathrooms--
                                                : filters.bathrooms
                                        "
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        class="form-control"
                                        min="1"
                                        max="10"
                                        readonly
                                        :value="filters.bathrooms"
                                    />
                                    <button
                                        class="input-group-text"
                                        @click="
                                            filters.bathrooms < 10
                                                ? filters.bathrooms++
                                                : filters.bathrooms
                                        "
                                    >
                                        +
                                    </button>
                                </div>
                                <label class="ms-4" for="">bagni</label>
                            </div>
                        </div>
                        <div>
                            <label for="" class="mb-3"
                                >Seleziona uno o più servizi:</label
                            >
                            <div class="services">
                                <div
                                    v-for="service in services"
                                    :key="service.id"
                                >
                                    <label :for="service.name">
                                        <input
                                            class="me-2"
                                            :id="service.name"
                                            type="checkbox"
                                            v-model="filters.activeServices"
                                            :value="service.id"
                                        /><i :class="service.icon"></i>
                                        {{ service.name }}</label
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-reset"
                            @click="resetFilters"
                        >
                            Reset
                        </button>
                        <button
                            type="button"
                            class="btn btn-apply"
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
#filter-modal {
    height: min-content;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    border-radius: 20px !important;
    overflow: hidden;
}

.modal-body {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

@media screen and(max-width: 768px) {
    .modal-body {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}

.form-select {
    width: 35%;
    min-width: 90px;
}

.increment-decrement {
    max-width: 190px;
}

.services {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
}

.btn-apply {
    background-color: #001632;
    border-radius: 20px !important;
    color: white;
    padding: 7px 20px;
}

.btn-reset {
    border-radius: 20px !important;
    background-color: #dee4ec;
    color: #001632;
}

.btn_filter {
    height: 100%;
    border-radius: 0px 15px 15px 0px;
    background-color: #001632;
    padding: 0px 30px;
    border-color: #001632;
    box-shadow: 0px 3px 8px 0px #dee4ec !important;
}
.btn-primary:active {
    background-color: #001632 !important;
    border-color: #001632;
}
.btn-primary:hover {
    background-color: #001632 !important;
    border-color: #001632;
}
.btn-primary:focus {
    background-color: #001632 !important;
    border-color: #001632;
    box-shadow: none;
}
</style>
