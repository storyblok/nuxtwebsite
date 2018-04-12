<template>
  <div>
    <h1>Posts</h1>
    <article :key="post.id" v-for="post in posts">
      <nuxt-link :to="'/' + post.full_slug">
        <img :src="resizeImages(post.content.image, '300x0')" :alt="post.content.image_alt">
        <h2>{{post.name}}</h2>
      </nuxt-link>
    </article>
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
    const { data } = await context.app.$storyapi.get(`cdn/stories/`, { version: 'draft', starts_with: `posts/` })
    return { posts: data.stories }
  }
}
</script>