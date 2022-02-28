<template>
    <div id="flats-results">
        <!-- sponsorizzati -->
        <div
            class="card_spacing pt-1"
            v-for="flat in activeFlats"
            :key="flat.id"
        >
            <div
                class="card flex-md-row flex-column"
                :class="{ active: activeFlat === flat.id }"
                @click="setActiveFlat($event, flat)"
            >
                <img :src="flat.cover_img" class="card-img-top" alt="..." />
                <div class="card-body d-inline">
                    <span class="badge bg-warning text-dark my-1"
                        >In Evidenza</span
                    >
                    <h5 class="card-title">{{ flat.title }}</h5>
                    <span>Servizi:</span>
                    <span v-for="service in flat.services" :key="service.id">
                        <span :class="service.icon" class="px-2"></span>
                    </span>
                    <div>
                        <span class="pe-1">{{ flat.n_bathrooms }} Bagni</span>
                        <span class="pe-1">{{ flat.n_beds }} Letti</span>
                        <span class="pe-1">{{ flat.n_rooms }} Camere</span>
                    </div>
                    <div class="py-2">
                        <span
                            ><span class="fa-solid fa-location-dot"></span>
                            {{ flat.address }}</span
                        >
                    </div>
                    <button class="btn btn--show" @click="redirect(flat.slug)">
                        MOSTRA DETTAGLI
                    </button>
                </div>
            </div>
        </div>

        <!-- non sponsorizzati -->
        <div class="card_spacing" v-for="flat in notActiveFlats" :key="flat.id">
            <div
                class="card flex-md-row flex-column"
                :class="{ active: activeFlat === flat.id }"
                @click="setActiveFlat($event, flat)"
            >
                <img :src="flat.cover_img" class="card-img-top" alt="..." />
                <div class="card-body d-inline">
                    <h5 class="card-title">{{ flat.title }}</h5>
                    <span>Servizi:</span>
                    <span v-for="service in flat.services" :key="service.id">
                        <span :class="service.icon" class="px-2"></span>
                    </span>
                    <div>
                        <span class="pe-1">{{ flat.n_bathrooms }} Bagni</span>
                        <span class="pe-1">{{ flat.n_beds }} Letti</span>
                        <span class="pe-1">{{ flat.n_rooms }} Camere</span>
                    </div>
                    <div class="py-2">
                        <span
                            ><span class="fa-solid fa-location-dot"></span>
                            {{ flat.address }}</span
                        >
                    </div>
                    <button class="btn btn--show" @click="redirect(flat.slug)">
                        MOSTRA DETTAGLI
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FlatsResults",
    props: { flats: Array },
    data() {
        return {
            activeFlatPosition: {},
            activeFlat: -1,
        };
    },
    computed: {
        activeFlats() {
            return this.flats.filter((flat) => flat.active_sponsorships.length);
        },
        notActiveFlats() {
            return this.flats.filter(
                (flat) => flat.active_sponsorships.length === 0
            );
        },
    },
    methods: {
        redirect: function (slug) {
            const url = (window.location.href = `/flats/${slug}`);
            return url;
        },
        setActiveFlat(event, flat) {
            if (event.target.className === "btn btn--show") {
                return;
            }
            this.activeFlat = flat.id;
            this.activeFlatPosition = { lat: flat.lat, lng: flat.lon };
            this.$emit("flat-activated", this.activeFlatPosition);
        },
    },
};
</script>

<style lang="scss">
.card_spacing {
    padding-bottom: 20px;
    .card {
        padding: 20px;
        border: none;
        border-radius: 10px;
        box-shadow: 0px 3px 8px 0px #dee4ec !important;
        cursor: pointer;
        &.active {
            outline: 2px solid #00df6b;
        }
        .card-title {
            margin-bottom: 0;
            padding: 10px 0px;
        }
        .card-body {
            padding: 0px 16px;
        }
        .card-img-top {
            width: 280px;
            height: 250px;
            object-fit: cover;
            border-radius: 15px;
        }
        @media screen and (max-width: 768px) {
            .card-img-top {
                width: 100%;
            }
        }
        .btn--show {
            background-color: #dee4ec;
            padding: 7px 20px;
            border-radius: 20px;
        }
    }
}
</style>
