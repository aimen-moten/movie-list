<template>
    <div class="new-movie-view">
      <h1>Add Movie Form</h1>
      <MovieForm />
    </div>
  </template>
  
  <script>
  import MovieForm from "../components/MovieForm.vue";
  
  export default {
    name: "NewMovieView",
    components: { MovieForm },
  };
  </script>
  
  <style scoped>
  .new-movie-view {
    text-align: center;
    padding: 40px 0;
  }
  </style>
  