<template>
  <div class="login d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow" style="width: 350px">
      <h4 class="text-center mb-3">Login</h4>
      <form @submit.prevent="login">
        <!-- Username -->
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            type="text"
            v-model="username"
            class="form-control"
            id="username"
            placeholder="Enter username"
          />
        </div>

        <!-- Password -->
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="password"
            placeholder="Enter password"
          />
        </div>

        <!-- Error Message -->
        <div v-if="errorMessage" class="alert alert-danger p-2">
          {{ errorMessage }}
        </div>

        <!-- Login Button -->
        <button type="submit" class="btn btn-primary w-100">Login</button>

        <!-- Link to Register -->
        <p class="text-center mt-3">
          Don't have an account?
          <router-link to="/register">Register</router-link>
        </p>

        <p class="text-center mt-3">
          <router-link to="/forgot-password">Forgot Password?</router-link>
        </p>
      </form>
    </div>
  </div>
</template>
  
<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    login() {
      if (this.username === "sulhan" && this.password === "1234") {
        this.$router.push("/home");
      } else {
        this.errorMessage = "Invalid username or password";
      }
    },
  },
};
</script>
  
<style scoped>
.card {
  border-radius: 10px;
}
</style>
  