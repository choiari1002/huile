// user.service.js : test 파일 
// (토큰을 헤더포함 springboot 요청하는 샘플)
// 토큰 헤더에 미포함 -> 401, 403 에러 발생(인증관련 에러)
// TODO: http-common 경로변경
import http from "../../http-common";
import authHeader from "./auth-header";

class UserService {

    // 인증없이 모두 접속가능한 url 요청
    // spring security config 에서 아래 url 모두 접속 허용됨
    getPublicContent() {
        return http.get('/test/all');
    }

    // BoardUser.vue 페이지 보기 함수
    // 인증/권한관리가 필요한 페이지 : http.get(url, { headers: 토큰 })
    getUserBoard() {
        return http.get('/test/user', { headers: authHeader() });
    }

    // BoardAdmin.vue 페이지 보기 함수
    // 인증/권한관리가 필요한 페이지 : http.get(url, { headers: 토큰 })
    getAdminBoard() {
        return http.get('/test/admin', { headers: authHeader() });
    }
}

export default new UserService();