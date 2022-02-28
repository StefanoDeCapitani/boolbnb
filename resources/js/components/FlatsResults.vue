<template>
    <div id="flats-results">
        <!-- sponsorizzati -->
        <div class="card_spacing" v-for="flat in activeFlats" :key="flat.id">
            <div class="card flex-md-row flex-column">
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
                </div>
            </div>
        </div>

        <!-- non sponsorizzati -->
        <div class="card_spacing" v-for="flat in notActiveFlats" :key="flat.id">
            <div class="card flex-md-row flex-column">
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
                </div>
            </div>
        </div>

        <!-- <div v-for="flat in notActiveFlats" :key='flat.id' >
        <div class="card" style="width: 18rem;">
          <img :src="flat.cover_img" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{flat.title}}</h5>
            <div v-for="service in flat.services" :key='service.id' > 
              <span :class="service.icon" > </span>
            </div>
            
          </div>
        </div>
      </div> -->
    </div>
</template>

<script>
export default {
    name: "FlatsResults",
    props: { flats: Array },

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
};
</script>

<style lang="scss">
.card_spacing {
    padding-bottom: 20px;
    /* box-shadow: 0px 0px 20px 0px #e2e2e2!important; */
    .card {
        padding: 20px;
        border: none;
        border-radius: 10px;
        .card-title {
            margin-bottom: 0;
            padding: 10px 0px;
        }
        .card-body {
            padding: 0px 16px;
        }
        .card-img-top {
            width: 280px;
            height: 180px;
            object-fit: cover;
            border-radius: 15px;
        }
        @media screen and (max-width: 768px) {
            .card-img-top {
                width: 100%;
            }
        }
    }
}
</style>
