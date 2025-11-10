# 기술 스펙

## 🛠️ 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: Tailwind CSS 또는 순수 CSS
- **JavaScript**: Vanilla JavaScript 또는 React (선택적)
- **빌드 도구**: Vite (빠른 개발 환경)

### 선택지 1: 정적 HTML/CSS/JS (권장)
- **장점**: 
  - 간단하고 가벼움
  - 빠른 로딩 속도
  - GitHub Pages와 완벽한 호환
  - SEO 친화적
- **단점**: 
  - 인터랙티브 기능 제한
  - 코드 재사용성 낮음

### 선택지 2: React (SPA)
- **장점**:
  - 컴포넌트 재사용
  - 인터랙티브 기능 구현 용이
  - 기존 프로젝트와 기술 스택 일치
- **단점**:
  - 번들 크기 증가
  - SEO 최적화 필요
  - GitHub Pages 설정 복잡

### 선택지 3: Next.js (SSG)
- **장점**:
  - SEO 최적화
  - 빠른 로딩 속도
  - React 컴포넌트 사용
  - 정적 사이트 생성
- **단점**:
  - 설정 복잡
  - GitHub Pages 배포 복잡

### 권장 사항
**정적 HTML/CSS/JS (Vanilla)** 또는 **Vite + React (빌드 후 정적 파일)**
- GitHub Pages와 가장 호환성 좋음
- 빠른 로딩 속도
- 간단한 배포

---

## 📁 프로젝트 구조

### 디렉토리 구조 (정적 HTML)
```
landing-page/
├── index.html
├── css/
│   ├── main.css
│   └── components.css
├── js/
│   ├── main.js
│   └── animations.js
├── images/
│   ├── hero/
│   ├── features/
│   ├── screenshots/
│   └── icons/
├── fonts/
│   └── (웹폰트 파일)
└── README.md
```

