<template>
  <div class="flash">
   <p> {{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'flashMsg',
  props: ['msg']
}
</script>

<style scoped>
.flash{
  background-color:lightgreen;
  width:100%;
  height: 75px;
  text-align: center;
}

p{
  color: white;
  line-height: 75px;
}
</style>
