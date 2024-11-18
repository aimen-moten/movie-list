<template>
    <div class="container">
      <h2 class="title">Sign In</h2>
      <div class="input-group">
        <label for="email" class="label">Email:</label>
        <input
          type="email"
          id="email"
          v-model="signInEmail"
          class="input-field"
          placeholder="Enter your email"
        />
      </div>
      <div class="input-group">
        <label for="password" class="label">Password:</label>
        <input
          type="password"
          id="password"
          v-model="signInPassword"
          class="input-field"
          placeholder="Enter your password"
        />
      </div>
      <button @click="signIn" class="submit-btn">Sign In</button>
      <p v-if="signInError" class="error-message">{{ signInError }}</p>
    </div>
  </template>
  
  <script>
  export default {
    emits: ['SignIn'],
    data() {
      return {
        signInEmail: '',
        signInPassword: '',
        signInError: '',
      };
    },
    computed: {
      signInStatus() {
        return this.signInEmail !== '' && this.signInPassword !== '';
      },
    },
    methods: {
      signIn() {
        if (this.signInStatus) {
          this.$emit('SignIn', {
            email: this.signInEmail,
            password: this.signInPassword,
          });
        } else {
          this.signInError = 'Please fill in both fields.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 400px;
    margin: 50px auto;
    padding: 40px;
    background-color: #ff6b6b;
    ; /* Dark background */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    color: #fff; /* Text color for dark background */
  }
  
  .title {
    text-align: center;
    color: #fff;
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .input-group {
    margin-bottom: 20px;
  }
  
  .label {
    font-size: 16px;
    color: #bbb; /* Lighter text for labels */
  }
  
  .input-field {
    width: 100%;
    padding: 12px;
    background-color: #ffff;
    ; /* Input field background */
    border: 1px solid #fff;
    border-radius: 8px;
    color: #fff;
    font-size: 14px;
    margin-top: 8px;
    transition: all 0.3s ease;
  }
  
  .input-field:focus {
    border-color: #4a90e2; /* Focused input border color */
    outline: none;
  }
  
  .submit-btn {
    width: 100%;
    padding: 14px;
    background-color: #4a90e2; /* Button color */
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-btn:hover {
    background-color: #357ab7; /* Darker blue when hovering */
  }
  
  .error-message {
    color: #ff4d4f; /* Red error color */
    text-align: center;
    font-weight: bold;
    margin-top: 12px;
  }
  </style>
  