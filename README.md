# Comfort Journal App - Landing Page

감사를 강요하지 않는 유일한 일기 앱의 랜딩 페이지입니다.

## 🚀 시작하기

**⚠️ Xcode 라이선스 에러가 발생하는 경우**: [README_FIRST.md](./README_FIRST.md)를 먼저 읽어보세요!

가장 간단한 방법은 **GitHub 웹 인터페이스**를 사용하는 것입니다. 자세한 내용은 [README_FIRST.md](./README_FIRST.md)를 참고하세요.

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 `http://localhost:3001`에서 실행됩니다.

### 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

### 미리보기

```bash
npm run preview
```

## 📁 프로젝트 구조

```
landing-page/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── ProblemStatement.tsx
│   │       ├── Features.tsx
│   │       ├── UserJourney.tsx
│   │       ├── TechStack.tsx
│   │       ├── Screenshots.tsx
│   │       └── CTA.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Vite** - 빌드 도구
- **Tailwind CSS** - 스타일링
- **Framer Motion** - 애니메이션

## 🎨 디자인

디자인 가이드는 [plans/02-design-guide.md](./plans/02-design-guide.md)를 참고하세요.

## 📦 배포

이 프로젝트는 GitHub Pages를 통해 자동으로 배포됩니다.

### GitHub Pages 설정

1. 저장소 설정 > Pages로 이동
2. Source를 "GitHub Actions"로 선택
3. `main` 브랜치에 푸시하면 자동으로 배포됩니다

### 수동 배포

```bash
npm run build
# dist 폴더의 내용을 GitHub Pages에 업로드
```

## 🔗 링크

- [GitHub 저장소](https://github.com/netsgo0319/journal-landing-page)
- [라이브 사이트](https://netsgo0319.github.io/journal-landing-page)

## 📝 라이선스

MIT License

## 🤝 기여

기여를 환영합니다! 이슈를 열거나 Pull Request를 보내주세요.

## 📧 문의

문의사항이 있으시면 이슈를 열어주세요.

---

Made with ❤️ for everyone

