<!-- Login.vue -->
<script>
import Reset from './Reset.vue';

export default {
  name: 'Login',
  components: { Reset },
  data() {
    return { showReset: false };
  },
  mounted() {
    document.title = 'Login';
  }
};
</script>

<template>
  <div class="container">
      <div class="container-forms">
        <div class="button-forms">
        <button @click="showReset = false">LOG IN</button>
        <button @click="showReset = true">PASSWORD RESET</button>
      </div>
      <form v-if="!showReset">
        <h2>LOG IN YOUR ACCOUNT</h2>
        <div class="input-box">
          <input type="text" placeholder="Student Number" required>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Password" required>
        </div>
        <button>Log in</button>
        <p>Not a student yet? <router-link to="/Register"><span>Click here</span></router-link></p>
      </form>

      <Reset v-if="showReset" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.container-forms {
  background-color: rgb(0, 255, 174); 
  padding: 20px;
  border-radius: 10px;
  width: 300px; 
  text-align: center;
}
</style>
