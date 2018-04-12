<template>
  <div>
    Home
  </div>
</template>

<script>
export default {
  async asyncData (context) {
    const { data } = await context.app.$storyapi.get(`cdn/stories/home`, { version: 'draft' })

    return { story: res.data.story }
  }
}
</script>