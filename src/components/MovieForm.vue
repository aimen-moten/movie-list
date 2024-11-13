<template>
    <div class="movie-form">
      <h2>Add a New Movie</h2>
      <form @submit.prevent="addNewMovieToDB">
        <input v-model="newMovie.title" placeholder="Title" required />
        <input v-model="newMovie.releaseYear" placeholder="Release Year" required />
        <select v-model="newMovie.rating">
          <option value="G">G</option>
          <option value="PG">PG</option>
          <option value="PG-13">PG-13</option>
          <option value="R">R</option>
        </select>
        <input v-model.number="newMovie.durationHour" placeholder="Duration (Hours)" required />
        <input v-model.number="newMovie.durationMinute" placeholder="Duration (Minutes)" required />
        <select v-model="newMovie.genre" multiple>
          <option v-for="genre in movieGenres" :key="genre" :value="genre">{{ genre }}</option>
        </select>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  </template>
  
  <script>
  import { addDoc, collection } from "firebase/firestore";
  import { db } from "../firebase/init.js";
  
  export default {
    name: "MovieForm",
    data() {
      return {
        newMovie: {
          title: "",
          releaseYear: "",
          rating: "",
          genre: [],
          durationHour: null,
          durationMinute: null,
        },
        movieGenres: ["Comedy", "Action", "Drama", "Animation", "Mystery", "Thriller"],
      };
    },
    methods: {
      resetNewMovie() {
        this.newMovie = {
          title: "",
          releaseYear: "",
          rating: "",
          genre: [],
          durationHour: null,
          durationMinute: null,
        };
      },
      async addNewMovieToDB() {
        await addDoc(collection(db, "movies"), this.newMovie);
        this.$router.push("/movie-list");
        this.resetNewMovie();
      },
    },
  };
  </script>
  
  <style scoped>
  .movie-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: #2b2b3b;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }
  </style>
  