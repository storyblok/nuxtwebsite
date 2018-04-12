<template>
  <article class="container" v-editable="author.content">
    
    <div class="author">
      <h1>{{author.name}}</h1>
      <img class="author__image" :src="resize(author.content.image, '100x100')" :alt="author.name">
      <p>{{author.content.about}}</p>

      <ul class="author__socials">
        <li :key="social_link._uid" v-for="social_link in author.content.socials">
          <a :href="social_link.link.cached_url" target="_blank" rel="noopener nofollow">{{social_link.type}}</a>
        </li>
      </ul>
    </div>

    <h2 class="author__posts-by">Posts by {{author.name}}</h2>
    <ul class="posts">
      <li :key="post.id" v-for="post in posts">
        <nuxt-link class="post" :to="'/' + post.full_slug">
          <img :src="resize(post.content.image, '700x200')" :alt="post.content.image_alt">
          <div class="post__inner">
            <h3 class="post__headline">{{post.name}}</h3>
          </div>
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
    const postsByAuthorResponse = await context.app.$storyapi.get(`cdn/stories`, { 
        version: 'draft', 
        starts_with:'posts/', 
        'filter_query[author.id][in]': authorResponse.data.story.uuid 
      })
    return { author: authorResponse.data.story, posts: postsByAuthorResponse.data.stories }
  }
}
</script>


<style lang="scss" scoped>
.author {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 0px;
}

.author__image {
  border-radius: 50%;
  border: 1px solid #d8d8d8;
}

.author__socials {
  margin: 0;
  padding: 0;
  list-style-type: none;
  li {
    display: inline-block;
    & + li {
      margin-left: 10px;
    }
  }
  a {
    border: 1px solid #d8d8d8;
    display: inline-block;
    padding: 10px 15px;
    border-radius: 4px;
  }
}

.author__posts-by {
  text-align: center;
}

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

.post__headline {
  display: block;
  font-size: 1.5em;
  -webkit-margin-before: 0.83em;
  -webkit-margin-after: 0.83em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  font-weight: bold;
}
</style>