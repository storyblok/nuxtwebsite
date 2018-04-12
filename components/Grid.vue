<template>
  <div class="grid" v-editable="blok">
    <component v-for="child in blok.columns" :key="child._uid" :blok="child" :is="child.component"></component>
  </div>
</template>

<script>
export default {
  props: ['blok' ]
}
</script>

<style lang='scss'> 
.grid {
  max-width: 1000px;
  padding: 20px 0px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 780px) {
  .grid {
    display: block;
  }
}
</style>