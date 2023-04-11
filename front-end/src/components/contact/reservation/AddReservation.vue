<template>
  <div data-bs-spy="scroll" data-bs-target="#navScroll">
    <main>
      <div class="py-vh-5 w-100 overflow-hidden" id="services">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-12 col-lg-10 col-xl-8">
              <h1 class="display-1 fw-bold border-bottom border-dark pb-4">
                Reservation Page
              </h1>
            </div>

            <!-- addReserv 템플릿 추가 -->
            <div class="col-12 col-lg-10 col-xl-8 addReserv">
              <div class="untree_co-section">
                <div
                  class="container"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div class="row">
                    <div class="col-lg-12 mx-auto">
                      <div class="submit-form">
                        <div v-if="!submitted">
                          <!-- <form> -->
                          <div class="form-group">
                            <label for="sights">효능/목적</label>
                            <select
                              class="form-control"
                              required
                              v-model="reservation.sights"
                            >
                              <option>Deep Sleep</option>
                              <option>Energy</option>
                              <option>Meditation</option>
                              <option>Focus</option>
                              <option>Workout</option>
                            </select>
                          </div>

                          <div class="form-group">
                            <label for="daterange">예약날짜</label>
                            <input
                              type="text"
                              class="form-control"
                              id="daterange"
                              name="daterange"
                              ref="daterange"
                            />
                          </div>

                          <div class="form-group">
                            <label for="email">이메일</label>
                            <input
                              type="text"
                              class="form-control"
                              id="email"
                              required
                              v-model="reservation.email"
                              name="email"
                            />
                          </div>

                          <div class="form-group">
                            <label for="name">이름</label>
                            <input
                              class="form-control"
                              id="name"
                              required
                              v-model="reservation.name"
                              name="name"
                            />
                          </div>

                          <div class="form-group">
                            <label for="phone">휴대폰 번호</label>
                            <input
                              class="form-control"
                              id="phone"
                              required
                              v-model="reservation.phone"
                              name="phone"
                            />
                          </div>

                          <div class="subBtn text-center">
                            <button
                              @click="saveReservation"
                              class="btn btn-outline-secondary"
                            >
                              Submit
                            </button>
                            <a
                              href="/reservation"
                              class="btn btn-outline-secondary"
                              >Reservation Info</a
                            >
                          </div>
                          <!-- </form> -->
                        </div>

                        <div v-else class="text-center submittedBtn">
                          <h4>You submitted successfully!</h4>
                          <div class="subBtn text-center">
                            <button
                              class="btn btn-outline-secondary"
                              @click.prevent="newReservation"
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- addReserv 템플릿 끝 -->

            <div class="col-12 py-vh-3 my-5 bg-gray-900 text-light px-5">
              <div class="row d-flex align-items-center px-5">
                <div
                  class="col-12 col-lg-5 text-end d-flex justify-content-end"
                >
                  <h2 class="border-bottom border-light pb-4 text-end me-5">
                    De apocalypsi gorger omero undead survivor dictum mauris:
                  </h2>
                </div>
                <div class="col-12 col-lg-7">
                  <p
                    class="border-bottom border-dark pb-5 mb-5 text-light"
                    style="--bs-text-opacity: 0.5"
                  >
                    De carne lumbering animata corpora quaeritis. Summus brains
                    sit, morbo vel maleficia? De apocalypsi gorger omero undead
                    survivor dictum mauris. Hi mindless mortuis soulless
                    creaturas, imo evil stalking monstra adventus resi dentevil
                    vultus comedat cerebella viventium. Qui animated corpse,
                    cricket bat max brucks terribilem incessu zomby. The voodoo
                    sacerdos flesh eater, suscitat mortuos comedere carnem
                    virus. Zonbi tattered for solum oculi eorum defunctis go lum
                    cerebro. Nescio brains an Undead zombies. Sicut malus putrid
                    voodoo horror. Nigh tofth eliv ingdead.
                  </p>
                  <p
                    class="border-bottom border-dark pb-5 mb-5 text-light"
                    style="--bs-text-opacity: 0.5"
                  >
                    De carne lumbering animata corpora quaeritis. Summus brains
                    sit, morbo vel maleficia? De apocalypsi gorger omero undead
                    survivor dictum mauris. Hi mindless mortuis soulless
                    creaturas, imo evil stalking monstra adventus resi dentevil
                    vultus comedat cerebella viventium. Qui animated corpse,
                    cricket bat max brucks terribilem incessu zomby. The voodoo
                    sacerdos flesh eater, suscitat mortuos comedere carnem
                    virus. Zonbi tattered for solum oculi eorum defunctis go lum
                    cerebro. Nescio brains an Undead zombies. Sicut malus putrid
                    voodoo horror. Nigh tofth eliv ingdead.
                  </p>
                  <p class="text-light" style="--bs-text-opacity: 0.5">
                    Cum horribilem walking dead resurgere de crazed sepulcris
                    creaturis, zombie sicut de grave feeding iride et serpens.
                    Pestilentia, shaun ofthe dead scythe animated corpses ipsa
                    screams. Pestilentia est plague haec decaying ambulabat
                    mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor
                    plan et terror soulless vulnerum contagium accedunt, mortui
                    iam vivam unlife. Qui tardius moveri, brid eof reanimator
                    sed in magna copia sint terribiles undeath legionis. Alii
                    missing oculis aliorum sicut serpere crabs nostram. Putridi
                    braindead odores kill and infect, aere implent left four
                    dead.
                  </p>
                </div>
              </div>
            </div>
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

/* eslint-disable */
export default {
  data() {
    return {
      reservation: {
        rid: null,
        email: "",
        name: "",
        sights: "",
        selectedDate: "",
        address: "",
        phone: "",
      },
      submitted: false,
    };
  },
  methods: {
    saveReservation() {
      var data = {
        email: this.reservation.email,
        name: this.reservation.name,
        sights: this.reservation.sights,
        selectedDate: this.$refs.daterange.value,
        address: this.reservation.address,
        phone: this.reservation.phone,
      };
      // alert(data.selectedDate)

      ReservationDataService.create(data)
        .then((response) => {
          this.reservation.rid = response.data.rid;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newReservation() {
      this.submitted = false;
      this.reservation = {};
    },
  },
  mounted() {
    essentialPoli();

    // datepicker
    if ($("#daterange").length) {
      $("#daterange").daterangepicker({
        locale: {
          format: "YYYY-MM-DD",
        },
        singleDatePicker: true,
      });
    }
  },
};
</script>
