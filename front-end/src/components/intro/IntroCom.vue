<template>
  <div data-bs-spy="scroll" data-bs-target="#navScroll">
    <main>
      <div class="py-vh-5 w-100 overflow-hidden" id="services">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-12 col-lg-10 col-xl-8">
              <h1 class="display-1 fw-bold border-bottom border-dark pb-4">
                Our Products
              </h1>
              <p class="lead py-vh-2">
                '나의 향은 나의 일부가 되고 아무도 그것을 모방할 수 없다’ 현대
                사회에서 향이란 나의 정체성을 의미합니다 나에게 맞는 향을
                찾아가는 것은 나의 정체성을 찾아가는 과정이기도 합니다. 지금,
                당신은 스스로에게 만족스러운 향을 사용하고 있나요? 전 세계 수만
                개의 향기 중 당신만의 향기를 찾는 것은 운명과도 같습니다.
                그렇기에 Huile는 오늘도 향기와 사람을 잇는 매개체가 되어 새로운
                향수들을 끊임없이 탐구하는 일을 멈추지 않습니다. 당신의 일부가
                되는 최적의 향수를 찾는 일, 그것이 Huile가 존재하는 이유입니다.
              </p>
            </div>
            <div class="col-12">
              <figure class="py-vh-2 pt-0">
                <blockquote class="blockquote blockquote-xl">
                  <p>
                    "향기는 시간과 장소의 구속에서 벗어나 기억을 되새기게 하고
                    수많은 사연과 이야기에 귀 기울이게 해준다. 향수 안에 나의
                    내면이 있다."
                  </p>
                </blockquote>
                <figcaption class="blockquote-footer">
                  [향기 탐색] 중에서
                </figcaption>
              </figure>
            </div>

            <!-- <div class="col-12 col-lg-10 col-xl-8">
              <p>
                여러분들께 저희 Huile 의 훌륭한 아로마테라피스트들이 미리 블렌딩한 에센셜 오일들을 소개합니다.
              </p>
            </div> -->

            <!-- <div class="col-12 col-lg-10 col-xl-8">
              <p>
                <img
                  src="img/webp/people15.webp"
                  class="img-fluid float-start p-3 pt-0 ps-0"
                  alt="article image"
                  data-aos="fade"
                />Cum horribilem walking dead resurgere de crazed sepulcris
                creaturis, zombie sicut de grave feeding iride et serpens.
                Pestilentia, shaun ofthe dead scythe animated corpses ipsa
                screams. Pestilentia est plague haec decaying ambulabat mortuos.
                Sicut zeder apathetic malus voodoo. Aenean a dolor plan et
                terror soulless vulnerum contagium accedunt, mortui iam vivam
                unlife. Qui tardius moveri, brid eof reanimator sed in magna
                copia sint terribiles undeath legionis. Alii missing oculis
                aliorum sicut serpere crabs nostram. Putridi braindead odores
                kill and infect, aere implent left four dead.De carne lumbering
                animata corpora quaeritis. Summus brains sit, morbo vel
                maleficia? De apocalypsi gorger omero undead survivor dictum
                mauris. Hi mindless mortuis soulless creaturas, imo evil
                stalking monstra adventus resi dentevil vultus comedat cerebella
                viventium. Qui animated corpse, cricket bat max brucks
                terribilem incessu zomby. The voodoo sacerdos flesh eater,
                suscitat mortuos comedere carnem virus. Zonbi tattered for solum
                oculi eorum defunctis go lum cerebro. Nescio brains an Undead
                zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv
                ingdead. Cum horribilem walking dead resurgere de crazed
                sepulcris creaturis, zombie sicut de grave feeding iride et
                serpens. Pestilentia, shaun ofthe dead scythe animated corpses
                ipsa screams. Pestilentia est plague haec decaying ambulabat
                mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan
                et terror soulless vulnerum contagium accedunt, mortui iam vivam
                unlife. Qui tardius moveri, brid eof reanimator sed in magna
                copia sint terribiles undeath legionis. Alii missing oculis
                aliorum sicut serpere crabs nostram. Putridi braindead odores
                kill and infect, aere implent left four dead.
              </p>
            </div> -->

            <!-- TODO faq삽입 -->
            <div class="list row col-12 col-lg-10 col-xl-8">
                <!-- 검색어 시작 -->
                <div class="col-md-12">
                  <div class="input-group mb-3">
                    <!-- 검색어 입력 -->
                    <input
                      type="text"
                      class="form-control"
                      placeholder="원하시는 성분을 검색해 보세요. ( 예: 라벤더, 일랑일랑 등 )"
                      v-model="searchTitle"
                    />
                    <!-- 검색어 버튼 -->
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        @click="
                          page = 1;
                          retrieveOil();
                        "
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
                <!-- 검색어 끝 -->

                <!-- 페이징 + 전체 목록 시작 -->
                <!-- 페이징 양식 시작 -->
                <div class="col-md-12">
                  <!-- 셀렉트 박스 : 기본 페이지 변경 -->
                  <!-- change :  handlePageSizeChange($event), 1페이지당 개수 변경 시 실행되는 이벤트-->
                  <!--           $event : html 태그의 기본 이벤트, 이 객체로 현재 선택 또는 클릭한 html태그(양식)를 알 수 있음.
                     event.target (현재 사용자가 선택한 양식(여기서는 셀렉트 박스내 목록을 의미 ) -->
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
                        {{ size }}
                      </option>
                    </select>
                  </div>

                  <!-- b-pagination : 부트스트랩 - 페이지 번호 컨트롤 -->
                  <!-- total-rows : 전체 데이터 개수 -->
                  <!-- per-page : 1페이지 당 개수 -->
                  <!-- change : handlePageChange(), 페이지 번호 변경 시 실행되는 이벤트 -->
                  <b-pagination
                    v-model="page"
                    :total-rows="count"
                    :per-page="pageSize"
                    prev-text="Prev"
                    next-text="Next"
                    @change="handlePageChange"
                  ></b-pagination>
                </div>
                <!-- 페이징 양식 끝 -->

                <!-- 전체 목록 시작 -->
                <div class="col-md-5">
                  <ul class="list-group" id="oil-list">
                    <li
                      class="list-group-item"
                      :class="{ active: index == currentIndex }"
                      v-for="(data, index) in oil"
                      :key="index"
                      @click="setActiveOil(data, index)"
                    >
                      {{ data.title }}
                    </li>
                  </ul>
                  <!-- 전체 목록 끝 -->
                </div>
                <!-- 페이징 + 전체 목록 끝 -->

                <!-- 상세 목록 시작 -->
                <div class="col-md-5 offset-2">
                  <div v-if="currentOil">
                    <div>
                      <label><strong>제품명: </strong></label>
                      {{ currentOil.title }}
                    </div>
                    <div>
                      <label><strong>성분: </strong></label> {{ currentOil.content }}
                    </div>
                    <div class="pt-3">
                      <div>{{ currentOil.feature }}</div>
                    </div>
                  </div>
                  <div v-else class="ms-30">
                    <br />
                    <p>제품을 선택해 주세요!</p>
                  </div>
                </div>
                <!-- 상세 목록 끝 -->
            </div>
            <!-- TODO faq삽입 -->

            <!-- 넣을까 말까 고민중인 까만 부분 -->
            <!-- <div class="col-12 py-vh-3 my-5 bg-gray-900 text-light px-5">
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
            </div> -->
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import essentialPoli from "../../assets/js/custom.js";
import OilDataService from "../../services/OilDataService";

export default {
  data() {
    return {
      oil: [],
      currentOil: null,
      currentIndex: -1,
      searchTitle: "",

      // 페이징을 위한 변수 정의
      page: 1, // 현재 페이지
      count: 0, // 전체 데이터 건수
      pageSize: 5, // 한페이지당 몇개를 화면에 보여줄지 결정하는 변수

      pageSizes: [5, 10, 15], // select box 에 넣을 기본 데이터
    };
  },
  methods: {
    // axios , 모든 정보 조회 요청 함수
    retrieveOil() {
      OilDataService.getAll(this.searchTitle, this.page - 1, this.pageSize)
        // 성공하면 .then() 결과가 전송됨
        .then((response) => {
          const { oil, totalItems } = response.data; // springboot 의 전송된 맵 정보
          this.oil = oil; // 스프링부트에서 전송한 데이터
          this.count = totalItems; // 스프링부트에서 전송한 페이지정보(총 건수)
          // 디버깅 콘솔에 정보 출력
          console.log(response.data);
        })
        // 실패하면 .catch() 에 에러가 전송됨
        .catch((e) => {
          console.log(e);
        });
    },
    // select box 값 변경시 실행되는 함수(재조회)
    handlePageSizeChange(event) {
      this.pageSize = event.target.value; // 한페이지당 개수 저장(3, 6, 9)
      this.page = 1;
      // 재조회 함수 호출
      this.retrieveOil();
    },
    // 페이지 번호 변경시 실행되는 함수(재조회)
    handlePageChange(value) {
      this.page = value; // 매개변수값으로 현재페이지 변경
      // 재조회 함수 호출
      this.retrieveOil();
    },
    // 목록을 클릭했을때 현재 부서객체, 인덱스번호를 저장하는 함수
    setActiveOil(data, index) {
      this.currentOil = data;
      this.currentIndex = index;
    },
    // axios, 모든 부서 정보 삭제 요청 함수
    removeAllOil() {
      OilDataService.deleteAll()
        // 성공하면 .then() 결과가 전송됨
        .then((response) => {
          // 디버깅 콘솔에 정보 출력
          console.log(response.data);
          // 전체 목록 재조회
          this.retrieveOil();
          // currentOil, currentIndex 초기화
          this.currentOil = null;
          this.currentIndex = -1;
        })
        // 실패하면 .catch() 에 에러가 전송됨
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    essentialPoli();
    this.retrieveOil(); // 화면 로딩시 전체 조회함수 실행
  },
};
</script>

<style></style>
