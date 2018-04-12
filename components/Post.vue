<template>
  <div v-editable="blok">
    <h1>{{story.name}}</h1>
    <HTMLContent :content="blok.content" />
  </div>
</template>

<script>
import HTMLContent from '@/components/HTMLContent'

export default {
  props: [ 'story', 'blok' ],
  components: {
    HTMLContent
  }
}
</script>