// UserDataService.js
import http from "../http-common";
import authHeader from "./auth/auth-header";

class UserDataService {
  // 유저 정보(with 토큰) 요청
  getAll(username, page, size) {
    return http.get(`/user?username=${username}&page=${page}&size=${size}`, {
      headers: authHeader(),
    });
  }

  // id로 조회(with 토큰) 요청
  get(id) {
    return http.get(`/user/${id}`, { headers: authHeader() });
  }

  //   유저 생성(with 토큰) 요청
  create(user) {
    // 임시 객체
    let userData = {
      username: user.username,
      email: user.email,
      password: user.password,
      role: [user.role],
    };

    console.log(userData);
    return http.post("/user", userData, { headers: authHeader() });
  }

  //   유저 수정(with 토큰) 요청
  update(id, changePwd, user) {
    // 임시 객체
    let userData = {
      username: user.username,
      email: user.email,
      password: user.password,
      role: [user.role[0].name],
      changePwd: changePwd,
    };

    console.log(userData);
    return http.put(`/user/${id}`, userData, { headers: authHeader() });
  }

  //   id 로 삭제(with 토큰) 요청
  delete(id) {
    return http.delete(`/user/deletion/${id}`, { headers: authHeader() });
  }
}

export default new UserDataService();
