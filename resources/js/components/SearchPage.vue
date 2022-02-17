<template>
  <div id="search-page">
    <div ref="searchbox"></div>
    <div>
        
    </div>
    <MyMap></MyMap>
    <FlatsResults> </FlatsResults>
  </div>
</template>

<script>
import MyMap from "./MyMap.vue";
import FlatsResults from "./FlatsResults.vue";
    import { services } from "@tomtom-international/web-sdk-services";
    import SearchBox from "@tomtom-international/web-sdk-plugin-searchbox";

export default {
  name: "SearchPage",
  components: { MyMap, FlatsResults },
  data() {
    return {
      results: null,
      flats: [],
      filter: {
          polygon : Object.values(this.results.viewport).map(obj=>Object.values(obj)),
          bathroom: 2 
      }
    };
  },
  mounted() {
    // this.position = this.$cookies.get("location")
    this.results = JSON.parse(sessionStorage.getItem("location"));

    console.log(Object.values(this.results.viewport).map(obj=>Object.values(obj)));

    let searchBox = this.$refs.searchbox;

    var options = {
      searchOptions: {
        key: "xBR8QUT6VbrPi6uqGXoWGBZbcR4mSfgR",
        language: "it-IT",
        limit: 1,
        countrySet: "IT",
      },
      autocompleteOptions: {
        key: "xBR8QUT6VbrPi6uqGXoWGBZbcR4mSfgR",
        language: "it-IT",
      },
    };
    const ttSearchBox = new SearchBox(services, options);
    const searchHtml = ttSearchBox.getSearchBoxHTML();
    searchBox.append(searchHtml);
    ttSearchBox.setValue(this.results.address.freeformAddress)

    ttSearchBox.on("tomtom.searchbox.resultsfound", function (data) {
      if (data.data.metadata.triggeredBy === "submit") {
        this.results = data.data.results.fuzzySearch.results[0];
        this.callAxios()
      }
    });
    this.callAxios();
  },
  methods: {
    callAxios() {
        axios.get('/api/search', {params: this.filter}).then((resp)=>{
            this.flats = resp.data
            console.log(resp.data)
        })
    },
  },
};
</script>

<style>
</style>