# GitHub 레포지토리 설정 가이드

## 📋 사전 준비

1. GitHub 계정이 있어야 합니다.
2. Git이 설치되어 있어야 합니다.
3. Node.js 20 이상이 설치되어 있어야 합니다.

## 🚀 설정 단계

### 1. GitHub 레포지토리 생성

1. GitHub에 로그인
2. 새 레포지토리 생성 (예: `journal-landing-page`)
3. 레포지토리를 Public으로 설정 (GitHub Pages 무료 사용)
4. README 파일은 선택사항 (이미 있으므로 생성하지 않아도 됨)

### 2. 로컬 레포지토리 초기화

```bash
cd landing-page
git init
git add .
git commit -m "Initial commit: Landing page setup"
```

### 3. GitHub 레포지토리와 연결

```bash
git remote add origin https://github.com/yourusername/journal-landing-page.git
git branch -M main
git push -u origin main
```

### 4. 의존성 설치

```bash
npm install
```

### 5. 개발 서버 실행 (테스트)

```bash
npm run dev
```

브라우저에서 `http://localhost:3001`로 접속하여 확인합니다.

### 6. 빌드 테스트

```bash
npm run build
```

빌드가 성공하면 `dist` 폴더에 정적 파일이 생성됩니다.

### 7. GitHub Pages 설정

1. GitHub 레포지토리 페이지로 이동
2. Settings > Pages로 이동
3. Source를 "GitHub Actions"로 선택
4. 저장

### 8. 자동 배포 확인

1. `main` 브랜치에 푸시하면 자동으로 배포됩니다
2. Actions 탭에서 배포 진행 상황을 확인할 수 있습니다
3. 배포가 완료되면 `https://yourusername.github.io/journal-landing-page`에서 사이트를 확인할 수 있습니다

## 🔧 추가 설정

### 커스텀 도메인 설정 (선택사항)

1. `public` 폴더에 `CNAME` 파일 생성
2. 도메인 이름 입력 (예: `landing.example.com`)
3. DNS 설정에서 GitHub Pages IP로 연결
4. GitHub 레포지토리 Settings > Pages에서 도메인 추가

### 환경 변수 설정 (필요시)

현재는 환경 변수가 필요하지 않지만, 향후 추가할 수 있습니다.

## 📝 주의사항

1. GitHub Pages는 Public 레포지토리에서만 무료로 사용 가능합니다.
2. 배포에는 몇 분이 소요될 수 있습니다.
3. 첫 배포 후 URL이 활성화되는 데 시간이 걸릴 수 있습니다.

## 🐛 문제 해결

### 배포가 실패하는 경우

1. Actions 탭에서 에러 로그 확인
2. 빌드가 로컬에서 성공하는지 확인
3. GitHub Actions 권한 설정 확인

### 사이트가 표시되지 않는 경우

1. 배포가 완료되었는지 확인
2. URL이 정확한지 확인
3. 브라우저 캐시를 지우고 다시 시도

## 📚 참고 자료

- [GitHub Pages 문서](https://docs.github.com/pages)
- [GitHub Actions 문서](https://docs.github.com/actions)
- [Vite 문서](https://vitejs.dev/)

---

**작성일**: 2025-01-27


