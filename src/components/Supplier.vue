<script>
export default {
  props:{
    name: String,
    status: Boolean,
    checkedAt: Date,
  }
}
</script>

<template>
  <div class="supplier">
    <h1>{{name}}</h1>
    <h3 class="greenColor" v-if="status === 1">Il y a du stock</h3>
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