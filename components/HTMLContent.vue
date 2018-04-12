<template>
  <div class="markdown" v-html="parsed"></div>
</template>

<script>
import { markdown } from '@/plugins/markdown'

export default {
  props: ['content'],
  computed: {
    parsed() {
      return markdown(this.content, '600x0')
    }
  }
}
</script>