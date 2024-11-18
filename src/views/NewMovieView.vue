<template>
  <div>
    <div v-if="!signUpSuccess">
      <SignUpForm @SignUp="userSignUp" />
      <p v-if="signUpError">{{ signUpError }}</p>
    </div>
    <div v-else>
      <h1>Add Movie Form</h1>
      <MovieForm />
    </div>
  </div>
</template>

<script>
import SignUpForm from '../components/SignUpForm.vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/init.js';
import MovieForm from '../components/MovieForm.vue';

export default {
  name: 'NewMovieView',
  components: {
    SignUpForm,
    MovieForm,
  },
  data() {
    return {
      signUpSuccess: false,
      userName: '',
      signUpError: '',
    };
  },
  methods: {
    async userSignUp(signUpObj) {
      const { signUpEmail, signUpPassword } = signUpObj;
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
        this.userName = userCredential.user.email;
        this.signUpSuccess = true;
        this.signUpError = '';
        alert(`Successful sign up for ${this.userName}`);
      } catch (error) {
        this.userName = '';
        this.signUpError = error.message;
        this.signUpSuccess = false;
      }
    },
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
