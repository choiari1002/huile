<template>
  <div
    class="d-flex h-100 w-100"
    data-bs-spy="scroll"
    data-bs-target="#navScroll"
  >
    <div class="h-100 container-fluid register">
      <div class="h-100 row d-flex align-items-stretch">
        <div
          class="col-12 col-md-7 col-lg-6 d-flex align-items-start flex-column px-vw-5"
        >
          <main class="mb-auto col-12">
            <h1>Register a new account</h1>

            <form class="row" @submit.prevent="handleRegister">
              <div class="col-12 col-lg-10 col-xl-8" v-if="!successful">
                <!-- 아이디 -->
                <div class="mb-3">
                  <label for="username" class="form-label mt-3">아이디</label>
                  <input
                    v-model="user.username"
                    v-validate="'required|min:3|max:20'"
                    type="text"
                    class="form-control form-control-lg"
                    name="username"
                  />
                  <!-- 유효성 체크 후 에러 체크 : errors.hat(체크대상) -->
                  <!-- errors.first(체크대상) : 에러 내용 출력 -->
                  <div
                    v-if="submitted && errors.has('username')"
                    class="alert-danger"
                  >
                    {{ errors.first("username") }}
                  </div>
                </div>

                <!-- 이메일 -->
                <div class="mb-3">
                  <label for="email" class="form-label mt-3">이메일 주소</label>
                  <input
                    v-model="user.email"
                    v-validate="'required|email|max:50'"
                    type="email"
                    class="form-control form-control-lg"
                    name="email"
                  />
                  <!-- 유효성 체크 후 에러 체크 : errors.hat(체크대상) -->
                  <!-- errors.first(체크대상) : 에러 내용 출력 -->
                  <div
                    v-if="submitted && errors.has('email')"
                    class="alert-danger"
                  >
                    {{ errors.first("email") }}
                  </div>
                </div>

                <!-- 비밀번호 -->
                <div class="mb-3">
                  <label for="password" class="form-label mt-2">비밀번호</label>
                  <input
                    v-model="user.password"
                    v-validate="'required|min:6|max:40'"
                    type="password"
                    class="form-control form-control-lg"
                    name="password"
                  />
                  <!-- 유효성 체크 후 에러 체크 : errors.hat(체크대상) -->
                  <!-- errors.first(체크대상) : 에러 내용 출력 -->
                  <div
                    v-if="submitted && errors.has('password')"
                    class="alert-danger"
                  >
                    {{ errors.first("password") }}
                  </div>
                </div>

                <div class="mb-3 form-check py-3">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >만약 저희의 새로운 제품 소식 및 이벤트를 알려드리는 메일
                    뉴스레터에 동의하지 않으신다면
                    <strong>체크해주세요</strong>. 만약 체크하시지 않으신다면
                    매월 10일마다 저희 <strong>Huile의 새로운 소식들</strong>을
                    받아보실 수 있습니다!</label
                  >
                </div>
                <p class="small text-muted">
                  가입을 원하시면 아래 버튼을 눌러주세요!
                </p>
                <button type="submit" class="btn btn-outline-secondary">
                  가입하기
                </button>
              </div>
            </form>
            <div
              v-if="message"
              class="alert"
              :class="successful ? 'alert-success' : 'alert-danger'"
            >
              {{ message }}
            </div>
          </main>
        </div>

        <div
          class="col-12 col-md-5 col-lg-6 bg-cover"
          style="background-image: url('./img/webp/colorful.webp')"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../../model/user";

export default {
  data() {
    return {
      // TODO: user 객체 role 매개변수 추가
      user: new User("", "", "ROLE_USER"),
      submitted: false,
      successful: false,
      message: "",
    };
  },
  computed: {
    // loggedIn 상태 확인
    loggedIn() {
      // this.$store.state.모듈명.state값
      return this.$store.state.auth.status.loggedIn;
    },
  },
  // created() : vue 가 생성되자마자 실행되는 이벤트 (화면은 생성되지 않은 상태)
  created() {
    if (this.loggedIn) {
      // 로그인이 되어있는 상태
      this.$router.push("/profile"); // 강제 /profile 로 이동
    }
  },
  methods: {
    // 회원가입 버튼 클릭시 실행되는 함수
    handleRegister() {
      this.message = "";
      this.submitted = true; // 회원가입 버튼 클릭 = true
      // vee-validate 함수 처리 방법
      this.$validator
        .validateAll() // 유효성을 전부 통과 시
        .then((isValid) => {
          // validateAll() 모두 통과하면 -> isValid = true  (유효함)
          //                          -> isValid = false (유효하지 않음)
          if (!isValid) {
            return; // 함수탈출(break)
          }

          // 공통함수 login 호출 :
          // this.$store.dispatch("모듈명/함수명", 매개변수)
          this.$store
            .dispatch("auth/register", this.user)
            .then((response) => {
              this.message = response.message;
              this.successful = true; // "회원가입이 성공했습니다." 화면출력
            })
            // 참고) if/else 문 대신에 -> or(||) and(&&) 연산자 사용할때도 있음
            // 로직체크 순서 : true || false, false && true (앞의 것만 체크해서 해당되면 뒤에 것은 무시)
            .catch((error) => {
              this.successful = false; // 회원가입 실패 -> 회원가입폼 다시 화면에 나옴
              this.message =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
            });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 150px;
  margin-bottom: 80px;
}
</style>
