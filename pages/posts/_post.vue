<template>
  <article class="container" v-editable="post.content">
    <h1>{{post.name}}</h1>
    <table class="post__author">
      <tr>
        <th>Written by:</th>
        <td>{{author.name}}</td>
      </tr>
      <tr>
        <th>Latest update:</th>
        <td>{{date}}</td>
      </tr>
    </table>
    <img class="post__image" :src="resize(post.content.image, '700x300')" :alt="post.content.image_alt">
    <MarkdownContent :content="post.content.content"/>
  </article>
</template>

<script>
import { isEditMode, resize } from '@/plugins/helper'
import MarkdownContent from '@/components/MarkdownContent'

export default {
  mounted () {
    isEditMode(this)
  },
  computed: {
    date() {
      return new Date(this.post.published_at || this.post.created_at).toJSON().slice(0,10)
    }
  },
  components: {
    MarkdownContent
  },
  methods: {
    resize
  },
  async asyncData (context) {
    // load the content-entry at the current path - will be something like: '/posts/first-post'
    const { data } = await context.app.$storyapi.get(`cdn/stories${context.route.path}`, { version: 'draft', resolve_links:1 })
    return { post: data.story, author: data.story.content.author.story }
  }
}
</script>

<style lang="scss" scoped>
.post__image {
  @media screen and (min-width: 840px) {
    width: 110%;
    max-width: 110%;
    transform: translateX(-5%); 
  }
  border-radius: 4px;
}

.post__author {
  font-size: 0.8rem;
  opacity: 0.7;
  padding-bottom: 20px;
  text-align: left;
}
</style>