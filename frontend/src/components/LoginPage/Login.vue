<!-- Login.vue -->
<script>
import axios from 'axios';

export default {
  data() {
    return {
      studentNumber: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/login', {
          studentNumber: this.studentNumber,
          password: this.password
        });
        alert(response.data.message);
      } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
          this.errorMessage = error.response.data.error;
        } else {
          this.errorMessage = 'An error occurred. Please try again.';
        }
      }
    }
  }
}
</script>

<template>
  <form @submit.prevent="login">
    <h2>LOG IN YOUR ACCOUNT</h2>
    <div class="input-box">
      <input v-model="studentNumber" type="text" placeholder="Student Number" required>
    </div>
    <div class="input-box">
      <input v-model="password" type="password" placeholder="Password" required>
    </div>
    <button type="submit">Log in</button>
    <p>
      Not a student yet?
      <router-link to="/Register"><span>Click here</span></router-link>
    </p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </form>
</template>

<style scoped>
/* Your component styles here */
.error {
  color: red;
}
</style>
