<template>
    <div class="movie-list container">
      <h1>Movie List</h1>
      <div class="movies-grid">
        <Movie
          v-for="(movie, index) in movieList"
          :key="index"
          :title="movie.title"
          :releaseYear="movie.releaseYear"
          :rating="movie.rating"
          :genre="movie.genre"
          :durationH="movie.durationHour"
          :durationM="movie.durationMinute"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { query, collection, getDocs } from "firebase/firestore";
  import { db } from "../firebase/init.js";
  import Movie from "../components/Movie.vue";
  
  export default {
    name: "MovieListView",
    components: { Movie },
    data() {
      return {
        movieList: [],
      };
    },
    created() {
      this.getAllMovies();
    },
    methods: {
      async getAllMovies() {
        try {
          const q = query(collection(db, "movies"));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            this.movieList.push(doc.data());
          });
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .movie-list {
    padding: 40px 0;
  }
  
  .movies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  </style>
  