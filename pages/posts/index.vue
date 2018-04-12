<template>
  <div class="container">
    <h1>Posts</h1>

    <ul class="posts">
      <li :key="post.id" v-for="post in posts">
        <nuxt-link class="post" :to="'/' + post.full_slug">
          <img :src="resize(post.content.image, '700x200')" :alt="post.content.image_alt">
          <div class="post__inner">
            <h2>{{post.name}}</h2>
          </div>
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

<style scoped>
.posts {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.post {
  color: inherit;
  text-decoration: none;
  display: block;
  margin-bottom: 30px;
  transition: transform 500ms ease, box-shadow 500ms ease;
  border: 1px solid #ddd;
  &:hover, &:focus {
    transform: translateY(-1px);
    box-shadow: 0px 1px 10px 0px #ccc;
  }
}

.post__inner {
  padding: 20px;
}
</style>