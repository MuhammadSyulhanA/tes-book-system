<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow" style="width: 350px">
      <h3 class="text-center mb-3">Enter Verification Code</h3>
      <form @submit.prevent="verifyCode">
        <!-- Code Input -->
        <div class="mb-3">
          <label for="code" class="form-label">Verification Code</label>
          <input
            type="text"
            v-model="code"
            class="form-control"
            id="code"
            placeholder="Enter 6-digit code"
          />
        </div>

        <!-- Error Message -->
        <div v-if="errorMessage" class="alert alert-danger p-2">
          {{ errorMessage }}
        </div>

        <!-- Submit Button -->
        <button type="submit" class="btn btn-primary w-100">Next</button>
      </form>
    </div>
  </div>
</template>
  
<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "ForgotPasswordCode",
  data() {
    return {
      code: "",
      errorMessage: "",
    };
  },
  methods: {
    verifyCode() {
      if (this.code !== "123456") {
        this.errorMessage = "Invalid verification code!";
      } else {
        this.$router.push("/reset-password");
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
  