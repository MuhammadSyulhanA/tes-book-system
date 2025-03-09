<template>
  <div
    class="edit-profile d-flex justify-content-center align-items-center vh-100"
  >
    <div class="card p-4 shadow" style="width: 350px">
      <h4 class="text-center mb-3">Edit Profile</h4>

      <!-- Upload Profile Picture -->
      <div class="mb-3 text-center">
        <img :src="previewImage" class="user-pic mb-2" />
        <input type="file" @change="uploadImage" class="form-control" />
      </div>

      <!-- Full Name -->
      <div class="mb-3">
        <label class="form-label">Full Name</label>
        <input v-model="fullName" type="text" class="form-control" />
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input v-model="email" type="email" class="form-control" />
      </div>

      <!-- Job -->
      <div class="mb-3">
        <label class="form-label">Job</label>
        <input v-model="job" type="text" class="form-control" />
      </div>

      <!-- Phone -->
      <div class="mb-3">
        <label class="form-label">Phone</label>
        <div class="input-group">
          <select v-model="phonePrefix" class="form-select">
            <option value="+62">🇮🇩 +62 (Indonesia)</option>
            <option value="+1">🇺🇸 +1 (USA)</option>
            <option value="+44">🇬🇧 +44 (UK)</option>
          </select>
          <input v-model="phoneNumber" type="text" class="form-control" />
        </div>
      </div>

      <button class="btn btn-primary w-100" @click="saveProfile">
        Save Changes
      </button>
    </div>
  </div>
</template>
  
<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "EditProfileView",
  data() {
    return {
      fullName: "Sulhan",
      email: "sulhan@gmail.com",
      job: "Software Engineer",
      phonePrefix: "+62",
      phoneNumber: "812-3456-7890",
      previewImage: require("@/assets/img_profile.jpg"),
    };
  },
  mounted() {
    // Ambil data dari localStorage saat halaman dibuka
    const storedImage = localStorage.getItem("profileImage");
    const storedName = localStorage.getItem("fullName");
    const storedJob = localStorage.getItem("job");
    const storedEmail = localStorage.getItem("email");
    const storedPhonePrefix = localStorage.getItem("phonePrefix");
    const storedPhone = localStorage.getItem("phone");

    if (storedImage) this.previewImage = storedImage;
    if (storedName) this.fullName = storedName;
    if (storedJob) this.job = storedJob;
    if (storedEmail) this.email = storedEmail;
    if (storedPhonePrefix) this.phonePrefix = storedPhonePrefix;
    if (storedPhone) this.phoneNumber = storedPhone;
  },
  methods: {
    uploadImage(event) {
      const file = event.target.files[0];
      if (file) {
        this.previewImage = URL.createObjectURL(file);
      }
    },
    saveProfile() {
      // Simpan data di localStorage (simulasi update)
      localStorage.setItem("profileImage", this.previewImage);
      localStorage.setItem("fullName", this.fullName);
      localStorage.setItem("job", this.job);
      localStorage.setItem("email", this.email);
      localStorage.setItem("phonePrefix", this.phonePrefix);
      localStorage.setItem("phone", this.phoneNumber);

      alert("Profile updated successfully!");
      this.$router.push("/profile");
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
.card {
  border-radius: 10px;
}
</style>
  