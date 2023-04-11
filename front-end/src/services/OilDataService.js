// FaqDataService.js
// 목적 : Faq 정보를 axios 로 CRUD 를 하는 공통 함수들 정의
import http from "../http-common";

class OilDataService {
    // 모든 부서정보 조회 요청 함수 
    getAll(content, page, size) {
        // get 방식 통신 요청 -> @GetMapping("/api/oil")
        return http.get(`/oil?content=${content}&page=${page}&size=${size}`); 
    }

    // 부서번호로 조회 요청 함수
    // get 방식 통신 요청 -> @GetMapping("/api/oil/{no}"), @PathVariable
    get(no) {
        return http.get(`/oil/${no}`)
    }

    // 부서정보 생성(insert) 요청 함수
    // post 방식 통신 요청 -> @PostMapping("/api/oil"), @RequestBody
    create(data) {
        alert("fdsafds");
        console.log(data);
        return http.post("/oil", data);
    }

    // 부서정보 수정(update) 요청 함수
    // put 방식 통신 요청 -> @PutMapping("/api/oil/{no}"), @RequestBody
    update(no, data) {
        return http.put(`/oil/${no}`, data);
    }

    // 부서정보 삭제(delete) 요청 함수
    // delete 방식 통신 요청 -> @DeleteMapping("/api/oil/deletion/{no}")
    //                        , @PathVariable  
    delete(no) {
        return http.delete(`/oil/deletion/${no}`);
    }

    // 부서정보 전체 삭제 요청 함수
    // delete 방식 통신 요청 -> @DeleteMapping("/api/oil/all")
    deleteAll() {
        return http.delete("/oil/all")
    }

    // 부서명 검색 요청 함수
    // 쿼리스트링 방식 url : ?변수명=값&변수명2=값2....
    // get 방식 통신 요청 -> @GetMapping("/api/oil") , @RequestParam
    // findByTitle(title) {
    //     return http.get(`/oil?title=${title}`);
    // }

}

export default new OilDataService();