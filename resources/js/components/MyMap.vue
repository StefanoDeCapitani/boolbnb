<template>
<div class="" style="position: sticky; top: 200px;">
  <div id="map" style='width: 100%; height: 600px; border-radius: 10px;'></div>
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
        this.map.flyTo( {center: newValue, zoom: 10})
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
        zoom: 10
      });


    
      

    }
    
}
</script>

<style lang:"scss">

</style>