### 디렉토리 구조 (React + Vite)
```
landing-page/
├── index.html
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── ProblemStatement.tsx
│   │   ├── Features.tsx
│   │   ├── UserJourney.tsx
│   │   ├── TechStack.tsx
│   │   ├── Screenshots.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   ├── main.css
│   │   └── variables.css
│   └── utils/
│       └── animations.ts
├── public/
│   ├── images/
│   └── fonts/
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🎨 스타일링

### CSS 방법론
1. **Tailwind CSS** (권장)
   - 유틸리티 퍼스트
   - 빠른 개발
   - 작은 번들 크기 (PurgeCSS)

2. **순수 CSS**
   - 커스텀 디자인 시스템
   - 완전한 제어
   - 추가 의존성 없음

3. **CSS Modules** (React 사용 시)
   - 컴포넌트별 스타일
   - 스타일 격리
   - 클래스명 충돌 방지

### CSS 변수 (Design Tokens)
```css
:root {
  /* Colors */
  --color-primary: #FF8A65;
  --color-primary-light: #FFAB91;
  --color-primary-dark: #E64A19;
  --color-background: #FAF9F6;
  --color-surface: #FFFFFF;
  --color-text-primary: #2C2C2C;
  --color-text-secondary: #6B6B6B;
  
  /* Typography */
  --font-primary: 'Inter', sans-serif;
  --font-accent: 'Crimson Pro', serif;
  --font-size-hero: 3.5rem;
  --font-size-title: 2rem;
  --font-size-body: 1rem;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
}
```

---

## 🚀 성능 최적화

### 이미지 최적화
- **포맷**: WebP (최신 브라우저), PNG/JPEG (폴백)
- **크기**: 적절한 해상도로 리사이즈
- **Lazy Loading**: 아래쪽 이미지는 지연 로딩
- **적응형 이미지**: `srcset` 사용

### 코드 최적화
- **Minification**: CSS/JS 압축
- **Tree Shaking**: 사용하지 않는 코드 제거
- **Code Splitting**: 페이지별 코드 분할 (React 사용 시)
- **CDN**: 정적 파일 CDN 사용 (선택적)

### 캐싱
- **Browser Caching**: 적절한 Cache-Control 헤더
- **Service Worker**: 오프라인 지원 (선택적)

### 로딩 최적화
- **Critical CSS**: 인라인으로 포함
- **폰트 최적화**: `font-display: swap`
- **리소스 힌트**: `preload`, `prefetch`

---

## 📱 반응형 디자인

### 미디어 쿼리
```css
/* Mobile First */
.container {
  padding: 24px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 48px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

### 브레이크포인트
- **Mobile**: 0px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

### 모바일 최적화
- 터치 타겟 크기: 최소 44px x 44px
- 폰트 크기: 최소 16px (줌 방지)
- 뷰포트 메타 태그: `<meta name="viewport" content="width=device-width, initial-scale=1">`

---

## ♿ 접근성

### HTML 시맨틱 태그
```html
<header>
  <nav>
    <!-- 네비게이션 -->
  </nav>
</header>

<main>
  <section>
    <!-- 섹션 내용 -->
  </section>
</main>

<footer>
  <!-- 푸터 내용 -->
</footer>
```

### ARIA 레이블
- 버튼: `aria-label`
- 이미지: `alt` 속성
- 폼: `aria-label`, `aria-describedby`
- 랜드마크: `role` 속성

### 키보드 네비게이션
- 모든 인터랙티브 요소에 포커스 표시
- Tab 순서 논리적
- 포커스 트랩 (모달 등)

### 색상 대비
- 본문 텍스트: 최소 4.5:1
- 큰 텍스트: 최소 3:1
- 비텍스트 요소: 최소 3:1

---

## 🔍 SEO 최적화

### 메타 태그
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="감사를 강요하지 않는 유일한 일기 앱">
  <meta name="keywords" content="일기 앱, 감사 일기, AI 일기, 정신 건강">
  <meta name="author" content="Comfort Journal App">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Comfort Journal App">
  <meta property="og:description" content="감사를 강요하지 않는 유일한 일기 앱">
  <meta property="og:image" content="/images/og-image.png">
  <meta property="og:url" content="https://yourusername.github.io/journal-landing-page">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Comfort Journal App">
  <meta name="twitter:description" content="감사를 강요하지 않는 유일한 일기 앱">
  <meta name="twitter:image" content="/images/twitter-image.png">
</head>
```

### 구조화된 데이터 (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Comfort Journal App",
  "description": "감사를 강요하지 않는 유일한 일기 앱",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

### 시맨틱 HTML
- 적절한 헤딩 계층 (`h1`, `h2`, `h3`)
- 의미 있는 링크 텍스트
- 이미지 대체 텍스트

---

## 🚢 배포

### GitHub Pages 설정

#### 방법 1: 정적 파일 직접 배포
1. `landing-page` 폴더에 `index.html` 생성
2. GitHub 저장소 설정에서 Pages 활성화
3. 소스 브랜치 선택 (예: `main`, `gh-pages`)
4. 루트 디렉토리 또는 `docs` 폴더 선택

#### 방법 2: GitHub Actions 자동 배포
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 빌드 스크립트
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### 커스텀 도메인 (선택적)
1. `CNAME` 파일 생성
2. 도메인 DNS 설정
3. GitHub Pages 설정에서 도메인 추가

---

## 🧪 테스트

### 기능 테스트
- [ ] 모든 링크가 작동하는가?
- [ ] 모든 버튼이 작동하는가?
- [ ] 폼이 제대로 작동하는가?
- [ ] 애니메이션이 부드럽게 작동하는가?

### 반응형 테스트
- [ ] 모바일에서 잘 보이는가?
- [ ] 태블릿에서 잘 보이는가?
- [ ] 데스크톱에서 잘 보이는가?
- [ ] 다양한 브라우저에서 테스트

### 성능 테스트
- [ ] Lighthouse 점수 90+ (Performance, Accessibility, Best Practices, SEO)
- [ ] 이미지 최적화 확인
- [ ] 코드 최적화 확인
- [ ] 로딩 속도 확인

### 접근성 테스트
- [ ] 키보드 네비게이션 가능한가?
- [ ] 스크린 리더가 읽을 수 있는가?
- [ ] 색상 대비가 충분한가?
- [ ] 포커스 표시가 명확한가?

---

## 📦 의존성 관리

### 패키지 관리 (React 사용 시)
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.7.0",
    "vite": "^5.4.20",
    "tailwindcss": "^3.4.17",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47"
  }
}
```

### 버전 관리
- 주요 의존성은 고정 버전 사용
- 보안 업데이트 정기 확인
- `package-lock.json` 커밋

---

## 🔒 보안

### 보안 헤더
```html
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
```

### 외부 링크
- `rel="noopener noreferrer"` 추가
- 외부 링크 명확히 표시

### 사용자 입력 (있는 경우)
- 입력 검증
- XSS 방지
- CSRF 보호

---

## 📚 참고 자료

### 문서
- [GitHub Pages 문서](https://docs.github.com/pages)
- [Vite 문서](https://vitejs.dev/)
- [Tailwind CSS 문서](https://tailwindcss.com/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### 도구
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [Can I Use](https://caniuse.com/)
- [Accessibility Checker](https://www.accessibilitychecker.org/)

---

**작성일**: 2025-01-27
**최종 수정일**: 2025-01-27


