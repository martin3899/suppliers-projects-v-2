<script>
import Supplier from "@/components/Supplier.vue";
//import supplier from "@/components/Supplier.vue";
import {format} from "timeago.js";
import axios from "axios";



export default {
  computed: {
    supplier() {
      return supplier
    }
  },
  components:{
    Supplier
  },
  data(){
    return {
      suppliers: [],
      loading: false,
      error: null,
    }
  },
  async beforeMount() {
    const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");
    this.geojsonOptions.pointToLayer = (feature, latLng) =>
        circleMarker(latLng, { radius: 8 });
    this.mapIsReady = true;
  },
  methods: {
    getAPIData() {
      axios
          .get("https://suppliers.depembroke.fr/api/suppliers")
          .then(response => (this.suppliers = response.data.data))
          .catch(error => {
            console.log(error);
            this.error = error;
          })
          .finally(() => this.loading=true)
    },
  },
  created() {
    this.getAPIData();
  },

}

</script>

<template>
  <div class="suppliersList">
    <h1>Liste des fournisseurs</h1>
    <Supplier v-for="supplier in suppliers" :key="supplier.id" :name="supplier.name" :status="supplier.status" :checked-at="supplier.checkedAt"/>
  </div>
</template>

<style scoped>

</style>