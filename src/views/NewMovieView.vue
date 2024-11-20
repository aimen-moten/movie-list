<template>
  <div>
    <div v-if="!getSignUpSuccess">
      <SignUpForm @SignUp="userSignUp" />
      <p v-if="getSignUpError">{{ getSignUpError }}</p>
    </div>
    <div v-else>
      <h1>Add Movie Form</h1>
      <MovieForm />
    </div>
  </div>
</template>

<script>
import SignUpForm from '../components/SignUpForm.vue';
import MovieForm from '../components/MovieForm.vue';
import { useUserStore } from '../stores/userStore';
import { mapState, mapActions } from 'pinia';

export default {
  name: 'NewMovieView',
  components: {
    SignUpForm,
    MovieForm,
  },
  computed: {
    ...mapState(useUserStore, ['getSignUpSuccess', 'getSignUpError']),
  },
  methods: {
    ...mapActions(useUserStore, ['userSignUp']),
  },
};
</script>

<style scoped>
h1 {
  color: #333;
  text-align: center;
}

p {
  color: red;
  font-size: 14px;
  text-align: center;
}
</style>
