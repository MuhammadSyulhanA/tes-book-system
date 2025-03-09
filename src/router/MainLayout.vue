<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <div class="container d-flex align-items-center">
      <router-link to="/home" class="navbar-brand fw-bold"
        >BookingApp</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto d-flex align-items-center">
          <li class="nav-item" v-for="link in links" :key="link.path">
            <router-link
              :to="link.path"
              class="nav-link"
              :class="{ active: $route.path === link.path }"
            >
              {{ link.label }}
            </router-link>
          </li>

          <!-- Dropdown User -->
          <li class="nav-item dropdown" v-if="fullName">
            <a
              class="nav-link dropdown-toggle d-flex align-items-center profile-container"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              <img :src="profileImage" class="user-pic me-2" />
              <span class="user-name">{{ fullName }}</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <router-link class="dropdown-item" to="/profile"
                  >Profile</router-link
                >
              </li>
              <li>
                <button class="dropdown-item text-danger" @click="confirmLogout">
                  Logout
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default {
  name: "MainLayout",
  data() {
    return {
      links: [
        { path: "/home", label: "Home" },
        { path: "/profile", label: "Profile" },
        { path: "/about", label: "About" },
        { path: "/booking", label: "Booking" },
      ],
      profileImage: require("@/assets/img_profile.jpg"), // Default image
      fullName: "sulhan",
    };
  },
  mounted() {
    // Ambil data user dari localStorage
    const storedImage = localStorage.getItem("profileImage");
    const storedName = localStorage.getItem("fullName");

    if (storedImage) this.profileImage = storedImage;
    if (storedName) this.fullName = storedName;
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    confirmLogout() {
      if (confirm("Are you sure you want to logout?")) {
        this.logout();
      }
    },
    logout() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.navbar {
  padding: 12px 0;
}

.navbar-brand {
  font-size: 20px;
  color: #2c3e50;
}

.nav-link {
  font-weight: 500;
  color: #2c3e50;
  transition: 0.3s;
}

.nav-link:hover {
  color: #007bff;
}

.nav-link.active {
  color: #42b983 !important;
  font-weight: bold;
}

/* User Profile Dropdown */
.profile-container {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border: 2px solid #ddd;
  border-radius: 50px;
  transition: 0.3s;
}

.profile-container:hover {
  background-color: #f8f9fa;
}

.user-pic {
  border-radius: 50%;
  height: 35px;
  width: 35px;
  object-fit: cover;
}

.user-name {
  font-weight: 500;
  color: #2c3e50;
}

.dropdown-menu {
  min-width: 150px;
}
</style>
