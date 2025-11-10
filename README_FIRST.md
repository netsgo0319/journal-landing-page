# 🚀 먼저 읽어보세요!

## Xcode 라이선스 에러가 발생하는 경우

터미널에서 Git 명령어를 실행할 때 Xcode 라이선스 에러가 발생할 수 있습니다. 이 경우 다음 방법 중 하나를 선택하세요:

## ✅ 방법 1: GitHub 웹 인터페이스 사용 (가장 간단!)

Git 명령어 없이 GitHub 웹사이트에서 직접 파일을 업로드할 수 있습니다:

1. **GitHub 레포지토리 생성**
   - https://github.com/new 접속
   - Repository name: `journal-landing-page`
   - Description: `감사를 강요하지 않는 유일한 일기 앱 - 랜딩 페이지`
   - Visibility: **Public** ⚠️
   - Initialize 옵션: 체크하지 않음
   - Create repository 클릭

2. **파일 업로드**
   - 레포지토리 페이지에서 **"uploading an existing file"** 클릭
   - 또는 **"Add file"** > **"Upload files"** 클릭
   - `landing-page` 폴더의 **모든 파일과 폴더**를 드래그 앤 드롭
   - 커밋 메시지 입력: `Initial commit: Landing page setup`
   - **Commit changes** 클릭

3. **GitHub Pages 설정**
   - Settings > Pages로 이동
   - Source: **GitHub Actions** 선택
   - Save 클릭

4. **배포 완료 확인**
   - Actions 탭에서 배포 진행 상황 확인
   - 배포 완료 후 (2-3분) https://netsgo0319.github.io/journal-landing-page 접속

## ✅ 방법 2: Xcode 라이선스 동의 후 Git 사용

Xcode Command Line Tools를 사용하려는 경우:

```bash
# 관리자 권한으로 Xcode 라이선스 동의
sudo xcodebuild -license

# 라이선스를 읽고 'agree' 입력
# 또는 'space'를 눌러 페이지를 넘기고 마지막에 'agree' 입력
```

그 다음 [QUICK_START.md](./QUICK_START.md)를 따라하세요.

## ✅ 방법 3: 수동 Git 명령어 실행

터미널에서 다음 명령어를 하나씩 실행:

```bash
cd /Users/lydia/Desktop/workspace/journal-landing-page/landing-page

git init
git config user.email "netsgo0319@naver.com"
git config user.name "netsgo0319"
git add .
git commit -m "Initial commit: Landing page setup"
git branch -M main

# GitHub 레포지토리 생성 후
git remote add origin https://github.com/netsgo0319/journal-landing-page.git
git push -u origin main
```

## 📚 상세 가이드

- [QUICK_START.md](./QUICK_START.md) - 빠른 시작 가이드
- [setup-github-manual.md](./setup-github-manual.md) - 수동 설정 가이드
- [FINAL_STEPS.md](./FINAL_STEPS.md) - 최종 단계 가이드

## 💡 추천

**방법 1 (GitHub 웹 인터페이스)**이 가장 간단하고 Xcode 라이선스 문제를 피할 수 있습니다!

---

**작성일**: 2025-01-27


