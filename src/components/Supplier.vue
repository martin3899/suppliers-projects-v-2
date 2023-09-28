<script>
export default {
  data(){
    return {
      name: 'Mon fournisseur',
      status: false, // est ce qu'il y a du stock
      checkedAt: new Date() // date de la dernière mise à jour du stock
    }
  }
}
</script>

<template>
  <div class="supplier">
    <h1>{{name}}</h1>
    <h3 class="greenColor" v-if="status === true">Il y a du stock</h3>
    <h3 class="redColor" v-else>Il n'y a pas de stock</h3>
    <h5>{{checkedAt.toLocaleString()}}</h5>
  </div>

</template>

<style scoped>
.greenColor{
  color: green;
}

.redColor{
  color: red;
}

</style>