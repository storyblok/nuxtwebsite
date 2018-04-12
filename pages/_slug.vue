<template>
  <div>
    {{$route.params}}
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    const { data } = await context.app.$storyapi.get(`cdn/stories/${context.params.slug}`, { version: 'draft' })

    return { story: res.data.story }
  }
}
</script>