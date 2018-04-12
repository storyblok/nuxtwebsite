<template>
  <div>
    <h1>Authors</h1>
    <nuxt-link :to="'/' + author.full_slug" :key="author.id" v-for="author in authors">
      <h2>{{author.name}}</h2>
      <p>{{author.content.about}}</p>
      <img :src="resize(author.content.image, '50x0')" :alt="author.name">
    </nuxt-link>
  </div>
</template>

<script>
import { isEditMode, resize } from '@/plugins/helper'

export default {
  mounted () {
    isEditMode(this)
  },
  methods: {
    resize
  },
  async asyncData (context) {
    const { data } = await context.app.$storyapi.get(`cdn/stories/`, { version: 'draft', starts_with: `${context.route.path.substr(1)}` })
    return { authors: data.stories }
  }
}
</script>