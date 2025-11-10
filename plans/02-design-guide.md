# 디자인 가이드

## 🎨 디자인 원칙

### 1. 감정적 안전감 (Emotional Safety)
- 따뜻하고 수용적인 시각적 언어
- 판단하지 않는 느낌
- 부드러운 색상과 곡선

### 2. 명확성 (Clarity)
- 정보 계층 구조 명확
- 읽기 쉬운 타이포그래피
- 직관적인 네비게이션

### 3. 진정성 (Authenticity)
- 오버하지 않은 디자인
- 진심 어린 톤
- 실제 사용 예시 강조

### 4. 접근성 (Accessibility)
- 충분한 색상 대비
- 키보드 네비게이션 지원
- 스크린 리더 지원

---

## 🎨 색상 팔레트

### 메인 컬러
기존 앱의 디자인 가이드를 참고하여 따뜻하고 부드러운 색상 사용

#### Primary Colors
- **Primary**: `#FF8A65` (따뜻한 오렌지) - 주요 CTA, 강조
- **Primary Light**: `#FFAB91` (밝은 오렌지) - 호버 상태
- **Primary Dark**: `#E64A19` (진한 오렌지) - 활성 상태

#### Secondary Colors
- **Secondary**: `#81C784` (부드러운 그린) - 성공, 긍정 메시지
- **Secondary Light**: `#A5D6A7` (밝은 그린)
- **Secondary Dark**: `#4CAF50` (진한 그린)

#### Neutral Colors
- **Background**: `#FAF9F6` (따뜻한 화이트)
- **Surface**: `#FFFFFF` (순수 화이트)
- **Text Primary**: `#2C2C2C` (진한 그레이)
- **Text Secondary**: `#6B6B6B` (중간 그레이)
- **Text Muted**: `#9E9E9E` (밝은 그레이)
- **Border**: `#E0E0E0` (연한 그레이)

#### Accent Colors
- **Warning**: `#FFB74D` (부드러운 노랑)
- **Error**: `#E57373` (부드러운 빨강)
- **Info**: `#64B5F6` (부드러운 파랑)

### 다크 모드 (선택적)
- **Background**: `#1A1A1A`
- **Surface**: `#2D2D2D`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#B0B0B0`
- **Border**: `#404040`

---

## 📝 타이포그래피

### 폰트 패밀리
- **Primary**: Inter (Google Fonts) - 깔끔하고 읽기 쉬움
- **Accent**: Crimson Pro (Google Fonts) - 따뜻한 휴머니티 터치

### 폰트 크기
- **Hero Title**: `3.5rem - 4rem` (56px - 64px) - 메인 헤드라인
- **Section Title**: `2rem - 2.5rem` (32px - 40px) - 섹션 제목
- **Subtitle**: `1.5rem - 1.75rem` (24px - 28px) - 부제목
- **Body Large**: `1.125rem` (18px) - 본문 큰 글씨
- **Body**: `1rem` (16px) - 기본 본문
- **Body Small**: `0.875rem` (14px) - 작은 본문
- **Caption**: `0.75rem` (12px) - 캡션, 메타 정보

### 폰트 두께
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

### 행간 (Line Height)
- **Tight**: 1.2 (제목)
- **Normal**: 1.5 (본문)
- **Relaxed**: 1.75 (긴 본문)

---

## 📐 레이아웃 시스템

### 그리드 시스템
- **컨테이너 최대 너비**: 1200px
- **컨테이너 패딩**: 24px (모바일), 48px (데스크톱)
- **컬럼 수**: 12 컬럼 그리드
- **갭**: 24px (섹션 간), 16px (컴포넌트 간)

### 브레이크포인트
- **Mobile**: 0px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### 스페이싱 스케일
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px
- **4xl**: 96px

---

## 🧩 컴포넌트 디자인

### 버튼
- **Primary Button**: 
  - 배경: Primary 색상
  - 텍스트: 흰색
  - 패딩: 12px 24px
  - 보더 반경: 8px
  - 호버: Primary Dark
  - 그림자: 부드러운 그림자

- **Secondary Button**:
  - 배경: 투명
  - 텍스트: Primary 색상
  - 보더: 2px solid Primary
  - 패딩: 12px 24px
  - 호버: Primary 배경 + 흰색 텍스트

