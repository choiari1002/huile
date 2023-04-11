
INSERT INTO TB_FAQ
VALUES (SQ_FAQ.nextval, '#INNER_HEALING', '제라늄 + 일랑일랑', '플로럴 계열의 제라늄 향과 일랑일랑 향을 블렌드하여 일상에서 벗어나 편안한 생활에 추천하는 향입니다.', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_FAQ
VALUES (SQ_FAQ.nextval, '#FRESH_KITCHEN', '유칼립투스 + 블러드오렌지', '청량한 유칼립투스에 블러드 오렌지의 달콤함을 더해 밝고 상쾌한 향, 주방 등에서 사용하기 좋은 향입니다.', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_FAQ
VALUES (SQ_FAQ.nextval, '#NIGHT_DREAM', '라벤더 + 자몽', '숙면을 도와준다고 알려진 라벤더 향에 상큼한 자몽향을 블렌드하여 기분 좋은 수면에 추천하는 향입니다.', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_FAQ
VALUES (SQ_FAQ.nextval, '#FOR_WEIRDO', '오이 + 편백', '오이 러버들을 위한 상쾌한 오이 향에 정신을 맑게 해주는 편백 향을 더한 특별한 향입니다.', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_FAQ
VALUES (SQ_FAQ.nextval, '#SOUND_SPLEEP', '라벤더 + 편백', '숙면을 도와준다고 알려진 라벤더 향에 시원한 편백향을 블렌드하여 깊은 숙면에 도움을 주는 향입니다.', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_FAQ
VALUES (SQ_FAQ.nextval, '#HAPPY_DAY', '베르가못 + 유칼립투스', '청량한 베르가못향에 유칼립투스향을 블렌드하여 상쾌한 하루를 맞이하고 싶을 때 추천하는 향입니다.', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_FAQ
VALUES (SQ_FAQ.nextval, '#WORKING_TIME', '로즈마리 + 레몬', '일에 집중하기 위해서 정신을 맑게 하고 싶을때 추천하는 깔끔한 향입니다.', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_FAQ
VALUES (SQ_FAQ.nextval, '#FIRE_FRIDAY', '자몽 + 티트리', '조금은 씁쓸한 자몽 향에 티트리를 더한 깔끔하고 기분 좋은 향입니다.', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);


INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'길동','홍','hong@naver.com','010-1234-5678','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);
INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'길산','장','jang@naver.com','010-1230-5678','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);
INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'꺽정','임','lim@naver.com','010-1235-5678','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);
INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'우치','전','Gean@naver.com','010-1236-5678','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);
INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'루치','마','Ma@naver.com','010-1237-5678','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);
INSERT INTO TB_CUSTOMER
VALUES (SQ_CUSTOMER.NEXTVAL,'라치','아','Ah@naver.com','010-1238-5678','N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS'), NULL, NULL);


INSERT INTO TB_QNA
VALUES (SQ_QNA.nextval, '질문', '해결','홍길동', '운영자', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_QNA
VALUES (SQ_QNA.nextval, '질문2', '해결2','장길산', '운영자', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_QNA
VALUES (SQ_QNA.nextval, '질문3', '해결3','임꺽정', '운영자', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_QNA
VALUES (SQ_QNA.nextval, '질문4', '해결4','전우치', '운영자', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_QNA
VALUES (SQ_QNA.nextval, '질문5', '','마루치', '', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);
INSERT INTO TB_QNA
VALUES (SQ_QNA.nextval, '질문6', '','아라치', '', 'N', TO_CHAR(SYSDATE, 'YYYY-MM-DD HH24:MI:SS') ,NULL, NULL);


COMMIT;