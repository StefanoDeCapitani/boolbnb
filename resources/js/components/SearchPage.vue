<template>
  <div id="search-page">
      
      <MyMap></MyMap>
      <FlatsResults> </FlatsResults>
  </div>
</template>

<script>
import MyMap from './MyMap.vue';
import FlatsResults from './FlatsResults.vue';

export default {
    name: 'SearchPage',
    components: {MyMap, FlatsResults},
    data(){
      return {
        position: null,

      }
    },
    created(){
        // this.position = this.$cookies.get("location")
        this.position = JSON.parse(sessionStorage.getItem('location'))
    }
}

</script>

<style>

</style>