<template>
  <header class="header">
    <nav>
      <ul class="header__nav">
        <li class="header__nav-item header__nav-item--home"><nuxt-link to="/">Home</nuxt-link></li>
        <li class="header__nav-item"><nuxt-link to="/posts">Posts</nuxt-link></li>
        <li class="header__nav-item"><nuxt-link to="/authors">Authors</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
.header {
  width: 100%;
  height: 60px;
  line-height: 40px;
  text-align: center;

  background-color: rgba(255,255,255,0.4);
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  box-sizing: border-box;

  a {
    border-bottom: 2px solid #fff;
    &.nuxt-link-exact-active, &.nuxt-link-active, &:hover {
      text-decoration: none;
      border-color: #42b883;
    }
  }
}

.header__nav-item--home {
  a {
    &.nuxt-link-active {
      color: #000;
      border-color: #fff;
    }
    &.nuxt-link-exact-active {
      color: #42b883;
      border-color: #42b883;
    }
  }
}

.header__nav {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.header__nav-item {
  display: inline-block;
  padding: 10px 0px;

  & + .header__nav-item {
    margin-left: 10px;
  }
}
</style>