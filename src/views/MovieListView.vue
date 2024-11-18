<template>
  <div v-if="!signInSuccess">
      <SignInForm @SignIn="userSignIn" />
      <p v-if="signInError">{{ signInError }}</p>
  </div>
  <div v-else>
  <div class="movie-list container">
    <h1>Movie List</h1>

    <!-- Genre Filter -->
    <div class="filter-section">
      <label for="genreFilter">Filter by Genre:</label>
      <input
        id="genreFilter"
        v-model="genreFilter"
        placeholder="Enter genre (e.g., Comedy)"
      />
      <button @click="queryByGenre">Apply</button>
    </div>

    <!-- Duration Filter -->
    <div class="filter-section">
      <label for="durationFilter">Filter by Duration (in hours):</label>
      <input
        type="number"
        v-model.number="durationFilter"
        placeholder="Enter minimum duration"
      />
      <button @click="filterByDuration">Apply</button>
    </div>

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
  </div>
</template>

<script>
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/init.js";
import Movie from "../components/Movie.vue";
import SignInForm from "@/components/SignInForm.vue";

export default {
  name: "MovieListView",
  components: { Movie, SignInForm },
  data() {
    return {
      movieList: [],
      genreFilter: "",
      durationFilter: null,
      signInSuccess: false,
      signInError: '',
      user: null,
    };
  },
  created() {
    this.getAllMovies();
  },
  methods: {
    async userSignIn(signInObj) {
      const { signInEmail, signInPassword } = signInObj;
      try {
        const userCredential = await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
        this.user = userCredential.user;
        this.signInSuccess = true;
        this.signInError = '';
        alert(`Successful sign in for ${this.user.email}`);
        this.loadMovies();
      } catch (error) {
        console.error(error.code, error.message);
        this.signInError = error.message;
        this.signInSuccess = false;
      }
    },
    async getAllMovies() {
      this.movieList = [];
      const q = query(collection(db, "movies"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.movieList.push(doc.data());
      });
    },
    async queryByGenre() {
      this.movieList = [];
      const q = query(
        collection(db, "movies"),
        where("genre", "array-contains", this.genreFilter)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.movieList.push(doc.data());
      });
    },
    filterByDuration() {
      this.movieList = this.movieList.filter(
        (movie) => movie.durationHour >= this.durationFilter
      );
    },
  },
};
</script>

<style scoped>
.filter-section {
  margin-bottom: 20px;
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
</style>
