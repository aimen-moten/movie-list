<template>
  <div class="movie-list">
    <h2>Movie List</h2>
    <ul v-if="movies.length">
      <li v-for="movie in movies" :key="movie.id">
        <strong>{{ movie.title }}</strong> ({{ movie.releaseYear }}) - 
        {{ movie.durationHour }}h {{ movie.durationMinute }}m | Rating: {{ movie.rating }}
        | Genres: {{ movie.genre.join(", ") }}
      </li>
    </ul>
    <p v-else>No movies available. Add some!</p>
  </div>
</template>

<script>
import { useMovieStore } from "../stores/movieStore";

export default {
  name: "MovieListView",
  data() {
    return {
      movies: [],
    };
  },
  created() {
    const movieStore = useMovieStore();
    movieStore.fetchMovies().then(() => {
      this.movies = movieStore.movies;
    });
  },
};
</script>

<style scoped>
.movie-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #2b2b3b;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}
</style>
