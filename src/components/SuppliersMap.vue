<script>
import "leaflet/dist/leaflet.css"
import { LMap, LGeoJson, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import Supplier from "@/components/Supplier.vue";
import axios from "axios";
export default {
  components: {
    LMap,
    LGeoJson,
    LMarker,
    LTileLayer,
    LPopup,
    Supplier
  },
  data() {
    return {
      geojson: {
        type: "FeatureCollection",
        features: [
          // ...
        ],
      },
      geojsonOptions: {
        // Options that don't rely on Leaflet methods.
      },
        suppliers: []
  };
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
          .finally(() => this.loading=false)
    },
  },
  created() {
    this.getAPIData();
  },

};

</script>

<template>
  <div class="suppliersMap">
    <h1>Carte des fournisseurs</h1>
    <div style="height:600px; width:800px">
      <p>Map of suppliers location</p>
      <l-map :useGlobalLeaflet="false" :zoom="5" :center="[45, 5]">
        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                      name="OpenStreetMap"></l-tile-layer>
        <l-marker v-for="supplier in suppliers" :lat-lng="[supplier.latitude, supplier.longitude]">
          <l-popup> Supplier id: {{ supplier.id }} </l-popup>
        </l-marker>
      </l-map>
    </div>
  </div>
</template>

<style scoped>

</style>