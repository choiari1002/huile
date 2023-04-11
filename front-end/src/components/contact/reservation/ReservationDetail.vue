<template>
  <div>
    <div class="hero hero-inner">
      <div class="container" data-aos="fade-left" data-aos-delay="200">
        <div class="row align-items-center">
          <div class="col-lg-6 mx-auto text-center">
            <div class="intro-wrap">
              <h1 class="mb-0">Reservation Info</h1>
              <p class="text-white">
                예약한 여행 정보를 여기서 확인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="untree_co-section">
      <div class="container" data-aos="fade-left" data-aos-delay="200">
        <div class="row">
          <div class="col-lg-6 mx-auto text-center">
            <!-- search 관련 div 시작 -->
            <div class="col-md-8 offset-2">
              <div class="input-group mb-3">
                <!-- Todo : 수정 시작 -->
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search by Email"
                  v-model="searchEmail"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    @click="
                      page = 1;
                      retrieveReservation();
                    "
                  >
                    Search
                  </button>
                </div>
                <!-- Todo : 수정 끝 -->
              </div>
            </div>
            <!-- search 관련 div 끝 -->

            <!-- Todo : page 바 시작 -->
            <div class="col-md-8 offset-4">
              <div class="mb-3">
                Items per Page:
                <select
                  v-model="pageSize"
                  @change="handlePageSizeChange($event)"
                >
                  <option v-for="size in pageSizes" :key="size" :value="size">
                    <!--            size : 3, 6, 9 -->
                    {{ size }}
                  </option>
                </select>
              </div>
            </div>
            <!-- Todo : page 바 끝 -->

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Email</th>
                  <!-- <th scope="col">Last Name</th> -->
                  <th scope="col">이름</th>
                  <th scope="col">여행지</th>
                  <th scope="col">시작일시</th>
                  <th scope="col">종료일시</th>
                  <th scope="col">예약가능여부</th>
                </tr>
              </thead>
              <tbody v-for="(data, index) in reservation" :key="index">
                <tr @click="setActive(data, index)">
                  <td>{{ data.email }}</td>
                  <td>{{ data.lastName + " " + data.firstName }}</td>
                  <td>{{ data.sights }}</td>
                  <td>{{ data.startDate }}</td>
                  <td>{{ data.endDate }}</td>
                  <td>{{ data.reservationYn }}</td>
                </tr>
              </tbody>
            </table>

            <!-- Todo : page 바 시작 -->
            <div class="col-md-8 offset-3">
              <b-pagination
                v-model="page"
                :total-rows="count"
                :per-page="pageSize"
                prev-text="Prev"
                next-text="Next"
                @change="handlePageChange"
              ></b-pagination>
            </div>
            <!-- Todo : page 바 끝 -->
          </div>

          <div v-if="currentData" class="col-lg-5 ml-auto">
            <div class="quick-contact-item d-flex align-items-center mb-4">
              <span class="flaticon-house"></span>
              <address class="text">
                {{ this.currentData.address }}
              </address>
            </div>
            <div class="quick-contact-item d-flex align-items-center mb-4">
              <span class="flaticon-phone-call"></span>
              <address class="text">{{ this.currentData.phone }}</address>
            </div>
            <div class="quick-contact-item d-flex align-items-center mb-4">
              <span class="flaticon-mail"></span>
              <address class="text">{{ this.currentData.email }}</address>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import initScripts from "../../../assets/js/scripts";
// import initCustom from "../../../assets/js/custom.js";
import ReservationDataService from "../../../services/ReservationDataService";

export default {
  data() {
    return {
      reservation: [],
      searchEmail: "",
      currentData: null,
      currentIndex: -1,

      page: 1,
      count: 0,
      pageSize: 3,

      pageSizes: [3, 6, 9],
    };
  },
  methods: {
    retrieveReservation() {
      ReservationDataService.getAll(
        this.searchEmail,
        this.page - 1,
        this.pageSize
      )
        .then((response) => {
          const { reservation, totalItems } = response.data;
          this.reservation = reservation;
          this.count = totalItems;

          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    handlePageChange(value) {
      this.page = value;
      this.retrieveReservation();
    },
    handlePageSizeChange(event) {
      this.pageSize = event.target.value;
      this.page = 1;
      this.retrieveReservation();
    },
    setActive(data, index) {
      console.log(data);
      this.currentData = data;
      this.currentIndex = index;
    },
  },
  mounted() {
    // initScripts();
    // initCustom();
    this.searchEmail = this.$route.params.email;
    this.retrieveReservation();
  },
};
</script>

<style></style>
