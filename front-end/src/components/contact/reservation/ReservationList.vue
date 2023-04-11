<template>
  <div data-bs-spy="scroll" data-bs-target="#navScroll">
    <main>
      <div class="py-vh-5 w-100 overflow-hidden" id="services">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-12 col-lg-10 col-xl-8">
              <h1 class="display-1 fw-bold border-bottom border-dark pb-4">
                Reservation Info
              </h1>
              <!-- <p>> 예약 변경 및 취소 문의는 010-2269-8479로 문의 바랍니다.</p> -->
            </div>

            <!-- reservList 템플릿 추가 -->
            <div class="col-12 col-lg-10 col-xl-8">
              <div class="untree_co-section">
                <div
                  class="container"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div class="row">
                    <div class="col-lg-12 mx-auto text-center">
                      <!-- search 관련 div 시작 -->
                      <div class="col-md-8 offset-2">
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Search by Email"
                            v-model="searchEmail"
                          />
                          <div class="searchBtn input-group-append">
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
                        </div>
                      </div>
                      <!-- search 관련 div 끝 -->

                      <!-- page 바 시작 -->
                      <div class="col-md-8 offset-4 pageSize">
                        <div class="mb-3">
                          Items per Page:
                          <select
                            v-model="pageSize"
                            @change="handlePageSizeChange($event)"
                          >
                            <option
                              v-for="size in pageSizes"
                              :key="size"
                              :value="size"
                            >
                              <!--            size : 3, 6, 9 -->
                              {{ size }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <!-- page 바 끝 -->

                      <!-- <b-table striped hover :items="items"></b-table> -->
                      <table class="col-12 col-xl-9 table">
                        <thead>
                          <tr>
                            <th scope="col">이메일</th>
                            <th scope="col">효능</th>
                            <th scope="col">이름</th>
                            <th scope="col">예약날짜</th>
                            <th scope="col">예약가능여부</th>
                          </tr>
                        </thead>
                        <tbody
                          v-for="(data, index) in reservation"
                          :key="index"
                        >
                          <tr @click="setActive(data, index)">
                            <td>{{ data.email }}</td>
                            <td>{{ data.sights }}</td>
                            <td>{{ data.name }}</td>
                            <td>{{ data.selectedDate }}</td>
                            <td>{{ data.reservationYn }}</td>
                          </tr>
                        </tbody>
                      </table>

                      <!-- page 바 시작 -->
                      <div class="col-md-8 offset-4 pageBar">
                        <b-pagination
                          v-model="page"
                          :total-rows="count"
                          :per-page="pageSize"
                          prev-text="Prev"
                          next-text="Next"
                          @change="handlePageChange"
                        ></b-pagination>
                      </div>
                      <!-- page 바 끝 -->
                    </div>

                    <div v-if="currentData" class="col-lg-5 ml-auto">
                      <div
                        class="quick-contact-item d-flex align-items-center mb-4"
                      >
                        <span class="flaticon-house"></span>
                        <address class="text">
                          {{ this.currentData.name }}
                        </address>
                      </div>
                      <div
                        class="quick-contact-item d-flex align-items-center mb-4"
                      >
                        <span class="flaticon-house"></span>
                        <address class="text">
                          {{ this.currentData.selectedDate }}
                        </address>
                      </div>
                      <div
                        class="quick-contact-item d-flex align-items-center mb-4"
                      >
                        <span class="flaticon-phone-call"></span>
                        <address class="text">
                          {{ this.currentData.phone }}
                        </address>
                      </div>
                      <div
                        class="quick-contact-item d-flex align-items-center mb-4"
                      >
                        <span class="flaticon-mail"></span>
                        <address class="text">
                          {{ this.currentData.email }}
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- reservList 템플릿 끝 -->
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// import initScripts from "../../../assets/js/scripts";
// import initCustom from "../../../assets/js/custom.js";
import essentialPoli from "../../../assets/js/custom.js";
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
    this.retrieveReservation();
    essentialPoli();
  },
};
</script>
