<template>
  <div>
    <h1>Posts</h1>

    <ul>
      <li :key="post.id" v-for="post in posts">
        <nuxt-link :to="'/' + post.full_slug">
          <img :src="resize(post.content.image, '300x0')" :alt="post.content.image_alt">
          <h2>{{post.name}}</h2>
        </nuxt-link>
      </li>
    </ul>
    
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
    return { posts: data.stories }
  }
}
</script>