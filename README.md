# HeartLetter (하트레터)

연애편지 초안 작성을 도와주는 웹 애플리케이션입니다.

## 기능

- 맞춤형 연애편지 초안 생성
- 다양한 스타일과 분위기의 편지 템플릿
- 편지 저장 및 관리
- 다운로드 및 공유 기능
- OpenAI API를 활용한 고품질 편지 생성

## 설치 및 실행

```bash
# 저장소 복제
git clone https://github.com/hyeongirlife/heartletter.git
cd heartletter

# 프론트엔드 의존성 설치
npm install

# 백엔드 의존성 설치
cd backend
npm install
cd ..

# 백엔드 환경 설정
# backend/.env 파일에 OpenAI API 키 설정
# OPENAI_API_KEY=your_openai_api_key_here

# 프론트엔드와 백엔드 동시 실행
npm run dev
```

## 기술 스택

### 프론트엔드
- React.js
- React Router
- Styled Components
- React Bootstrap
- React Icons

### 백엔드
- NestJS
- OpenAI API
- Class Validator
- Config

## 프로젝트 구조

```
heartletter/
├── public/          # 정적 파일
├── src/             # 프론트엔드 소스 코드
│   ├── components/  # 재사용 가능한 컴포넌트
│   ├── pages/       # 페이지 컴포넌트
│   ├── styles/      # 스타일 관련 파일
│   ├── utils/       # 유틸리티 함수
│   └── services/    # API 서비스
├── backend/         # 백엔드 소스 코드
│   ├── src/         # NestJS 소스 코드
│   │   ├── letter/  # 편지 생성 모듈
│   │   └── common/  # 공통 기능
│   └── ...
└── ...
```

## API 엔드포인트

- `POST /api/letter/generate`: 편지 생성 API

## 라이선스

MIT
