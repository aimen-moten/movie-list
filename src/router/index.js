// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import MovieListView from '../views/MovieListView.vue';
import NewMovieView from '@/views/NewMovieView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/movie-list',
    name: 'movie-list',
    component: MovieListView,
  },
  { path: "/new-movie-form", 
    name: "new-movie-form", 
    component: NewMovieView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;