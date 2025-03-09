<template>
  <div class="container mt-4">
    <h2 class="text-center mb-4">List Booking Villa</h2>

    <!-- Filter -->
    <div class="row mb-4">
      <div class="col-md-4">
        <label class="form-label">Bulan</label>
        <select v-model="selectedMonth" class="form-select">
          <option value="">Semua Bulan</option>
          <option
            v-for="month in months"
            :key="month.value"
            :value="month.value"
          >
            {{ month.label }}
          </option>
        </select>
      </div>
      <div class="col-md-4">
        <label class="form-label">Tahun</label>
        <select v-model="selectedYear" class="form-select">
          <option value="">Semua Tahun</option>
          <option v-for="year in years" :key="year" :value="year">
            {{ year }}
          </option>
        </select>
      </div>
      <div class="col-md-4">
        <label class="form-label">Status</label>
        <select v-model="selectedStatus" class="form-select">
          <option value="">Semua Status</option>
          <option value="Booked">Booked</option>
          <option value="Pending">Pending</option>
          <option value="Available">Available</option>
        </select>
      </div>
    </div>

    <!-- List Villa -->
    <div class="row">
      <div v-for="villa in filteredVillas" :key="villa.id" class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img :src="villa.image" class="card-img-top" alt="Villa Image" />
          <div class="card-body">
            <h5 class="card-title">{{ villa.name }}</h5>
            <p class="card-text">
              <strong>Penyewa:</strong> {{ villa.renter }}
            </p>
            <p class="card-text">
              <strong>Alamat:</strong> {{ villa.address }}
            </p>
            <p class="card-text">
              <strong>Tanggal Booking:</strong> {{ villa.bookingDate }}
            </p>
            <span class="badge" :class="getStatusClass(villa.status)">
              {{ villa.status }}
            </span>
          </div>
        </div>
      </div>
      <p v-if="filteredVillas.length === 0" class="text-center text-muted">
        Tidak ada data ditemukan.
      </p>
    </div>
  </div>
</template>
  
<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: "BookingView",
  data() {
    return {
      selectedMonth: "",
      selectedYear: "",
      selectedStatus: "",
      months: [
        { value: "01", label: "Januari" },
        { value: "02", label: "Februari" },
        { value: "03", label: "Maret" },
        { value: "04", label: "April" },
        { value: "05", label: "Mei" },
        { value: "06", label: "Juni" },
        { value: "07", label: "Juli" },
        { value: "08", label: "Agustus" },
        { value: "09", label: "September" },
        { value: "10", label: "Oktober" },
        { value: "11", label: "November" },
        { value: "12", label: "Desember" },
      ],
      years: [2022, 2023, 2024, 2025],
      villas: [
        {
          id: 1,
          name: "Villa Sunset",
          renter: "Budi Santoso",
          address: "Jl. Merpati No. 12, Bali",
          image: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?q=80&w=3067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          bookingDate: "2024-03-15",
          status: "Booked",
        },
        {
          id: 2,
          name: "Villa Ocean",
          renter: "Lisa Rahman",
          address: "Jl. Pantai Indah No. 45, Lombok",
          image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          bookingDate: "2024-02-20",
          status: "Booked",
        },
        {
          id: 3,
          name: "Villa Green Hills",
          renter: "-",
          address: "Jl. Gunung Sejuk No. 8, Bandung",
          image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          bookingDate: "2024-04-10",
          status: "Available",
        },
        {
          id: 4,
          name: "Villa Mountain View",
          renter: "Andi Wijaya",
          address: "Jl. Bukit Tinggi No. 30, Malang",
          image: "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?q=80&w=3015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          bookingDate: "2023-12-05",
          status: "Pending",
        },
      ],
    };
  },
  computed: {
    filteredVillas() {
      return this.villas.filter((villa) => {
        const [year, month] = villa.bookingDate.split("-");
        return (
          (!this.selectedMonth || this.selectedMonth === month) &&
          (!this.selectedYear || this.selectedYear == year) &&
          (!this.selectedStatus || this.selectedStatus === villa.status)
        );
      });
    },
  },
  methods: {
    getStatusClass(status) {
      return {
        "bg-success": status === "Booked",
        "bg-warning": status === "Pending",
        "bg-danger": status === "Available",
      };
    },
  },
};
</script>
  
<style scoped>
.card {
  border-radius: 10px;
}
.badge {
  font-size: 14px;
  padding: 6px 12px;
}
</style>
  