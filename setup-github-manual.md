# GitHub 레포지토리 수동 설정 가이드

Xcode 라이선스 문제로 자동 스크립트가 실행되지 않는 경우, 다음 단계를 수동으로 진행하세요.

## 🚀 단계별 가이드

### 1단계: GitHub 레포지토리 생성

1. 브라우저에서 [GitHub](https://github.com/new) 접속
2. 레포지토리 정보 입력:
   - **Repository name**: `journal-landing-page`
   - **Description**: `감사를 강요하지 않는 유일한 일기 앱 - 랜딩 페이지`
   - **Visibility**: **Public** ⚠️ (GitHub Pages 무료 사용을 위해 필수)
   - **Initialize this repository with**: 체크하지 않음 (이미 파일이 있음)
3. **"Create repository"** 버튼 클릭

### 2단계: Git 명령어 수동 실행

터미널에서 `landing-page` 디렉토리로 이동한 후, 다음 명령어를 **하나씩** 실행하세요:

```bash
# 1. landing-page 디렉토리로 이동
cd /Users/lydia/Desktop/workspace/journal-landing-page/landing-page

# 2. Git 초기화 (이미 되어 있을 수 있음)
git init

# 3. Git 사용자 설정
git config user.email "netsgo0319@naver.com"
git config user.name "netsgo0319"

# 4. 모든 파일 추가
git add .

# 5. 첫 커밋
git commit -m "Initial commit: Landing page setup"

# 6. 메인 브랜치로 이름 변경
git branch -M main

# 7. 원격 저장소 연결 (GitHub 레포지토리 생성 후)
git remote add origin https://github.com/netsgo0319/journal-landing-page.git

# 8. GitHub에 푸시
git push -u origin main
```

### 3단계: GitHub Pages 설정

1. GitHub 레포지토리 페이지로 이동: https://github.com/netsgo0319/journal-landing-page
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - **GitHub Actions** 선택 (권장) ⚠️
   - 또는 **Deploy from a branch** > `gh-pages` 브랜치 선택
5. **Save** 클릭

### 4단계: GitHub Actions 권한 설정 (필요시)

만약 배포가 실패한다면:

1. **Settings** > **Actions** > **General**로 이동
2. **Workflow permissions** 섹션에서:
   - **Read and write permissions** 선택
   - **Allow GitHub Actions to create and approve pull requests** 체크
3. **Save** 클릭

### 5단계: 자동 배포 확인

1. `main` 브랜치에 푸시하면 자동으로 배포가 시작됩니다
2. **Actions** 탭에서 배포 진행 상황을 확인할 수 있습니다
3. 배포가 완료되면 (약 2-3분 소요) 다음 URL에서 사이트를 확인할 수 있습니다:
   - **https://netsgo0319.github.io/journal-landing-page**

## 🔧 Xcode 라이선스 문제 해결 (선택사항)

Xcode 라이선스 동의가 필요한 경우:

```bash
# 관리자 권한으로 Xcode 라이선스 동의
sudo xcodebuild -license

# 라이선스를 읽고 'agree' 입력
# 또는 'space'를 눌러 페이지를 넘기고 마지막에 'agree' 입력
```

**주의**: 이 작업은 관리자 권한이 필요하며, Xcode Command Line Tools를 사용하려는 경우에만 필요합니다.

## 🐛 문제 해결

### Git이 설치되어 있지 않은 경우

```bash
# Homebrew로 Git 설치
brew install git

# 또는 Xcode Command Line Tools 설치
xcode-select --install
```

### Git 푸시가 실패하는 경우

```bash
# 원격 저장소 확인
git remote -v

# 원격 저장소가 없으면 추가
git remote add origin https://github.com/netsgo0319/journal-landing-page.git

# 강제 푸시 (주의: 기존 파일이 있으면 덮어씀)
git push -u origin main --force
```

### 배포가 실패하는 경우

1. **Actions** 탭에서 에러 로그 확인
2. 로컬에서 빌드 테스트:
   ```bash
   npm install
   npm run build
   ```
3. 빌드가 성공하면 다시 푸시

### 사이트가 표시되지 않는 경우

1. 배포가 완료되었는지 확인 (Actions 탭)
2. URL이 정확한지 확인: `https://netsgo0319.github.io/journal-landing-page`
3. 브라우저 캐시를 지우고 다시 시도
4. 몇 분 기다린 후 다시 시도 (배포에 시간이 걸릴 수 있음)

## 📝 간단한 방법 (GitHub 웹 인터페이스 사용)

Git 명령어 실행이 어려운 경우, GitHub 웹 인터페이스를 사용할 수도 있습니다:

1. GitHub 레포지토리 생성
2. 레포지토리 페이지에서 **"uploading an existing file"** 클릭
3. `landing-page` 폴더의 모든 파일을 드래그 앤 드롭
4. 커밋 메시지 입력: `Initial commit: Landing page setup`
5. **Commit changes** 클릭
6. GitHub Pages 설정 (위 3단계 참고)

## 📚 참고 자료

- [GitHub Pages 문서](https://docs.github.com/pages)
- [GitHub Actions 문서](https://docs.github.com/actions)
- [Git 설치 가이드](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98)

---

**작성일**: 2025-01-27

