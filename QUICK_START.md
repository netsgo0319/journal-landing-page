# 🚀 빠른 시작 가이드

## 완료된 작업 ✅

- ✅ 랜딩 페이지 프로젝트 생성 (React + Vite + Tailwind)
- ✅ 모든 컴포넌트 구현 (Header, Footer, 7개 섹션)
- ✅ 반응형 디자인 적용
- ✅ SEO 최적화
- ✅ GitHub Actions 배포 파이프라인 설정
- ✅ GitHub 링크 업데이트 (netsgo0319)
- ✅ 이메일 링크 업데이트 (netsgo0319@naver.com)

## 📋 다음 단계 (3단계로 완료!)

### 1단계: GitHub 레포지토리 생성

1. [GitHub](https://github.com/new)에서 새 레포지토리 생성
2. **Repository name**: `journal-landing-page`
3. **Description**: `감사를 강요하지 않는 유일한 일기 앱 - 랜딩 페이지`
4. **Visibility**: **Public** ⚠️ (필수!)
5. **Initialize this repository with**: 체크하지 않음
6. **Create repository** 클릭

### 2단계: 로컬 Git 설정 및 푸시

터미널에서 실행:

```bash
cd landing-page

# Git 초기화
git init

# Git 사용자 설정
git config user.email "netsgo0319@naver.com"
git config user.name "netsgo0319"

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: Landing page setup"

# 메인 브랜치로 이름 변경
git branch -M main

# GitHub 레포지토리 생성 후 원격 저장소 연결
git remote add origin https://github.com/netsgo0319/journal-landing-page.git

# GitHub에 푸시
git push -u origin main
```

**⚠️ Xcode 라이선스 에러가 발생하는 경우**: [setup-github-manual.md](./setup-github-manual.md)를 참고하세요.

### 3단계: GitHub Pages 설정

1. GitHub 레포지토리 > **Settings** > **Pages**
2. **Source**: **GitHub Actions** 선택
3. **Save** 클릭
4. **Actions** 탭에서 배포 진행 상황 확인
5. 배포 완료 후 (2-3분) 다음 URL에서 확인:
   - **https://netsgo0319.github.io/journal-landing-page**

## 🎉 완료!

배포가 완료되면 랜딩 페이지가 자동으로 업데이트됩니다!

## 📝 추가 작업 (선택사항)

### 스크린샷 추가 (나중에)

1. `public/images/screenshots/` 폴더 생성
2. 스크린샷 이미지 추가
3. `Screenshots.tsx`에서 이미지 경로 업데이트

### 개발 서버 실행 (테스트용)

```bash
cd landing-page
npm install
npm run dev
```

브라우저에서 `http://localhost:3001` 접속

## 🐛 문제 해결

### 배포가 실패하는 경우

1. **Actions** 탭에서 에러 확인
2. **Settings** > **Actions** > **General**에서 권한 확인
3. **Workflow permissions**: Read and write permissions 선택

### 사이트가 표시되지 않는 경우

1. 배포가 완료되었는지 확인 (Actions 탭)
2. URL 확인: `https://netsgo0319.github.io/journal-landing-page`
3. 브라우저 캐시 지우기
4. 몇 분 기다린 후 다시 시도

## 📚 상세 문서

- [FINAL_STEPS.md](./FINAL_STEPS.md) - 상세한 최종 단계 가이드
- [GITHUB_SETUP.md](./GITHUB_SETUP.md) - GitHub 레포지토리 설정 가이드
- [DEPLOYMENT.md](./DEPLOYMENT.md) - 배포 가이드
- [README.md](./README.md) - 프로젝트 설명

---

**작성일**: 2025-01-27

