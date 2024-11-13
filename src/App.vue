<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/movie-list">Movie List</RouterLink>
      <RouterLink to="/new-movie-form">Add New Movie</RouterLink>
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
  font-family: Arial, sans-serif;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #1e1e2e;
}
</style>
