<template>
  <div class="profile">
    <div class="container mt-4">
      <div class="row justify-content-center">
        <div class="col col-lg-6">
          <div class="d-flex align-items-center text-start">
            <img :src="profileImage" class="user-pic me-3" />
            <div>
              <h5 class="mt-0">{{ fullName }}</h5>
              <p>{{ job }}</p>
              <p>{{ email }}</p>
              <p>{{ phone }}</p>
            </div>
            <!-- Dropdown Menu -->
            <div class="ms-auto">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Options
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" @click="editProfile"
                      >Edit Profile</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item text-danger"
                      @click="confirmDeleteAccount"
                      >Delete Account</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default {
  name: "ProfileView",
  data() {
    return {
      profileImage: require("@/assets/img_profile.jpg"),
      fullName: "Sulhan",
      job: "Software Engineer",
      email: "sulhan@gmail.com",
      phone: "+62 812-3456-7890",
    };
  },
  mounted() {
    // Ambil data dari localStorage jika ada
    const storedImage = localStorage.getItem("profileImage");
    const storedName = localStorage.getItem("fullName");
    const storedJob = localStorage.getItem("job");
    const storedEmail = localStorage.getItem("email");
    const storedPhone = localStorage.getItem("phone");

    if (storedImage) this.profileImage = storedImage;
    if (storedName) this.fullName = storedName;
    if (storedJob) this.job = storedJob;
    if (storedEmail) this.email = storedEmail;
    if (storedPhone) this.phone = storedPhone;
  },
  methods: {
    editProfile() {
      this.$router.push("/edit-profile");
    },
    confirmDeleteAccount() {
      if (confirm("Are you sure you want to delete your account?")) {
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped>
.user-pic {
  border-radius: 50%;
  height: 80px;
  width: 80px;
  object-fit: cover;
}
</style>
