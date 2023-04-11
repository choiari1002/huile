<template>
  <div data-bs-spy="scroll" data-bs-target="#navScroll">
    <nav
      id="navScroll"
      class="navbar navbar-expand-lg navbar-light fixed-top"
      tabindex="0"
    >
      <div class="container">
        <a class="navbar-brand pe-4 fs-4" href="/">
          <font-awesome-icon icon="fa-solid fa-leaf" />
          <span class="ms-1 fw-bolder">Huile</span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#services"
                aria-label="Brings you to the frontpage"
              >
                대표제품
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#aboutus"> 회사소개 </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#numbers"> 아로마테라피 </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#gallery"> 갤러리 </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#workwithus"> 예약 </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#testimonials"> 서비스 후기 </a>
            </li>
          </ul>
          <!-- login 시작 -->
          <div v-if="!currentUser" class="navbar-nav ml-auto">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/register" class="nav-link">
                  <font-awesome-icon icon="user-plus" />
                  회원가입
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/login" class="nav-link">
                  <font-awesome-icon icon="sign-in-alt" />
                  로그인
                </router-link>
              </li>
            </ul>
          </div>
          <!-- login 끝 -->

          <!-- LogOut 시작 -->
          <div v-if="currentUser" class="navbar-nav ml-auto">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/profile" class="nav-link">
                  <font-awesome-icon icon="user" />
                  {{ currentUser.username }}
                </router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href @click.prevent="logout">
                  <font-awesome-icon icon="sign-out-alt" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
          <!-- LogOut 끝 -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import essentialPoli from "../../assets/js/custom.js";

export default {
  name: "app",
  computed: {
    // 현재 유저
    currentUser() {
      // 모듈 저장소 : this.$store.state.모듈명.state값
      // user 객체 의 속성 : username, password, email, accesToken, roles(배열)
      return this.$store.state.auth.user;
    },
    // ROLE_ADMIN 만 보이는 메뉴(함수)
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        // if ROLE_ADMIN 있으면 true
        //               없으면 false
        return this.currentUser.roles.includes("ROLE_ADMIN");
      }
      // currentUser 없으면 false (메뉴가 안보임)
      return false;
    },
  },
  methods: {
    // 로그아웃 함수 -> 공통함수 호출
    logout() {
      // this.$store.dispatch("모듈명/함수명")
      this.$store.dispatch("auth/logout"); // 공통함수 logout 호출
      this.$router.push("/login"); // 강제 /login 페이지로 이동
    },
  },
  mounted() {
    essentialPoli();
  },
};
</script>

<style></style>
