<template>
  <article v-editable="author.content">
    <img :src="resize(author.content.image, '100x0')" :alt="author.name">
    <h1>{{author.name}}</h1>
    <p>{{author.content.about}}</p>
    <ul>
      <li :key="social_link._uid" v-for="social_link in author.content.socials">
        <a :href="social_link.link.cached_url" target="_blank" rel="noopener nofollow">{{social_link.type}}</a>
      </li>
    </ul>

    <h2>Posts</h2>
    <ul>
      <li :key="post.id" v-for="post in posts">
        <nuxt-link :to="post.full_slug">
          <img :src="resize(post.content.image, '300x0')" alt="post.content.image_alt">
          <h3>{{post.name}}</h3>
        </nuxt-link>
      </li>
    </ul>
  </article>
</template>

<script>
import { isEditMode, resize } from '@/plugins/helper'
import MarkdownContent from '@/components/MarkdownContent'

export default {
  mounted () {
    isEditMode(this)
  },
  components: {
    MarkdownContent
  },
  methods: {
    resize
  },
  async asyncData (context) {
    // load the content-entry at the current path - will be something like: '/posts/first-post'
    const authorResponse = await context.app.$storyapi.get(`cdn/stories${context.route.path}`, { version: 'draft' })
    console.log(authorResponse.data.story.uuid);

    const postsByAuthorResponse = await context.app.$storyapi.get(`cdn/stories`, { 
        version: 'draft', 
        starts_with:'posts/', 
        'filter_query[author.id][in]': authorResponse.data.story.uuid 
      })
    return { author: authorResponse.data.story, posts: postsByAuthorResponse.data.stories }
  }
}
</script>