- **Text Button**:
  - 배경: 투명
  - 텍스트: Primary 색상
  - 패딩: 8px 16px
  - 호버: 밝은 배경

### 카드
- **기본 카드**:
  - 배경: 흰색
  - 보더 반경: 16px
  - 그림자: 부드러운 그림자 (0 4px 12px rgba(0,0,0,0.1))
  - 패딩: 24px
  - 호버: 약간의 그림자 증가

- **기능 카드**:
  - 아이콘: 48px x 48px
  - 제목: 섹션 제목 크기
  - 설명: 본문 크기
  - 간격: 아이콘과 제목 사이 16px, 제목과 설명 사이 8px

### 섹션
- **섹션 간격**: 96px (데스크톱), 64px (모바일)
- **섹션 패딩**: 상하 64px (데스크톱), 상하 48px (모바일)
- **섹션 배경**: 교대로 흰색/밝은 배경 (시각적 리듬)

---

## 🎭 애니메이션

### 원칙
- **부드러움**: 급작스러운 움직임 없음
- **의미 있는 움직임**: 장식적이지 않고 기능적
- **성능**: 60fps 유지

### 애니메이션 타입
1. **Fade In**: 요소 등장 (200ms)
2. **Slide Up**: 아래에서 위로 (300ms)
3. **Scale**: 살짝 확대 (200ms)
4. **Hover**: 호버 시 부드러운 변화 (150ms)

### 트랜지션
- **기본**: `ease-in-out`
- **부드러움**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **반응**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`

---

## 🖼️ 이미지 및 일러스트

### 스타일
- **일러스트**: 부드러운 라인, 미니멀한 색상
- **스크린샷**: 실제 앱 화면 (프레임 추가)
- **아이콘**: 선 스타일, 일관된 두께

### 크기
- **Hero 이미지**: 1200px x 600px
- **기능 일러스트**: 400px x 400px
- **스크린샷**: 최대 너비 800px
- **아이콘**: 24px, 32px, 48px

### 최적화
- **포맷**: WebP (최신 브라우저), PNG (폴백)
- **압축**: 이미지 최적화 도구 사용
- **Lazy Loading**: 아래쪽 이미지는 지연 로딩

---

## 📱 반응형 디자인

### 모바일 우선 (Mobile First)
- 기본 스타일은 모바일에 맞춤
- 데스크톱에서 점진적으로 개선

### 주요 변경사항
- **네비게이션**: 모바일에서는 햄버거 메뉴
- **그리드**: 모바일에서는 1열, 데스크톱에서는 다열
- **타이포그래피**: 모바일에서 폰트 크기 축소
- **스페이싱**: 모바일에서 패딩/마진 축소
- **이미지**: 모바일에서 크기 조정

---

## ♿ 접근성 (Accessibility)

### 색상 대비
- **본문 텍스트**: 최소 4.5:1 대비
- **큰 텍스트**: 최소 3:1 대비
- **비텍스트 요소**: 최소 3:1 대비

### 키보드 네비게이션
- 모든 인터랙티브 요소에 포커스 표시
- Tab 순서 논리적
- 포커스 트랩 (모달 등)

### 스크린 리더
- 의미 있는 HTML 구조
- ARIA 레이블
- 대체 텍스트 (이미지)

### 기타
- 애니메이션 비활성화 옵션 (prefers-reduced-motion)
- 폰트 크기 조정 가능
- 충분한 터치 타겟 크기 (최소 44px x 44px)

---

## 🎯 디자인 토큰

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 6px rgba(0,0,0,0.1);
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
--shadow-xl: 0 20px 25px rgba(0,0,0,0.1);
```

### Border Radius
```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

### Z-Index
```css
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal-backdrop: 1040;
--z-modal: 1050;
--z-popover: 1060;
--z-tooltip: 1070;
```

---

## 📚 참고 자료

- [Material Design Guidelines](https://material.io/design)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- 기존 프로젝트의 [design_guidelines.md](../../design_guidelines.md)

---

**작성일**: 2025-01-27
**최종 수정일**: 2025-01-27

