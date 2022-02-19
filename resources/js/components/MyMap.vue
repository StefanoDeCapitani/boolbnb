<template>
<div>
  <h1>Map</h1>
  <div id="map" style='width: 500px; height: 500px;'>
      
  </div>
</div>
</template>


<script>

import tt from '@tomtom-international/web-sdk-maps';

export default {
    name: 'MyMap',
    
    data(){
      return{
        map: null,
        markers: []
      }
    },
    props: { 
      center: Object,
      flats: Array 
      },
    



    watch:{
      center(newValue){
        this.map.flyTo( {center: newValue, zoom: 8})
        },


      /* flats(newValue){
        console.log(newValue)
        if (newValue) {
          for (flat in newValue) {
        
            this.markers.push(new tt.Marker()
            .setLngLat([flat.lat, flat.lon])
            .addTo(map));
      
          }
          
        }
        } */     //DA RIVEDERE
    },

    mounted(){
      
      this.map = tt.map({
        key: 'xBR8QUT6VbrPi6uqGXoWGBZbcR4mSfgR',
        container: 'map',
        center: this.center,
        zoom: 8
      });


    
      

    }
    
}
</script>

<style>

</style>