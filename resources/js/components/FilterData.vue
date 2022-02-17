<template>
    <div>
        
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Filtra
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-fullscreen-sm-down">
        <div class=" modal-content ">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Filtri</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div>
                <label for="">numero stanze</label>
                <button @click="rooms--" >-</button>
                <input type="text" readonly v-model="rooms">
                <button @click="rooms++">+</button>
            </div>
            <div>
                <label for="">numero letti</label>
                <button @click="beds--" >-</button>
                <input type="text" readonly v-model="beds">
                <button @click="beds++">+</button>
            </div>
            <div>
                <label for="">numero bagni</label>
                <button @click="bathrooms--" >-</button>
                <input type="text" readonly v-model="bathrooms">
                <button @click="bathrooms++">+</button>
            </div>
            <div>
                <div v-for="service in services" :key="service.id">
                    <label :for="service.name" >{{ service.name }}</label>
                    <input :id="service.name" type="checkbox" v-model="activeServices" :value="service.id">

                </div>
            </div>
            <div>
                <label for="">Seleziona raggio di ricerca</label>
                <select v-model="range">
                    <option value="10000">10 km</option>
                    <option value="20000" selected>20 km</option>
                    <option value="50000" >50 km</option>
                </select>
            </div>

        </div>
        <div class="modal-footer">
            
            <button type="button" class="btn btn-secondary" @click="apply()" >Reset</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"   >Applica</button>
        </div>
        </div>
    </div>
    </div>

    <!-- <div class="modal-dialog modal-fullscreen-sm-down">
    


    </div> -->
    </div>
</template>

<script>
    import {services} from '@tomtom-international/web-sdk-services';

    export default {
        name: 'FilterData',
        props: {
            services: Array
        },
        data(){
            return{
                rooms: 1,
                beds: 1,
                bathrooms: 1,
                activeServices: [],
                range: "",

                filters: {
                    rooms: 1,
                    beds: 1,
                    bathrooms: 1,
                    activeServices: [],
                    range: "",
                }
                

            }
        },
        mounted() {

        },
        methods:{

            apply(){

                /* this.$emit('applyFilter', {
                    'rooms': this.rooms,
                    'beds': this.beds,
                    'bathrooms': this.bathrooms,
                    'activeServices': this.activeServices,
                    'range': this.range,
                    'polygon': '',
                }) */
                this.$emit('apply-filter', this.filters)
            }
        }

    }
</script>