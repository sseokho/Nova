# NOVA — AI 기반 차세대 플랫폼

NOVA는 AI 기술과 미래지향적 사용자 경험을 결합한 인터랙티브 웹 랜딩 페이지 프로젝트입니다.

스크롤 기반 애니메이션과 동적 UI를 통해 차세대 AI 자동화 플랫폼의 비전과 가치를 경험할 수 있도록 설계했습니다.


---

## 프로젝트 소개

NOVA는 AI 기반 업무 자동화 플랫폼을 주제로 제작한 React 랜딩 페이지 프로젝트입니다.

GSAP 기반의 고급 스크롤 애니메이션과 Tailwind CSS를 활용하여 사용자에게 몰입감 있는 웹 경험을 제공하는 것을 목표로 개발했습니다.

### 주요 목표

- React 기반 컴포넌트 설계 및 분리
- GSAP ScrollTrigger를 활용한 인터랙티브 애니메이션 구현
- 사용자 중심 UX 설계
- Tailwind CSS 유틸리티 기반 반응형 레이아웃
- 모바일 / 태블릿 / 데스크탑 반응형 지원

---

## 주요 기능

### Hero Section
- 플랫폼 핵심 메시지와 CTA 버튼
- 폰 목업 시각화 및 입장 애니메이션
- 스크롤 패럴랙스 효과

### Partner Logos
- 주요 파트너사 로고 무한 마퀴 스크롤

### How It Works (수평 스크롤)
- 데스크탑: 핀 고정 + 수평 스크롤로 4단계 설명
- 모바일/태블릿: 수직 스택으로 전환
- 단계별 진행 인디케이터 애니메이션

### Features
- AI 스마트 자동화 / 실시간 동기화 / 군사급 보안 / 인사이트 분석
- 스크롤 reveal 애니메이션 + 카드 hover 효과

### Gallery
- 3개 폰 목업 팝인 애니메이션 (자동화 플로우 / 분석 대시보드 / 앱 연동)
- Float 애니메이션 효과

### Pricing
- 스타터(무료) / 프로 / 엔터프라이즈 3단계 플랜
- 카드 hover 인터랙션

### CTA / Footer
- 전환 유도 섹션 및 푸터

---

## Tech Stack

| 분류 | 기술 |
|------|------|
| UI 라이브러리 | React 19 |
| 언어 | JavaScript (ES6+) |
| 스타일링 | Tailwind CSS v4 |
| 애니메이션 | GSAP 3 + ScrollTrigger |
| 빌드 도구 | Vite 8 |
| 런타임 요구사항 | Node.js 20.19+ 또는 22.12+ |

---

## 프로젝트 구조

```
src/
├── components/
│   ├── ui/                  # 공통 원자 컴포넌트
│   │   ├── LogoIcon.jsx
│   │   ├── Eyebrow.jsx
│   │   ├── PrimaryBtn.jsx
│   │   └── GhostBtn.jsx
│   │
│   ├── phones/              # 폰 목업 컴포넌트
│   │   ├── PhoneDashboard.jsx
│   │   ├── PhoneGallery1.jsx
│   │   ├── PhoneGallery2.jsx
│   │   └── PhoneGallery3.jsx
│   │
│   └── sections/            # 페이지 섹션 컴포넌트
│       ├── Nav.jsx
│       ├── Hero.jsx
│       ├── Partners.jsx
│       ├── HowItWorks.jsx   # ConnectVisual / SetupVisual / RunVisual / OptimizeVisual 포함
│       ├── Features.jsx
│       ├── Gallery.jsx
│       ├── Pricing.jsx      # PricingHeader / PricingFeatures 포함
│       ├── CTA.jsx
│       └── Footer.jsx
│
├── App.jsx                  # refs + GSAP 애니메이션 로직
└── main.jsx
```

---

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

> **Note:** Vite 8은 Node.js 20.19+ 또는 22.12+ 이상이 필요합니다.

---

## 반응형 지원

| 브레이크포인트 | 대상 |
|--------------|------|
| `< 768px` | Mobile |
| `768px ~ 1023px` | Tablet |
| `1024px+` | Desktop (수평 스크롤 섹션 활성화) |

---

본 프로젝트는 포트폴리오 및 학습 목적으로 제작되었습니다.
