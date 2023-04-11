<template>
  <div id="app">
    <!-- NavCom : 메뉴 -->
    <NavCom />
    <!-- 본문 -->
    <router-view />
    <!-- FooterCom : 꼬리말 -->
    <FooterCom />
  </div>
</template>

<script>
import FooterCom from "./components/common/FooterCom.vue";
import NavCom from "./components/common/NavCom.vue"

export default {
  components: {
    FooterCom,
    NavCom
  },
};
</script>

<style lang="scss">
// 자식 컴포넌트는 아래 css 파일을 공유함
@import "./assets/css/custom.css";
// @import "./assets/css/theme.css";
</style>
