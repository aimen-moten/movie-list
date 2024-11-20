import { defineStore } from "pinia";
import { db } from "../firebase/init.js";
import { getDocs, collection } from "firebase/firestore";

export const useMovieStore = defineStore("movieStore", {
  state: () => ({
    movies: [],
  }),
  actions: {
    async fetchMovies() {
      try {
        const querySnapshot = await getDocs(collection(db, "movies"));
        this.movies = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    },
  },
  getters: {
    movieCount: (state) => state.movies.length,
  },
});
