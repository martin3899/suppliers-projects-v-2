<script>
import Supplier from "@/components/Supplier.vue";
//import supplier from "@/components/Supplier.vue";
import {format} from "timeago.js";

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
      suppliers: [
        {
          id: 1,
          name: "Fournisseur 1 ?",
          status: true,
          checkedAt: format(new Date()),
        },
        {
          id: 2,
          name: "Fournisseur 2",
          status: false,
          checkedAt: format(new Date()),
        }
      ]
    }
  }
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