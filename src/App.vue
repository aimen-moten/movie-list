<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>Movie List App</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/movie-list">Movie List</RouterLink>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  text-align: center;
}
nav {
  margin-bottom: 20px;
}
</style>
