<template>
  <div class="container">
    <h1>Authors</h1>
    <ul class="authors">
      <li :key="author.id" v-for="author in authors">
        <nuxt-link class="author" :to="'/' + author.full_slug">
          <img class="author__image" :src="resize(author.content.image, '40x0')" :alt="author.name">
          <h2>{{author.name}}</h2>
          <p>{{author.content.about}}</p>
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
    return { authors: data.stories }
  }
}
</script>

<style scoped>
.authors {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.author {
  color: inherit;
  text-decoration: none;
  display: block;
  margin-bottom: 30px;
  transition: transform 500ms ease, box-shadow 500ms ease;
  border: 1px solid #ddd;
  padding: 20px;
  &:hover, &:focus {
    transform: translateY(-1px);
    box-shadow: 0px 1px 10px 0px #ccc;
  }
}

.author__image {
  display: inline;
  border-radius: 50%;
  border: 1px solid #d8d8d8;
}
</style>