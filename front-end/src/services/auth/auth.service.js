// auth.service.js : 로그인 함수/로그아웃/회원가입 함수
// 클래스는 new 연산자로 내보내야 한다.
// TODO: http-common 경로변경
import http from "../../http-common";

class AuthService {
  // 로그인 함수
  // 1. DB 에 사용자가 있는지 확인 요청 (id/pwd)
  // 2. back : DB 에 사용자가 있는지 확인 (id/pwd)
  //    -> (if) 있으면 : 토큰발행해서 front 로 전송 (user + 토큰)
  //    -> 없으면 : 에러메세지 전송
  login(user) {
    // user 매개변수를 임시 객체에 저장
    let userData = {
      username: user.username,
      password: user.password,
    };

    // axios 통신 : 백엔드에 로그인 요청 (db에 사용자가 있는지 조회요청)
    //             로그인 인증 : Get 방식 x (보안때문에) -> post 방식 사용
    // 성공하면 then 실행
    return http.post("/auth/signin", userData).then((response) => {
      // 서버쪽 응답정보에서 토큰 있는지 체크
      if (response.data.accessToken) {
        // user 정보 + 토큰 저장
        // localStorage : 텍스트 파일 (객체를 문자열로 변환해야 함)
        // JSON.stringify(객체) : 객체 -> 문자열로 변환됨
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
  }

  // 로그아웃 함수
  logout() {
    localStorage.removeItem("user");
  }

  //   회원가입 함수
  //   front : user 새회원정보를 db저장 요청
  //   back : user 저장하기 전에 -> password 암호화 -> db 저장함
  register(user) {
    // user 매개변수를 임시 객체에 저장
    let userData = {
      username: user.username,
      email: user.email,
      password: user.password,
    };

    return http.post("/auth/signup", userData);
  }
}

export default new AuthService();
