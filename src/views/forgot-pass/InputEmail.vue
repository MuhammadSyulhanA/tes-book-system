<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow" style="width: 350px">
      <h3 class="text-center mb-3">Forgot Password</h3>
      <form @submit.prevent="verifyEmail">
        <!-- Email Input -->
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            v-model="email"
            class="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>

        <!-- Error Message -->
        <div v-if="errorMessage" class="alert alert-danger p-2">
          {{ errorMessage }}
        </div>

        <!-- Submit Button -->
        <button type="submit" class="btn btn-primary w-100">Next</button>

        <!-- Link to Login -->
        <p class="text-center mt-3">
          Back to <router-link to="/login">Login</router-link>
        </p>
      </form>
    </div>
  </div>
</template>
  
<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "ForgotPasswordEmail",
  data() {
    return {
      email: "",
      errorMessage: "",
    };
  },
  methods: {
    verifyEmail() {
      if (this.email !== "sulhan@gmail.com") {
        this.errorMessage = "Invalid email address!";
      } else {
        this.$router.push("/forgot-password-code");
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
  