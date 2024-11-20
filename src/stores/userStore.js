import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/init";

export const useUserStore = defineStore("user-store", {
  state: () => ({
    userName: "",
    signUpSuccess: false,
    signUpError: "",
    signInSuccess: false,
    signInError: "",
  }),
  getters: {
    getUserName: (state) => state.userName,
    getSignUpSuccess: (state) => state.signUpSuccess,
    getSignUpError: (state) => state.signUpError,
    getSignInSuccess: (state) => state.signInSuccess,
    getSignInError: (state) => state.signInError,
  },
  actions: {
    async userSignUp(email, password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        this.signUpSuccess = true;
      } catch (error) {
        this.signUpError = error.message;
      }
    },
    async userSignIn(email, password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        this.signInSuccess = true;
      } catch (error) {
        this.signInError = error.message;
      }
    },
  },
});
