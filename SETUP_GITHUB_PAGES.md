# GitHub Pages 설정 완료 가이드

## ✅ 완료된 작업

- [x] GitHub Actions 워크플로우 파일 생성 및 푸시
- [x] Vite 빌드 설정 업데이트 (base path 설정)
- [x] 자동 배포 파이프라인 준비 완료

## 🚀 GitHub Pages 활성화 (필수 단계)

GitHub 웹 인터페이스에서 다음 단계를 진행하세요:

### 1. GitHub 레포지토리로 이동

https://github.com/netsgo0319/journal-landing-page

### 2. Settings로 이동

1. 레포지토리 페이지 상단의 **"Settings"** 탭 클릭
2. 왼쪽 메뉴에서 **"Pages"** 클릭

### 3. GitHub Pages 설정

1. **"Source"** 섹션에서:
   - **"GitHub Actions"** 선택 ⚠️ (권장)
   - 또는 **"Deploy from a branch"** 선택 후:
     - Branch: `gh-pages` 또는 `main`
     - Folder: `/ (root)` 또는 `/docs`

2. **"Save"** 버튼 클릭

### 4. GitHub Actions 권한 설정 (필요시)

배포가 실패하는 경우:

1. **Settings** > **Actions** > **General**로 이동
2. **"Workflow permissions"** 섹션에서:
   - **"Read and write permissions"** 선택
   - **"Allow GitHub Actions to create and approve pull requests"** 체크
3. **"Save"** 버튼 클릭

### 5. 배포 확인

1. 레포지토리 페이지 상단의 **"Actions"** 탭 클릭
2. **"Deploy to GitHub Pages"** 워크플로우가 실행 중인지 확인
3. 배포가 완료되면 (약 2-3분) 다음 URL에서 사이트 확인:
   - **https://netsgo0319.github.io/journal-landing-page**

## 🔧 자동 배포 작동 방식

이제 `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다:

1. 코드 변경 후 푸시
2. GitHub Actions가 자동으로 빌드 시작
3. 빌드 완료 후 GitHub Pages에 자동 배포
4. 사이트 자동 업데이트

## 📝 현재 설정

- **빌드 도구**: Vite
- **Node.js 버전**: 20
- **배포 브랜치**: main
- **배포 경로**: `/journal-landing-page/`
- **배포 방식**: GitHub Actions

## 🐛 문제 해결

### 배포가 시작되지 않는 경우

1. **Settings** > **Pages**에서 **"GitHub Actions"**가 선택되어 있는지 확인
2. **Settings** > **Actions** > **General**에서 **"Allow all actions and reusable workflows"**가 선택되어 있는지 확인

### 배포가 실패하는 경우

1. **Actions** 탭에서 에러 로그 확인
2. **Settings** > **Actions** > **General**에서 권한 확인
3. **Workflow permissions**: Read and write permissions 선택

### 사이트가 표시되지 않는 경우

1. 배포가 완료되었는지 확인 (Actions 탭)
2. URL이 정확한지 확인: `https://netsgo0319.github.io/journal-landing-page`
3. 브라우저 캐시를 지우고 다시 시도
4. 몇 분 기다린 후 다시 시도 (배포에 시간이 걸릴 수 있음)

## 🎉 완료!

GitHub Pages 설정이 완료되면 자동으로 배포가 시작됩니다!

---

**작성일**: 2025-01-27

