<template>
  <div>
    <h1>Authors</h1>
    <nuxt-link :to="'/' + author.full_slug" :key="author.id" v-for="author in authors">
      <h2>{{author.name}}</h2>
      <p>{{author.content.about}}</p>
      <img :src="author.content.image" :alt="author.name">
    </nuxt-link>
  </div>
</template>

<script>
import { isEditMode, resizeImages } from '@/plugins/helper'

export default {
  mounted () {
    isEditMode(this)
  },
  methods: {
    resizeImages
  },
  async asyncData (context) {
    const { data } = await context.app.$storyapi.get(`cdn/stories/`, { version: 'draft', starts_with: `${context.route.path.substr(1)}` })
    return { authors: data.stories }
  }
}
</script>