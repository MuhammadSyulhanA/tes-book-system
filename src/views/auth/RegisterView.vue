<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div class="card p-4 shadow" style="width: 350px">
      <h3 class="text-center mb-3">Register</h3>
      <form @submit.prevent="register">
        <!-- Username -->
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            type="text"
            id="username"
            class="form-control"
            v-model="username"
            @input="validateUsername"
            required
          />
          <div v-if="errors.username" class="text-danger mt-1">
            {{ errors.username }}
          </div>
        </div>

        <!-- Password -->
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            id="password"
            class="form-control"
            v-model="password"
            @input="validatePassword"
            required
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
            id="confirmPassword"
            class="form-control"
            v-model="confirmPassword"
            @input="validateConfirmPassword"
            required
          />
          <div v-if="errors.confirmPassword" class="text-danger mt-1">
            {{ errors.confirmPassword }}
          </div>
        </div>

        <!-- Full Name -->
        <div class="mb-3">
          <label for="fullname" class="form-label">Full Name</label>
          <input
            type="text"
            id="fullname"
            class="form-control"
            v-model="fullname"
          />
        </div>

        <!-- Register Button -->
        <button
          type="submit"
          class="btn btn-primary w-100"
          :disabled="hasErrors"
        >
          Register
        </button>

        <!-- Link to Login -->
        <p class="text-center mt-3">
          Already have an account? <router-link to="/login">Login</router-link>
        </p>
      </form>
    </div>
  </div>
</template>
  
<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "RegisterView",
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: "",
      fullname: "",
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
    validateUsername() {
      if (this.username.length < 6) {
        this.errors.username = "Username must be at least 6 characters";
      } else {
        this.errors.username = "";
      }
    },

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

    register() {
      if (!this.hasErrors) {
        alert("Registration successful! Redirecting to login...");
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
  