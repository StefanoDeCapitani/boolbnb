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


       flats(newValue){
        console.log(newValue)
        if (newValue) {
        
          for (let flat of newValue) {
              console.log(flat)
            this.markers.push(new tt.Marker()
            .setLngLat({lon:flat.lon , lat:flat.lat})
            .addTo(this.map));
      
          }
          
        }
        }   
    },

     mounted(){

      this.startMap();
      

    },
    

    methods:{
      startMap(){
        this.map = tt.map({
        key: 'xBR8QUT6VbrPi6uqGXoWGBZbcR4mSfgR',
        container: 'map',
        center: this.center,
        zoom: 10,
        
      })

//       if(this.flats.length > 0 ){

//       console.log(this.flats)
//       new tt.Marker()
//       .setLngLat([12.497263608239923, 41.90250380717655])
//       .addTo(map);
//  }
      
      

      //  this.map = Object.freeze(map);
      }
    },

   
}
</script>

<style>

</style>