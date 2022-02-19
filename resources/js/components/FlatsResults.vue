<template>
  <div id="flats-results">
      <h1>flats</h1>
      <div v-for="flat in activeFlats" :key='flat.id' >
        <div class="card" style="width: 18rem;">
          <img :src="flat.cover_img" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{flat.title}}</h5>
            <span>ADV</span>
            <div v-for="service in flat.services" :key='service.id' > 
              <span :class="service.icon" > </span>
            </div>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div v-for="flat in notActiveFlats" :key='flat.id' >
        <div class="card" style="width: 18rem;">
          <img :src="flat.cover_img" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{flat.title}}</h5>
            <div v-for="service in flat.services" :key='service.id' > 
              <span :class="service.icon" > </span>
            </div>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
    name: 'FlatsResults',
    props: { flats: Array },

    computed:{
      activeFlats(){
        return this.flats.filter(flat=> flat.active_sponsorships.length)
      },
      notActiveFlats(){
        return this.flats.filter(flat=> flat.active_sponsorships.length === 0)
      }
    }
}
</script>

<style>

</style>