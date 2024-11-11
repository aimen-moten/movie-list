<template>
  <div class="home container">
    <h1>Welcome to My Movie List</h1>
    <p>Discover My All-Time Favorite Movies!</p>
    <img src="@/assets/movie-poster.jpg" alt="Movies Banner" class="banner-img" />
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 40px 0;
}

.banner-img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}
</style>
