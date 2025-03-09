<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow" style="width: 350px">
      <h3 class="text-center mb-3">Reset Password</h3>
      <form @submit.prevent="resetPassword">
        <!-- Password Input -->
        <div class="mb-3">
          <label for="password" class="form-label">New Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="password"
            placeholder="Enter new password"
            @input="validatePassword"
          />
          <div v-if="errors.password" class="text-danger mt-1">
            {{ errors.password }}
          </div>
        </div>

        <!-- Confirm Password -->
        <div class="mb-3">
          <label for="confirmPassword" class="form-label"
            >Confirm Password</label
          >
          <input
            type="password"
            v-model="confirmPassword"
            class="form-control"
            id="confirmPassword"
            placeholder="Confirm password"
            @input="validateConfirmPassword"
          />
          <div v-if="errors.confirmPassword" class="text-danger mt-1">
            {{ errors.confirmPassword }}
          </div>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="btn btn-primary w-100"
          :disabled="hasErrors"
        >
          Reset Password
        </button>
      </form>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "ResetPassword",
  data() {
    return {
      password: "",
      confirmPassword: "",
      errors: {
        username: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  computed: {
    hasErrors() {
      return Object.values(this.errors).some((error) => error !== "");
    },
  },
  methods: {
    validatePassword() {
      const hasLetter = /[a-zA-Z]/.test(this.password);
      const hasNumber = /[0-9]/.test(this.password);
      if (!hasLetter || !hasNumber) {
        this.errors.password = "Password must contain letters and numbers";
      } else {
        this.errors.password = "";
      }
    },

    validateConfirmPassword() {
      if (this.confirmPassword !== this.password) {
        this.errors.confirmPassword = "Passwords do not match";
      } else {
        this.errors.confirmPassword = "";
      }
    },

    resetPassword() {
      if (!this.hasErrors) {
        alert("Password reset successful! Please login.");
        this.$router.push("/login");
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
  