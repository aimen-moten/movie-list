<template>
    <div class="movie-card">
      <h2>{{ title }}</h2>
      <p><strong>Year:</strong> {{ releaseYear }}</p>
      <p><strong>Rating:</strong> {{ rating }}</p>
      <ul>
        <strong>Genres:</strong>
        <li v-for="(genreItem, index) in genre" :key="index">{{ genreItem }}</li>
      </ul>
      <p><strong>Duration:</strong> {{ durationH }}h {{ durationM }}m</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Movie",
    props: {
      title: String,
      releaseYear: String,
      rating: String,
      genre: Array,
      durationH: Number,
      durationM: Number,
    },
  };
  </script>
  
  <style scoped>
  .movie-card {
    background-color: #2b2b3b;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    color: #fff;
  }
  
  .movie-card h2 {
    margin-bottom: 10px;
  }
  
  .movie-card p, .movie-card ul {
    margin: 5px 0;
  }
  
  .movie-card ul {
    padding-left: 20px;
  }
  </style>
  