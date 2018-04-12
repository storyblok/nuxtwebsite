<template>
  <div v-editable="blok">
    <h1>{{story.name}}</h1>
    <component v-for="child in blok.body" :key="child._uid" :blok="child" :is="child.component"></component>
  </div>
</template>

<script>
export default {
  props: [ 'story', 'blok' ]
}
</script>