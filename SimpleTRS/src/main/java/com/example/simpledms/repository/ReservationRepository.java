package com.example.simpledms.repository;

import com.example.simpledms.model.Reservation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * packageName : com.example.jpaexam.repository
 * fileName : DeptRepository
 * author : ds
 * date : 2022-10-20
 * description : JPA CRUD를 위한 인터페이스(==DAO)
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2022-10-20         ds          최초 생성
 */

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
//    EMAIL로(email) 조회하는 like 검색 함수( 페이징 처리 추가 )
//    1) 쿼리메소드 방식으로 함수 정의
    Page<Reservation> findAllByEmailContaining(String email, Pageable pageable);
}









