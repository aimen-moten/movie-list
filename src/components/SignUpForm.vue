<template>
  <div class="container">
    <h2>Please Sign Up to Add a Movie</h2>
    <div>
      <label>Email:</label>
      <input type="email" v-model="signUpEmail" class="input-field" />
    </div>
    <div>
      <label>Password:</label>
      <input :type="passwordFieldType" v-model="signUpPassword" class="input-field" />
      <button @click="togglePasswordVisibility" class="toggle-btn">
        {{ passwordFieldType === 'password' ? 'Show' : 'Hide' }} Password
      </button>
    </div>
    <button @click="signUp" class="submit-btn">Sign Up</button>
    <p v-show="!signUpStatus" class="error-message">Missing Email or Password</p>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/init.js"; // Import your Firebase auth setup

export default {
  emits: ['SignUp'],
  data() {
    return {
      signUpEmail: '',
      signUpPassword: '',
      passwordFieldType: 'password',
      signUpError: '',
      signUpSuccess: false,
    };
  },
  computed: {
    signUpStatus() {
      return this.signUpEmail !== '' && this.signUpPassword !== '';
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    },
    async signUp() {
      if (this.signUpStatus) {
        // Convert the email to a string before passing it to Firebase
        const email = String(this.signUpEmail);
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, this.signUpPassword);
          this.signUpSuccess = true;
          this.signUpError = '';
          alert(`Successful sign up for ${userCredential.user.email}`);
          this.$emit('SignUp', { email: userCredential.user.email, password: this.signUpPassword });
        } catch (error) {
          this.signUpError = error.message;
          this.signUpSuccess = false;
          alert(`Error: ${this.signUpError}`);
        }
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: auto;
  padding: 60px;
  background-color: #3b3434;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.toggle-btn {
  background-color: transparent;
  color: #4a90e2;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin-top: 5px;
}

.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #357ab7;
}

.error-message {
  color: #ff4d4f;
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
}
</style>
